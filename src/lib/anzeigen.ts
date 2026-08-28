// Gemeinsame Logik rund um Anzeigen: Status-Beschriftungen, Vollständigkeits-
// prüfung vor dem Einreichen, Rechte. Wird von API-Routen und UI benutzt.

import type { AnfrageStatus } from "@prisma/client";

// ─── Status ──────────────────────────────────────────────────────

export const STATUS_LABEL: Record<string, string> = {
  entwurf: "Entwurf",
  eingereicht: "Wird geprüft",
  rueckfragen_offen: "Rückfragen offen",
  abgelehnt: "Abgelehnt",
  eingehend: "Wird geprüft",
  aktiv: "Live auf dem Marktplatz",
  interessent_vorhanden: "Interessent vorhanden",
  mehrere_interessenten: "Mehrere Interessenten",
  kontakt_laeuft: "Kontakt läuft",
  vermittelt: "Vermittelt",
  stalled: "Stockt",
  pausiert: "Pausiert",
  archiviert: "Archiviert",
};

export const STATUS_FARBE: Record<string, string> = {
  entwurf: "#a0aec0",
  eingereicht: "#d69e2e",
  rueckfragen_offen: "#c8842c",
  abgelehnt: "#c53030",
  eingehend: "#d69e2e",
  aktiv: "#38a169",
  interessent_vorhanden: "#3182ce",
  mehrere_interessenten: "#3182ce",
  kontakt_laeuft: "#3182ce",
  vermittelt: "#38a169",
  stalled: "#c53030",
  pausiert: "#a0aec0",
  archiviert: "#a0aec0",
};

/** Erklärt dem Unternehmen, was der Status für sie bedeutet. */
export const STATUS_ERKLAERUNG: Record<string, string> = {
  entwurf: "Noch nicht eingereicht. Nur Sie sehen diese Anzeige.",
  eingereicht: "Wir schauen uns Ihre Anzeige an und melden uns innerhalb von 48 Stunden.",
  rueckfragen_offen: "Wir haben Rückfragen an Sie. Bitte antworten Sie, dann geht es weiter.",
  abgelehnt: "Diese Anzeige haben wir nicht veröffentlicht.",
  eingehend: "Wir schauen uns Ihre Anzeige an.",
  aktiv: "Ihre Anzeige ist öffentlich sichtbar. Interessenten können sich melden.",
  interessent_vorhanden: "Ein Unternehmen hat Interesse bekundet. Wir prüfen die Passung.",
  mehrere_interessenten: "Mehrere Unternehmen haben Interesse. Wir prüfen die Passung.",
  kontakt_laeuft: "Der Kontakt ist hergestellt.",
  vermittelt: "Erfolgreich vermittelt.",
  stalled: "Hier ist länger nichts passiert. Wir melden uns.",
  pausiert: "Diese Anzeige ruht gerade.",
  archiviert: "Diese Anzeige ist abgeschlossen.",
};

/** Status, in denen das Unternehmen die Anzeige noch bearbeiten darf. */
const BEARBEITBAR: string[] = ["entwurf", "rueckfragen_offen"];

export function istBearbeitbar(status: string): boolean {
  return BEARBEITBAR.includes(status);
}

/** Status, in denen die Anzeige öffentlich auf dem Marktplatz erscheint. */
export const OEFFENTLICHE_STATUS: AnfrageStatus[] = [
  "aktiv",
  "interessent_vorhanden",
  "mehrere_interessenten",
] as AnfrageStatus[];

// ─── Vollständigkeitsprüfung ─────────────────────────────────────

export type PflichtFeld = {
  key: string;
  label: string;
  hinweis: string;
};

export const PFLICHTFELDER: PflichtFeld[] = [
  { key: "firmenname", label: "Firmenname", hinweis: "Wie heißt Ihr Unternehmen?" },
  { key: "standort", label: "Standort", hinweis: "Wo sitzen Sie?" },
  { key: "brancheId", label: "Branche", hinweis: "In welcher Branche sind Sie tätig?" },
  { key: "richtung", label: "Richtung", hinweis: "Suchen Sie in Dänemark oder in Deutschland?" },
  { key: "art", label: "Art der Suche", hinweis: "Was für einen Partner suchen Sie?" },
  { key: "ziel", label: "Ihr Ziel", hinweis: "Was wollen Sie erreichen?" },
  { key: "beschreibung", label: "Beschreibung", hinweis: "Beschreiben Sie Ihr Vorhaben." },
  { key: "ansprechpartner", label: "Ansprechpartner", hinweis: "Wer ist Ihr Ansprechpartner?" },
  { key: "email", label: "E-Mail", hinweis: "Unter welcher Adresse erreichen wir Sie?" },
];

export type Vollstaendigkeit = {
  vollstaendig: boolean;
  fehlend: PflichtFeld[];
  anteil: number; // 0..1
};

/** Prüft, ob eine Anzeige eingereicht werden kann. */
export function pruefeVollstaendigkeit(anzeige: Record<string, unknown>): Vollstaendigkeit {
  const fehlend = PFLICHTFELDER.filter((f) => {
    const wert = anzeige[f.key];
    if (wert === null || wert === undefined) return true;
    if (typeof wert === "string") return wert.trim().length === 0;
    return false;
  });

  return {
    vollstaendig: fehlend.length === 0,
    fehlend,
    anteil: (PFLICHTFELDER.length - fehlend.length) / PFLICHTFELDER.length,
  };
}

// ─── Anzeigen-ID ─────────────────────────────────────────────────

/** Erzeugt eine sprechende Anzeigen-ID (EB-2026-4711). */
export function erzeugeAnzeigenId(): string {
  const jahr = new Date().getFullYear();
  const zahl = Math.floor(Math.random() * 9000 + 1000);
  return `EB-${jahr}-${zahl}`;
}

// ─── Beschriftungen ──────────────────────────────────────────────

export const RICHTUNG_LABEL: Record<string, string> = {
  de_dk: "Deutschland → Dänemark",
  dk_de: "Dänemark → Deutschland",
};

export const ART_LABEL: Record<string, string> = {
  lieferant: "Lieferant / Hersteller",
  kunden: "Kunden / Abnehmer",
  kooperation: "Kooperationspartner",
  vertrieb: "Vertrieb / Handelspartner",
};

export const REIFEGRAD_LABEL: Record<string, string> = {
  idee: "Idee",
  konzept: "Konzept",
  bereit: "Bereit",
  sofort: "Sofort startklar",
};
