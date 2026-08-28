import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { mailVerifizierung } from "@/lib/email";
import {
  erzeugeToken,
  verifizierungsAblauf,
  basisUrl,
  pruefePasswort,
  istEmail,
} from "@/lib/tokens";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const email = String(body.email || "").toLowerCase().trim();
    const passwort = String(body.passwort || "");
    const firmenname = String(body.firmenname || "").trim();
    const ansprechpartner = String(body.ansprechpartner || "").trim();
    const telefon = body.telefon ? String(body.telefon).trim() : null;
    const land = body.land === "daenemark" ? "daenemark" : "deutschland";

    // ── Validierung ──
    if (!firmenname) {
      return NextResponse.json({ error: "Bitte geben Sie Ihren Firmennamen an." }, { status: 400 });
    }
    if (!ansprechpartner) {
      return NextResponse.json({ error: "Bitte geben Sie einen Ansprechpartner an." }, { status: 400 });
    }
    if (!istEmail(email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 400 });
    }
    const passwortFehler = pruefePasswort(passwort);
    if (passwortFehler) {
      return NextResponse.json({ error: passwortFehler }, { status: 400 });
    }

    // ── Bereits registriert? ──
    const vorhanden = await prisma.user.findUnique({ where: { email } });
    if (vorhanden) {
      // Kein Hinweis darauf, ob die Adresse existiert (Kontenaufzählung vermeiden).
      // Stattdessen: bei unbestätigtem Konto neuen Link schicken.
      if (!vorhanden.emailVerifiziert) {
        const token = erzeugeToken();
        await prisma.user.update({
          where: { id: vorhanden.id },
          data: { verifizierungsToken: token, tokenAblauf: verifizierungsAblauf() },
        });
        mailVerifizierung({
          email: vorhanden.email,
          ansprechpartner: vorhanden.ansprechpartner,
          firmenname: vorhanden.firmenname,
          bestaetigungsLink: `${basisUrl()}/konto-bestaetigen?token=${token}`,
        }).catch((e) => console.error("[Registrierung] Mail-Fehler:", e));
      }
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    // ── Blacklist prüfen ──
    const gesperrt = await prisma.blacklist.findUnique({ where: { email } });
    if (gesperrt) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    // ── Anlegen ──
    const passwortHash = await bcrypt.hash(passwort, 12);
    const token = erzeugeToken();

    const user = await prisma.user.create({
      data: {
        email,
        passwortHash,
        firmenname,
        ansprechpartner,
        telefon,
        land,
        rolle: "unternehmen",
        verifizierungsToken: token,
        tokenAblauf: verifizierungsAblauf(),
      },
    });

    mailVerifizierung({
      email: user.email,
      ansprechpartner: user.ansprechpartner,
      firmenname: user.firmenname,
      bestaetigungsLink: `${basisUrl()}/konto-bestaetigen?token=${token}`,
    }).catch((e) => console.error("[Registrierung] Mail-Fehler:", e));

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[Registrierung] Fehler:", error);
    return NextResponse.json(
      { error: "Bei der Registrierung ist etwas schiefgelaufen. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
