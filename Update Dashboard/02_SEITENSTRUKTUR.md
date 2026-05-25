# EasyB2B — Seitenstruktur (Homepage + Dashboard)

## A. Öffentliche Homepage

### Routing
```
/                        Landing Page
/marktplatz              Anzeigen-Übersicht
/anzeige/[id]            Anzeigen-Detailseite
/interesse/[id]          Weiterleitungsseite → Interessenten-Formular
/anfrage-einreichen      Erklärungsseite + Formular-Link
/so-funktioniert-es      Prozess-Erklärung
/kontakt                 Kontaktseite
```

### Landing Page ( / )
Sections:
1. Navigation — Logo | Marktplatz | So funktioniert's | [Anfrage einreichen →]
2. Hero — Headline + Subline + 2 CTAs + DE/DK Flaggen
3. Stats-Bar — aktive Anfragen | Branchen | Ø Tage bis Match
4. Wie es funktioniert — 3 Schritte
5. Aktuelle Anzeigen — 3 Preview-Cards (neueste aktive)
6. CTA-Banner — "Jetzt Anfrage einreichen"
7. Footer

Hero-Text:
```
Headline:  Ihr Partner zwischen Deutschland und Dänemark
Subline:   Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung.
CTA 1:     Anfrage einreichen →
CTA 2:     Marktplatz ansehen
```

### Marktplatz ( /marktplatz )
Filter: Richtung | Branche | Reifegrad | Sprache
Grid: 3 Spalten Desktop / 2 Tablet / 1 Mobile

Anzeigen-Card:
```
┌─────────────────────────────────┐
│ ANZ-2024-047          DE → DK   │
│ Logistik                        │
│ ─────────────────────────────── │
│ Kurzbeschreibung (2 Zeilen)...  │
│ ─────────────────────────────── │
│ [Konzept]         Bis 20.04.    │
│ [Interesse bekunden →]          │
└─────────────────────────────────┘
```

### Anzeigen-Detailseite ( /anzeige/[id] )
Aufbau:
- Zurück-Link + Anzeigen-ID + Status-Badge
- Richtung | Branche | Sprachen | Gültig bis
- Abschnitt: Was wird gesucht?
- Abschnitt: Was soll entstehen?
- Abschnitt: Anforderungen (Must-haves)
- Abschnitt: Über das Unternehmen (persönlicher Touch)
- Abschnitt: Standort (Stadt, kein Straßenname)
- CTA: [Interesse bekunden →] → /interesse/[id]

Sichtbarkeits-Logik:
- Anonym: kein Firmenname, kein direkter Kontakt
- Öffentlich: Firmenname + ggf. Website sichtbar

### Interesse bekunden ( /interesse/[id] )
Kurze Seite:
- "Ihr bekundet Interesse an Anfrage [ID]"
- Kurze Info was als nächstes passiert
- [Zum Formular →] → öffnet das KI-generierte Formular
  (eigene Route: /formular/[id] ODER externes Tally mit ?ref=[id])

WICHTIG: Die Anzeigen-ID wird als URL-Parameter mitgegeben.

---

## B. Operator-Dashboard (passwortgeschützt)

### Routing
```
/dashboard               Übersicht / Inbox
/dashboard/anfragen      Alle Anfragen
/dashboard/anfragen/neu  Neue Anfrage erstellen
/dashboard/anfragen/[id] Anfrage-Detail + Bearbeitung
/dashboard/interessenten Alle Interessenten
/dashboard/matches       Match-Übersicht
/dashboard/fragebögen    Fragebogen-Builder
/dashboard/branchen      Branchen-Wissensbasis
/dashboard/workflows     Follow-up & Timer
/dashboard/blacklist     Blacklist-Verwaltung
/dashboard/analytics     Statistiken
/dashboard/einstellungen E-Mail-Templates, API-Keys
```

### Dashboard-Übersicht ( /dashboard )
Aufbau:
- Stat-Karten: Aktive Anfragen | Review nötig | Matches heute | Stalled
- Inbox-Bereich mit Prioritäten:
  - "Neue Interessenten warten auf Review"
  - "Stalled-Fälle (>14 Tage)"
  - "Anzeigen laufen bald ab"
  - "KI hat neue Branchen-Vorschläge"
- Schnellaktionen: Neue Anfrage | Anfrage prüfen | Match freigeben

### Anfrage erstellen ( /dashboard/anfragen/neu )
Zwei Modi:
1. Betreiber gibt Freitext ein → KI strukturiert automatisch
2. Betreiber füllt strukturiertes Formular aus (Felder aus Datei 04)

KI-Strukturierung:
- Betreiber schreibt: "Lars Pedersen, dänischer Logistiker, sucht deutschen Partner,
  5 LKWs Pflicht, Hebebühne, Lager SH und Bayern, 3x/Woche, 20-40 Paletten"
- KI extrahiert: Firma, Branche, Richtung, Must-haves, Beschreibung, Reifegrad
- Betreiber sieht Vorschau, korrigiert falls nötig, bestätigt
- Anzeige geht mit einem Klick online

### Anfrage-Detail ( /dashboard/anfragen/[id] )
- Alle Felder der Anfrage (bearbeitbar)
- Generiertes Interessenten-Formular (Vorschau + Bearbeitung)
- Angebundene Interessenten (Liste mit Match-Scores)
- Workflow-Status (Timeline)
- Aktionen: Aktivieren | Pausieren | Archivieren | Formular neu generieren

### Fragebogen-Builder ( /dashboard/fragebögen )
Pro Anzeige ein Formular — automatisch generiert, manuell anpassbar.

Funktionen:
- Formular-Vorschau wie der Interessent es sieht
- Fragen hinzufügen / bearbeiten / löschen / sortieren
- Pro Frage: Text | Typ | Pflicht/Optional | K.O.-Kriterium ja/nein
- KI-Vorschläge anzeigen (aus Schicht 2) mit: Übernehmen | Bearbeiten | Ablehnen
- Übernommene Vorschläge → wandern in Branchen-Wissensbasis

Frage-Typen:
- Zahl (mit Min/Max-Validierung)
- Text (kurz / lang)
- Ja / Nein
- Auswahl (Single / Multiple)
- Skala (1–5 oder 1–10)
- Datum

### Branchen-Wissensbasis ( /dashboard/branchen )
Pro Branche:
- Liste typischer Fragen (vom Betreiber gepflegt)
- K.O.-Standard-Kriterien
- Fachbegriffe / Zertifizierungen
- "Von KI vorgeschlagen, noch nicht bestätigt" — Warteschlange

### Interessenten-Management ( /dashboard/interessenten )
Listenansicht mit Filtern: Alle | Neu | Freigegeben | Kontakt läuft | Stalled | Spam

Pro Interessent:
- Firmenname | Anzeigen-Ref | Eingangsdatum | Match-Score
- Farbmarkierung: grün (>80%) | gelb (50–80%) | rot (<50%)
- K.O.-Badge wenn K.O.-Kriterium nicht erfüllt

Interessenten-Detail:
- Alle Formular-Antworten
- KI-Bewertung: Score + Kriterien-Tabelle + Begründung (2–3 Sätze)
- Aktionen: Freigeben | Ablehnen | Manuell übersteuern | Als Spam markieren

### Workflow-Center ( /dashboard/workflows )
Timeline pro Anfrage:
- Anfrage erstellt → Aktiv → Interessent eingegangen → Freigegeben
  → Kontakt läuft → [Feedback] → Vermittelt / Stalled / Spam

Follow-up-Status:
- Tag 5: Reminder an Suchenden gesendet?
- Tag 10: Reminder an Interessenten gesendet?
- Tag 14: Stalled-Status gesetzt?

Manuelle Aktionen pro Fall:
- Reminder jetzt senden
- Status manuell ändern
- Notiz hinzufügen
- Als erledigt markieren
