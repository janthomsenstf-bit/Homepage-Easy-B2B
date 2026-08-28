import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { nochGueltig, pruefePasswort } from "@/lib/tokens";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = String(body.token || "");
    const passwort = String(body.passwort || "");

    if (!token) {
      return NextResponse.json({ error: "Kein gültiger Link übergeben." }, { status: 400 });
    }

    const fehler = pruefePasswort(passwort);
    if (fehler) {
      return NextResponse.json({ error: fehler }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { resetToken: token } });

    if (!user || !nochGueltig(user.resetTokenAblauf)) {
      return NextResponse.json(
        { error: "Dieser Link ist ungültig oder abgelaufen. Bitte fordern Sie einen neuen an." },
        { status: 400 }
      );
    }

    const passwortHash = await bcrypt.hash(passwort, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwortHash,
        resetToken: null,
        resetTokenAblauf: null,
        // Wer sein Passwort per E-Mail-Link zurücksetzt, hat die Adresse bewiesen.
        emailVerifiziert: user.emailVerifiziert ?? new Date(),
        verifizierungsToken: null,
        tokenAblauf: null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Passwort neu] Fehler:", error);
    return NextResponse.json({ error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut." }, { status: 500 });
  }
}
