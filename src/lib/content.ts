// ─────────────────────────────────────────────
// EASY-B2B – Alle Inhalte zentral
// Hier werden Texte, Daten und Content gepflegt
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Easy-B2B',
  tagline: 'Verbindungen, die zählen',
  kernsatz: 'Ich vermittle keine Kunden – ich ermögliche Begegnungen, aus denen Vertrauen und manchmal Geschäft entsteht.',
  jan: {
    name: 'Jan Thomsen',
    role: 'Steuerberater · Unternehmensberater · DK ↔ DE',
    bio: 'In Dänemark aufgewachsen, seit vielen Jahren in Deutschland. Ich kenne beide Seiten – nicht aus dem Lehrbuch, sondern aus der Praxis. Easy-B2B ist mein Versuch, anderen den Weg abzukürzen den ich selbst gegangen bin.',
    linkedin: 'https://linkedin.com/in/etablering-tyskland',
    linkedinLabel: 'linkedin.com/in/etablering-tyskland',
  },
  // Externe Website – SEPARATE Domain, niemals interne Route!
  etablering: 'https://etablering-tyskland.de',
}

// ── PROZESS (5 Schritte) ──
export const PROZESS = [
  {
    nr: 1,
    title: 'Du reichst dein Gesuch ein',
    desc: 'Erst ein paar Fragen zu dir als Mensch. Dann sachliche Details. Ca. 8 Minuten.',
    highlight: false,
  },
  {
    nr: 2,
    title: 'Wir schauen wirklich drüber',
    desc: 'Jede Einreichung wird persönlich geprüft. Kein Algorithmus. Kein Bot.',
    highlight: true, // Navy-Hervorhebung
  },
  {
    nr: 3,
    title: 'Dein Gesuch wird sichtbar',
    desc: 'Anonymisiert oder mit Namen – das entscheidest du.',
    highlight: false,
  },
  {
    nr: 4,
    title: 'Wir prüfen auf beiden Seiten',
    desc: 'Auch Interessenten stellen sich vor. Kein Direktkontakt ohne unsere Freigabe.',
    highlight: false,
  },
  {
    nr: 5,
    title: 'Wir stellen euch vor',
    desc: '„Ihr passt zusammen, weil..." – dann gehört es euch.',
    highlight: false,
  },
]

// ── REIFEGRAD ──
export const REIFEGRAD = [
  {
    range: '1–3',
    label: 'Noch eine Idee',
    color: '#E24B4A',
    desc: 'Hier bist du noch nicht richtig – aber ein Erstgespräch vielleicht schon.',
    cta: '→ Erstgespräch auf Etablering-Tyskland',
    ctaHref: 'https://etablering-tyskland.de', // Externe URL!
  },
  {
    range: '4–7',
    label: 'Konkrete Richtung',
    color: '#EF9F27',
    desc: 'Du weißt was du willst – wir begleiten dich Schritt für Schritt.',
    cta: null,
    ctaHref: null,
  },
  {
    range: '8–10',
    label: 'Bereit',
    color: '#1D9E75',
    desc: 'Direkt in den Prozess. Höchste Priorität.',
    cta: null,
    ctaHref: null,
  },
]

// ── WERTE (Warum Easy-B2B) ──
export const WERTE = [
  {
    title: 'Vertrauen vor Masse',
    text: 'Lieber kein Match als ein schlechtes. Das ist kein Versagen – das ist das System.',
  },
  {
    title: 'Mensch vor Geschäft',
    text: 'Wir fragen zuerst wer du bist – nicht was du machst.',
  },
  {
    title: 'Beide Seiten geprüft',
    text: 'Nicht nur wer einreicht – auch wer Interesse bekundet. Jan ist immer die Schleuse.',
  },
]

// ── TEASER KARTEN (Was machen wir) ──
export const TEASER_KARTEN = [
  {
    icon: '📦',
    title: 'Produkt sucht Markt',
    desc: 'Du hast etwas Gutes. Das Nachbarland wartet – mit dem richtigen Partner geht die Tür auf.',
  },
  {
    icon: '🤝',
    title: 'Gemeinsam stärker',
    desc: 'Zwei Firmen. Ein Angebot. Mehr Kompetenz auf beiden Seiten der Grenze.',
  },
  {
    icon: '🚪',
    title: 'Erster Schritt',
    desc: 'Kein kalter Einstieg ins Nachbarland. Ein Vertrauensanker der die Tür öffnet.',
  },
  {
    icon: '🎯',
    title: 'Die unerwartete Kombination',
    desc: 'Manchmal ist der beste Partner nicht aus der eigenen Branche – sondern der der fehlt.',
  },
]

// ── KOOPERATIONSBEISPIELE (8 echte Stories) ──
export const BEISPIELE = [
  {
    icon: '🍸',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Gin aus Aarhus trifft Hamburger Gastronomie',
    situation: 'Ein dänischer Craft-Gin-Produzent wollte den deutschen Markt erschließen – ohne Messe, ohne Kaltakquise.',
    ergebnis: 'Norddeutscher Getränkegroßhändler gefunden. Heute läuft der Vertrieb bis Berlin.',
    tags: ['Getränke', 'Vertrieb'],
    filter: ['dk-de', 'handel'],
  },
  {
    icon: '🍫',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Pralinen beim Juwelier',
    situation: 'Ein dänischer Chocolatier suchte keinen Supermarkt – sondern einen besonderen Ort. Pralinen als Geschenk neben Schmuck.',
    ergebnis: 'Platzierung in drei deutschen Juweliergeschäften. Heute Teil des Schaufensters zur Weihnachtszeit.',
    tags: ['Einzelhandel', 'Nische'],
    filter: ['dk-de', 'handel'],
  },
  {
    icon: '💡',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Intelligente Straßenlaternen',
    situation: 'Dänisches IT-Unternehmen hatte Software für intelligente Beleuchtung – aber kein Handwerkernetz in Deutschland.',
    ergebnis: 'Gemeinsames Angebot bei drei Stadtwerken. Einer hat zugeschlagen. Erste Pilotinstallationen laufen.',
    tags: ['Technologie', 'Ausschreibung'],
    filter: ['dk-de', 'tech'],
  },
  {
    icon: '🌿',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Fugensand für Marktplätze',
    situation: 'Dänischer Hersteller von Spezialbaustoffen wollte an deutschen Kommunalausschreibungen teilnehmen. Problem: kein lokaler Partner.',
    ergebnis: 'Kooperation mit drei GaLaBau-Betrieben. Erste Ausschreibung gewonnen.',
    tags: ['Baustoff', 'Ausschreibung'],
    filter: ['dk-de', 'bau'],
  },
  {
    icon: '🖥️',
    richtung: '🇩🇪 → 🇩🇰',
    titel: 'Kassensystem trifft Einzelhandel',
    situation: 'Deutsches SaaS-Unternehmen wollte nach Kopenhagen. Gesucht: ein dänischer Pilotpartner der das System testet.',
    ergebnis: 'Dänischer Einzelhändler aus Aarhus als Pilotpartner gefunden. Markteintritt Kopenhagen läuft.',
    tags: ['Software', 'Markteintritt'],
    filter: ['de-dk', 'tech'],
  },
  {
    icon: '🥩',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Feinkost trifft Hamburg',
    situation: 'Dänischer Feinkost-Produzent wollte in Hamburger Gastronomie und Delikatessenläden – keine Kontakte.',
    ergebnis: 'Kooperation mit zwei Hamburger Restaurants und einem Delikatessenladen aufgebaut.',
    tags: ['Lebensmittel', 'Gastronomie'],
    filter: ['dk-de', 'food'],
  },
  {
    icon: '⚙️',
    richtung: '🇩🇰 → 🇩🇪',
    titel: 'Präzisionsteile suchen Tier-2-Zugang',
    situation: 'Dänischer Hersteller von Präzisionsteilen wollte ins deutsche Tier-2-Lieferantennetz.',
    ergebnis: 'Kontakt zu deutschem Vertriebspartner mit Tier-1-Zugang hergestellt. Qualifizierungsprozess läuft.',
    tags: ['Automobil', 'Zulieferer'],
    filter: ['dk-de', 'tech'],
  },
  {
    icon: '🏗️',
    richtung: '🇩🇪 → 🇩🇰',
    titel: 'Deutsches Bauunternehmen sucht DK',
    situation: 'Interesse an dänischen Infrastrukturprojekten – aber keine lokalen Kontakte, keine Referenz in Dänemark.',
    ergebnis: 'Dänischer Projektentwickler gefunden. Erstes gemeinsames Angebot für Kommunalprojekt in Jutland eingereicht.',
    tags: ['Infrastruktur', 'Bau'],
    filter: ['de-dk', 'bau'],
  },
]

// ── USE CASES (12 Stück) ──
export const USE_CASES = [
  { icon: '📦', title: 'Produkt sucht Vertrieb', desc: 'Du hast ein fertiges Produkt und willst es im Nachbarland verkaufen – aber kein Netzwerk, kein Ansprechpartner.', beispiel: 'Gin aus Aarhus findet Hamburger Großhändler' },
  { icon: '🤝', title: 'Gemeinsam zu Ausschreibungen', desc: 'Du hast die Technologie – dein Partner hat die lokale Zulassung. Zusammen gewinnt ihr Ausschreibungen die keiner allein gewinnen würde.', beispiel: 'IT-Firma + Elektromeister bei Stadtwerken' },
  { icon: '🧪', title: 'Pilotprojekt im Nachbarland', desc: 'Vor dem großen Markteintritt erst testen. Mit einem lokalen Pilotpartner lernst du was wirklich funktioniert.', beispiel: 'Kassensystem testet in Aarhus vor dem Roll-out' },
  { icon: '🚪', title: 'Markteintritt mit Vertrauensanker', desc: 'Der erste Schritt ins Nachbarland ist der schwerste. Ein lokaler Partner öffnet Türen und gibt dir eine Referenz.', beispiel: 'Feinkost findet ersten Hamburger Abnehmer' },
  { icon: '🔧', title: 'Handwerk trifft Technologie', desc: 'Lokales Handwerk kennt den Markt. Technologie aus dem Nachbarland bringt das Produkt. Was allein nicht geht – geht zusammen.', beispiel: 'Dänische Software + deutsches Handwerkernetz' },
  { icon: '🎯', title: 'Nische trifft Nische', desc: 'Manchmal ist der beste Partner nicht aus der eigenen Branche. Unerwartete Kombinationen entstehen nicht von allein.', beispiel: 'Chocolatier platziert sich in Juweliergeschäften' },
  { icon: '📣', title: 'Vertrieb ohne Netzwerk', desc: 'Du willst verkaufen aber hast kein Netzwerk im Zielmarkt. Ein etablierter Handelsvertreter übernimmt den Vertrieb.', beispiel: 'Getränkehersteller findet deutschen Distributeur' },
  { icon: '🏗️', title: 'Einkauf & Logistik bündeln', desc: 'Zwei Unternehmen bündeln Transport oder Lager – das senkt Kosten und erhöht Verhandlungsmacht.', beispiel: 'Zwei Produzenten teilen Logistikroute DE↔DK' },
  { icon: '🧩', title: 'Komplementäre Produkte bündeln', desc: 'Dein Produkt ergänzt ein anderes perfekt – zusammen ist das Angebot stärker als einzeln.', beispiel: 'Dänisches Design + deutsche Handwerksqualität' },
  { icon: '🌐', title: 'Lokale Referenz aufbauen', desc: 'Ohne lokale Referenz keine Ausschreibung, kein Großkunde. Ein erster Partner ist dein Türöffner für alles weitere.', beispiel: 'Bauunternehmen baut erste dänische Referenz auf' },
  { icon: '💼', title: 'White-Label & OEM', desc: 'Du produzierst, ein anderes Unternehmen verkauft unter eigenem Namen. OEM-Deals entstehen oft durch persönliche Verbindungen.', beispiel: 'Dänischer Hersteller liefert an deutschen Markenpartner' },
  { icon: '🎓', title: 'Know-how Transfer', desc: 'Manchmal geht es um Wissen. Ein Vorsprung aus dem Nachbarland den das andere Unternehmen nutzen will.', beispiel: 'Dänische Nachhaltigkeitsexpertise trifft deutschen Mittelstand' },
]

// ── GRENZSITUATIONEN ──
export const GRENZSITUATIONEN = [
  {
    titel: 'Das Meeting',
    de: 'Kommt mit Agenda, Protokoll und geplanter Folgemail.',
    dk: 'Kommt mit Kaffee und der Frage: „Brauchen wir das wirklich?"',
    erkenntnis: 'Keiner ist falsch. Sag vorher kurz was du erwartest – dann wird aus dem Treffen etwas für beide.',
    tipp: 'Beim ersten Kontakt kurz fragen: „Sollen wir eine Agenda vorbereiten?" – spart Überraschungen.',
    phase: 'treffen',
  },
  {
    titel: 'Das Nein',
    de: 'Hört: Es gibt noch Gesprächsbedarf. Das Gespräch geht weiter.',
    dk: 'Sagt selten direkt Nein. Sagt: „Das ist spannend, aber..."',
    erkenntnis: 'Frag lieber einmal nach: „Wie siehst du das konkret?" – bevor du eine Woche investierst die längst entschieden war.',
    tipp: 'Eine direkte Frage hilft: „Siehst du das als realistisch?" – und dann auf die Antwort hören, nicht auf das Drumherum.',
    phase: 'kontakt',
  },
  {
    titel: 'Die Deadline',
    de: '„Bis Ende der Woche" heißt: Freitag, 17:00 Uhr.',
    dk: '„Bis Ende der Woche" heißt: irgendwann Freitag, vielleicht.',
    erkenntnis: 'Datum und Uhrzeit nennen. Einmal. Löst 80% der Missverständnisse.',
    tipp: 'Immer konkret: „Ich brauche das bis Freitag, 15 Uhr." – nicht „Ende der Woche".',
    phase: 'projekt',
  },
  {
    titel: 'Der Vertrag',
    de: '30 Seiten, jedes Detail geregelt, vom Anwalt geprüft.',
    dk: '„Wir kennen uns doch – reicht ein Handschlag?"',
    erkenntnis: 'Schriftlich ist nicht Misstrauen – es ist Klarheit. Das lässt sich gut erklären wenn man es früh anspricht.',
    tipp: 'Früh ansprechen: „Wir arbeiten normalerweise mit einem kurzen schriftlichen Rahmen – nicht weil wir misstrauen, sondern damit wir beide den Kopf frei haben."',
    phase: 'projekt',
  },
  {
    titel: 'Das Feedback',
    de: '„Das könnten wir noch optimieren" heißt: Das ist nicht gut genug.',
    dk: '„Det er meget godt" ist wirklich ein Kompliment. Kein Aber.',
    erkenntnis: 'Beim ersten Treffen fragen: „Wie gibst du normalerweise Feedback?" – spart viel Verwirrung.',
    tipp: 'Nachfragen ist kein Zeichen von Unsicherheit: „Ich will sichergehen dass ich deine Rückmeldung richtig verstehe – war das ein OK oder gibt es noch etwas?"',
    phase: 'prozess',
  },
  {
    titel: 'Der Titel',
    de: 'Visitenkarte: Dr. Dipl.-Ing. Geschäftsführer.',
    dk: 'Der CEO heißt Lars. Und duzt jeden.',
    erkenntnis: 'Beim ersten Kontakt fragen: „Wie wollt ihr angesprochen werden?" – klingt simpel, zeigt Respekt.',
    tipp: 'Einfach fragen – das wirkt nicht seltsam, sondern professionell.',
    phase: 'kontakt',
  },
]

// ── CHARAKTERFRAGEN (Formular) ──
export const CHARAKTERFRAGEN = [
  {
    nr: 1,
    thema: 'Verlässlichkeit',
    frage: 'Dein Partner sagt zwei Stunden vor einem gemeinsamen Kundentermin ab. Was machst du?',
  },
  {
    nr: 2,
    thema: 'Kommunikation',
    frage: 'Eine Kooperation läuft nicht wie erwartet. Wann sprichst du das an – und wie?',
  },
  {
    nr: 3,
    thema: 'Haltung',
    frage: 'Was sollte ein zukünftiger Partner über dich wissen – bevor ihr anfangt?',
  },
]

// ── BEISPIEL-GESUCHE (Marktplatz Demo-Daten) ──
export const DEMO_GESUCHE = [
  {
    id: 'g1',
    branche: 'Maschinenbau',
    richtung: '🇩🇰 → 🇩🇪',
    filter: ['dk-de', 'tech'],
    teaser: 'Hersteller von Präzisionsteilen sucht deutschen Vertriebspartner mit Zugang zu Tier-2-Lieferanten.',
    reifegrad: 8,
    reiferadLabel: 'Startbereit',
    sichtbarkeit: 'anonym',
  },
  {
    id: 'g2',
    branche: 'Software / SaaS',
    richtung: '🇩🇪 → 🇩🇰',
    filter: ['de-dk', 'tech'],
    teaser: 'Kassensystem sucht dänischen Pilotpartner im Einzelhandel – Markteintritt Kopenhagen geplant.',
    reifegrad: 9,
    reiferadLabel: 'Startbereit',
    sichtbarkeit: 'anonym',
  },
  {
    id: 'g3',
    branche: 'Lebensmittel',
    richtung: '🇩🇰 → 🇩🇪',
    filter: ['dk-de', 'food'],
    teaser: 'Dänischer Feinkost-Produzent sucht Einstieg in Hamburger Gastronomie und Delikatessenhandel.',
    reifegrad: 7,
    reiferadLabel: 'In Vorbereitung',
    sichtbarkeit: 'oeffentlich',
  },
  {
    id: 'g4',
    branche: 'Bau & Infrastruktur',
    richtung: '🇩🇰 → 🇩🇪',
    filter: ['dk-de', 'bau'],
    teaser: 'Hersteller von Fugensand sucht GaLaBau-Betriebe für gemeinsame Angebote bei öffentlichen Ausschreibungen.',
    reifegrad: 8,
    reiferadLabel: 'Startbereit',
    sichtbarkeit: 'anonym',
  },
  {
    id: 'g5',
    branche: 'Getränke & Handel',
    richtung: '🇩🇰 → 🇩🇪',
    filter: ['dk-de', 'handel'],
    teaser: 'Craft-Gin-Produzent sucht norddeutschen Getränkegroßhändler mit Zugang zur Gastronomie.',
    reifegrad: 9,
    reiferadLabel: 'Startbereit',
    sichtbarkeit: 'oeffentlich',
  },
  {
    id: 'g6',
    branche: 'Logistik',
    richtung: '🇩🇪 → 🇩🇰',
    filter: ['de-dk', 'tech'],
    teaser: 'Deutsches Logistik-Startup sucht dänischen Marktpartner für gemeinsamen Eintritt im Großraum Kopenhagen.',
    reifegrad: 6,
    reiferadLabel: 'In Vorbereitung',
    sichtbarkeit: 'anonym',
  },
]
