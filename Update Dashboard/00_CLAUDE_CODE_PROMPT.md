# EasyB2B — Übergabe an Claude Code (Komplettes System v2)

## Kontext
Wir bauen ein vollständiges B2B-Matchmaking-System für Unternehmen zwischen Deutschland und Dänemark.
Es besteht aus zwei Teilen die zusammenarbeiten:
1. **Öffentliche Homepage** — Marktplatz für Anzeigen, sichtbar für alle
2. **Operator-Dashboard** — internes System nur für den Betreiber (eine Person)

Alle Spezifikationen stecken in den mitgelieferten Dateien. Lies sie in dieser Reihenfolge:
01 → 02 → 03 → 04 → 05 → 06 → 07

## Was du baust

### Teil A — Öffentliche Homepage
- Landing Page, Marktplatz, Anzeigen-Detailseite
- Interesse bekunden (mit Referenz-ID an Interessenten-Formular)
- "So funktioniert es", Kontakt

### Teil B — Operator-Dashboard (passwortgeschützt)
- Übersicht / Inbox mit Prioritäten
- Anfragen-Management (CRUD)
- Fragebogen-Builder mit Branchen-Wissensbasis
- KI-Matching Engine (Claude API)
- Interessenten-Management mit Match-Bewertung
- Workflow-Center (Follow-up, Timer, Blacklist)
- Analytics

## Tech Stack
- **Framework:** Next.js 14 (App Router) — Homepage + Dashboard in einem Projekt
- **Datenbank:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js (nur für Dashboard)
- **KI:** Anthropic Claude API (claude-sonnet-4-20250514)
- **E-Mail:** Resend
- **Hosting:** Hostinger VPS (Node.js + PostgreSQL)
- **Styling:** Tailwind CSS

## Startreihenfolge für Claude Code
1. Projektstruktur + Prisma Schema anlegen (Datei 04)
2. Auth + Dashboard-Grundgerüst
3. Öffentliche Homepage (Datei 02 + 03)
4. Fragebogen-Builder (Datei 05)
5. KI-Matching Engine (Datei 06)
6. Workflow & E-Mail (Datei 07)
7. Analytics + Feinschliff

## Wichtigste technische Entscheidungen
- API-Keys (Anthropic, Resend) NUR serverseitig — nie im Frontend
- Dashboard unter /dashboard/* — geschützt via NextAuth Middleware
- Homepage statisch wo möglich (ISR) — Dashboard dynamisch
- KI-Calls immer async mit Loading-State im UI
- Alle KI-Responses als JSON — nie als Freitext parsen
