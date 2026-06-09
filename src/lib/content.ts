// ─────────────────────────────────────────────
// EASYB2B – Alle Inhalte zentral
// B2B-Matchmaking Plattform für DE ↔ DK
// ─────────────────────────────────────────────

export const SITE = {
  name: 'EasyB2B',
  tagline: 'Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung.',
  kernsatz: 'Wir verbinden konkrete Anfragen mit passenden Unternehmen – persönlich geprüft, nicht automatisiert.',
  email: 'anfragen@easyb2b.de',
  phone: '+49 40 123456',
  address: 'Grindelberg 20, Hamburg, 20144 Deutschland',
  jan: {
    name: 'Jan Thomsen',
    role: 'Gründer & Matchmaker',
    bio: 'Lebt in Deutschland und arbeitet seit vielen Jahren mit deutschen und dänischen Unternehmen. Kennt beide Geschäftskulturen und bringt passende Kontakte zusammen.',
    linkedin: 'https://linkedin.com/in/janthomsen',
    linkedinLabel: 'LinkedIn-Profil',
  },
}

// ── QUICK PROCESS FLOW (Homepage Orientierungs-Balken) ──
export const QUICK_PROCESS_FLOW = [
  {
    nr: 1,
    icon: '💡',
    label: 'Anfrage teilen',
    description: 'Deine Idee oder Gesuch einreichen',
  },
  {
    nr: 2,
    icon: '🔍',
    label: 'Kontakte finden',
    description: 'Passende Partner gezielt suchen',
  },
  {
    nr: 3,
    icon: '🤝',
    label: 'Kennenlernen',
    description: 'Erstes Gespräch & Austausch',
  },
  {
    nr: 4,
    icon: '🚀',
    label: 'Kooperation starten',
    description: 'Deutsch-dänische Zusammenarbeit',
  },
]

// ── PROZESS FÜR ANFRAGE-FORMULAR (Kurz – 4 Schritte) ──
export const PROZESS_SUCHENDE_KURZ = [
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

// ── PROZESS FÜR SUCHENDE (8 Schritte – Detailliert & Vertrauensaufbau) ──
export const PROZESS_SUCHENDE = [
  {
    nr: 1,
    icon: '✏️',
    title: 'Die Idee oder Anfrage einreichen',
    shortDesc: 'Du brauchst kein perfektes Konzept.',
    details: [
      'Wichtig ist erst mal: Was suchst du überhaupt? Einen Vertriebspartner? Einen Lieferanten? Ein Projektteam?',
      'Wir fragen auch: Wie weit ist deine Idee schon? Ist es noch eine Skizze oder bereits ein funktionierendes Konzept?',
      'Warum wir bestimmte Informationen abfragen: Damit aus einer Idee eine verständliche Anfrage wird, die es wirklich wert ist, bearbeitet zu werden.',
      'Dauer: ca. 10 Minuten.',
    ],
  },
  {
    nr: 2,
    icon: '🔍',
    title: 'Wir schauen uns die Anfrage persönlich an',
    shortDesc: 'Die Anfrage wird nicht einfach automatisch veröffentlicht.',
    details: [
      'Wir prüfen: Ist sie verständlich? Konkret genug? Fehlen wichtige Infos?',
      'Manchmal ergänzen wir deine Anfrage mit dir. Kleine Anpassungen machen oft einen großen Unterschied.',
      'Es geht nicht um Perfektion – sondern darum, dass die richtigen Partner deine Anfrage verstehen.',
      'Diese persönliche Prüfung ist einer der Gründe, warum Easy-B2B anders ist als eine anonyme Plattform.',
    ],
  },
  {
    nr: 3,
    icon: '💬',
    title: 'Kurzes Kennenlernen',
    shortDesc: 'Ein persönlicher Austausch – kein Verkaufsgespräch.',
    details: [
      'Du führst ein kurzes Gespräch mit uns – meist online, ca. 15 Minuten.',
      'Wir hören dir zu. Wir verstehen deine Idee wirklich. Wir klären offene Fragen.',
      'Es geht um Vertrauen und Verständnis – nicht um Checklisten.',
      'Wir schauen auch auf kulturelle und sprachliche Besonderheiten: Wie direkt magst du kommuniziert werden? Wie schnell sollten Entscheidungen fallen? Was ist dir wichtig bei der Zusammenarbeit mit Menschen über die Grenze hinweg?',
    ],
  },
  {
    nr: 4,
    icon: '📝',
    title: 'Die Anfrage wird sinnvoll aufbereitet',
    shortDesc: 'Öffentlich oder anonym – wie du es magst.',
    details: [
      'Basierend auf deinem Gespräch mit uns bereiten wir deine Anfrage auf.',
      'Öffentlich oder anonym – du entscheidest. Anonyme Anfragen sind genauso wertvoll, werden aber ohne Namen veröffentlicht.',
      'Verständliche Formulierung statt Marketing-Blabla. Konkrete Darstellung statt Werbetext.',
      'Ziel: Passende Kontakte sollen schnell verstehen, worum es geht – ohne 3 Seiten Text lesen zu müssen.',
    ],
  },
  {
    nr: 5,
    icon: '📢',
    title: 'Die Anfrage wird gezielt sichtbar gemacht',
    shortDesc: 'Nicht wahllos, sondern strategisch.',
    details: [
      'Deine Anfrage landet nicht einfach im digitalen Schwarzloch.',
      'Je nach Anfrage nutzen wir verschiedene Wege: persönliche Kontakte, Netzwerkpartner, Verbände, LinkedIn, Social Media oder gezielte Ansprache.',
      'Das ist keine Spam-Plattform. Es geht darum, dass die richtigen Menschen deine Anfrage sehen — egal ob sie bereits in unserem Netzwerk sind oder nicht.',
      'Manchmal dauert es länger, bis der perfekte Match dabei ist – aber wenn, dann passt es wirklich.',
    ],
  },
  {
    nr: 6,
    icon: '✅',
    title: 'Interessenten werden nicht ungefiltert weitergegeben',
    shortDesc: 'Das ist ein großer Vertrauenspunkt.',
    details: [
      'Nicht jeder Kontakt, der Interesse bekundet, wird direkt an dich weitergegeben.',
      'Wir prüfen: Passt das überhaupt zusammen? Ist das Interesse ernst gemeint?',
      'Ziel: Weniger Unsinn, mehr relevante Gespräche. Du sparst Zeit mit Menschen, die wirklich passen.',
      'Du bekommst hochwertige Vorschläge – nicht einfach eine Liste von Kontakten, die irgendwie vielleicht passen könnten.',
    ],
  },
  {
    nr: 7,
    icon: '🤝',
    title: 'Wenn es passt, entsteht der erste Kontakt',
    shortDesc: 'Vorstellung und erstes Gespräch.',
    details: [
      'Wir stellen dich dem passenden Unternehmen vor – oder geben den Kontakt frei.',
      'Das erste Gespräch entsteht. Ihr lernt euch kennen. Ihr überprüft, ob eine echte Zusammenarbeit sinnvoll ist.',
      'Easy-B2B sitzt bei diesem Gespräch nicht mit am Tisch – das ist zwischen euch.',
    ],
  },
  {
    nr: 8,
    icon: '💼',
    title: 'Die Zusammenarbeit gehört euch',
    shortDesc: 'Easy-B2B soll nicht dauerhaft dazwischenfunken.',
    details: [
      'Von diesem Punkt an sprechen die Unternehmen direkt miteinander.',
      'Wir helfen beim Einstieg. Beim ersten Match. Beim ersten Kontakt.',
      'Danach ist es euer Geschäft. Eure Beziehung. Eure Entscheidung.',
      'Das ist der Punkt: Easy-B2B öffnet die Tür – aber die Reise gehört euch.',
    ],
  },
]

// ── PROZESS FÜR HOMEPAGE (Vereinfacht & Fokussiert) ──
export const PROZESS_HOMEPAGE = [
  {
    nr: 1,
    icon: '✏️',
    title: 'Anfrage einreichen',
    desc: 'Du beschreibst **konkret** und **ehrlich**, wen oder was du suchst. Egal ob Vertriebspartner, Projektpartner oder neuer Markt – je klarer deine Vorstellung, desto passendere Kontakte. Du entscheidest: **offen oder anonym**. Wir fragen ab, welche **Sprache**, welche **Regionen**, wie weit deine Idee fortgeschritten ist. Und wichtig: Was suchst du **ausdrücklich nicht**? Diese Details helfen uns, wirklich passende Unternehmen zu finden.',
  },
  {
    nr: 2,
    icon: '💬',
    title: 'Kurz kennenlernen',
    desc: 'Das ist nicht automatisiert. Du führst ein **persönliches Gespräch** mit uns – online, ca. 15 Minuten. Wir hören dir zu, verstehen deine Idee wirklich, klären offene Fragen. Es geht um **Vertrauen und Verständnis**, nicht um Formulare. Wir schauen auch auf **kulturelle Passung**: Wie direkt darf kommuniziert werden? Wie schnell sollten Entscheidungen fallen? Was ist dir bei der Zusammenarbeit mit Menschen auf der anderen Seite der Grenze wichtig?',
  },
  {
    nr: 3,
    icon: '📬',
    title: 'Passende Kontakte erhalten',
    desc: 'Basierend auf deiner Anfrage und unserem Gespräch suchen wir über **verschiedene Wege** nach echten Matches — über persönliche Kontakte, Netzwerkpartner, LinkedIn und gezielte Ansprache. Das heißt: Wir filtern gezielt – nicht einfach alle Kontakte verschicken, die irgendwie passen könnten. Du bekommst **hochwertige Vorschläge**, nicht Masse. Jeder Kontakt wurde von uns überprüft. **Qualität vor Quantität** – das ist uns wichtig.',
  },
  {
    nr: 4,
    icon: '🤝',
    title: 'Selbst entscheiden & verhandeln',
    desc: 'Jetzt nimmt du **direkt Kontakt** auf mit den Unternehmen, die dir vorgeschlagen wurden. Easy-B2B sitzt nicht dazwischen. Ihr redet miteinander, klickt – oder auch nicht – und entscheidet selbst, ob und wie ihr zusammenarbeiten möchtet. Das ist dein Geschäft, deine Beziehung. Wir haben nur die Tür geöffnet.',
  },
]

// ── PROZESS-HINWEIS ──
export const PROZESS_HINWEIS = 'Easy-B2B vermittelt Kontakte und Möglichkeiten. Die eigentliche Zusammenarbeit und Verhandlung findet direkt zwischen den Unternehmen statt.'

// ── TYPISCHE HOMEPAGE-BEISPIELE (erweitert) ──
// ── ANFRAGE-DETAILS (Was ist in einer Anfrage?) ──
export const ANFRAGE_DETAILS = [
  'Produktbilder & Videos',
  'Produktbeschreibung',
  'Zielgruppe',
  'Preisniveau',
  'Liefermöglichkeiten',
  'Gewünschte Regionen',
  'Art der Zusammenarbeit',
  'Sprachkenntnisse',
  'Bisherige Märkte',
]

// ── BEISPIEL-STORY: Dänischer Holzspielzeug-Hersteller ──
export const BEISPIEL_ANFRAGE = {
  id: 'ANZ-2024-STORY-001',
  land: '🇩🇰',
  unternehmen: 'Dänischer Hersteller für Holzspielzeug',
  beschreibung: 'Hochwertiges, nachhaltiges Holzspielzeug für Kinder ab 3 Jahren',
  gesucht: 'Vertriebspartner in Deutschland',
  details: [
    'Handelsvertreter / Distributoren',
    'Spielwarenhandel',
    'Langfristiger Marktaufbau',
    'Fokus auf Nachhaltigkeit & Qualität',
  ],
  vorteile: [
    'Etabliert seit 15 Jahren',
    'Ausgezeichnet mit Design-Awards',
    'Vollständige Unterstützung beim Vertrieb',
    'Flexible Zahlungskonditionen',
  ],
}

// ── BEISPIEL-INTERESSENTEN ──
export const BEISPIEL_INTERESSENTEN = [
  {
    id: 1,
    land: '🇩🇪',
    stadt: 'Hamburg',
    rolle: 'Handelsvertreter',
    interesse: 'Norddeutschland & Bremen',
    beschreibung: 'Mit etabliertem Netzwerk in Spielwarenhandel',
    match: 'Sehr passend',
  },
  {
    id: 2,
    land: '🇩🇪',
    stadt: 'Düsseldorf',
    rolle: 'Spielwarenhandel',
    interesse: 'Hochwertige nordische Produkte',
    beschreibung: 'Premium-Fokus, Fachgeschäft seit 20 Jahren',
    match: 'Sehr passend',
  },
  {
    id: 3,
    land: '🇩🇪',
    stadt: 'Bayern',
    rolle: 'Spielzeuggroßhandel',
    interesse: 'Vertrieb im südlichen Deutschland',
    beschreibung: 'Großes Netzwerk zu Einzelhandelsketten',
    match: 'Gut passend',
  },
]

export const BEISPIELE_KATEGORIEN = [
  {
    kategorie: 'Du brauchst einen Vertriebspartner',
    beispiele: [
      'Dänischer **Möbelhersteller** sucht **Großhändler** in Hamburg',
      'Deutsche **Brauerei** sucht **Gastronomiepartner** in Kopenhagen',
      'Skandinavisches **SaaS-Unternehmen** sucht **Sales-Partner** in München',
    ],
  },
  {
    kategorie: 'Du suchst neue Produkte oder Lieferanten',
    beispiele: [
      'Deutscher **E-Commerce** sucht **skandinavische Designer-Produkte**',
      'Berliner **Concept Store** sucht **dänische Handwerker**',
      'Deutsche **Lebensmittel-Kette** sucht **nordische Spezialitäten**',
    ],
  },
  {
    kategorie: 'Du brauchst spezialisierte Projektpartner',
    beispiele: [
      'Deutsche **Maschinenbaufirma** sucht **dänischen Produktionspartner**',
      'Dänisches **Bauunternehmen** sucht **deutsche Subunternehmer**',
      '**IT-Ausschreibung** braucht **erfahrene Developer** aus beiden Ländern',
    ],
  },
  {
    kategorie: 'Du willst neue Märkte erschließen',
    beispiele: [
      '**Deutsche Marke** sucht **Vertrieb in Dänemark**',
      '**Dänisches Startup** braucht **Markteintritt in Deutschland**',
      '**Premium-Produkt** sucht **Partner im Nachbarland**',
    ],
  },
  {
    kategorie: 'Du suchst Pilotkunden oder Test-Partner',
    beispiele: [
      '**Neue SaaS-Lösung** braucht **Beta-Tester** mit echten Use Cases',
      '**Innovative Technologie** sucht **Early Adopter** für Marktest',
      '**Digitales Produkt** sucht **Pilotunternehmen** für Feedback',
    ],
  },
  {
    kategorie: 'Du brauchst White-Label oder Produktion',
    beispiele: [
      '**Mode-Startup** braucht **skandinavischen Hersteller**',
      '**Beauty-Label** sucht **dänische Kosmetik-Manufaktur**',
      '**Eigenmarke** braucht **zuverlässigen Produzenten**',
    ],
  },
]

// ── PROZESS FÜR INTERESSENTEN – KURZ (4 Schritte für ProcessSteps) ──
export const PROZESS_INTERESSENTEN_KURZ = [
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

// ── PROZESS FÜR INTERESSENTEN (7 Schritte – Detailliert & Vertrauensaufbau) ──
export const PROZESS_INTERESSENTEN = [
  {
    nr: 1,
    icon: '🔎',
    title: 'Du entdeckst ein interessantes Gesuch',
    shortDesc: 'Eine Anfrage passt zu deinem Unternehmen.',
    details: [
      'Eine Anfrage passt zu deinem Unternehmen, Produkt oder Netzwerk.',
      'Du siehst Potenzial – nicht nur für dich, sondern für beide Seiten.',
      'Vielleicht suchst du selbst genau solche Kontakte. Oder du erkennst, dass dein Angebot jemanden interessieren könnte.',
      'Der Moment: Du wirst gerade hellhörig. Das könnte passen.',
    ],
  },
  {
    nr: 2,
    icon: '💬',
    title: 'Du bekundest dein Interesse',
    shortDesc: 'Kurz erklären, warum ihr passt.',
    details: [
      'Du füllst ein kurzes Formular aus – keine Dissertation, einfach kurz und prägnant.',
      'Warum interessiert dich diese Anfrage? Was könntest du beitragen? Warum passt ihr zusammen?',
      'Erste Informationen, damit wir dich einordnen können – dein Unternehmen, deine Stärken, deine Erfahrung.',
      'Wichtig: Das ist nicht aus Neugier – sondern damit beide Seiten besser vorbereitet werden können.',
    ],
  },
  {
    nr: 3,
    icon: '🔍',
    title: 'Easy-B2B prüft und bereitet den Kontakt vor',
    shortDesc: 'Das ist der wichtigste Vertrauensschritt.',
    details: [
      'Wir geben nicht einfach automatisch Kontaktdaten weiter. Das ist das Wichtigste.',
      'Wir schauen zunächst: Passt das grundsätzlich zusammen? Wirkt das ernst gemeint? Könnte daraus wirklich ein sinnvoller Kontakt entstehen?',
      'Wir denken aus beiden Perspektiven: Der Suchende hat vermutlich mehrere Interessenten. Welche passen wirklich?',
      'Ziel: Weniger wahllose Kontakte. Mehr relevante Gespräche. Du sparst Zeit – und der Suchende auch.',
    ],
  },
  {
    nr: 4,
    icon: '📋',
    title: 'Der Kontakt wird vorbereitet',
    shortDesc: 'Beide Seiten sollen wissen, mit wem sie sprechen.',
    details: [
      'Wenn beide Seiten grundsätzlich passen, bereiten wir die Kontaktaufnahme vor.',
      'Das kann bedeuten: direkte Weitergabe der Kontaktdaten oder eine erste Vorstellung über Easy-B2B.',
      'Beide Seiten wissen, mit wem sie sprechen – nicht einfach „hier sind Daten, viel Erfolg".',
      'Der Gedanke: Ein bewusst vorbereiteter erster Austausch ist viel wertvoller als eine kalte Kontaktliste.',
    ],
  },
  {
    nr: 5,
    icon: '📞',
    title: 'Der erste Kontakt entsteht',
    shortDesc: 'Ein bewusst vorbereiteter Austausch.',
    details: [
      'Die Parteien melden sich direkt miteinander – telefonisch, online, per Mail oder sogar persönlich.',
      'Das Erste Gespräch entsteht. Ihr lernt euch kennen. Ihr sprecht über das Potenzial, über Anforderungen, über kulturelle Passung.',
      'Nicht einfach „hier sind Daten — viel Erfolg". Sondern: Ein bewusst vorbereiteter erster Austausch.',
      'Und: Beide Seiten wissen, dass sie von Easy-B2B vorgefiltert wurden – das schafft mehr Sicherheit.',
    ],
  },
  {
    nr: 6,
    icon: '👀',
    title: 'Wenn etwas nicht funktioniert, fassen wir nach',
    shortDesc: 'Qualitätssicherung mit Aufmerksamkeit.',
    details: [
      'Wenn nach einigen Tagen keine Kontaktaufnahme zustande kommt, fragen wir nach. Nicht aufdringlich – einfach unterstützend.',
      'War jemand im Urlaub? Ist die Mail untergegangen? Gab es technische Probleme? Passt es doch nicht?',
      'Easy-B2B soll nicht einfach Kontakte verschicken und verschwinden.',
      'Sondern: Darauf achten, dass der erste Austausch tatsächlich zustande kommt. Das ist echte Qualität.',
    ],
  },
  {
    nr: 7,
    icon: '🚀',
    title: 'Danach läuft die Kommunikation direkt zwischen euch',
    shortDesc: 'Der Einstieg ist geschafft – jetzt läuft es.',
    details: [
      'Easy-B2B soll den Einstieg erleichtern – nicht dauerhaft zwischen beiden Seiten stehen.',
      'Die eigentliche Zusammenarbeit, Verhandlung und Kommunikation läuft jetzt direkt zwischen den Unternehmen.',
      'Wenn es passt, entstehen echte Kooperationen. Wenn nicht, habt ihr immerhin einen guten Eindruck voneinander gewonnen.',
      'Das ist der Punkt: Easy-B2B öffnet die Tür – der Rest ist eure Sache.',
    ],
  },
]

// ── HÄUFIG GESTELLTE FRAGEN ──
export const FAQ = [
  {
    frage: 'Wer darf Easy-B2B nutzen?',
    antwort: 'Unternehmen aus Deutschland und Dänemark, die echte Partner suchen oder ihr Angebot erweitern möchten. Von Startups bis Mittelständler – alle sind willkommen.',
  },
  {
    frage: 'Wie funktioniert das Matchmaking?',
    antwort: 'Jede Anfrage wird persönlich geprüft. Dann suchen wir aktiv nach passenden Unternehmen — über unser Netzwerk, Empfehlungen, LinkedIn, Verbände und gezielte Ansprache. Nicht automatisiert, sondern von Hand.',
  },
  {
    frage: 'Wie lange dauert die Prüfung?',
    antwort: 'Normalerweise 3-5 Werktage. Bei ungeklärten Fragen können wir dir auch Feedback geben, um deine Anfrage zu konkretisieren.',
  },
  {
    frage: 'Wie erfahre ich von Interessenten?',
    antwort: 'Du bekommst von uns direkt Kontaktdaten und eine kurze Beschreibung. Dann nimm selbst Kontakt auf – oder lass dich kontaktieren.',
  },
  {
    frage: 'Welche Sprache kann genutzt werden?',
    antwort: 'Deutsch, Dänisch und Englisch. Wir übersetzen, falls nötig. Sprachbarrieren sind kein Problem.',
  },
  {
    frage: 'Wie werden Kontakte geprüft?',
    antwort: 'Wir schauen uns die Webseite an, sprechen mit Gründer und Geschäftsführer, und prüfen ob die Anfrage realistisch ist und zur Kooperation passt. Auch Kontakte, die über LinkedIn oder andere Kanäle entstehen, durchlaufen denselben Qualifizierungsprozess.',
  },
  {
    frage: 'Muss meine Anfrage öffentlich sein?',
    antwort: 'Nein. Du kannst deine Anfrage anonymisieren. Interessenten sehen dann nur Branche und Anfrage – nicht deinen Namen.',
  },
  {
    frage: 'Wie oft darf ich die Plattform nutzen?',
    antwort: 'So oft du möchtest. Manche Unternehmen stellen monatlich Anfragen. Je konkreter die Anfrage, desto bessere Ergebnisse.',
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
    text: 'Keine Automatik. Jede Vermittlung ist persönlich geprüft — egal über welchen Weg der Kontakt entstanden ist.',
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

// ── WAS IST ALLES MÖGLICH? (4 konkrete Szenarien mit konkreten Beispielen) ──
export const WHAT_IS_POSSIBLE = [
  {
    icon: '🇩🇪',
    title: 'Deutschen Vertriebspartner finden',
    erklärung: 'Du hast ein dänisches Produkt und suchst jemanden, der es in Deutschland verkauft.',
    inspirationText: 'Lass dich inspirieren – hier sind konkrete Beispiele, wie deutsch-dänische Kooperationen bereits funktionieren:',
    beispiele: [
      'Dänischen **Gin** in die Hamburger **Gastroszene** bringen',
      '5-Kilo-**Garneleneimer** an Hamburger **Fischgroßmärkte** liefern',
      'Nordisches **Eis** für deutsche **Cafés und Gastronomiebetriebe**',
      'Dänische **Sahneprodukte** für bayerische **Bäckereiketten**',
      'Skandinavische **Holzmöbel** für deutsche **Interior-Studios** und Designbüros',
      'Dänische **Bio-Limonaden** für norddeutsche **Concept Stores**',
      'Hochwertige **Käseprodukte** für deutsche **Feinkosthändler** und Delis',
      'Dänische **Designlampen** für deutsche **Hotelprojekte** und gehobene Restaurants',
    ],
  },
  {
    icon: '🤝',
    title: 'Grenzüberschreitende Kooperationen starten',
    erklärung: 'Unternehmen aus Deutschland und Dänemark zusammenbringen – für gemeinsame Projekte.',
    inspirationText: 'Hier sehen Sie, welche Art von Partnerschaften bereits entstanden sind:',
    beispiele: [
      '**Smart-City-Projekte** für deutsche **Kommunen und Stadtentwicklung**',
      'Steuerbare **LED-Straßenbeleuchtung** für deutsche **Industrieparks und Gewerbezonen**',
      '**Digitalisierungslösungen** für deutsche **öffentliche Einrichtungen** und Behörden',
      'Nachhaltige **Verpackungslösungen** für deutsche **Lebensmittelhersteller**',
      'Gemeinsame **Forschungs- und Pilotprojekte** im deutsch-dänischen **Grenzbereich**',
      'Technische **Consulting-Services** für deutsche **Industrieunternehmen**',
    ],
  },
  {
    icon: '🏗',
    title: 'Projektpartner finden',
    erklärung: 'Für konkrete Projekte, Ausschreibungen oder operative Zusammenarbeit.',
    inspirationText: 'So konkret können Projektpartnerschaften aussehen:',
    beispiele: [
      '**Fugensand** und **Drainagesysteme** für deutsche **Marktplätze und Kommunen**',
      '**Trockeneis-Reinigungslösungen** für deutsche **Industrieanlagen**',
      '**Servicepartner für technische Wartung** von Spezialsystemen',
      'Spezialisierte **Partner für regionale Ausschreibungen** und öffentliche Projekte',
      '**Transportlogistik und Lagerhaltung** für deutsche **Groß- und Einzelhandelsketten**',
      'Technische **Montage- und Installationsservices** für B2B-Projekte',
    ],
  },
  {
    icon: '📦',
    title: 'Produktsortiment erweitern',
    erklärung: 'Neue Produkte und Geschäftsideen aus dem Nachbarland entdecken.',
    inspirationText: 'Entdecken Sie, welche neuen Produkte und Geschäftsideen bereits vermittelt wurden:',
    beispiele: [
      'Nordische **Spezialprodukte** für deutsche **Concept Stores und Design-Einzelhandel**',
      'Dänische **Delikatessen und Feinkost** für regionale **Einzelhändler und Bioläden**',
      'Nachhaltige **skandinavische Outdoor-Produkte** für deutsche **Camping- und Sportfachhändler**',
      'Hochwertige **Tiernahrung und Spezialfutter** für deutsche **Fachmärkte**',
      '**Spezialprodukte für Hotellerie und Gastronomie** – vom Besteck bis zur Ausstattung',
      'Dänische **Bio- und Öko-Zertifizierte Produkte** für wachsende **Premiummarkt-Segmente**',
    ],
  },
]

// ── WAS WOLLEN WIR VON DIR WISSEN? ──
export const WHAT_WE_ASK_INTRO = 'Je nach Anfrage und Idee können die Informationen unterschiedlich sein. Im Kern brauchen wir aber einige wichtige Informationen, um passende Kontakte und sinnvolle Kooperationen finden zu können.'

export const WHAT_WE_ASK = [
  {
    icon: '🎯',
    frage: 'Was suchst du konkret?',
    erklärung: 'Ein konkretes Produkt, einen Vertriebspartner, ein Projekt oder einen anderen Kooperationstyp?',
  },
  {
    icon: '🇩🇪🇩🇰',
    frage: 'Auf welcher Seite der Grenze?',
    erklärung: 'Bist du aus Deutschland und suchst in Dänemark? Oder umgekehrt?',
  },
  {
    icon: '📍',
    frage: 'Wo suchst du?',
    erklärung: 'Regionen, Bundesländer oder spezifische Städte sind hilfreich.',
  },
  {
    icon: '🤝',
    frage: 'Wie stellst du dir die Zusammenarbeit vor?',
    erklärung: 'Langfristig, Projekt, Vertrieb, Produktion – je konkreter, desto besser.',
  },
  {
    icon: '🗣️',
    frage: 'Welche Sprache kann gesprochen werden?',
    erklärung: 'Deutsch, Dänisch oder Englisch – wir übersetzen gerne.',
  },
  {
    icon: '⏳',
    frage: 'Wie weit ist deine Idee bereits?',
    erklärung: 'Ist es eine lose Idee, ein konkretes Projekt oder sofort startbereit?',
  },
  {
    icon: '📅',
    frage: 'Wie lange soll die Suche laufen?',
    erklärung: 'Brauchst du schnell einen Partner oder hast du Zeit, die perfekte Person zu finden?',
  },
  {
    icon: '🔐',
    frage: 'Anonym oder öffentlich?',
    erklärung: 'Soll die Anfrage öffentlich sichtbar sein oder lieber diskret?',
  },
  {
    icon: '📞',
    frage: 'Wie soll der Kontakt hergestellt werden?',
    erklärung: 'Direkt oder zunächst über Easy-B2B?',
  },
  {
    icon: '🎉',
    frage: 'Wie würdest du eine neue Kooperation feiern?',
    erklärung: 'Das zeigt: Bei Easy-B2B geht es um Menschen, nicht nur um Firmen.',
    highlighted: true,
  },
  {
    icon: '✅',
    frage: 'Für welche Kontakte bist du offen?',
    erklärung: 'Nur etablierte Unternehmen oder auch Startups? Größe, Branche, Erfahrung?',
  },
  {
    icon: '🚫',
    frage: 'Was möchtest du NICHT?',
    erklärung: 'Welche Anfragen oder Partner passen überhaupt nicht zu dir?',
  },
]

// ── REIFEGRAD-SKALA (für "Wie weit ist deine Idee?") ──
export const REIFEGRAD_SKALA = [
  {
    stufe: 1,
    label: 'Lose Idee',
    beschreibung: 'Gerade erst entstanden. Noch viel offen.',
  },
  {
    stufe: 2,
    label: 'Erste Planung',
    beschreibung: 'Grundzüge sind klar. Noch nicht konkret.',
  },
  {
    stufe: 3,
    label: 'Konkretes Projekt',
    beschreibung: 'Details sind definiert. Noch nicht gestartet.',
  },
  {
    stufe: 4,
    label: 'In Umsetzung',
    beschreibung: 'Läuft schon. Suche Partner für Skalierung.',
  },
  {
    stufe: 5,
    label: 'Sofort startbereit',
    beschreibung: 'Alles vorbereitet. Kann morgen losgehen.',
  },
]

// ── ANONYMITÄT-ERKLÄRUNG ──
export const ANONYMITY_EXPLAIN = {
  title: 'Anonym oder öffentlich?',
  intro: 'Nicht jede Anfrage muss öffentlich sichtbar sein. Du hast die volle Kontrolle über deine Sichtbarkeit.',
  options: [
    {
      typ: 'Öffentlich',
      icon: '👁️',
      beschreibung: 'Deine Anfrage ist im öffentlichen Marktplatz sichtbar. Interessenten können dich aktiv finden.',
      vorteil: 'Größere Reichweite, more Optionen',
    },
    {
      typ: 'Anonym',
      icon: '🔒',
      beschreibung: 'Nur die Anfrage ist sichtbar (Branche, Was gesucht). Dein Name und deine Firma bleiben geheim.',
      vorteil: 'Diskret, sensible Anfragen möglich',
    },
    {
      typ: 'Privat',
      icon: '🤝',
      beschreibung: 'Nur Easy-B2B kennt deine Anfrage. Wir suchen gezielt für dich, ohne zu veröffentlichen.',
      vorteil: 'Höchste Diskretion, persönliche Suche',
    },
  ],
}

// ── KONTAKTAUFNAHME-ERKLÄRUNG ──
export const CONTACT_METHODS_EXPLAIN = {
  title: 'Wie stellen wir den Kontakt her?',
  intro: 'Du entscheidest, wie direkt die Kommunikation laufen soll.',
  methods: [
    {
      methode: 'Direkt',
      icon: '↔️',
      beschreibung: 'Du bekommst Kontaktdaten und Infos über mögliche Partner. Ihr könnt direkt miteinander reden.',
      vorteil: 'Schnell, keine Umschweife, echte Verhandlung',
    },
    {
      methode: 'Über Easy-B2B',
      icon: '🔗',
      beschreibung: 'Wir machen die erste Vorstellung. Danach könnt ihr euch kennenlernen oder Easy-B2B bleibt als Moderator.',
      vorteil: 'Sicherer, Easy-B2B kann helfen bei Fragen, besseres Vertrauen',
    },
  ],
}

// ── FUNFACT-ABSCHLUSS ──
export const WHAT_WE_ASK_FUNFACT = {
  frage: 'Wie würdest du die neue Kooperation mit deinem zukünftigen Geschäftspartner feiern?',
  beschreibung: 'Bei Easy-B2B versuchen wir, echte Menschen zusammenzubringen – nicht nur Firmen. Die beste Zusammenarbeit entsteht, wenn Menschen sich verstehen und miteinander wollen.',
  hint: 'Das ist übrigens keine Pflichtfrage. Aber die lustigsten Antworten speichern wir uns – zur Erinnerung! 😊',
}

// ── KULTUR & MENSCHEN ──
export const KULTUR_HINTS = [
  {
    frage: 'Eher schnelle Entscheidungen oder erstmal kennenlernen?',
    hinweis: 'Dänen und Deutsche ticken unterschiedlich. Wir achten auf Kommunikationsstil und Entscheidungswege.',
  },
  {
    frage: 'Wie direkt darf kommuniziert werden?',
    hinweis: 'Die norddeutsche Direktheit ist willkommen. Reden wir Klartext – aber immer respektvoll.',
  },
  {
    frage: 'Was ist dir bei Zusammenarbeit wichtig?',
    hinweis: 'Verlässlichkeit, Qualität, Langfristigkeit? Das finden wir heraus – und vermitteln nur echte Matches.',
  },
  {
    frage: 'Wie soll die Zusammenarbeit menschlich funktionieren?',
    hinweis: 'Gute Kooperationen entstehen zwischen Menschen, nicht nur zwischen Firmen. Wir schauen auf beide.',
  },
]

// ── VERTRAUEN & WERTE ──
export const TRUST_VALUES = [
  {
    icon: '🔍',
    statement: 'Persönlichkeit vor Masse',
    erklärung: 'Wir prüfen jede Anfrage und jeden Kontakt persönlich — ob über unser Netzwerk, LinkedIn oder gezielte Ansprache. Keine Spam, keine Automatik.',
  },
  {
    icon: '🔒',
    statement: 'Nicht jede Anfrage muss öffentlich sein',
    erklärung: 'Anonymität auf Wunsch. Du entscheidest, wer deine Firma sieht und wer nicht.',
  },
  {
    icon: '🤝',
    statement: 'Gute Kooperationen entstehen zwischen Menschen',
    erklärung: 'Wir achten nicht nur auf fachliche Passung, sondern auch auf Mentalität und Zusammenarbeit.',
  },
  {
    icon: '📋',
    statement: 'Sorgsam mit Kontakten und Informationen',
    erklärung: 'DSGVO-konform. Deine Daten und Kontakte sind bei uns sicher. Punkt.',
  },
]

// ── VORBEREITETE ANFRAGE-TEMPLATES ──
export const QUICK_REQUEST_TEMPLATES = [
  {
    title: 'Deutschen Vertriebspartner finden',
    href: '/anfrage-einreichen?category=vertrieb',
  },
  {
    title: 'Produktsortiment erweitern',
    href: '/anfrage-einreichen?category=produkte',
  },
  {
    title: 'Projektpartner finden',
    href: '/anfrage-einreichen?category=projekte',
  },
  {
    title: 'Zugang zum Markt',
    href: '/anfrage-einreichen?category=markt',
  },
  {
    title: 'Spezialisten suchen',
    href: '/anfrage-einreichen?category=spezialisten',
  },
]

// ── VERANSTALTUNGSFORMATE ──
export const EVENTS_FORMATS = [
  {
    icon: '🎤',
    name: 'Pitch & Meet',
    beschreibung: 'Deutsch-dänische Unternehmen pitchen Ideen live vor echtem Publikum. Neue Kontakte entstehen. Kooperationen werden real.',
    status: 'Aktiv',
    href: '/events#pitch-and-meet',
  },
  {
    icon: '🚗',
    name: 'Connect in Car',
    beschreibung: 'Lockereres Netzwerken: 10-Minuten-Gespräche direkt im Auto mit wechselnden Gesprächspartnern. Persönlich und entspannt.',
    status: 'Aktiv',
    href: '/events#connect-in-car',
  },
  {
    icon: '🤝',
    name: 'Netzwerktreffen',
    beschreibung: 'Kleine deutsch-dänische Gruppen treffen sich persönlich. Lockerer Austausch, neue Kontakte, gemeinsamer Aufbau von Beziehungen.',
    status: 'Aktiv',
    href: '/events#netzwerktreffen',
  },
]

// ── PRICING & KOSTEN ──
// ── KOSTEN / PREISE ──
export const PRICING_INFO = {
  free: {
    title: 'Easy-B2B ist kostenfrei nutzbar',
    intro: 'Easy-B2B ist ein Service von Etablering Tyskland und soll Unternehmen den Einstieg in den deutsch-dänischen Markt erleichtern.',
    story: 'Viele Unternehmen stellen sich beim Schritt über die Grenze ähnliche Fragen: „Kennst du jemanden?", „Wie findet man erste Kontakte?", „Wie kommt man in den Markt?" Genau aus diesen Gesprächen entstand die Idee zu Easy-B2B.',
    goal: 'Easy-B2B hilft dir, erste Kontakte zu finden, deine Idee greifbarer zu machen, Sprach- und Kulturbarrieren etwas abzubauen – und den Einstieg einfacher zu gestalten.',
    partnership: 'Wenn du später Unterstützung brauchst, freuen wir uns, wenn daraus auch eine Zusammenarbeit mit Etablering Tyskland entsteht. Aber kein Druck – deine Idee zählt.',
    icon: '✨',
    button: {
      text: 'Was ist Etablering Tyskland?',
      link: '#', // wird später ergänzt
    },
  },
  costs: {
    title: 'Kosten können entstehen bei',
    intro: 'Die Easy-B2B Plattform selbst bleibt kostenfrei. Einige Zusatzangebote können optional kostenpflichtig werden:',
    examples: [
      'besondere Vor-Ort-Veranstaltungen',
      'Netzwerkabende und Branchenformate',
      'BVMW-Mitgliedschaften oder Partnernetzwerke',
      'größere Matching- oder Veranstaltungsformate',
      'erweiterte Kooperationsunterstützungen',
    ],
    note: 'Diese Kosten kommen später und sind vollständig optional. Die Basis-Plattform bleibt offen.',
    icon: '🤝',
  },
}

// ── EVENTS HUB & PITCH & MEET FORMAT PAGE ──
export const PITCH_AND_MEET = {
  hero: {
    topline: '🇩🇪 + 🇩🇰',
    title: 'Wenn Deutsche und Dänen echte Sache machen.',
    subtitle: 'Deutsch-dänische Zufälle systematisieren.',
    tagline: 'Synergien schaffen. Kooperationen entstehen lassen.',
  },
  formatSection: {
    headline: 'Pitches mit Persönlichkeit',
    tagline: 'Menschen überzeugen. Nicht PowerPoint.',
    points: [
      '🎤 Live vor Publikum pitchen',
      '🌍 Deutsche & Dänen treffen sich',
      '💬 Echte Gespräche entstehen',
      '📞 Kontakte werden direkt geknüpft',
    ],
  },
  connectInCar: {
    headline: 'Connect in Car',
    tagline: 'Netzwerken mal etwas natürlicher.',
    description: '10 Minuten Austausch im Mercedes. Danach zum nächsten Kontakt.',
    feeling: [
      'Nicht: Steifes Networking',
      'Nicht: Visitenkartenfriedhof',
      'Sondern: Echte Begegnungen',
      'Sondern: Lockere Gespräche',
    ],
    icon: '🚗',
  },
  timeline: [
    {
      time: '15:30 Uhr',
      title: 'Ankommen',
      description: 'Erste Gespräche entstehen. Nervosität, Vorfreude, Energie im Raum.',
    },
    {
      time: '16:00 Uhr',
      title: 'Die Pitches starten',
      description: 'Ein dänischer Hersteller pitcht. Ein deutsches Publikum hört aufmerksam zu.',
    },
    {
      time: '16:40 Uhr',
      title: 'Connect in Car',
      description: 'Kurze Gespräche im Mercedes. Neue Kontakte entstehen.',
    },
    {
      time: '17:30 Uhr',
      title: 'Kooperationen entstehen',
      description: 'Deutsche und Dänen tauschen Visitenkarten. Das ist kein Netzwerk-Event – das sind echte Begegnungen.',
    },
  ],
  culture: {
    title: 'Warum das funktioniert',
    shortMessage: 'Viele deutsch-dänische Kooperationen scheitern nicht am Produkt – sondern daran, dass Menschen nie richtig ins Gespräch kommen. Pitch & Meet ändert das.',
    examples: [
      'Ein Däne erklärt seine Idee – direkt, ohne Umschweife.',
      'Ein Deutscher hört zu und stellt Fragen.',
      'Plötzlich verstehen sie sich besser als erwartet.',
      'Eine Kooperation entsteht über Kaffee, nicht über E-Mails.',
    ],
  },
  forWhom: {
    intro: 'Pitch & Meet ist für die, die gemeinsame Sache machen wollen.',
    personas: [
      {
        icon: '🇩🇪',
        name: 'Der deutsche Distributor',
        story: 'Sucht hochwertige dänische Produkte für seinen Markt. Findet sie hier – und die Menschen dahinter.',
      },
      {
        icon: '🇩🇰',
        name: 'Der dänische Hersteller',
        story: 'Will in Deutschland wachsen. Findet hier seine Vertriebspartner – nicht online, sondern von Angesicht zu Angesicht.',
      },
      {
        icon: '💡',
        name: 'Der Unternehmer mit Idee',
        story: 'Hat eine konkrete Idee für eine Kooperation. Findet hier den Partner, mit dem es real wird.',
      },
      {
        icon: '🤝',
        name: 'Der auf Partnersuche',
        story: 'Weiß, dass große Deals über Beziehungen entstehen. Kommt hierher, um echte Beziehungen zu knüpfen.',
      },
    ],
  },
  bvmw_note: 'Mit dem BVMW im Rücken. Das bringt die richtigen Leute zusammen.',
  costs_note: 'Gute Events kosten was. Das ermöglicht hochwertige Netzwerk-Momente. Easy-B2B bleibt kostenfrei – Pitch & Meet ist ein Zusatz-Angebot.',
  cta: {
    headline: 'Mit deinem Unternehmen dabei sein',
    button: 'Jetzt bewerben',
    link: '/anfrage-einreichen?format=pitch-meet',
  },
}
