import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { mailNeueAnfrage, mailAnfrageBestaetigung } from "@/lib/email";

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
        gueltigBis: body.gueltigBis ? new Date(body.gueltigBis) : new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        sichtbarkeit: body.sichtbarkeit || "eingehend",
        ansprechpartner: body.ansprechpartner,
        email: body.email,
        telefon: body.telefon || null,
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

export async function GET() {
  try {
    const anfragen = await prisma.anfrage.findMany({
      include: { branche: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(anfragen);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Fehler beim Abrufen der Anfragen" }, { status: 500 });
  }
}
