# EasyB2B — Bauplan & Phasen für Claude Code

## Projektstruktur (Next.js App Router)

```
easyb2b/
├── app/
│   ├── (public)/               ← Öffentliche Homepage
│   │   ├── page.tsx            Landing Page
│   │   ├── marktplatz/
│   │   │   └── page.tsx
│   │   ├── anzeige/[id]/
│   │   │   └── page.tsx
│   │   ├── interesse/[id]/
│   │   │   └── page.tsx
│   │   ├── formular/[id]/      ← Interessenten-Formular
│   │   │   └── page.tsx
│   │   ├── so-funktioniert-es/
│   │   └── kontakt/
│   │
│   ├── dashboard/              ← Operator-Dashboard (geschützt)
│   │   ├── layout.tsx          Sidebar + Auth-Check
│   │   ├── page.tsx            Übersicht / Inbox
│   │   ├── anfragen/
│   │   │   ├── page.tsx        Liste
│   │   │   ├── neu/page.tsx    Neue Anfrage (KI-Eingabe)
│   │   │   └── [id]/page.tsx   Detail + Bearbeitung
│   │   ├── interessenten/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── matches/page.tsx
│   │   ├── fragebögen/
│   │   │   └── [anfrageId]/page.tsx
│   │   ├── branchen/page.tsx   Wissensbasis
│   │   ├── workflows/page.tsx
│   │   ├── blacklist/page.tsx
│   │   └── analytics/page.tsx
│   │
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   ├── ki/
│   │   │   ├── strukturiere-anfrage/route.ts
│   │   │   ├── generiere-formular/route.ts
│   │   │   ├── bewerte-interessent/route.ts
│   │   │   └── generiere-email/route.ts
│   │   ├── anfragen/
│   │   │   ├── route.ts        GET (Liste) + POST (neu)
│   │   │   └── [id]/route.ts   GET + PUT + DELETE
│   │   ├── interessenten/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── formular/
│   │   │   └── submit/route.ts ← Interessent sendet ab (öffentlich)
│   │   └── cron/
│   │       └── daily/route.ts
│   │
│   └── layout.tsx              Root Layout
│
├── components/
│   ├── public/                 Öffentliche Komponenten
│   │   ├── AnzeigenCard.tsx
│   │   ├── Marktplatz.tsx
│   │   ├── Hero.tsx
│   │   └── Navigation.tsx
│   │
│   └── dashboard/              Dashboard-Komponenten
│       ├── Sidebar.tsx
│       ├── InboxCard.tsx
│       ├── MatchBewertung.tsx
│       ├── FragebogenBuilder.tsx
│       ├── KiVorschlagCard.tsx
│       └── WorkflowTimeline.tsx
│
├── lib/
│   ├── prisma.ts               Prisma Client (Singleton)
│   ├── ai.ts                   KI-Funktionen
│   ├── email.ts                Resend E-Mail
│   ├── auth.ts                 NextAuth Konfiguration
│   └── utils.ts                Hilfsfunktionen
│
├── prisma/
│   └── schema.prisma           (aus Datei 04)
│
└── .env                        Umgebungsvariablen
```

---

## Phasen-Bauplan

### Phase 1 — Fundament (Woche 1–2)
Ziel: Datenbank läuft, Auth funktioniert, Dashboard öffnet sich

```
1. Next.js Projekt anlegen (npx create-next-app@latest easyb2b)
2. Tailwind CSS + Lucide React installieren
3. Prisma + PostgreSQL einrichten
4. Schema aus Datei 04 anlegen + erste Migration
5. NextAuth einrichten (credentials provider, ein Betreiber-Account)
6. Dashboard-Layout mit Sidebar (alle Links, noch leer)
7. Dashboard-Übersicht (statische Zahlen, noch keine echten Daten)
```

Abnahmekriterium: Login funktioniert, Sidebar navigiert zu leeren Seiten.

---

### Phase 2 — Öffentliche Homepage (Woche 2–3)
Ziel: Homepage ist live, Anzeigen werden angezeigt

```
1. Design System als Tailwind-Konfiguration anlegen (Datei 03)
2. Landing Page mit allen Sections
3. Marktplatz mit Filter (erstmal mit Beispieldaten)
4. Anzeigen-Card Komponente
5. Anzeigen-Detailseite
6. Interesse-bekunden Seite (Link zu Formular)
7. Navigation + Footer
8. Responsive (Mobile + Tablet)
```

Beispieldaten (aus Datei 02 nutzen):
```typescript
// Für Entwicklung: Seed-Daten in prisma/seed.ts
const beispielAnzeigen = [
  { anzeigenId: 'ANZ-2024-047', branche: 'Logistik', richtung: 'dk_de', ... },
  { anzeigenId: 'ANZ-2024-051', branche: 'Lebensmittel', richtung: 'dk_de', ... },
  { anzeigenId: 'ANZ-2024-055', branche: 'IT / Software', richtung: 'de_dk', ... },
]
```

Abnahmekriterium: Homepage sieht gut aus, Marktplatz-Filter funktioniert.

---

### Phase 3 — Anfragen-Management + KI-Strukturierung (Woche 3–4)
Ziel: Betreiber kann Anfragen erstellen, KI strukturiert automatisch

```
1. Anfragen-Liste im Dashboard (aus DB)
2. Neue Anfrage erstellen (Freitext-Eingabe)
3. KI-Strukturierung (Funktion 1 aus Datei 05)
4. Vorschau + Korrektur + Bestätigung
5. Anfrage geht online (Status: aktiv, erscheint auf Homepage)
6. Anzeigen-ID automatisch generieren (ANZ-YYYY-NNN)
7. Anfrage-Detail-Seite (Bearbeitung, Status-Änderung)
```

Abnahmekriterium: Betreiber gibt Freitext ein → KI strukturiert → Anzeige erscheint auf Homepage.

---

### Phase 4 — Fragebogen-Builder + KI-Formular (Woche 4–5)
Ziel: KI generiert passendes Formular pro Anzeige

```
1. Branchen-Wissensbasis anlegen (Datei 04 — BranchenWissen)
2. Branchen-Verwaltung im Dashboard (Fragen pflegen)
3. KI-Formular-Generierung (Funktion 2 aus Datei 05)
4. Fragebogen-Builder UI (Fragen anzeigen, bearbeiten, sortieren)
5. KI-Vorschläge-Workflow (Sparkles-Badge, Bestätigen/Ablehnen)
6. Bestätigte Vorschläge → wandern in Branchen-Wissensbasis
7. Öffentliches Interessenten-Formular (/formular/[id])
8. Formular-Submit → Datensatz in DB
```

Abnahmekriterium: Anzeige aktivieren → KI generiert Formular → Interessent füllt aus → Daten in DB.

---

### Phase 5 — KI-Matching + Interessenten-Management (Woche 5–6)
Ziel: Jeder Interessent wird automatisch bewertet

```
1. KI-Bewertung beim Formular-Submit (Funktion 3 aus Datei 05)
2. Match-Score + Kriterien in DB speichern
3. Interessenten-Liste im Dashboard (mit Score-Farbmarkierung)
4. Interessenten-Detail mit KI-Bewertungs-Panel
5. Schlechte Matches: rot markiert + KI-Begründung (trotzdem sichtbar)
6. Aktionen: Freigeben | Ablehnen | Manuell übersteuern
7. K.O.-Kriterien: Sofort-Ablehnung-Flow für Interessenten
8. Blacklist-Prüfung beim Submit
```

Abnahmekriterium: Interessent sendet ab → Dashboard zeigt Score + Bewertung → Betreiber klickt Freigabe.

---

### Phase 6 — Workflows & E-Mail (Woche 6–7)
Ziel: Alle automatischen Prozesse laufen

```
1. Resend einrichten + alle E-Mail-Templates
2. Eingangsbestätigung für Interessenten
3. Betreiber-Benachrichtigung bei neuem Interessenten
4. Kontaktdaten-E-Mail nach Freigabe (anonym vs. öffentlich)
5. Cron-Job API-Route (Tag 5, 10, 14, Ablauf-Warnung)
6. Cron auf Server einrichten
7. Workflow-Timeline im Dashboard
8. E-Mail-Log im Dashboard
```

Abnahmekriterium: Vollständiger Durchlauf von Anfrage bis Match funktioniert automatisch.

---

### Phase 7 — Analytics + Feinschliff (Woche 8–10)
Ziel: System ist produktionsbereit

```
1. Analytics-Seite (Anfragen, Matches, Erfolgsquote, Branchen)
2. Mehrsprachigkeit (DE/DK Toggle auf Homepage)
3. SEO (Metadaten, OpenGraph für Anzeigen)
4. Performance (ISR für Homepage, Caching)
5. Error Handling + Loading States überall
6. Mobile Dashboard (Sidebar als Drawer)
7. Deployment auf Hostinger VPS
8. SSL + Domain
9. Monitoring (einfaches Uptime-Monitoring)
```

---

## Wichtige Hinweise für Claude Code

### Sicherheit
- Dashboard-Routes: `middleware.ts` mit NextAuth-Schutz
- KI-API-Routes: nur mit gültigem Session-Token aufrufbar
- Formular-Submit (/api/formular/submit): öffentlich, aber mit Rate-Limiting
- Alle Env-Variablen: nur serverseitig, nie in Client-Code

### Fehlerbehandlung
- Jeder KI-Call: try/catch + Fallback auf "manuell_prüfen"
- DB-Fehler: immer loggen, nie raw error an Frontend
- E-Mail-Fehler: loggen + weiter (kein Prozess-Stopp)

### Performance
- Homepage: ISR mit revalidate: 60 (1 Minute)
- Dashboard: kein Caching, immer frisch
- KI-Calls: Loading-Spinner, nie blockierend
- Bilder: next/image

### Code-Stil
- TypeScript strict mode
- Prisma Types nutzen (nicht manuell tippen)
- Server Components wo möglich, Client Components nur für Interaktivität
- Keine any types
