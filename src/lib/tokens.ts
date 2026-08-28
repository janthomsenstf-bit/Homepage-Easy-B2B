// Token-Erzeugung und -Prüfung für E-Mail-Verifizierung und Passwort-Reset.
// Kryptografisch sichere Zufallswerte — kein Math.random().

import { randomBytes } from "crypto";

/** Erzeugt einen URL-sicheren Zufallstoken (256 Bit). */
export function erzeugeToken(): string {
  return randomBytes(32).toString("base64url");
}

/** Ablaufzeitpunkt für Verifizierungs-Token: 48 Stunden. */
export function verifizierungsAblauf(): Date {
  return new Date(Date.now() + 48 * 60 * 60 * 1000);
}

/** Ablaufzeitpunkt für Passwort-Reset: 1 Stunde. */
export function resetAblauf(): Date {
  return new Date(Date.now() + 60 * 60 * 1000);
}

/** Prüft, ob ein Ablaufdatum noch in der Zukunft liegt. */
export function nochGueltig(ablauf: Date | null | undefined): boolean {
  if (!ablauf) return false;
  return ablauf.getTime() > Date.now();
}

/** Basis-URL der Anwendung — für Links in E-Mails. */
export function basisUrl(): string {
  return (
    process.env.NEXTAUTH_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3001"
  ).replace(/\/$/, "");
}

// ─── Passwort-Regeln ──────────────────────────────────────────────

export const PASSWORT_MIN_LAENGE = 10;

/** Prüft ein Passwort. Gibt null zurück wenn ok, sonst die Fehlermeldung. */
export function pruefePasswort(passwort: string): string | null {
  if (passwort.length < PASSWORT_MIN_LAENGE) {
    return `Das Passwort muss mindestens ${PASSWORT_MIN_LAENGE} Zeichen haben.`;
  }
  if (!/[a-zA-ZäöüÄÖÜ]/.test(passwort)) {
    return "Das Passwort muss mindestens einen Buchstaben enthalten.";
  }
  if (!/[0-9]/.test(passwort)) {
    return "Das Passwort muss mindestens eine Ziffer enthalten.";
  }
  return null;
}

/** Einfache E-Mail-Plausibilitätsprüfung. */
export function istEmail(wert: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(wert.trim());
}
