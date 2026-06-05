// Einmaliges Skript: aktualisiert (oder legt an) den Nordhavn-Musterfall in Neon
// mit den neuen Marktplatz-Reichinhalt-Feldern.
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const NORDHAVN_DATA = {
  anzeigenId: 'EB-2026-001',
  firmenname: 'Nordhavn Foods A/S',
  standort: 'Aalborg, Dänemark',
  website: 'https://www.nordhavn-foods.dk',
  richtung: 'dk_de',
  art: 'vertrieb',
  brancheSlug: 'lebensmittel',
  ansprechpartner: 'Lars Jensen',
  email: 'l.jensen@nordhavn-foods.dk',
  telefon: '+45 70 12 34 56',
  beschreibung: 'Wir sind ein dänischer Lebensmittelhersteller mit Schwerpunkt auf hochwertigen Fischprodukten und ausgewählten Backwarenspezialitäten. Nach erfolgreichen Aktivitäten in Dänemark möchten wir nun den deutschen Markt erschließen. Gesucht wird ein Vertriebspartner oder Handelsagent mit bestehenden Kontakten zum norddeutschen Lebensmitteleinzelhandel. Besonders interessant sind Kontakte zu Edeka Nord, Edeka Hamburg, Rewe Nord, Famila und regionalen Großhändlern. Wir suchen keinen reinen Leadgenerator, sondern einen Partner, der langfristig den Aufbau des Marktes begleiten möchte.',
  ziel: 'Vertriebspartner für Fisch- und Backwarenspezialitäten in Norddeutschland gesucht',
  persoenlicherTouch: 'Wir glauben an Partnerschaften auf Augenhöhe und an die handwerkliche Qualität unserer Produkte. Wer dieselben Werte teilt, ist herzlich willkommen.',
  mustHaves: 'Bestehende Einzelhandels-Kontakte, eigene Kühlkette, mindestens 5 Jahre Branchenerfahrung.',
  niceToHaves: 'Erfahrung mit skandinavischen Marken, persönlicher Bezug zum Food-Bereich.',
  reifegrad: 'bereit',
  gueltigBis: new Date('2027-03-31'),
  sichtbarkeit: 'oeffentlich',
  status: 'aktiv',
  motivation: 'Nach erfolgreichen Aktivitäten in Dänemark möchten wir innerhalb der nächsten 12 Monate erste Vertriebspartnerschaften in Norddeutschland aufbauen. Die Marke ist im Heimatmarkt etabliert — jetzt ist der richtige Moment, die nächste Wachstumsphase zu starten.',
  ziele: [
    '2 bis 3 aktive Vertriebspartner in Norddeutschland',
    'Erste Listungen im LEH (Edeka Nord, Edeka Hamburg, Rewe Nord, Famila)',
    'Pilotregion Norddeutschland in den ersten 6 Monaten',
    'Langfristige Zusammenarbeit statt Lead-Verkauf',
  ],
  partnerErwartungen: [
    'Bestehende Kontakte zum Lebensmitteleinzelhandel',
    'Mindestens 5 Jahre Erfahrung im Food-Vertrieb',
    'Bereitschaft zu langfristiger partnerschaftlicher Zusammenarbeit',
    'Regionale Marktkenntnis (Norddeutschland, idealerweise Hamburg/SH/NI)',
    'Persönliche Treffen und direkte Kommunikation möglich',
  ],
  zielgruppe: [
    'Handelsagenten Food',
    'Food-Vertriebspartner',
    'LEH-Spezialisten',
    'Großhandelskontakte',
    'Import- und Distributionspartner',
  ],
  vorbereitung: {
    produktunterlagen: true,
    preislisten: false,
    zertifikate: true,
    produktproben: true,
    marketingmaterial: true,
    referenzen: true,
    webseiteDeutsch: false,
    notiz: 'Deutsche Preislisten in Vorbereitung (verfügbar bis Q4 2026). Deutsche Website in Planung.',
  },
  projektStartDatum: new Date('2026-09-01'),
  projektEndDatum: new Date('2027-03-31'),
  erstgespraechFristDatum: new Date('2026-07-15'),
};

async function run() {
  const client = await pool.connect();
  try {
    // Branche „Lebensmittel" finden
    let { rows: branchen } = await client.query(`SELECT id FROM "Branche" WHERE slug = $1 LIMIT 1`, ['lebensmittel']);
    if (branchen.length === 0) {
      // ggf. anderen Slug versuchen
      ({ rows: branchen } = await client.query(`SELECT id FROM "Branche" WHERE name ILIKE 'lebensmittel%' LIMIT 1`));
    }
    if (branchen.length === 0) {
      console.error('Branche „Lebensmittel" nicht gefunden. Bitte /api/seed aufrufen.');
      process.exit(1);
    }
    const brancheId = branchen[0].id;

    // Prüfen ob Eintrag schon existiert
    const { rows: bestand } = await client.query(`SELECT id FROM "Anfrage" WHERE "anzeigenId" = $1`, [NORDHAVN_DATA.anzeigenId]);

    if (bestand.length > 0) {
      // UPDATE
      const id = bestand[0].id;
      console.log(`Eintrag ${NORDHAVN_DATA.anzeigenId} existiert (id=${id}) — wird aktualisiert.`);
      await client.query(`
        UPDATE "Anfrage" SET
          "firmenname" = $1, "standort" = $2, "website" = $3,
          "richtung" = $4, "art" = $5, "brancheId" = $6,
          "ansprechpartner" = $7, "email" = $8, "telefon" = $9,
          "beschreibung" = $10, "ziel" = $11, "persönlicherTouch" = $12,
          "mustHaves" = $13, "niceToHaves" = $14,
          "reifegrad" = $15, "gueltigBis" = $16, "sichtbarkeit" = $17, "status" = $18,
          "motivation" = $19, "ziele" = $20, "partnerErwartungen" = $21,
          "zielgruppe" = $22, "vorbereitung" = $23,
          "projektStartDatum" = $24, "projektEndDatum" = $25, "erstgespraechFristDatum" = $26,
          "updatedAt" = NOW()
        WHERE id = $27
      `, [
        NORDHAVN_DATA.firmenname, NORDHAVN_DATA.standort, NORDHAVN_DATA.website,
        NORDHAVN_DATA.richtung, NORDHAVN_DATA.art, brancheId,
        NORDHAVN_DATA.ansprechpartner, NORDHAVN_DATA.email, NORDHAVN_DATA.telefon,
        NORDHAVN_DATA.beschreibung, NORDHAVN_DATA.ziel, NORDHAVN_DATA.persoenlicherTouch,
        NORDHAVN_DATA.mustHaves, NORDHAVN_DATA.niceToHaves,
        NORDHAVN_DATA.reifegrad, NORDHAVN_DATA.gueltigBis, NORDHAVN_DATA.sichtbarkeit, NORDHAVN_DATA.status,
        NORDHAVN_DATA.motivation, NORDHAVN_DATA.ziele, NORDHAVN_DATA.partnerErwartungen,
        NORDHAVN_DATA.zielgruppe, NORDHAVN_DATA.vorbereitung,
        NORDHAVN_DATA.projektStartDatum, NORDHAVN_DATA.projektEndDatum, NORDHAVN_DATA.erstgespraechFristDatum,
        id,
      ]);
      console.log('✓ aktualisiert');
    } else {
      // INSERT
      console.log(`Eintrag ${NORDHAVN_DATA.anzeigenId} existiert nicht — wird neu angelegt.`);
      await client.query(`
        INSERT INTO "Anfrage" (
          "id", "anzeigenId", "firmenname", "standort", "website",
          "richtung", "art", "brancheId",
          "ansprechpartner", "email", "telefon",
          "beschreibung", "ziel", "persönlicherTouch",
          "mustHaves", "niceToHaves",
          "reifegrad", "gueltigBis", "sichtbarkeit", "status",
          "motivation", "ziele", "partnerErwartungen", "zielgruppe", "vorbereitung",
          "projektStartDatum", "projektEndDatum", "erstgespraechFristDatum",
          "kiStrukturiert", "reviewOk", "createdAt", "updatedAt"
        ) VALUES (
          gen_random_uuid()::text, $1, $2, $3, $4,
          $5::"Richtung", $6::"AnfrageArt", $7,
          $8, $9, $10,
          $11, $12, $13,
          $14, $15,
          $16::"Reifegrad", $17, $18::"Sichtbarkeit", $19::"AnfrageStatus",
          $20, $21, $22, $23, $24,
          $25, $26, $27,
          false, true, NOW(), NOW()
        )
      `, [
        NORDHAVN_DATA.anzeigenId, NORDHAVN_DATA.firmenname, NORDHAVN_DATA.standort, NORDHAVN_DATA.website,
        NORDHAVN_DATA.richtung, NORDHAVN_DATA.art, brancheId,
        NORDHAVN_DATA.ansprechpartner, NORDHAVN_DATA.email, NORDHAVN_DATA.telefon,
        NORDHAVN_DATA.beschreibung, NORDHAVN_DATA.ziel, NORDHAVN_DATA.persoenlicherTouch,
        NORDHAVN_DATA.mustHaves, NORDHAVN_DATA.niceToHaves,
        NORDHAVN_DATA.reifegrad, NORDHAVN_DATA.gueltigBis, NORDHAVN_DATA.sichtbarkeit, NORDHAVN_DATA.status,
        NORDHAVN_DATA.motivation, NORDHAVN_DATA.ziele, NORDHAVN_DATA.partnerErwartungen,
        NORDHAVN_DATA.zielgruppe, JSON.stringify(NORDHAVN_DATA.vorbereitung),
        NORDHAVN_DATA.projektStartDatum, NORDHAVN_DATA.projektEndDatum, NORDHAVN_DATA.erstgespraechFristDatum,
      ]);
      console.log('✓ angelegt');
    }

    // Anzeigen
    const { rows: pruef } = await client.query(`SELECT id, "anzeigenId", "firmenname", "motivation" IS NOT NULL AS hat_motivation, array_length(ziele, 1) AS anzahl_ziele FROM "Anfrage" WHERE "anzeigenId" = $1`, [NORDHAVN_DATA.anzeigenId]);
    console.log('Prüfung:', pruef[0]);
  } finally {
    client.release();
    await pool.end();
  }
}

run().catch(err => { console.error(err); process.exit(1); });
