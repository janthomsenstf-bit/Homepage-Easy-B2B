import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      anfrageId,
      firmenname,
      ansprechpartner,
      email,
      telefon,
    } = body;

    // Validiere erforderliche Felder
    if (!anfrageId || !firmenname || !ansprechpartner || !email) {
      return NextResponse.json(
        { error: "Alle erforderlichen Felder müssen ausgefüllt sein" },
        { status: 400 }
      );
    }

    // Validiere Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige Email-Adresse" },
        { status: 400 }
      );
    }

    // Prüfe ob Anfrage existiert und aktiv ist
    const anfrage = await prisma.anfrage.findUnique({
      where: { id: anfrageId },
    });

    if (!anfrage || anfrage.status !== "aktiv") {
      return NextResponse.json(
        { error: "Anfrage nicht found or is not active" },
        { status: 404 }
      );
    }

    // Erstelle Interessent
    const interessent = await prisma.interessent.create({
      data: {
        anfrageId,
        firmenname,
        ansprechpartner,
        email,
        telefon: telefon || null,
        status: "neu",
      },
    });

    return NextResponse.json(
      { success: true, id: interessent.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Speichern des Interesses" },
      { status: 500 }
    );
  }
}
