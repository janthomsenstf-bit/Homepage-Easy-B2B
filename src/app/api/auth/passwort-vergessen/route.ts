import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { mailPasswortReset } from "@/lib/email";
import { erzeugeToken, resetAblauf, basisUrl, istEmail } from "@/lib/tokens";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").toLowerCase().trim();

    if (!istEmail(email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Immer die gleiche Antwort — verrät nicht, ob die Adresse existiert.
    if (user && user.emailVerifiziert) {
      const token = erzeugeToken();
      await prisma.user.update({
        where: { id: user.id },
        data: { resetToken: token, resetTokenAblauf: resetAblauf() },
      });

      mailPasswortReset({
        email: user.email,
        ansprechpartner: user.ansprechpartner,
        resetLink: `${basisUrl()}/passwort-neu?token=${token}`,
      }).catch((e) => console.error("[Passwort-Reset] Mail-Fehler:", e));
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Passwort-Reset] Fehler:", error);
    return NextResponse.json({ error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut." }, { status: 500 });
  }
}
