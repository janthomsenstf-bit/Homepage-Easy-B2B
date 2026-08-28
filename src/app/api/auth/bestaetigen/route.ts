import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { nochGueltig } from "@/lib/tokens";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Kein Bestätigungslink übergeben." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { verifizierungsToken: token } });

    if (!user) {
      return NextResponse.json(
        { error: "Dieser Bestätigungslink ist ungültig oder wurde bereits verwendet." },
        { status: 400 }
      );
    }

    if (user.emailVerifiziert) {
      return NextResponse.json({ ok: true, bereitsBestaetigt: true });
    }

    if (!nochGueltig(user.tokenAblauf)) {
      return NextResponse.json(
        { error: "Dieser Bestätigungslink ist abgelaufen. Bitte fordern Sie einen neuen an.", abgelaufen: true },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerifiziert: new Date(),
        verifizierungsToken: null,
        tokenAblauf: null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Bestätigung] Fehler:", error);
    return NextResponse.json({ error: "Bei der Bestätigung ist etwas schiefgelaufen." }, { status: 500 });
  }
}
