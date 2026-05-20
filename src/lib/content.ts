// ─────────────────────────────────────────────
// EASYB2B – Alle Inhalte zentral
// B2B-Matchmaking Plattform für DE ↔ DK
// ─────────────────────────────────────────────

export const SITE = {
  name: 'EasyB2B',
  tagline: 'Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung.',
  kernsatz: 'Wir verbinden konkrete Anfragen mit qualifizierten Unternehmen – persönlich geprüft, nicht automatisiert.',
  email: 'anfragen@easyb2b.de',
  phone: '+49 40 123456',
  address: 'Grindelberg 20, Hamburg, 20144 Deutschland',
}

// ── PROZESS FÜR SUCHENDE (4 Schritte) ──
export const PROZESS_SUCHENDE = [
  {
    nr: 1,
    icon: '✏️',
    title: 'Anfrage einreichen',
    desc: 'Du beschreibst konkret was du suchst und wer du bist. ~10 Minuten.',
  },
  {
    nr: 2,
    icon: '🔍',
    title: 'Wir prüfen',
    desc: 'Persönliche Prüfung, keine Automation. Dann wird deine Anfrage aktiv.',
  },
  {
    nr: 3,
    icon: '📬',
    title: 'Interessenten melden sich',
    desc: 'Unternehmen finden deine Anfrage im Marktplatz und bekunden Interesse.',
  },
  {
    nr: 4,
    icon: '🤝',
    title: 'Wir stellen vor',
    desc: 'Du bekommst qualifizierte Interessenten. Der Kontakt ist dein.',
  },
]

// ── PROZESS FÜR INTERESSENTEN (4 Schritte) ──
export const PROZESS_INTERESSENTEN = [
  {
    nr: 1,
    icon: '🔎',
    title: 'Anfragen entdecken',
    desc: 'Schau im Marktplatz nach Anfragen die zu dir passen.',
  },
  {
    nr: 2,
    icon: '💬',
    title: 'Interesse bekunden',
    desc: 'Erzähl kurz warum ihr passt. Und wie du zu arbeiten bereit bist.',
  },
  {
    nr: 3,
    icon: '✅',
    title: 'Wir prüfen dich',
    desc: 'Persönliche Prüfung. Dann leiten wir deine Daten weiter.',
  },
  {
    nr: 4,
    icon: '📞',
    title: 'Direkter Kontakt',
    desc: 'Das suchende Unternehmen schreibt dir. Der Kontakt ist bei euch.',
  },
]

// ── HÄUFIG GESTELLTE FRAGEN ──
export const FAQ = [
  {
    frage: 'Wer sieht meine Daten?',
    antwort: 'Das entscheidest du. Bei anonymen Anfragen sehen Interessenten nur die Branche und Beschreibung – nicht deine Firma. Bei öffentlichen Anfragen sehen sie deinen Namen und Website.',
  },
  {
    frage: 'Wie lange ist eine Anfrage gültig?',
    antwort: 'Max. 3 Monate. Du kannst die Gültigkeit jederzeit verlängern. Abgelaufene Anfragen archivieren wir automatisch.',
  },
  {
    frage: 'Was kostet es?',
    antwort: 'EasyB2B ist kostenlos. Wir verdienen mit langfristigen Partnerschaften zwischen den Unternehmen.',
  },
  {
    frage: 'Wie funktioniert die Vermittlung?',
    antwort: 'Jede Anfrage und jeder Interessent wird persönlich geprüft. Wir geben nur echte Matches weiter – keine Spam, keine Automatik.',
  },
  {
    frage: 'Kann ich mehrere Anfragen stellen?',
    antwort: 'Ja. Je konkreter die Anfrage, desto bessere Matches findest du.',
  },
  {
    frage: 'Wie lange dauert es bis zum Match?',
    antwort: 'Im Durchschnitt 10-14 Tage. Manchmal schneller wenn deine Anfrage sehr konkret ist.',
  },
]

// ── STATS ──
export const STATS = [
  { label: 'Aktive Anfragen', value: '240+' },
  { label: 'Erfolgreiche Matches', value: '47' },
  { label: 'Ø Tage zum Match', value: '12' },
  { label: 'Länder', value: 'DE ↔ DK' },
]

// ── BRANCHEN FÜR FILTER ──
export const BRANCHEN = [
  'Logistik',
  'Maschinenbau',
  'Lebensmittel',
  'IT / Software',
  'Bau & Infrastruktur',
  'Andere',
]

// ── REIFEGRADE ──
export const REIFEGRAD_OPTIONS = [
  { label: 'Idee', value: 'Idee', color: '#94a3b8' },
  { label: 'Konzept', value: 'Konzept', color: '#f59e0b' },
  { label: 'Bereit', value: 'Bereit', color: '#3b82f6' },
  { label: 'Sofort', value: 'Sofort', color: '#10b981' },
]

// ── CHARAKTERFRAGEN (wird für Anfrage-Formular genutzt) ──
export const CHARAKTERFRAGEN = [
  {
    nr: 1,
    thema: 'Verlässlichkeit',
    frage: 'Dein Partner sagt zwei Stunden vor einem gemeinsamen Kundentermin ab. Was machst du?',
  },
  {
    nr: 2,
    thema: 'Kommunikation',
    frage: 'Eine Zusammenarbeit läuft nicht wie erwartet. Wann sprichst du das an – und wie?',
  },
  {
    nr: 3,
    thema: 'Haltung',
    frage: 'Was sollte ein zukünftiger Partner über dich wissen – bevor ihr anfangt?',
  },
]

// ── DEMO-ANFRAGEN / GESUCHE ──
// Struktur orientiert sich am Airtable-Schema aus der Dokumentation
export const DEMO_ANFRAGEN = [
  {
    id: 'ANZ-2024-001',
    richtung: 'DE→DK',
    art: 'Lieferant suchen',
    branche: 'Logistik',
    beschreibung: 'Wir produzieren Präzisionsteile für die Windkraftbranche und suchen einen dänischen Logistikpartner für regelmäßige Transporte zwischen Kiel und Esbjerg – ca. 3x wöchentlich.',
    ziel: 'Etablierung einer stabilen Logistik-Partnerschaft mit wöchentlichen Abholungen',
    mussHaves: ['min. 10 Jahre Transporterfahrung', 'zuverlässig', 'Versicherung vorhanden'],
    niceToHaves: ['Erfahrung mit Windkraft-Komponenten', 'Lagerfläche in Dänemark'],
    persoenlichTouched: 'Wir sind ein mittelständisches Familienunternehmen aus Schleswig-Holstein. Zuverlässigkeit ist unsere Stärke.',
    reifegrad: 'Konzept',
    sprachen: ['Deutsch', 'Englisch'],
    standort: 'Kiel, Deutschland',
    gueltigBis: '2024-08-15',
    sichtbarkeit: 'Anonym',
    status: 'Aktiv',
    ansprechpartner: 'Thomas Müller',
    email: 'thomas@example.de',
    filter: ['de-dk', 'logistik'],
  },
  {
    id: 'ANZ-2024-002',
    richtung: 'DK→DE',
    art: 'Kunden gewinnen',
    branche: 'Lebensmittel',
    beschreibung: 'Dänische Bio-Molkerei sucht Distributionspartner für den deutschen Markt. Fokus auf Naturkost-Fachhandel und Bio-Supermärkte. Jahresvolumen ca. 500 Tonnen.',
    ziel: 'Eintritt in deutschen Bio-Markt über etablierte Großhändler',
    mussHaves: ['Erfahrung im Lebensmittel-Großhandel', 'Beziehungen zu Bio-Fachhandel', 'Kühllogistik vorhanden'],
    niceToHaves: ['bestehendes Bio-Netzwerk', 'Erfahrung mit dänischen Produkten'],
    persoenlichTouched: 'Seit 40 Jahren Bio-Tradition in der Familie. Qualität ist uns wichtiger als Menge.',
    reifegrad: 'Bereit',
    sprachen: ['Dänisch', 'Deutsch', 'Englisch'],
    standort: 'Odense, Dänemark',
    gueltigBis: '2024-09-01',
    sichtbarkeit: 'Öffentlich',
    status: 'Aktiv',
    ansprechpartner: 'Lars Jensen',
    email: 'lars@example.dk',
    filter: ['dk-de', 'food'],
  },
  {
    id: 'ANZ-2024-003',
    richtung: 'DE→DK',
    art: 'Kooperationspartner',
    branche: 'IT / Software',
    beschreibung: 'Hamburger IT-Beratung sucht dänischen Entwicklungspartner für gemeinsame Kundenprojekte im Bereich Industrie 4.0. Min. 5 Entwickler, Erfahrung mit SAP-Integration erforderlich.',
    ziel: 'Langfristige Entwicklungspartnerschaft für größere Kundenprojekte',
    mussHaves: ['5+ Entwickler', 'SAP/ERP-Erfahrung', 'Agile Methodiken'],
    niceToHaves: ['Industrie 4.0 Expertise', 'bestehende Referenzen'],
    persoenlichTouched: 'Wir arbeiten nur mit Partnern, die echte Eigenverantwortung übernehmen. Vertrauen ist wichtiger als Verträge.',
    reifegrad: 'Sofort',
    sprachen: ['Deutsch', 'Englisch'],
    standort: 'Hamburg, Deutschland',
    gueltigBis: '2024-07-20',
    sichtbarkeit: 'Öffentlich',
    status: 'Aktiv',
    ansprechpartner: 'Frank Schneider',
    email: 'frank@example.de',
    filter: ['de-dk', 'tech'],
  },
  {
    id: 'ANZ-2024-004',
    richtung: 'DK→DE',
    art: 'Lieferant suchen',
    branche: 'Maschinenbau',
    beschreibung: 'Dänischer Hersteller von Präzisionsteilen sucht deutschen Vertriebspartner mit Zugang zu Tier-2-Lieferanten in der Automobilindustrie.',
    ziel: 'Marktzugang zu deutschen Automobilzulieferern',
    mussHaves: ['Beziehungen zu Tier-2 Lieferanten', 'Automotive-Erfahrung'],
    niceToHaves: ['bestehender Kundenstamm'],
    persoenlichTouched: 'Kleine aber innovative Manufaktur. Qualität statt Masse.',
    reifegrad: 'Bereit',
    sprachen: ['Deutsch', 'Englisch'],
    standort: 'Aarhus, Dänemark',
    gueltigBis: '2024-09-10',
    sichtbarkeit: 'Anonym',
    status: 'Aktiv',
    ansprechpartner: 'Jens Andersen',
    email: 'jens@example.dk',
    filter: ['dk-de', 'maschinenbau'],
  },
  {
    id: 'ANZ-2024-005',
    richtung: 'DE→DK',
    art: 'Markteintritt',
    branche: 'Lebensmittel',
    beschreibung: 'Hamburger Feinkost-Produzent sucht Einstieg in dänische Gastronomie und Delikatessenhandel. Hochwertige Spezialprodukte, kleine Chargen.',
    ziel: 'Platzierung in Kopenhagener Restaurants und Delikatessläden',
    mussHaves: ['Beziehungen zu Gastronomie/Handel', 'Verständnis für Premiumsegment'],
    niceToHaves: ['Skandinavien-Erfahrung'],
    persoenlichTouched: 'Familientradition seit 1985. Jedes Produkt wie ein Kunstwerk.',
    reifegrad: 'Konzept',
    sprachen: ['Deutsch', 'Englisch'],
    standort: 'Hamburg, Deutschland',
    gueltigBis: '2024-08-30',
    sichtbarkeit: 'Öffentlich',
    status: 'Aktiv',
    ansprechpartner: 'Maria Schmidt',
    email: 'maria@example.de',
    filter: ['de-dk', 'food'],
  },
  {
    id: 'ANZ-2024-006',
    richtung: 'DK→DE',
    art: 'Kunden gewinnen',
    branche: 'IT / Software',
    beschreibung: 'Dänisches SaaS-Unternehmen (Kassensystem) sucht deutschen Pilotpartner im Einzelhandel für intensiven 6-Monats-Test vor deutschem Markteintritt.',
    ziel: 'Pilotinstallation und Marktvalidierung in Deutschland',
    mussHaves: ['Einzelhandelserfahrung', 'Tech-Affinität', 'Feedback-Bereitschaft'],
    niceToHaves: ['mehrere Locations'],
    persoenlichTouched: 'Startup-Energie mit Enterprise-Mentalität. Wir lernen von jedem Kunden.',
    reifegrad: 'Bereit',
    sprachen: ['Dänisch', 'Deutsch', 'Englisch'],
    standort: 'Kopenhagen, Dänemark',
    gueltigBis: '2024-10-01',
    sichtbarkeit: 'Öffentlich',
    status: 'Aktiv',
    ansprechpartner: 'Mads Nielsen',
    email: 'mads@example.dk',
    filter: ['dk-de', 'tech'],
  },
]

// ── INTERESSENTEN-STATUS FARBEN ──
export const STATUS_COLORS: Record<string, string> = {
  'Idee': '#94a3b8',
  'Konzept': '#f59e0b',
  'Bereit': '#3b82f6',
  'Sofort': '#10b981',
}

// ── HILFSFUNKTIONEN ──

// Anfrage nach ID suchen
export function getAnfrageById(id: string) {
  return DEMO_ANFRAGEN.find(a => a.id === id)
}

// Nach Filtern filtern
export function filterAnfragen(
  richtung?: string,
  branche?: string,
  reifegrad?: string,
  sprache?: string,
) {
  return DEMO_ANFRAGEN.filter(a => {
    if (richtung && a.richtung !== richtung) return false
    if (branche && a.branche !== branche) return false
    if (reifegrad && a.reifegrad !== reifegrad) return false
    if (sprache && !a.sprachen.includes(sprache)) return false
    return true
  })
}
