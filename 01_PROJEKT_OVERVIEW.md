# EasyB2B — Projektübersicht für Claude Code

## Was ist EasyB2B?
Eine B2B-Matchmaking-Plattform die Unternehmen aus Deutschland und Dänemark zusammenbringt.
Unternehmen können Anfragen (Suche nach Partnern, Lieferanten, Kunden) einstellen.
Interessenten können sich auf diese Anfragen bewerben.
EasyB2B koordiniert die Vermittlung dazwischen.

## Zielgruppe
- Kleine und mittelständische Unternehmen (KMU)
- Grenzregion DE ↔ DK
- Sprachen: Deutsch, Dänisch, Englisch

## Technologie-Stack (No-Code Backend)
- **Formular:** Tally (Webhooks zu Make)
- **Datenbank:** Airtable (3 Tabellen: Anfragen, Interessenten, Blacklist)
- **Automation:** Make (4 Szenarien)
- **E-Mail:** Gmail / Google Workspace
- **Homepage:** wird von Claude Code gebaut

## Was Claude Code baut
Die Homepage mit folgenden Bereichen:
1. Landing Page (Hero, Value Proposition)
2. Marktplatz (öffentliche Anzeigen)
3. Einzelne Anzeigen-Detailseite
4. "Anfrage einreichen"-Seite (verlinkt zu Tally-Formular)
5. "Interesse bekunden"-Flow (verlinkt zu Tally mit Referenz-ID)

## Wichtige Design-Prinzipien
- Vertrauen ausstrahlen (seriöse KMU-Plattform, kein Startup-Vibe)
- Zweisprachig DE / DK, Englisch als Fallback
- Mobile-first
- Klare CTAs: "Anfrage einreichen" und "Interesse bekunden"
- Anzeigen-ID immer sichtbar und verlinkbar
