# EasyB2B — Airtable Datenbankstruktur

## Tabelle 1: Anfragen (Anzeigen)

| Feldname | Typ | Optionen / Beschreibung |
|---|---|---|
| Anzeigen-ID | Formula | `"ANZ-" & YEAR(Erstellt) & "-" & TEXT(RECORD_NUMBER(),"000")` |
| Erstellt | Created time | automatisch |
| Richtung | Single Select | DE→DK / DK→DE |
| Art | Single Select | Lieferant suchen / Kunden gewinnen / Kooperation / Vertrieb |
| Firmenname | Text | nur intern sichtbar bei anonymen Anzeigen |
| Standort | Text | Stadt, Land |
| Website | URL | optional |
| Eigene Branche | Single Select | Logistik / Maschinenbau / Lebensmittel / IT / Bau / Andere |
| Gesuchte Branche | Single Select | gleiche Optionen |
| Sprachen | Multiple Select | Deutsch / Dänisch / Englisch |
| Was wird gesucht | Long Text | Kern der Anfrage |
| Was soll entstehen | Text | Ziel der Zusammenarbeit |
| Persönlicher Touch | Long Text | Pflichtfeld — bleibt unverändert |
| Must-haves | Long Text | optional |
| Nice-to-haves | Long Text | optional |
| Reifegrad | Single Select | Idee / Konzept / Bereit / Sofort |
| Gültig bis | Date | max. 3 Monate ab Einreichung |
| Sichtbarkeit | Single Select | Intern / Anonym / Öffentlich |
| Status | Single Select | Eingehend / Aktiv / Interessent vorhanden / Mehrere Interessenten / Kontakt läuft / Vermittelt / Stalled / Pausiert / Archiviert |
| Kontakt-Timer | Date | Datum der letzten Kontaktweitergabe |
| Ansprechpartner | Text | |
| E-Mail | Email | |
| Telefon | Phone | optional |
| Upload | Attachment | Bilder / PDFs |
| Interessenten | Linked Record | → Tabelle 2: Interessenten |
| Anzahl Interessenten | Count | automatisch aus Linked Records |
| Interner Review | Checkbox | muss gesetzt sein bevor Anzeige aktiviert wird |
| Review-Notiz | Long Text | interne Notizen EasyB2B |

### Status-Übergänge:
```
Eingehend → (Review OK) → Aktiv
Aktiv → (Interessent eingegangen) → Interessent vorhanden
Interessent vorhanden → (Freigabe gegeben) → Kontakt läuft
Kontakt läuft → (Tag 14, keine Reaktion) → Stalled
Stalled → (manuell) → Vermittelt ODER Aktiv (wenn Interessent Spam war)
Aktiv → (Gültig-bis überschritten) → Archiviert
```

---

## Tabelle 2: Interessenten

| Feldname | Typ | Optionen / Beschreibung |
|---|---|---|
| Eingegangen | Created time | automatisch |
| Anzeigen-Ref | Linked Record | → Tabelle 1: Anfragen (verknüpft per Anzeigen-ID) |
| Anzeigen-ID | Lookup | aus Anzeigen-Ref |
| Firmenname | Text | |
| Ansprechpartner | Text | |
| E-Mail | Email | |
| Telefon | Phone | optional |
| Interesse-Text | Long Text | Pflichtfeld: "Warum passt ihr zu dieser Anfrage?" |
| Starttermin | Single Select | sofort / 2–4 Wochen / auf Anfrage |
| Referenzen | Long Text | optional |
| Status | Single Select | Neu / Freigegeben / Kontakt läuft / Feedback ausstehend / Erfolgreich / Spam / Unqualifiziert / Stalled |
| Freigabe | Checkbox | EasyB2B setzt Haken → löst Szenario 2 in Make aus |
| Kontakt weitergegeben am | Date | wird gesetzt wenn Freigabe = true |
| Feedback Suchender | Single Select | ausstehend / Kontakt hergestellt / kein Kontakt / nicht passend |
| Feedback Interessent | Single Select | ausstehend / Kontakt erhalten / kein Kontakt / Erfolg |
| Tage seit Kontakt | Formula | `DATETIME_DIFF(TODAY(), {Kontakt weitergegeben am}, 'days')` |
| Interne Notiz | Long Text | |

### Trigger für Make:
- Freigabe = true → Make Szenario 2 startet
- Status = "Spam" → Make Szenario 4 startet
- Tage seit Kontakt = 5, 10, 14 → Make Szenario 3 greift an

---

## Tabelle 3: Blacklist

| Feldname | Typ | Beschreibung |
|---|---|---|
| E-Mail | Email | gesperrte E-Mail-Adresse |
| Firmenname | Text | optional, zur Information |
| Grund | Single Select | Kein Kontakt / Spam / Unernst / Falsche Angaben |
| Gesperrt seit | Date | automatisch |
| Gesperrt von | Text | "EasyB2B" oder Name der meldenden Person |
| Interessenten-Ref | Linked Record | → Tabelle 2 (Ursprungs-Eintrag) |
| Notiz | Long Text | optional |

---

## Airtable Views (empfohlen)

### Tabelle 1 — Anfragen:
- **Alle Anfragen** — ungefiltert, nach Datum sortiert
- **Review nötig** — Filter: Interner Review = false
- **Aktive Anzeigen** — Filter: Status = Aktiv
- **Kontakt läuft** — Filter: Status = Kontakt läuft
- **Stalled** — Filter: Status = Stalled
- **Archiv** — Filter: Status = Archiviert ODER Vermittelt

### Tabelle 2 — Interessenten:
- **Neu (warten auf Freigabe)** — Filter: Status = Neu
- **Kontakt läuft** — Filter: Status = Kontakt läuft
- **Follow-up fällig** — Filter: Tage seit Kontakt ≥ 5 AND Status = Kontakt läuft
- **Spam / Gesperrt** — Filter: Status = Spam

---

## Airtable Interface (internes Dashboard)

Empfehlung: Airtable Interface Builder nutzen für:
- **Inbox-Ansicht:** Neue Interessenten die auf Freigabe warten
- **Stalled-Alarm:** Alle Fälle über 14 Tage ohne Reaktion  
- **Statistik-Block:** Aktive Anzeigen / Matches gesamt / Erfolgsquote

---

## API-Zugriff für Homepage

Die Homepage kann Airtable-Daten über die Airtable API abrufen:
```
Base URL: https://api.airtable.com/v0/{BASE_ID}/Anfragen
Filter: ?filterByFormula=AND(Status="Aktiv", Sichtbarkeit!="Intern")
Sort: ?sort[0][field]=Erstellt&sort[0][direction]=desc
```

Wichtig: API-Key nur serverseitig verwenden (nie im Frontend-Code).
Bei statischer Homepage: Daten via Make in JSON-Datei exportieren und auf Server ablegen.
