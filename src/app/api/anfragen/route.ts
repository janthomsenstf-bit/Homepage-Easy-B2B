import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { mailNeueAnfrage, mailAnfrageBestaetigung } from "@/lib/email";
import { OEFFENTLICHE_STATUS } from "@/lib/anzeigen";

function generateAnzeigenId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 9000 + 1000).toString();
  return `EB-${year}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const branche = await prisma.branche.findUnique({
      where: { id: body.brancheId },
    });

    if (!branche) {
      return NextResponse.json({ error: "Branche nicht gefunden" }, { status: 400 });
    }

    const anfrage = await prisma.anfrage.create({
      data: {
        anzeigenId: generateAnzeigenId(),
        firmenname: body.firmenname,
        brancheId: body.brancheId,
        richtung: body.richtung,
        art: body.art,
        standort: body.standort,
        beschreibung: body.beschreibung,
        ziel: body.ziel,
        persönlicherTouch: body.persönlicherTouch || "",
        mustHaves: body.mustHaves || null,
        niceToHaves: body.niceToHaves || null,
        reifegrad: body.reifegrad || "bereit",
        reifegradScore: body.reifegradScore ? parseInt(body.reifegradScore) : null,
        reifegradBeschreibung: body.reifegradBeschreibung || null,
        gueltigBis: body.gueltigBis ? new Date(body.gueltigBis) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        sichtbarkeit: ["intern", "anonym", "oeffentlich"].includes(body.sichtbarkeit)
          ? body.sichtbarkeit
          : "oeffentlich",
        // Über das öffentliche Formular eingereichte Anfragen gehen direkt in die
        // Prüfung — anders als Entwürfe aus "Mein Bereich".
        status: "eingereicht",
        eingereichtAm: new Date(),
        ansprechpartner: body.ansprechpartner,
        email: body.email,
        telefon: body.telefon || null,
        // Marktplatz-Reichinhalt (optional bei der Einreichung)
        motivation: body.motivation || null,
        ziele: Array.isArray(body.ziele) ? body.ziele : [],
        partnerErwartungen: Array.isArray(body.partnerErwartungen) ? body.partnerErwartungen : [],
        zielgruppe: Array.isArray(body.zielgruppe) ? body.zielgruppe : [],
        vorbereitung: body.vorbereitung || null,
        projektStartDatum: body.projektStartDatum ? new Date(body.projektStartDatum) : null,
        projektEndDatum: body.projektEndDatum ? new Date(body.projektEndDatum) : null,
        erstgespraechFristDatum: body.erstgespraechFristDatum ? new Date(body.erstgespraechFristDatum) : null,
      },
      include: { branche: true },
    });

    // E-Mails asynchron senden
    Promise.all([
      mailNeueAnfrage({
        anzeigenId: anfrage.anzeigenId,
        firmenname: anfrage.firmenname,
        richtung: anfrage.richtung,
        branche: branche.name,
        ziel: anfrage.ziel,
        ansprechpartner: anfrage.ansprechpartner,
        email: anfrage.email,
        telefon: anfrage.telefon,
      }),
      mailAnfrageBestaetigung({
        anzeigenId: anfrage.anzeigenId,
        firmenname: anfrage.firmenname,
        ziel: anfrage.ziel,
        ansprechpartner: anfrage.ansprechpartner,
        email: anfrage.email,
      }),
    ]).catch(err => console.error("[Email] Fehler:", err));

    return NextResponse.json(anfrage, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Fehler beim Erstellen der Anfrage" }, { status: 500 });
  }
}

/**
 * GET — öffentliche Marktplatz-Anzeigen.
 *
 * Diese Route ist unauthentifiziert erreichbar. Sie liefert deshalb ausschließlich
 * freigegebene Anzeigen und nur Felder, die ohnehin öffentlich sind. Kontaktdaten
 * (E-Mail, Telefon, Ansprechpartner) werden bewusst NICHT ausgeliefert — die gibt
 * es erst nach beidseitiger Zustimmung im Match.
 */
export async function GET() {
  try {
    const anfragen = await prisma.anfrage.findMany({
      where: {
        status: { in: OEFFENTLICHE_STATUS },
        sichtbarkeit: { in: ["oeffentlich", "anonym"] },
        gueltigBis: { gte: new Date() },
      },
      select: {
        id: true,
        anzeigenId: true,
        richtung: true,
        art: true,
        firmenname: true,
        standort: true,
        beschreibung: true,
        ziel: true,
        motivation: true,
        mustHaves: true,
        niceToHaves: true,
        gesuchteBranche: true,
        ziele: true,
        partnerErwartungen: true,
        zielgruppe: true,
        reifegrad: true,
        reifegradScore: true,
        reifegradBeschreibung: true,
        gueltigBis: true,
        status: true,
        sichtbarkeit: true,
        createdAt: true,
        branche: { select: { id: true, name: true, slug: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    // Bei anonymen Anzeigen bleibt der Firmenname verdeckt.
    const oeffentlich = anfragen.map((a) =>
      a.sichtbarkeit === "anonym" ? { ...a, firmenname: "Anonymes Unternehmen" } : a
    );

    return NextResponse.json(oeffentlich);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Fehler beim Abrufen der Anfragen" }, { status: 500 });
  }
}
