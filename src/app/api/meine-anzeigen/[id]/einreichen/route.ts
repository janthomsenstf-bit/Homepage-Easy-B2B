import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { aktuellerBenutzer } from "@/lib/session";
import { pruefeVollstaendigkeit } from "@/lib/anzeigen";
import { mailNeueAnfrage, mailAnzeigeEingereicht } from "@/lib/email";
import { basisUrl } from "@/lib/tokens";

/** POST — Anzeige zur Prüfung einreichen. */
export async function POST(_request: NextRequest, { params }: { params: { id: string } }) {
  const user = await aktuellerBenutzer();
  if (!user) return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });

  const anzeige = await prisma.anfrage.findUnique({
    where: { id: params.id },
    include: { branche: true },
  });

  if (!anzeige || anzeige.userId !== user.id) {
    return NextResponse.json({ error: "Anzeige nicht gefunden" }, { status: 404 });
  }

  if (anzeige.status !== "entwurf" && anzeige.status !== "rueckfragen_offen") {
    return NextResponse.json(
      { error: "Diese Anzeige wurde bereits eingereicht." },
      { status: 409 }
    );
  }

  // ── Vollständigkeit prüfen ──
  const pruefung = pruefeVollstaendigkeit(anzeige as unknown as Record<string, unknown>);
  if (!pruefung.vollstaendig) {
    return NextResponse.json(
      {
        error: "Es fehlen noch Angaben.",
        fehlend: pruefung.fehlend,
      },
      { status: 400 }
    );
  }

  try {
    const aktualisiert = await prisma.anfrage.update({
      where: { id: anzeige.id },
      data: {
        status: "eingereicht",
        eingereichtAm: new Date(),
      },
      include: { branche: true },
    });

    // E-Mails im Hintergrund — ein Fehlschlag darf das Einreichen nicht kippen.
    Promise.all([
      mailAnzeigeEingereicht({
        email: aktualisiert.email,
        ansprechpartner: aktualisiert.ansprechpartner,
        anzeigenId: aktualisiert.anzeigenId,
        ziel: aktualisiert.ziel,
        meinBereichLink: `${basisUrl()}/mein-bereich`,
      }),
      mailNeueAnfrage({
        anzeigenId: aktualisiert.anzeigenId,
        firmenname: aktualisiert.firmenname,
        richtung: aktualisiert.richtung,
        branche: aktualisiert.branche.name,
        ziel: aktualisiert.ziel,
        ansprechpartner: aktualisiert.ansprechpartner,
        email: aktualisiert.email,
        telefon: aktualisiert.telefon,
      }),
    ]).catch((e) => console.error("[Einreichen] Mail-Fehler:", e));

    return NextResponse.json({ ok: true, anzeige: aktualisiert });
  } catch (error) {
    console.error("[Einreichen] Fehler:", error);
    return NextResponse.json({ error: "Die Anzeige konnte nicht eingereicht werden." }, { status: 500 });
  }
}
