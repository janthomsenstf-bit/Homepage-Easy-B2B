# EasyB2B — Datenbankschema (PostgreSQL + Prisma)

## Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─── BRANCHEN & WISSENSBASIS ─────────────────────────────────────

model Branche {
  id          String   @id @default(cuid())
  name        String   @unique
  slug        String   @unique
  beschreibung String?
  wissensbasis BranchenWissen[]
  anfragen    Anfrage[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model BranchenWissen {
  id          String   @id @default(cuid())
  branche     Branche  @relation(fields: [brancheId], references: [id])
  brancheId   String
  frage       String
  frageTyp    FrageTyp
  pflicht     Boolean  @default(false)
  koKriterium Boolean  @default(false)
  quelle      WissensQuelle  // betreiber | ki_vorschlag | ki_bestaetigt
  bestaetigt  Boolean  @default(false)  // false = KI-Vorschlag ungeprüft
  createdAt   DateTime @default(now())
}

enum WissensQuelle {
  betreiber
  ki_vorschlag
  ki_bestaetigt
}

// ─── ANFRAGEN (ANZEIGEN) ─────────────────────────────────────────

model Anfrage {
  id              String        @id @default(cuid())
  anzeigenId      String        @unique  // z.B. ANZ-2024-047
  richtung        Richtung      // de_dk | dk_de
  art             AnfrageArt    // lieferant | kunden | kooperation | vertrieb
  branche         Branche       @relation(fields: [brancheId], references: [id])
  brancheId       String
  gesuchteBranche String?
  firmenname      String        // intern — nicht immer öffentlich
  standort        String
  website         String?
  sprachen        Sprache[]
  beschreibung    String        // Kern der Anfrage
  ziel            String        // Was soll entstehen
  persönlicherTouch String      // Pflicht — bleibt unverändert
  mustHaves       String?
  niceToHaves     String?
  reifegrad       Reifegrad     // idee | konzept | bereit | sofort
  gueltigBis      DateTime
  sichtbarkeit    Sichtbarkeit  // intern | anonym | oeffentlich
  status          AnfrageStatus @default(eingehend)
  kontaktTimer    DateTime?
  ansprechpartner String
  email           String
  telefon         String?

  // KI-generierter Inhalt
  kiAnzeigentext  String?       // von KI strukturierter Anzeigentext
  kiStrukturiert  Boolean       @default(false)

  // Relationen
  frageFormular   Frageformular?
  interessenten   Interessent[]

  // Interne Felder
  reviewOk        Boolean       @default(false)
  reviewNotiz     String?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

enum Richtung      { de_dk dk_de }
enum AnfrageArt    { lieferant kunden kooperation vertrieb }
enum Reifegrad     { idee konzept bereit sofort }
enum Sichtbarkeit  { intern anonym oeffentlich }
enum Sprache       { deutsch daenisch englisch }

enum AnfrageStatus {
  eingehend
  aktiv
  interessent_vorhanden
  mehrere_interessenten
  kontakt_laeuft
  vermittelt
  stalled
  pausiert
  archiviert
}

// ─── FRAGEFORMULARE (KI-GENERIERT) ───────────────────────────────

model Frageformular {
  id          String    @id @default(cuid())
  anfrage     Anfrage   @relation(fields: [anfrageId], references: [id])
  anfrageId   String    @unique
  fragen      Frage[]
  aktiv       Boolean   @default(true)
  version     Int       @default(1)  // erhöht bei Neu-Generierung
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Frage {
  id            String        @id @default(cuid())
  formular      Frageformular @relation(fields: [formularId], references: [id])
  formularId    String
  reihenfolge   Int
  text          String
  typ           FrageTyp
  pflicht       Boolean       @default(true)
  koKriterium   Boolean       @default(false)
  koWert        String?       // z.B. "< 5" bei LKW-Anzahl
  optionen      String[]      // für Auswahl-Felder
  quelle        FrageQuelle   // anzeige | ki_schicht2 | betreiber
  kiVorschlag   Boolean       @default(false)  // true = noch nicht bestätigt
  bestaetigt    Boolean       @default(true)
  antworten     Antwort[]
  createdAt     DateTime      @default(now())
}

enum FrageTyp {
  zahl
  text_kurz
  text_lang
  ja_nein
  auswahl_single
  auswahl_multi
  skala
  datum
}

enum FrageQuelle {
  anzeige       // Schicht 1 — direkt aus Anfrage
  ki_schicht2   // Schicht 2 — KI ergänzt aus Branchen-Wissen
  betreiber     // manuell hinzugefügt
}

// ─── INTERESSENTEN ───────────────────────────────────────────────

model Interessent {
  id              String              @id @default(cuid())
  anfrage         Anfrage             @relation(fields: [anfrageId], references: [id])
  anfrageId       String
  firmenname      String
  ansprechpartner String
  email           String
  telefon         String?
  antworten       Antwort[]
  status          InteressentStatus   @default(neu)
  freigegeben     Boolean             @default(false)
  kontaktDatum    DateTime?

  // KI-Bewertung
  matchScore      Int?                // 0–100
  matchBewertung  Json?               // {kriterien: [...], empfehlung, begründung}
  kiBewertungDatum DateTime?

  // Follow-up
  feedbackSuchender   FeedbackStatus  @default(ausstehend)
  feedbackInteressent FeedbackStatus  @default(ausstehend)
  reminder5Gesendet   Boolean         @default(false)
  reminder10Gesendet  Boolean         @default(false)
  stalledGesetzt      Boolean         @default(false)

  // Intern
  notiz           String?
  createdAt       DateTime            @default(now())
  updatedAt       DateTime            @updatedAt
}

enum InteressentStatus {
  neu
  freigegeben
  kontakt_laeuft
  feedback_ausstehend
  erfolgreich
  spam
  unqualifiziert
  stalled
  abgelehnt
}

enum FeedbackStatus {
  ausstehend
  kontakt_hergestellt
  kein_kontakt
  erfolg
  kein_match
}

// ─── FORMULAR-ANTWORTEN ──────────────────────────────────────────

model Antwort {
  id            String      @id @default(cuid())
  interessent   Interessent @relation(fields: [interessentId], references: [id])
  interessentId String
  frage         Frage       @relation(fields: [frageId], references: [id])
  frageId       String
  wert          String      // immer als String gespeichert, Typ aus Frage bekannt
  koVerletzt    Boolean     @default(false)  // true wenn K.O.-Kriterium nicht erfüllt
  createdAt     DateTime    @default(now())
}

// ─── BLACKLIST ───────────────────────────────────────────────────

model Blacklist {
  id          String   @id @default(cuid())
  email       String   @unique
  firmenname  String?
  grund       BlacklistGrund
  notiz       String?
  createdAt   DateTime @default(now())
}

enum BlacklistGrund {
  spam
  kein_kontakt
  falsche_angaben
  unernst
}

// ─── E-MAIL LOG ──────────────────────────────────────────────────

model EmailLog {
  id          String   @id @default(cuid())
  an          String
  betreff     String
  typ         EmailTyp
  anfrageId   String?
  interessentId String?
  erfolg      Boolean
  createdAt   DateTime @default(now())
}

enum EmailTyp {
  bestaetigung_interessent
  benachrichtigung_betreiber
  kontaktdaten_suchender
  kontaktdaten_interessent
  reminder_tag5
  reminder_tag10
  stalled_alarm
  ablauf_warnung
}
```

## Wichtige Queries (Beispiele für Claude Code)

```typescript
// Alle aktiven Anzeigen für Homepage (öffentlich, nicht anonym-intern)
const aktiveAnzeigen = await prisma.anfrage.findMany({
  where: {
    status: 'aktiv',
    sichtbarkeit: { in: ['anonym', 'oeffentlich'] },
    gueltigBis: { gt: new Date() }
  },
  include: { branche: true },
  orderBy: { createdAt: 'desc' }
});

// Interessenten mit Score <50% (schlechte Matches — trotzdem anzeigen)
const schlechteMatches = await prisma.interessent.findMany({
  where: { anfrageId: id, matchScore: { lt: 50 } },
  include: { antworten: { include: { frage: true } } }
});

// Dashboard Inbox — alles was Aufmerksamkeit braucht
const inbox = {
  neueInteressenten: await prisma.interessent.count({ where: { status: 'neu' } }),
  reviewNötig: await prisma.anfrage.count({ where: { reviewOk: false, status: 'eingehend' } }),
  stalledFälle: await prisma.interessent.count({ where: { status: 'stalled' } }),
  kiVorschläge: await prisma.frage.count({ where: { kiVorschlag: true, bestaetigt: false } })
};
```
