# EasyB2B — Seitenstruktur & Routing

## Seiten-Übersicht

```
/                          → Landing Page
/marktplatz                → Anzeigen-Übersicht (Marktplatz)
/anzeige/[id]              → Einzelne Anzeigen-Detailseite
/anfrage-einreichen        → Erklärungs-Seite + Link zu Tally-Formular
/interesse/[id]            → Weiterleitungs-Seite zu Tally mit Referenz-ID
/so-funktioniert-es        → Erklärungsseite für neue Nutzer
/kontakt                   → Kontaktseite EasyB2B
```

---

## 1. Landing Page ( / )

### Sections in Reihenfolge:
1. **Navigation** — Logo | Marktplatz | So funktioniert's | Anfrage einreichen (CTA-Button)
2. **Hero** — Headline + Subline + 2 CTAs + Flaggen DE/DK
3. **Stats-Bar** — z.B. "47 aktive Anfragen | 3 Länder | Ø 8 Tage bis Match"
4. **Wie es funktioniert** — 3 Schritte: Anfrage einreichen → Matching → Kontakt
5. **Aktuelle Anzeigen** — 3–4 Preview-Cards aus dem Marktplatz
6. **Vertrauen / Social Proof** — Kurze Aussagen, Branchen-Icons
7. **CTA-Banner** — "Jetzt Anfrage einreichen"
8. **Footer** — Links, Sprache, Impressum, DSGVO

### Hero Text (Vorschlag):
```
Headline:    Ihr Partner zwischen Deutschland und Dänemark
Subline:     Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung.
CTA 1:       Anfrage einreichen →
CTA 2:       Marktplatz ansehen
```

---

## 2. Marktplatz ( /marktplatz )

### Layout:
- Filter-Leiste oben: Richtung (DE→DK / DK→DE), Branche, Reifegrad, Sprache
- Anzeigen-Grid: 2–3 Spalten auf Desktop, 1 auf Mobile
- Jede Card zeigt: Anzeigen-ID, Richtung, Branche, Kurzbeschreibung, Reifegrad-Badge, Gültig-bis, "Interesse bekunden"-Button

### Anzeigen-Card Struktur:
```
┌─────────────────────────────────┐
│ ANZ-2024-047          DE → DK   │
│ Branche: Logistik               │
│ ─────────────────────────────── │
│ Wir suchen einen Transportpart- │
│ ner für regelmäßige Fahrten...  │
│ ─────────────────────────────── │
│ 🟡 Konzept    Gültig bis 20.04  │
│ [Interesse bekunden]            │
└─────────────────────────────────┘
```

### Filter-Optionen:
- Richtung: Alle | DE→DK | DK→DE
- Branche: Alle | Logistik | Maschinenbau | Lebensmittel | IT | Bau | Andere
- Reifegrad: Alle | Idee | Konzept | Bereit | Sofort
- Sprache: Alle | Deutsch | Dänisch | Englisch

---

## 3. Anzeigen-Detailseite ( /anzeige/[id] )

### Aufbau:
```
← Zurück zum Marktplatz

ANZ-2024-047                    [Badge: Konzept]
DE → DK | Logistik | Deutsch + Englisch
Gültig bis: 20. April 2024

── Was wird gesucht? ──────────────────────────────
[Vollständige Beschreibung]

── Was soll entstehen? ────────────────────────────
[Ziel der Zusammenarbeit]

── Anforderungen ──────────────────────────────────
Must-haves: [Liste]

── Über das Unternehmen ───────────────────────────
[Persönlicher Touch — Pflichtfeld aus Formular]

── Standort ───────────────────────────────────────
[Stadt, Land] — keine genaue Adresse

─────────────────────────────────────────────────
[Button: Interesse bekunden →]
Leitet zu: /interesse/ANZ-2024-047
─────────────────────────────────────────────────
```

### Wichtig:
- Bei Sichtbarkeit "anonym": Kein Firmenname, kein direkter Kontakt
- Bei Sichtbarkeit "öffentlich": Firmenname + ggf. Website sichtbar
- Anzeigen-ID immer in der URL und sichtbar auf der Seite

---

## 4. Anfrage einreichen ( /anfrage-einreichen )

### Zweck:
Erklärungsseite BEVOR das Tally-Formular öffnet.
Baut Vertrauen auf, erklärt den Prozess, setzt Erwartungen.

### Inhalt:
1. Was passiert nach dem Einreichen? (3 Schritte)
2. Was macht eine gute Anfrage aus? (3 Tipps)
3. Sichtbarkeits-Optionen kurz erklärt
4. [Button: Jetzt Formular öffnen →] → öffnet Tally in neuem Tab

---

## 5. Interesse bekunden ( /interesse/[id] )

### Funktion:
Einfache Weiterleitungs-Seite.
Zeigt kurz: "Ihr bekundet Interesse an Anfrage ANZ-2024-047"
Dann: [Button: Zum Formular →]
→ Tally-URL mit vorausgefüllter Referenz-ID:
  https://tally.so/r/[formular-id]?referenz=ANZ-2024-047

### Wichtig:
Die Referenz-ID muss als URL-Parameter an Tally übergeben werden.
Tally speichert sie als verstecktes Feld automatisch.

---

## 6. So funktioniert es ( /so-funktioniert-es )

### Inhalt:
- Für Suchende: 4 Schritte von Anfrage bis Match
- Für Interessenten: 4 Schritte von Entdeckung bis Kontakt
- FAQ: Wer sieht meine Daten? Wie lange ist eine Anfrage gültig? Was kostet es?
- DSGVO-Hinweis

---

## Navigation

### Desktop:
```
[Logo EasyB2B]    Marktplatz | So funktioniert's | Kontakt    [Anfrage einreichen →]
```

### Mobile:
Hamburger-Menü, CTA-Button immer sichtbar am unteren Rand

---

## URL-Parameter System (wichtig für Make-Integration)

Jede Anzeigen-Detailseite übergibt beim Klick auf "Interesse bekunden" die ID:
```
/interesse/ANZ-2024-047
→ Tally: https://tally.so/r/xyz?referenz=ANZ-2024-047&titel=Logistikpartner+DE-DK
```

Make liest `referenz` aus Tally und verknüpft automatisch mit der richtigen Anfrage in Airtable.
