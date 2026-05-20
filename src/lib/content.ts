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
  jan: {
    name: 'Jan Thomsen',
    role: 'Gründer & Matchmaker',
    bio: 'In Dänemark aufgewachsen, seit vielen Jahren in Deutschland. Jan kennt beide Kulturen und nutzt diese Erfahrung um echte, nachhaltige Partnerschaften zu vermitteln.',
    linkedin: 'https://linkedin.com/in/janthomsen',
    linkedinLabel: 'LinkedIn-Profil',
  },
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

// ── PROZESS FÜR HOMEPAGE (Vereinfacht & Fokussiert) ──
export const PROZESS_HOMEPAGE = [
  {
    nr: 1,
    icon: '💡',
    title: 'Idee oder Gesuch einreichen',
    desc: 'Unternehmen beschreiben, wen oder was sie suchen – z. B. Vertriebspartner, Produkte, Projektpartner oder Zugang zum deutschen bzw. dänischen Markt.',
  },
  {
    nr: 2,
    icon: '🔍',
    title: 'Wir prüfen & filtern persönlich',
    desc: 'Easy-B2B ist keine anonyme Kontaktbörse. Wir prüfen Anfragen, sortieren unrealistische Gesuche aus und suchen nach passenden Verbindungen.',
  },
  {
    nr: 3,
    icon: '🤝',
    title: 'Passende Unternehmen werden verbunden',
    desc: 'Wenn es fachlich und menschlich passt, bringen wir Unternehmen zusammen – persönlich, direkt und ohne unnötiges Networking-Blabla.',
  },
]

// ── TYPISCHE HOMEPAGE-BEISPIELE ──
export const BEISPIELE_HOMEPAGE = [
  'Dänischer Hersteller sucht Vertrieb in Hamburg',
  'Deutsche Firma sucht skandinavische Produkte',
  'IT-Unternehmen sucht Pilotkunden',
  'Projektpartner für Ausschreibungen gesucht',
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

// ── ARCHIVIERTE DATEN FÜR ALT-ROUTES (Kompatibilität) ──
// Diese Daten wurden durch die neue Matchmaking-Struktur ersetzt
// Die alte Routes bleiben aber als Archiv erhalten

export const BEISPIELE = [
  {
    titel: 'Logistik-Partnerschaft',
    richtung: '🇩🇪 → 🇩🇰',
    icon: '🚛',
    situation: 'Deutsches Logistik-Unternehmen suchte zuverlässigen Partner für regelmäßige Transporte nach Dänemark',
    ergebnis: 'Gefunden und aufgebaut eine stabile Geschäftsbeziehung über 3+ Jahre',
    tags: ['Logistik', 'Transport', 'B2B'],
  },
  {
    titel: 'Tech-Integration',
    richtung: '🇩🇰 → 🇩🇪',
    icon: '💻',
    situation: 'Dänisches SaaS-Unternehmen brauchte qualifizierten Vertriebspartner in Deutschland',
    ergebnis: 'Erfolgreich 15+ Kunden gewonnen in Q1 nach Partnership-Launch',
    tags: ['Software', 'Vertrieb', 'Deutschland'],
  },
]

export const USE_CASES = [
  {
    title: 'Export nach Dänemark',
    icon: '📤',
    desc: 'Wenn du als deutsches Unternehmen Produkte oder Dienstleistungen nach Dänemark bringen möchtest',
    beispiel: 'Handwerk, Technologie, Services',
  },
  {
    title: 'Import aus Dänemark',
    icon: '📥',
    desc: 'Wenn du als dänisches Unternehmen auf dem deutschen Markt Fuß fassen möchtest',
    beispiel: 'Design, Food, Technologie',
  },
]

export const GRENZSITUATIONEN = [
  {
    titel: 'Entscheidungsgeschwindigkeit',
    phase: 'projekt',
    de: 'In Deutschland wird oft lange debattiert, bevor die finale Entscheidung fällt.',
    dk: 'In Dänemark wird schneller entschieden, dafür werden auch schneller Anpassungen vorgenommen.',
    erkenntnis: 'Beide Ansätze haben ihre Vorteile. Im deutsch-dänischen Geschäft braucht es gegenseitiges Verständnis.',
    tipp: 'Kläre vorher ab, welche Entscheidungsstrukturen du erwartest. Das spart Zeit.',
  },
  {
    titel: 'Formalität & Hierarchie',
    phase: 'kontakt',
    de: 'Strukturen sind wichtig. Klar definierte Rollen und Prozesse geben Sicherheit.',
    dk: 'Flache Hierarchien sind die Norm. Auch der CEO sitzt nicht in separatem Büro.',
    erkenntnis: 'Was in einem Land als „zu formell" wirkt, ist im anderen „professionelle Struktur".',
    tipp: 'Sei offen für beide Stile. Die beste Partnerschaft passt sich an.',
  },
  {
    titel: 'Direkte Kommunikation',
    phase: 'treffen',
    de: 'Höflichkeit ist wichtig. Kritik wird verpackt, damit sie nicht verletzt.',
    dk: 'Sag, was du denkst. Direkte, ehrliche Kommunikation ist respektvoll.',
    erkenntnis: 'Was Dänen als „ehrlich" empfinden, kann Deutsche verletzen. Und umgekehrt wirkt Höflichkeit als unaufrichtig.',
    tipp: 'Erkläre deinen Kommunikationsstil. Dann entstehen keine Missverständnisse.',
  },
]

export const WERTE = [
  {
    title: 'Persönlich',
    icon: '🤝',
    text: 'Keine Automatik. Jede Vermittlung ist persönlich geprüft.',
  },
  {
    title: 'Konkret',
    icon: '🎯',
    text: 'Wir arbeiten mit realen Anfragen, nicht mit Idealen.',
  },
  {
    title: 'Zuverlässig',
    icon: '✅',
    text: 'Was wir zusagen, halten wir. Auch in schwierigen Zeiten.',
  },
]

// ── KOOPERATIONSBEISPIELE FÜR STARTSEITE (Teaser) ──
export const KOOPERATIONS_TEASER = [
  {
    id: 1,
    titel: 'Hersteller sucht Vertrieb',
    icon: '📦',
    kurzbeschreibung: 'Dänischer Hersteller sucht einen deutschen Vertriebspartner für den lokalen Markt.',
    beschreibung: 'Perfekt für etablierte Handelsunternehmen oder Distributoren, die ein neues Produktportfolio ins Sortiment nehmen möchten.',
  },
  {
    id: 2,
    titel: 'Firma sucht Produkte',
    icon: '🏪',
    kurzbeschreibung: 'Deutsche Firma sucht skandinavische Produkte oder Dienstleistungen für ihr Portfolio.',
    beschreibung: 'Einzelhandelsketten, Großhändler und E-Commerce-Plattformen finden hier exklusive Produktkooperationen.',
  },
  {
    id: 3,
    titel: 'IT-Pilotkunden',
    icon: '💻',
    kurzbeschreibung: 'IT-Unternehmen sucht Pilotkunden für neue Technologien oder SaaS-Lösungen.',
    beschreibung: 'Tech-Startups und etablierte Software-Anbieter finden hier Early Adopter für Markttests.',
  },
  {
    id: 4,
    titel: 'Projektpartner',
    icon: '🤝',
    kurzbeschreibung: 'Konkrete Ausschreibungen brauchen spezialisierte Projektpartner für Umsetzung.',
    beschreibung: 'Consulting, Handwerk, Produktion – hier treffen Auftraggeber auf spezialisierte Umsetzer.',
  },
  {
    id: 5,
    titel: 'White-Label Produkte',
    icon: '⚙️',
    kurzbeschreibung: 'White-Label Lösungen aus Dänemark für deine eigene Marke anpassen.',
    beschreibung: 'Maßgeschneiderte Produktlösungen ohne eigene Produktion – perfekt für Markenaufbau.',
  },
  {
    id: 6,
    titel: 'Ungewöhnliche Vertriebe',
    icon: '✨',
    kurzbeschreibung: 'Concept Stores, spezialisierte Fachhandelskonzepte oder regionale Spezialhändler.',
    beschreibung: 'Dänische Designprodukte, Juweliere, Premium-Läden und Nischenhändler finden hier Partner.',
  },
]

// ── DETAILLIERTE KOOPERATIONSBEISPIELE ──
export const KOOPERATIONSBEISPIELE_DETAILS = [
  {
    id: 'hersteller-vertrieb',
    kategorie: 'Ich suche einen Partner',
    titel: 'Hersteller sucht Vertrieb',
    icon: '📦',
    intro: 'Du produzierst hochwertige Waren oder bietet spezialisierte Dienstleistungen – brauchst aber Zugang zum deutschen oder dänischen Markt.',
    situation: 'Als mittelständischer Hersteller kennst du dein Handwerk perfekt. Aber der Aufbau eines Vertriebsnetzwerks im Ausland kostet Zeit, Kontakte und Geld.',
    loesung: 'EasyB2B vermittelt dich mit etablierten Distributoren, Großhändlern und Einzelhandelsketten, die aktiv nach neuen Produkten suchen.',
    beispiele: [
      'Dänischer Möbelhersteller sucht deutschen Möbel-Großhändler',
      'Deutsche Brauerei sucht dänische Gastronomiepartner',
      'Skandinavischer Premium-Kosmetik-Hersteller sucht Beauty-Retailer',
    ],
    nutzen: ['Schneller Markteintritt', 'Bewährte Distributionskanäle', 'Keine Neugründung nötig', 'Vertrauenswürdige Partner'],
  },
  {
    id: 'firma-produkte',
    kategorie: 'Ich suche einen Partner',
    titel: 'Firma sucht neue Produkte',
    icon: '🏪',
    intro: 'Du hast einen etablierten Handel oder E-Commerce Business und möchtest dein Sortiment erweitern – mit neuen, interessanten Produkten.',
    situation: 'Dein Geschäft läuft gut. Aber der Markt verlangt ständig nach Neuem. Skandinavische Produkte sind beliebt und erfolgreich – nur: Wie kommst du an die richtigen Hersteller?',
    loesung: 'EasyB2B bringt dich in Kontakt mit Herstellern, die exakt zu deinem Sortiment passen – von Design bis Lebensmittel bis Technik.',
    beispiele: [
      'Deutsches Möbel-Portal sucht dänische Designer',
      'Online-Lebensmittelhändler sucht skandinavische Spezialitäten',
      'Deutscher Elektronik-Distributor sucht dänische Tech-Innovationen',
    ],
    nutzen: ['Direkt vom Hersteller', 'Exklusive Sortimente', 'Bessere Margen', 'Unterscheidung vom Wettbewerb'],
  },
  {
    id: 'it-pilotkunden',
    kategorie: 'Ich bin ein Unternehmen',
    titel: 'IT-Unternehmen sucht Pilotkunden',
    icon: '💻',
    intro: 'Du hast eine innovative Softwarelösung entwickelt – und brauchst jetzt echte Pilotkunden, um sie zu testen und zu verbessern.',
    situation: 'Technologien sind nur gut, wenn sie in der Praxis funktionieren. Aber echte Pilotkunden zu finden, die dich ausprobieren, ist schwer.',
    loesung: 'EasyB2B verbindet dich mit Early Adopters, Innovation-freundlichen Unternehmen und Testpartnern aus deiner Zielbranche.',
    beispiele: [
      'Dänisches SaaS-Startup sucht deutsche Einzelhandelsketten für KI-Kassensystem',
      'Deutsche Logistik-Software sucht Pilottransporteur in Dänemark',
      'Dänisches HR-Tool sucht dänische und deutsche Testunternehmen',
    ],
    nutzen: ['Schnelles Feedback', 'Echte Marktdaten', 'Testimonials & Case Studies', 'Verbesserte Produkt-Market Fit'],
  },
  {
    id: 'projektpartner',
    kategorie: 'Ich suche einen Partner',
    titel: 'Konkrete Ausschreibungen brauchen Projektpartner',
    icon: '🤝',
    intro: 'Du hast eine Ausschreibung oder ein großes Projekt – brauchst aber spezialisierte Umsetzer, die du noch nicht im Netzwerk hast.',
    situation: 'Großprojekte erfordern oft ein breites Netzwerk: Subunternehmer, Spezialisten, lokale Partner. Diese zu finden, kostet Zeit.',
    loesung: 'EasyB2B vermittelt spezialisierte Handwerksbetriebe, Consultants, Produktionsfirmen und Projektpartner – schnell, verlässlich und persönlich geprüft.',
    beispiele: [
      'Deutsche Maschinenbaufirma sucht dänischen Produktionspartner für Teilefertigung',
      'Dänisches Bauunternehmen sucht deutsche Subunternehmer für große Baustelle',
      'IT-Consultant sucht spezialisierte Developer aus beiden Ländern',
    ],
    nutzen: ['Bewährte Fachkräfte', 'Keine Neugründung', 'Flexible Zusammenarbeit', 'Qualität sichergestellt'],
  },
  {
    id: 'white-label',
    kategorie: 'Ich suche einen Partner',
    titel: 'White-Label Produkte aus Dänemark',
    icon: '⚙️',
    intro: 'Du möchtest eine Marke aufbauen – aber nicht selbst produzieren. White-Label Partnerschaften ermöglichen dir genau das.',
    situation: 'Viele Gründer und etablierte Marken haben Markenideen, aber keine Produktionsfähigkeit. White-Label Hersteller sind die Lösung.',
    loesung: 'EasyB2B findet für dich zuverlässige Hersteller in Skandinavien, die qualitativ hochwertig nach deinen Vorgaben produzieren.',
    beispiele: [
      'Deutsche Marke für Öko-Mode braucht skandinavischen Produzenten',
      'Deutsches Beauty-Label sucht dänischen Kosmetik-Hersteller',
      'Startup-Marke für Smart-Home braucht Fertigungspartner',
    ],
    nutzen: ['Keine Investition in Produktion', 'Markenaufbau möglich', 'Schnelle Skalierbarkeit', 'Fokus auf Marketing & Vertrieb'],
  },
  {
    id: 'nischenspezialist',
    kategorie: 'Ich bin ein Unternehmen',
    titel: 'Nischenspezialist trifft Premium-Hersteller',
    icon: '✨',
    intro: 'Du betreibst einen Concept Store, Juwelier, Designshop oder Spezialhändler – und suchst exklusive Lieferanten aus Skandinavien.',
    situation: 'Premium und Niche sind schwer zu skalieren. Du brauchst Partner, die deine hohen Standards verstehen und teilen.',
    loesung: 'EasyB2B versteht Nischenmärkte. Wir verbinden dich mit Herstellern, Designern und Craftspeople, die auf deine Spezialität passen.',
    beispiele: [
      'Berliner Concept Store für nachhaltiges Design sucht dänische Designer und Handwerker',
      'Münchner Juwelier sucht dänische Schmuck-Designer mit eigener Werkstatt',
      'Hamburg-Boutique sucht skandinavische Textil-Marken',
    ],
    nutzen: ['Authentische Partnerschaften', 'Exklusivität', 'Differenzierung', 'Geteilte Wertvorstellungen'],
  },
]
