# EasyB2B — Make Automation: Szenarien & Konfiguration

## Übersicht der 4 Szenarien

| # | Name | Trigger | Zweck |
|---|---|---|---|
| 1 | Neuer Interessent | Tally Webhook | Blacklist prüfen, Datensatz anlegen, Benachrichtigen |
| 2 | Freigabe & Kontakt | Airtable Watch (Freigabe = true) | Kontaktdaten weiterleiten je nach Sichtbarkeit |
| 3 | Follow-up Timer | Täglich 08:00 | Reminder Tag 5, 10, Stalled Tag 14 |
| 4 | Spam / Blacklist | Airtable Watch (Feedback = Spam) | Blacklist eintragen, Anzeige reaktivieren |

---

## Szenario 1 — Neuer Interessent

```
TRIGGER: Tally → Watch Responses
  Formular-ID: [Interessenten-Formular ID]

MODUL 2: Airtable → Search Records
  Tabelle: Blacklist
  Filter: {E-Mail} = {{1.email}}
  → Gibt Records zurück wenn E-Mail gesperrt

FILTER: Blacklist-Check
  Bedingung: Anzahl(Modul2.records) = 0
  → Ja: weiter | Nein: Szenario endet still (kein Fehler, keine Mail)

MODUL 4: Airtable → Search Records
  Tabelle: Anfragen
  Filter: {Anzeigen-ID} = {{1.referenz_id}}
  → Gibt den Anzeigen-Datensatz zurück

MODUL 5: Airtable → Create Record
  Tabelle: Interessenten
  Felder:
    Anzeigen-Ref: {{4.records[].id}}     ← Airtable Record ID aus Modul 4
    Firmenname: {{1.firma}}
    Ansprechpartner: {{1.name}}
    E-Mail: {{1.email}}
    Telefon: {{1.telefon}}
    Interesse-Text: {{1.interesse_text}}
    Starttermin: {{1.starttermin}}
    Status: Neu
    Freigabe: false

MODUL 6: Airtable → Update Record
  Tabelle: Anfragen
  Record ID: {{4.records[].id}}
  Felder:
    Status: Interessent vorhanden

MODUL 7A: Gmail → Send Email
  An: [deine EasyB2B E-Mail]
  Betreff: ⚡ Neuer Interessent: {{1.referenz_id}}
  Inhalt:
    Firma: {{1.firma}}
    Name: {{1.name}}
    E-Mail: {{1.email}}
    Telefon: {{1.telefon}}
    Interesse: {{1.interesse_text}}
    Starttermin: {{1.starttermin}}
    → Airtable: https://airtable.com/[BASE]/[TABLE]/{{5.id}}

MODUL 7B: Gmail → Send Email
  An: {{1.email}}
  Betreff: Eure Anfrage ist eingegangen — EasyB2B
  Inhalt:
    Hallo {{1.name}},
    vielen Dank für euer Interesse an Anfrage {{1.referenz_id}}.
    Wir prüfen eure Angaben kurz und melden uns innerhalb von 24 Stunden.
    Mit freundlichen Grüßen
    EasyB2B Team
```

---

## Szenario 2 — Freigabe & Kontaktweitergabe

```
TRIGGER: Airtable → Watch Records
  Tabelle: Interessenten
  Feld: Freigabe
  Trigger wenn: Freigabe wechselt von false auf true

MODUL 2: Airtable → Get Record
  Tabelle: Anfragen
  Record ID: {{1.Anzeigen-Ref[].id}}
  → Holt alle Felder der verknüpften Anzeige

ROUTER: Route nach Sichtbarkeit
  Pfad A: {{2.Sichtbarkeit}} = "Anonym"
  Pfad B: {{2.Sichtbarkeit}} = "Öffentlich"

--- PFAD A (Anonym) ---

MODUL 4A: Gmail → Send Email
  An: {{2.E-Mail}}           ← E-Mail des Suchenden aus der Anzeige
  Betreff: Ein Interessent hat sich für eure Anfrage {{2.Anzeigen-ID}} gemeldet
  Inhalt:
    Hallo {{2.Ansprechpartner}},
    es hat sich ein Unternehmen für eure Anfrage {{2.Anzeigen-ID}} gemeldet.
    Wir koordinieren den ersten Kontakt und melden uns in Kürze bei euch.
    EasyB2B Team

--- PFAD B (Öffentlich) ---

MODUL 4B: Gmail → Send Email
  An: {{2.E-Mail}}
  Betreff: Interessent für eure Anfrage {{2.Anzeigen-ID}} — Kontaktdaten
  Inhalt:
    Hallo {{2.Ansprechpartner}},
    folgendes Unternehmen hat Interesse an eurer Anfrage gezeigt:
    
    Firma: {{1.Firmenname}}
    Ansprechpartner: {{1.Ansprechpartner}}
    E-Mail: {{1.E-Mail}}
    Telefon: {{1.Telefon}}
    
    Sie schreiben: "{{1.Interesse-Text}}"
    Verfügbarkeit: {{1.Starttermin}}
    
    Bitte nehmt innerhalb von 5 Werktagen Kontakt auf.
    Gebt uns kurz Rückmeldung sobald ihr euch gesprochen habt.
    EasyB2B Team

--- BEIDE PFADE ---

MODUL 5: Airtable → Update Record
  Tabelle: Interessenten
  Record ID: {{1.id}}
  Felder:
    Status: Kontakt läuft
    Kontakt weitergegeben am: {{now}}

MODUL 6: Gmail → Send Email
  An: {{1.E-Mail}}           ← E-Mail des Interessenten
  Betreff: Eure Kontaktdaten wurden weitergeleitet — EasyB2B
  Inhalt:
    Hallo {{1.Ansprechpartner}},
    wir haben eure Kontaktdaten an das suchende Unternehmen weitergeleitet.
    Erwartet eine Kontaktaufnahme in den nächsten Tagen.
    EasyB2B Team
```

---

## Szenario 3 — Follow-up Timer (täglich)

```
TRIGGER: Make → Scheduled
  Zeitplan: Täglich, 08:00 Uhr
  Zeitzone: Europe/Berlin

MODUL 2: Airtable → Search Records
  Tabelle: Interessenten
  Filter: AND(
    {Status} = "Kontakt läuft",
    {Feedback Suchender} = "ausstehend"
  )
  → Gibt alle offenen Fälle zurück

MODUL 3: Make → Iterator
  Array: {{2.records}}
  → Verarbeitet jeden Datensatz einzeln

MODUL 4: Make → Set Variable
  tage = DATEDIFF({{3.Kontakt weitergegeben am}}, NOW(), "days")

ROUTER: Route nach Tage-Wert

  PFAD A: tage = 5
  MODUL 5A: Gmail → Send Email
    An: {{3.E-Mail Suchender}}   ← aus Lookup-Feld in Airtable
    Betreff: Kurze Rückmeldung zu Anfrage {{3.Anzeigen-ID}}?
    Inhalt:
      Hallo,
      wir wollten kurz nachfragen: Habt ihr bereits Kontakt mit dem Interessenten aufgenommen?
      [Ja, läuft gut] → Link zu Feedback-Formular (Tally)
      [Nein, noch nicht] → Link zu Feedback-Formular
      [Ich brauche Hilfe] → Link zu Kontaktseite
      EasyB2B

  PFAD B: tage = 10
  MODUL 5B: Gmail → Send Email
    An: {{3.E-Mail}}             ← Interessent
    Betreff: Habt ihr Kontakt erhalten? — Anfrage {{3.Anzeigen-ID}}
    Inhalt:
      Hallo {{3.Ansprechpartner}},
      wir wollten nachfragen ob ihr bereits vom suchenden Unternehmen kontaktiert wurdet.
      [Ja, wir haben gesprochen] → Feedback-Link
      [Nein, noch nicht] → Feedback-Link
      EasyB2B

  PFAD C: tage >= 14
  MODUL 5C: Airtable → Update Record
    Tabelle: Interessenten
    Record ID: {{3.id}}
    Felder:
      Status: Stalled

  MODUL 5C-2: Gmail → Send Email
    An: [deine EasyB2B E-Mail]
    Betreff: ⚠️ Stalled: {{3.Anzeigen-ID}} — Entscheidung nötig
    Inhalt:
      Der Kontakt für Anfrage {{3.Anzeigen-ID}} ist seit 14 Tagen ohne Reaktion.
      Interessent: {{3.Firmenname}} ({{3.E-Mail}})
      → Airtable: [Link zum Datensatz]
      Bitte entscheide: Spam / Suchender inaktiv / Manuell nachfassen
```

---

## Szenario 4 — Spam & Blacklist

```
TRIGGER: Airtable → Watch Records
  Tabelle: Interessenten
  Feld: Feedback
  Trigger wenn: Feedback = "Spam" ODER "Unqualifiziert"

MODUL 2: Airtable → Create Record
  Tabelle: Blacklist
  Felder:
    E-Mail: {{1.E-Mail}}
    Firmenname: {{1.Firmenname}}
    Grund: {{1.Feedback}}
    Gesperrt seit: {{now}}
    Interessenten-Ref: {{1.id}}

MODUL 3: Airtable → Update Record
  Tabelle: Interessenten
  Record ID: {{1.id}}
  Felder:
    Status: Spam

MODUL 4: Airtable → Update Record
  Tabelle: Anfragen
  Record ID: {{1.Anzeigen-Ref[].id}}
  Felder:
    Status: Aktiv    ← Anzeige wieder öffnen

MODUL 5: Gmail → Send Email
  An: {{2.E-Mail Suchender}}   ← aus Anfragen-Lookup
  Betreff: Update zu eurer Anfrage {{1.Anzeigen-ID}}
  Inhalt:
    Hallo,
    der gemeldete Interessent hat leider nicht den Anforderungen entsprochen.
    Eure Anfrage ist wieder aktiv — wir suchen weiter für euch.
    EasyB2B Team
```

---

## Tally Webhook Konfiguration

### Formular 1: Anfrage einreichen
```
Webhook URL: Make Szenario [für neue Anzeigen]
Felder die Make erwartet:
  referenz_id: [wird nicht benötigt — neue Anzeige]
  richtung, art, firmenname, standort, eigene_branche,
  gesuchte_branche, sprachen, beschreibung, ziel,
  persoenlicher_touch, must_haves, nice_to_haves,
  reifegrad, gueltig_bis, sichtbarkeit,
  ansprechpartner, email, telefon
```

### Formular 2: Interesse bekunden
```
Webhook URL: Make Szenario 1
Verstecktes Feld: referenz_id (aus URL-Parameter befüllt)
Sichtbare Felder:
  firma, name, email, telefon,
  interesse_text, starttermin, referenzen,
  datenschutz_bestaetigt (Checkbox)
```

### URL-Parameter an Tally übergeben:
```
https://tally.so/r/[FORMULAR-ID]?referenz_id=ANZ-2024-047
Tally liest ?referenz_id automatisch in verstecktes Feld
```

---

## Make Konfiguration — Wichtige Einstellungen

```
Fehlerbehandlung: Bei jedem Modul "Ignore Error" für nicht-kritische Schritte
                  Bei Airtable Create Record: "Stop processing" bei Fehler
Datenspeicherung: Make Data Store für temporäre Zwischenwerte (kein extra Tool nötig)
Operationen pro Monat (Schätzung Anfang):
  Szenario 1: ~50 Durchläufe × 7 Module = 350 Ops
  Szenario 2: ~30 Durchläufe × 6 Module = 180 Ops
  Szenario 3: 30 × ~10 offene Fälle × 4 Module = 1.200 Ops
  Szenario 4: ~10 Durchläufe × 5 Module = 50 Ops
  Gesamt: ~1.780 Ops/Monat → Make Core-Plan (2.000 Ops) reicht
```
