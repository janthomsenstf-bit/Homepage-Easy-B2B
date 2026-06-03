import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { mailNeuesInteresse, mailInteresseBestaetigung } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { anfrageId, firmenname, ansprechpartner, email, telefon } = body;

    if (!anfrageId || !firmenname || !ansprechpartner || !email) {
      return NextResponse.json(
        { error: "Alle erforderlichen Felder müssen ausgefüllt sein" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Ungültige Email-Adresse" }, { status: 400 });
    }

    const anfrage = await prisma.anfrage.findUnique({
      where: { id: anfrageId },
      include: { branche: true },
    });

    if (!anfrage || anfrage.status === "archiviert") {
      return NextResponse.json(
        { error: "Anfrage nicht gefunden oder nicht aktiv" },
        { status: 404 }
      );
    }

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

    // E-Mails asynchron senden (blockiert Response nicht)
    Promise.all([
      mailNeuesInteresse({
        interessentFirma: firmenname,
        interessentName: ansprechpartner,
        interessentEmail: email,
        interessentTelefon: telefon || null,
        anfrageId: anfrage.id,
        anfrageFirma: anfrage.firmenname,
        anfrageAnzeigenId: anfrage.anzeigenId,
        anfrageZiel: anfrage.ziel,
      }),
      mailInteresseBestaetigung({
        interessentName: ansprechpartner,
        interessentEmail: email,
        anfrageFirma: anfrage.firmenname,
        anfrageAnzeigenId: anfrage.anzeigenId,
      }),
    ]).catch(err => console.error("[Email] Fehler:", err));

    return NextResponse.json({ success: true, id: interessent.id }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Speichern des Interesses" },
      { status: 500 }
    );
  }
}
