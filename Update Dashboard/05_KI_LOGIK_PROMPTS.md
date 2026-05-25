# EasyB2B — KI-Logik & Prompts (Claude API)

## API-Konfiguration
```typescript
// lib/ai.ts
import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const MODEL = 'claude-sonnet-4-20250514';
```

---

## KI-Funktion 1: Anfrage strukturieren

Wird aufgerufen wenn Betreiber einen Freitext eingibt.

### Aufruf
```typescript
async function strukturiereAnfrage(freitext: string): Promise<AnfrageStruktur> {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `Du bist das Backend-System von EasyB2B, einer B2B-Matchmaking-Plattform für Unternehmen zwischen Deutschland und Dänemark.

Der Betreiber hat folgende Anfrage eingegeben:
"${freitext}"

Extrahiere alle Informationen und gib sie als JSON zurück.
Antworte NUR mit validem JSON, kein erklärender Text davor oder danach.

Schema:
{
  "richtung": "de_dk" | "dk_de",
  "art": "lieferant" | "kunden" | "kooperation" | "vertrieb",
  "branche": string,
  "firmenname": string | null,
  "standort": string,
  "beschreibung": string,
  "ziel": string,
  "mustHaves": string[],
  "niceToHaves": string[],
  "reifegrad": "idee" | "konzept" | "bereit" | "sofort",
  "sprachen": ("deutsch" | "daenisch" | "englisch")[],
  "anzeigentext": string,
  "konfidenz": number
}

Regeln:
- anzeigentext: professioneller, klarer Anzeigentext für die Homepage (2–3 Sätze)
- konfidenz: 0–1, wie sicher du dir bei der Extraktion bist
- Falls eine Information fehlt, setze null`
    }]
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  return JSON.parse(text) as AnfrageStruktur;
}
```

---

## KI-Funktion 2: Frageformular generieren (3 Schichten)

Wird aufgerufen wenn eine Anfrage aktiviert wird.

### Aufruf
```typescript
async function generiereFormular(
  anfrage: Anfrage,
  branchenWissen: BranchenWissen[]
): Promise<GeneriertesFrage[]> {

  const branchenWissenText = branchenWissen
    .map(w => `- ${w.frage} (${w.koKriterium ? 'K.O.' : 'optional'})`)
    .join('\n');

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `Du bist das Formular-Generierungs-System von EasyB2B.

ANZEIGE:
Branche: ${anfrage.branche.name}
Korridor: ${anfrage.richtung}
Beschreibung: ${anfrage.beschreibung}
Must-haves: ${anfrage.mustHaves || 'keine expliziten Angaben'}
Gesuchte Branche: ${anfrage.gesuchteBranche || 'gleiche Branche'}

BEKANNTE BRANCHEN-WISSENSBASIS:
${branchenWissenText || 'Noch keine Einträge für diese Branche'}

Erstelle ein Interessenten-Formular mit DREI Schichten:

SCHICHT 1 (quelle: "anzeige"):
Übersetze jede explizite Anforderung aus den Must-haves direkt in eine Frage.
Markiere K.O.-Kriterien wenn eindeutig (z.B. Mindestanzahl LKWs).

SCHICHT 2 (quelle: "ki_schicht2"):
Ergänze 3–7 branchenspezifische Fragen die für ${anfrage.branche.name} im Korridor ${anfrage.richtung} typisch und relevant sind — auch wenn sie NICHT in der Anzeige erwähnt wurden.
Nutze dein Branchen-Wissen. Wenn Einträge in der Wissensbasis vorhanden sind, berücksichtige sie.
Markiere diese als kiVorschlag: true (müssen vom Betreiber bestätigt werden).

STRUKTURCHECK:
Beschreibe in 1–2 Sätzen welche Art von Unternehmen NICHT auf diese Anzeige antworten sollten.

Antworte NUR mit validem JSON:
{
  "fragen": [
    {
      "reihenfolge": number,
      "text": string,
      "typ": "zahl" | "text_kurz" | "text_lang" | "ja_nein" | "auswahl_single" | "auswahl_multi" | "skala",
      "pflicht": boolean,
      "koKriterium": boolean,
      "koWert": string | null,
      "optionen": string[],
      "quelle": "anzeige" | "ki_schicht2",
      "kiVorschlag": boolean
    }
  ],
  "strukturcheck": string,
  "neueWissensbasisVorschlaege": string[]
}`
    }]
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  const result = JSON.parse(text);
  return result;
}
```

---

## KI-Funktion 3: Interessent bewerten

Wird aufgerufen sobald ein Interessent das Formular absendet.

### Aufruf
```typescript
async function bewerteInteressent(
  anfrage: Anfrage,
  fragen: Frage[],
  antworten: { frageId: string; wert: string }[]
): Promise<MatchBewertung> {

  // Fragen und Antworten zusammenführen
  const fragenMitAntworten = fragen.map(f => ({
    frage: f.text,
    typ: f.typ,
    quelle: f.quelle,
    pflicht: f.pflicht,
    koKriterium: f.koKriterium,
    koWert: f.koWert,
    antwort: antworten.find(a => a.frageId === f.id)?.wert || 'Keine Antwort'
  }));

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `Du bist das Matching-System von EasyB2B.

ANFRAGE (was gesucht wird):
Branche: ${anfrage.branche.name}
Korridor: ${anfrage.richtung}
Beschreibung: ${anfrage.beschreibung}
Must-haves: ${anfrage.mustHaves}

INTERESSENTEN-ANTWORTEN:
${fragenMitAntworten.map(f =>
  `Frage: ${f.frage}
   Quelle: ${f.quelle} | K.O.: ${f.koKriterium} ${f.koWert ? '(Wert: ' + f.koWert + ')' : ''}
   Antwort: ${f.antwort}`
).join('\n\n')}

Bewerte den Match. Antworte NUR mit validem JSON:
{
  "matchScore": number (0-100),
  "koKriterienErfüllt": boolean,
  "kriterien": [
    {
      "label": string,
      "erfüllt": boolean,
      "wert": string,
      "quelle": "anzeige" | "ki_schicht2",
      "gewichtung": "pflicht" | "ko" | "optional",
      "kommentar": string | null
    }
  ],
  "empfehlung": "freigeben" | "ablehnen" | "manuell_prüfen",
  "begründung": string (2-3 Sätze, sachlich und hilfreich),
  "stärken": string[],
  "schwächen": string[]
}

Regeln:
- Score 0: K.O.-Kriterium verletzt
- Score 80-100: alle Pflichtfelder erfüllt, gute Zusatzqualifikationen
- empfehlung "manuell_prüfen": wenn Score 50-79 oder Unklarheiten
- begründung: für den Betreiber, nicht für den Interessenten
- Sei fair aber präzise — kein "könnte eventuell passen"`
    }]
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  return JSON.parse(text) as MatchBewertung;
}
```

---

## KI-Funktion 4: E-Mail-Texte generieren

```typescript
async function generiereEmail(
  typ: 'match_suchender' | 'match_interessent' | 'stalled' | 'ablauf',
  kontext: EmailKontext
): Promise<{ betreff: string; text: string }> {

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 800,
    messages: [{
      role: 'user',
      content: `Schreibe eine professionelle, kurze E-Mail für EasyB2B.

Typ: ${typ}
Kontext: ${JSON.stringify(kontext)}
Sprache: ${kontext.sprache || 'deutsch'}
Ton: professionell, freundlich, konkret — kein Marketing-Sprech

Antworte NUR mit JSON:
{ "betreff": string, "text": string }

Der Text darf maximal 150 Wörter haben. Keine Floskeln.`
    }]
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';
  return JSON.parse(text);
}
```

---

## API-Route Struktur (Next.js)

```
app/api/
  ki/
    strukturiere-anfrage/route.ts    → POST: Freitext → strukturierte Anfrage
    generiere-formular/route.ts      → POST: anfrageId → Formular-Fragen
    bewerte-interessent/route.ts     → POST: interessentId → Match-Bewertung
    generiere-email/route.ts         → POST: typ + kontext → E-Mail-Text
```

### Wichtig für alle KI-Routes:
```typescript
// Immer: Auth prüfen (nur Dashboard darf KI aufrufen)
// Immer: Try-Catch um JSON.parse
// Immer: Loading-State im Frontend via SWR oder React Query
// Immer: Ergebnis in DB speichern (nie nur im Frontend halten)
// Nie: KI-Response direkt ohne Parsing an Frontend weitergeben
```

---

## Fehlerbehandlung

```typescript
try {
  const result = JSON.parse(kiResponse);
  // validieren ob alle Pflichtfelder da sind
  if (!result.matchScore || !result.empfehlung) {
    throw new Error('Unvollständige KI-Antwort');
  }
  return result;
} catch (err) {
  // Fallback: manuelle Prüfung anfordern
  return {
    matchScore: null,
    empfehlung: 'manuell_prüfen',
    begründung: 'KI-Bewertung nicht verfügbar — bitte manuell prüfen.',
    fehler: true
  };
}
```
