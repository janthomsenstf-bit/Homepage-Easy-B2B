import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { aktuellerBenutzer } from "@/lib/session";
import { erzeugeAnzeigenId } from "@/lib/anzeigen";

/** GET /api/meine-anzeigen — alle Anzeigen des angemeldeten Unternehmens. */
export async function GET() {
  const user = await aktuellerBenutzer();
  if (!user) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }

  try {
    const anzeigen = await prisma.anfrage.findMany({
      where: { userId: user.id },
      include: {
        branche: { select: { id: true, name: true } },
        _count: { select: { interessenten: true } },
      },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(anzeigen);
  } catch (error) {
    console.error("[Meine Anzeigen] Fehler:", error);
    return NextResponse.json({ error: "Anzeigen konnten nicht geladen werden." }, { status: 500 });
  }
}

/** POST /api/meine-anzeigen — neuen Entwurf anlegen. */
export async function POST(request: NextRequest) {
  const user = await aktuellerBenutzer();
  if (!user) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));

    const konto = await prisma.user.findUnique({ where: { id: user.id } });
    if (!konto) {
      return NextResponse.json({ error: "Konto nicht gefunden" }, { status: 401 });
    }

    // Branche ist beim Anlegen nötig (Pflicht-Relation im Schema).
    let brancheId: string | undefined = body.brancheId;
    if (!brancheId) {
      const ersteBranche = await prisma.branche.findFirst({ orderBy: { name: "asc" } });
      if (!ersteBranche) {
        return NextResponse.json(
          { error: "Es sind noch keine Branchen angelegt. Bitte wenden Sie sich an uns." },
          { status: 500 }
        );
      }
      brancheId = ersteBranche.id;
    }

    const anzeige = await prisma.anfrage.create({
      data: {
        anzeigenId: erzeugeAnzeigenId(),
        userId: user.id,
        status: "entwurf",
        brancheId,
        richtung: body.richtung === "de_dk" ? "de_dk" : "dk_de",
        art: body.art ?? "vertrieb",
        firmenname: konto.firmenname,
        ansprechpartner: konto.ansprechpartner,
        email: konto.email,
        telefon: konto.telefon,
        gueltigBis: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      },
      include: { branche: { select: { id: true, name: true } } },
    });

    return NextResponse.json(anzeige, { status: 201 });
  } catch (error) {
    console.error("[Anzeige anlegen] Fehler:", error);
    return NextResponse.json({ error: "Die Anzeige konnte nicht angelegt werden." }, { status: 500 });
  }
}
