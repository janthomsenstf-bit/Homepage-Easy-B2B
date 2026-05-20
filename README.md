# Easy-B2B – Next.js Projekt

Kuratiertes B2B-Netzwerk für deutsche und dänische Unternehmen.

## Start

```bash
npm install
npm run dev
```

Dev-Server läuft auf: http://localhost:3001

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout
│   ├── globals.css         # Design-System (CSS-Variablen, globale Styles)
│   ├── page.tsx            # Startseite /
│   ├── marktplatz/         # /marktplatz
│   ├── beispiele/          # /beispiele
│   ├── typisch/            # /typisch
│   └── ueber-uns/          # /ueber-uns
├── components/
│   └── ui/
│       ├── Nav.tsx         # Sticky Navigation
│       └── Footer.tsx      # Footer
└── lib/
    └── content.ts          # ALLE Inhalte zentral (Texte, Daten, Copy)

public/
└── images/
    ├── hero-dosentelefon.png   # Hero-Illustration
    └── grenz-dosentelefon.png  # Grenzsituationen-Illustration
```

## Seiten

| Route | Beschreibung |
|-------|-------------|
| `/` | Startseite – anteasert alle Bereiche |
| `/marktplatz` | Aktuelle Gesuche mit Filter + Einreichen |
| `/beispiele` | 8 Story-Karten + 12 Use Cases + Grenzsituationen |
| `/typisch` | Kulturelle Unterschiede DE/DK mit Tab-Filter |
| `/ueber-uns` | Jan Portrait + Werte + Kooperationspartner |

## Inhalte anpassen

Alle Texte und Daten sind in **`src/lib/content.ts`** zentralisiert:
- `BEISPIELE` – 8 reale Kooperationsgeschichten
- `USE_CASES` – 12 Use Cases
- `GRENZSITUATIONEN` – 6 kulturelle Situationen
- `PROZESS` – 5 Prozessschritte
- `DEMO_GESUCHE` – Demo-Daten für den Marktplatz
- `SITE` – Name, Kernsatz, Jan-Infos

## Wichtige Hinweise

- **Etablering-Tyskland** ist eine separate externe Website → nur als `target="_blank"` Link
- Kein direkter Kontakt zwischen Nutzern – alles läuft über Jan
- Tally-Formular URL in `src/app/marktplatz/page.tsx` eintragen wenn verfügbar
- Konsequentes „Du" in allen Texten
- Keine Buzzwords: nicht „innovativ", „ganzheitlich", „Plattform"

## Design-Farben

```css
--navy:        #1a2e4a
--amber:       #d4900a
--amber-light: #FAC775
--teal:        #1D9E75
--off:         #f8f7f4
```
