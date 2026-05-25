import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Generiere eindeutige Anzeigen-ID
function generateAnzeigenId(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `ANZ-${year}-${random}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Prüfe ob Branche existiert
    const branche = await prisma.branche.findUnique({
      where: { id: body.brancheId },
    });

    if (!branche) {
      return NextResponse.json(
        { error: "Branche nicht gefunden" },
        { status: 400 }
      );
    }

    // Erstelle Anfrage
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
        persönlicherTouch: body.persönlicherTouch,
        mustHaves: body.mustHaves,
        niceToHaves: body.niceToHaves,
        reifegrad: body.reifegrad,
        gueltigBis: new Date(body.gueltigBis),
        sichtbarkeit: body.sichtbarkeit,
        ansprechpartner: body.ansprechpartner,
        email: body.email,
        telefon: body.telefon || null,
      },
      include: { branche: true },
    });

    return NextResponse.json(anfrage, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Anfrage" },
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: "Fehler beim Abrufen der Anfragen" },
      { status: 500 }
    );
  }
}
