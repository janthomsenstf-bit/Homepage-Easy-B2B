# EasyB2B — Übergabe-Prompt für Claude Code

Kopiere diesen Text als erste Nachricht an Claude Code.

---

## PROMPT FÜR CLAUDE CODE:

Ich baue eine B2B-Matchmaking-Plattform namens EasyB2B für Unternehmen zwischen Deutschland und Dänemark. Du hast alle notwendigen Spezifikationen als Dateien erhalten. Hier ist der Überblick:

### Was du baust:
Eine Homepage mit den folgenden Seiten:
- Landing Page ( / )
- Marktplatz ( /marktplatz )
- Anzeigen-Detailseite ( /anzeige/[id] )
- Anfrage einreichen ( /anfrage-einreichen )
- Interesse bekunden ( /interesse/[id] )
- So funktioniert es ( /so-funktioniert-es )

### Tech Stack für die Homepage:
[Wähle eines — empfohlen für No-Code-Integration:]
- **Option A: Next.js + Static Export** — beste SEO, einfaches Deployment auf Hostinger/Vercel
- **Option B: Astro** — extrem schnell, ideal für überwiegend statische Inhalte
- **Option C: Plain HTML/CSS/JS** — wenn kein Framework gewünscht

### Wichtigste Anforderungen:
1. Die Anzeigen-Daten kommen aus Airtable über die Airtable API (nur Anzeigen mit Status="Aktiv" und Sichtbarkeit!="Intern")
2. Der API-Key darf NUR serverseitig verwendet werden
3. Jede Anzeigen-Card hat einen "Interesse bekunden"-Button der zur URL /interesse/[anzeigen-id] führt
4. Die /interesse/[id]-Seite leitet weiter zu Tally mit dem URL-Parameter ?referenz_id=[id]
5. Das Design folgt dem Design System (Datei: 03_DESIGN_SYSTEM.md)
6. Mobile-first, zweisprachig DE/DK (Sprachumschalter in der Navigation)

### Dateien die du lesen sollst (in dieser Reihenfolge):
1. 01_PROJEKT_OVERVIEW.md — Was ist EasyB2B?
2. 02_SEITENSTRUKTUR.md — Alle Seiten und ihr Inhalt
3. 03_DESIGN_SYSTEM.md — Farben, Typo, Komponenten
4. 04_AIRTABLE_STRUKTUR.md — Datenbankfelder (für API-Abfragen)
5. 05_MAKE_SZENARIEN.md — Backend-Logik (nur zur Info, du baust das nicht)

### Starte mit:
1. Projektstruktur aufsetzen
2. Design System als CSS Custom Properties anlegen
3. Wiederverwendbare Komponenten bauen (Card, Badge, Button, Navigation, Footer)
4. Landing Page umsetzen
5. Dann Marktplatz mit Airtable-Anbindung

### Beispiel-Anzeigendaten (für Entwicklung ohne echtes Airtable):
```json
[
  {
    "id": "ANZ-2024-047",
    "richtung": "DE→DK",
    "art": "Lieferant suchen",
    "branche": "Logistik",
    "beschreibung": "Wir produzieren Präzisionsteile für die Windkraftbranche und suchen einen dänischen Logistikpartner für regelmäßige Transporte zwischen Kiel und Esbjerg – ca. 3x wöchentlich.",
    "reifegrad": "Konzept",
    "sprachen": ["Deutsch", "Englisch"],
    "standort": "Hamburg, Deutschland",
    "gueltig_bis": "2024-04-20",
    "sichtbarkeit": "Anonym",
    "status": "Aktiv"
  },
  {
    "id": "ANZ-2024-051",
    "richtung": "DK→DE",
    "art": "Kunden gewinnen",
    "branche": "Lebensmittel",
    "beschreibung": "Dänische Bio-Molkerei sucht Distributionspartner für den deutschen Markt. Fokus auf Naturkost-Fachhandel und Bio-Supermärkte. Jahresvolumen ca. 500 Tonnen.",
    "reifegrad": "Bereit",
    "sprachen": ["Dänisch", "Deutsch", "Englisch"],
    "standort": "Odense, Dänemark",
    "gueltig_bis": "2024-05-01",
    "sichtbarkeit": "Öffentlich",
    "status": "Aktiv"
  },
  {
    "id": "ANZ-2024-055",
    "richtung": "DE→DK",
    "art": "Kooperationspartner",
    "branche": "IT / Software",
    "beschreibung": "Hamburger IT-Beratung sucht dänischen Entwicklungspartner für gemeinsame Kundenprojekte im Bereich Industrie 4.0. Min. 5 Entwickler, Erfahrung mit SAP-Integration.",
    "reifegrad": "Sofort",
    "sprachen": ["Deutsch", "Englisch"],
    "standort": "Hamburg, Deutschland",
    "gueltig_bis": "2024-04-15",
    "sichtbarkeit": "Öffentlich",
    "status": "Aktiv"
  }
]
```

### Tally-Formular URLs (Platzhalter — echte IDs kommen später):
```
Anfrage einreichen: https://tally.so/r/FORMULAR_ID_1
Interesse bekunden: https://tally.so/r/FORMULAR_ID_2?referenz_id=[ID]
```

### Deployment-Ziel:
Hostinger (bereits vorhanden). Static Export oder Node.js beide möglich.

Fang mit der Projektstruktur und dem Design System an, dann bauen wir Seite für Seite auf.
