import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Easy-B2B – Geschäftsmöglichkeiten zwischen Deutschland und Dänemark',
  description: 'Kuratierte B2B-Vermittlung für deutsch-dänische Kooperationen. Persönlich begleitet, nicht automatisiert.',
}

const POSSIBILITIES = [
  {
    icon: '🛒',
    title: 'Deutschland-Vertrieb',
    teaser: 'Ihre Produkte in deutschen Regalen',
    tags: ['Einzelhandel', 'Großhandel', 'Edeka & Rewe', 'Fachhandel'],
    richtung: 'DK → DE',
  },
  {
    icon: '🚀',
    title: 'Erste Kunden gewinnen',
    teaser: 'Den Markteintritt greifbar machen',
    tags: ['Pilotkunden', 'Referenzprojekte', 'Testmärkte', 'Erstaufträge'],
    richtung: 'DK → DE',
  },
  {
    icon: '🔧',
    title: 'Service & After-Sales',
    teaser: 'Technische Präsenz vor Ort aufbauen',
    tags: ['Servicepartner', 'Wartung', 'Ersatzteile', 'Schulung'],
    richtung: 'DE → DK',
  },
  {
    icon: '📦',
    title: 'Neue Produkte & Lieferanten',
    teaser: 'Skandinavische Qualität ins Sortiment holen',
    tags: ['Hersteller', 'Import', 'Eigenmarken', 'Spezialitäten'],
    richtung: 'DE → DK',
  },
  {
    icon: '🏛️',
    title: 'Öffentliche Auftraggeber',
    teaser: 'Kommunen, Stadtwerke, Infrastruktur',
    tags: ['Ausschreibungen', 'Kommunen', 'Stadtwerke', 'Behörden'],
    richtung: 'DK → DE',
  },
  {
    icon: '🏭',
    title: 'Produktion & Fertigung',
    teaser: 'Kapazitäten jenseits der Grenze nutzen',
    tags: ['Lohnfertigung', 'Zulieferer', 'Co-Manufacturing', 'Standorte'],
    richtung: 'DE → DK',
  },
  {
    icon: '🤝',
    title: 'Strategische Kooperation',
    teaser: 'Gemeinsam neue Märkte erschließen',
    tags: ['Joint Ventures', 'Lizenzpartner', 'Co-Branding', 'Allianzen'],
    richtung: 'DE ⟷ DK',
  },
  {
    icon: '📊',
    title: 'Markt verstehen',
    teaser: 'Wissen aufbauen, bevor Sie starten',
    tags: ['Marktanalyse', 'Branchenkontakte', 'Regulatorik', 'Kulturwissen'],
    richtung: 'DE ⟷ DK',
  },
]

const PROCESS = [
  { nr: 1, icon: '✏️', title: 'Anfrage teilen', desc: 'Beschreiben Sie konkret, wen oder was Sie suchen. Kein perfektes Konzept nötig — eine klare Idee reicht.' },
  { nr: 2, icon: '💬', title: 'Persönlich kennenlernen', desc: 'Ein kurzes Gespräch mit uns — online, ca. 15 Minuten. Wir verstehen Ihr Vorhaben und klären offene Fragen.' },
  { nr: 3, icon: '🎯', title: 'Passende Kontakte erhalten', desc: 'Wir nutzen unser Netzwerk, Empfehlungen, LinkedIn und gezielte Ansprache. Jeder Kontakt wird persönlich geprüft.' },
  { nr: 4, icon: '🤝', title: 'Zusammenarbeit starten', desc: 'Das erste Gespräch entsteht. Die Zusammenarbeit gehört Ihnen — wir öffnen die Tür.' },
]

const EXAMPLES = [
  {
    title: 'Fisch- und Backwaren nach Norddeutschland',
    situation: 'Dänischer Hersteller mit starker Marke im Heimatmarkt möchte nach Deutschland expandieren.',
    result: 'Vertriebspartner mit bestehenden LEH-Kontakten in Norddeutschland gefunden.',
    branche: 'Lebensmittel',
    richtung: '🇩🇰 → 🇩🇪',
  },
  {
    title: 'IT-Dienstleister für dänische Kommunen',
    situation: 'Deutsches Softwareunternehmen sucht Pilotkunden im öffentlichen Sektor Dänemarks.',
    result: 'Zugang zu kommunalen Entscheidern über dänischen Branchenverband hergestellt.',
    branche: 'IT & Software',
    richtung: '🇩🇪 → 🇩🇰',
  },
  {
    title: 'Maschinenbau-Kooperation',
    situation: 'Dänischer Zulieferer sucht langfristigen Fertigungspartner in Norddeutschland.',
    result: 'Partnerschaft mit mittelständischem Maschinenbauer in Schleswig-Holstein.',
    branche: 'Maschinenbau',
    richtung: '🇩🇰 → 🇩🇪',
  },
]

const AUDIENCE = {
  suchende: [
    'Sie möchten den dänischen oder deutschen Markt erschließen',
    'Sie suchen einen Vertriebspartner, Lieferanten oder Kooperationspartner',
    'Sie haben eine konkrete Idee, aber noch keine Kontakte vor Ort',
    'Sie wünschen sich persönliche Begleitung statt anonymer Plattformen',
  ],
  interessenten: [
    'Sie sind offen für neue Geschäftsbeziehungen über die Grenze hinweg',
    'Sie haben Erfahrung, Netzwerk oder Kapazitäten in Ihrer Branche',
    'Sie möchten gezielt angesprochen werden — nicht mit Massenanfragen',
    'Sie schätzen kuratierte, qualitätsgeprüfte Anfragen',
  ],
}

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Deutsch-dänische B2B-Vermittlung</p>
            <h1 className={styles.heroTitle}>
              Geschäftsmöglichkeiten,<br />
              <span className={styles.heroAccent}>die wirklich passen.</span>
            </h1>
            <p className={styles.heroSub}>
              Wir finden passende Geschäftspartner — über persönliche Kontakte, Netzwerke, LinkedIn und gezielte Ansprache.
              Persönlich geprüft, nicht automatisiert.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/marktplatz" className="btn-primary">
                Aktuelle Gesuche ansehen
              </Link>
              <Link href="/anfrage-einreichen" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                Eigenes Gesuch einreichen
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroFlags}>
              <span className={styles.flagDE}>🇩🇪</span>
              <span className={styles.flagBridge}>⟷</span>
              <span className={styles.flagDK}>🇩🇰</span>
            </div>
            <p className={styles.heroVisualLabel}>Hamburg · Kopenhagen</p>
          </div>
        </div>
      </section>

      {/* ── 2. WAS IST HIER MÖGLICH? ── */}
      <section className={styles.possibilities}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Möglichkeiten entdecken</p>
          <h2>Was andere Unternehmen hier suchen</h2>
          <p className={styles.sectionIntro}>
            Jede Geschäftsidee beginnt anders. Diese Möglichkeiten nutzen Unternehmen bereits — welche passt zu Ihnen?
          </p>
          <div className={styles.useCaseGrid}>
            {POSSIBILITIES.map((p, i) => (
              <div key={i} className={styles.useCaseCard}>
                <div className={styles.useCaseHeader}>
                  <span className={styles.useCaseIcon}>{p.icon}</span>
                  <span className={styles.useCaseRichtung}>{p.richtung}</span>
                </div>
                <h3 className={styles.useCaseTitle}>{p.title}</h3>
                <p className={styles.useCaseTeaser}>{p.teaser}</p>
                <div className={styles.useCaseTags}>
                  {p.tags.map((tag, j) => (
                    <span key={j} className={styles.useCaseChip}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SO FUNKTIONIERT EASY-B2B ── */}
      <section className={styles.process}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>In vier Schritten</p>
          <h2>So funktioniert Easy-B2B</h2>
          <p className={styles.sectionIntro}>
            Von der ersten Idee bis zum persönlichen Kontakt — wir begleiten Sie.
          </p>
          <div className={styles.processGrid}>
            {PROCESS.map((step) => (
              <div key={step.nr} className={styles.processCard}>
                <div className={styles.processNumber}>{step.nr}</div>
                <span className={styles.processIcon}>{step.icon}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.processCta}>
            <Link href="/so-funktioniert-es" className="more">
              Ausführliche Beschreibung des Ablaufs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PRAXISBEISPIELE ── */}
      <section className={styles.examples}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Aus der Praxis</p>
          <h2>So entstehen Verbindungen</h2>
          <p className={styles.sectionIntro}>
            Jede Kooperation beginnt mit einer konkreten Anfrage. Hier sind Beispiele, wie Easy-B2B Unternehmen zusammengebracht hat.
          </p>
          <div className={styles.exampleGrid}>
            {EXAMPLES.map((ex, i) => (
              <div key={i} className={styles.exampleCard}>
                <div className={styles.exampleMeta}>
                  <span className={styles.exampleRichtung}>{ex.richtung}</span>
                  <span className={styles.exampleBranche}>{ex.branche}</span>
                </div>
                <h3 className={styles.exampleTitle}>{ex.title}</h3>
                <div className={styles.exampleBody}>
                  <div className={styles.exampleRow}>
                    <span className={styles.exampleLabel}>Ausgangslage</span>
                    <p>{ex.situation}</p>
                  </div>
                  <div className={styles.exampleRow}>
                    <span className={styles.exampleLabel}>Ergebnis</span>
                    <p>{ex.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/kooperationsbeispiele" className="more">
              Weitere Beispiele ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. FÜR WEN IST EASY-B2B? ── */}
      <section className={styles.audience}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Für wen?</p>
          <h2>Passt Easy-B2B zu Ihnen?</h2>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>🔍</div>
              <h3>Sie suchen einen Partner</h3>
              <p className={styles.audienceIntro}>Sie möchten den Markt auf der anderen Seite der Grenze erschließen.</p>
              <ul className={styles.audienceList}>
                {AUDIENCE.suchende.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href="/anfrage-einreichen" className="btn-primary" style={{ marginTop: 'auto' }}>
                Gesuch einreichen →
              </Link>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIcon}>🤝</div>
              <h3>Sie möchten Partner werden</h3>
              <p className={styles.audienceIntro}>Sie haben Erfahrung und Netzwerk — und sind offen für neue Geschäftsbeziehungen.</p>
              <ul className={styles.audienceList}>
                {AUDIENCE.interessenten.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href="/marktplatz" className="btn-outline" style={{ marginTop: 'auto' }}>
                Gesuche durchstöbern →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. AKTUELLE GESUCHE (Teaser) ── */}
      <section className={styles.listings}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Jetzt im Marktplatz</p>
          <h2>Aktuelle Gesuche</h2>
          <p className={styles.sectionIntro}>
            Jedes Gesuch wurde persönlich geprüft und aufbereitet. Alle Anfragen sind konkret und aktuell.
          </p>
          <div className={styles.listingsTeaser}>
            <div className={styles.listingCard}>
              <div className={styles.listingHeader}>
                <span className={styles.listingTag}>🇩🇰 → 🇩🇪</span>
                <span className={styles.listingReifegrad} style={{ background: '#38a169' }}>8/10</span>
              </div>
              <h3>Lebensmittel</h3>
              <p>Vertriebspartner für Fisch- und Backwarenspezialitäten in Norddeutschland gesucht</p>
              <Link href="/marktplatz" className={styles.listingLink}>Details ansehen →</Link>
            </div>
            <div className={styles.listingCard}>
              <div className={styles.listingHeader}>
                <span className={styles.listingTag}>🇩🇪 → 🇩🇰</span>
                <span className={styles.listingReifegrad} style={{ background: '#3182ce' }}>6/10</span>
              </div>
              <h3>Handel</h3>
              <p>Kooperation mit dänischen Steuerberatern für eine grenzüberschreitende Zusammenarbeit</p>
              <Link href="/marktplatz" className={styles.listingLink}>Details ansehen →</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/marktplatz" className="btn-primary">
              Alle Gesuche im Marktplatz →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. WARUM WIR FRAGEN STELLEN ── */}
      <section className={styles.whyQuestions}>
        <div className={styles.inner}>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.eyebrow}>Qualität vor Quantität</p>
              <h2>Warum wir Fragen stellen</h2>
              <p className={styles.whyIntro}>
                Wir fragen gezielt nach — nicht um Daten zu sammeln, sondern um wirklich passende Partner zu finden.
              </p>
              <div className={styles.whyPoints}>
                <div className={styles.whyPoint}>
                  <span className={styles.whyCheck}>✓</span>
                  <div>
                    <strong>Bessere Matches</strong>
                    <p>Je genauer wir Ihr Vorhaben verstehen, desto passender sind die Kontakte, die wir vermitteln.</p>
                  </div>
                </div>
                <div className={styles.whyPoint}>
                  <span className={styles.whyCheck}>✓</span>
                  <div>
                    <strong>Weniger Zeitverschwendung</strong>
                    <p>Sie sprechen nur mit Unternehmen, die wirklich zu Ihrem Vorhaben passen — nicht mit jedem.</p>
                  </div>
                </div>
                <div className={styles.whyPoint}>
                  <span className={styles.whyCheck}>✓</span>
                  <div>
                    <strong>Kulturelle Passung</strong>
                    <p>Geschäftskultur in Deutschland und Dänemark unterscheidet sich. Wir berücksichtigen das.</p>
                  </div>
                </div>
                <div className={styles.whyPoint}>
                  <span className={styles.whyCheck}>✓</span>
                  <div>
                    <strong>Intelligente Reichweite</strong>
                    <p>Wir kombinieren persönliche Kontakte, Netzwerke, LinkedIn und gezielte Ansprache — je nach Anfrage über verschiedene Wege.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whyQuote}>
              <blockquote>
                &bdquo;Easy-B2B öffnet die Tür — aber die Reise gehört Ihnen.&ldquo;
              </blockquote>
              <div className={styles.whyAuthor}>
                <strong>Jan Thomsen</strong>
                <span>Gründer & Matchmaker</span>
                <span className={styles.whyAuthorDetail}>In Dänemark aufgewachsen, seit vielen Jahren in Deutschland</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ANFRAGE STARTEN ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Bereit für neue Geschäftsmöglichkeiten?</h2>
          <p>
            Ob Vertriebspartner, Lieferant oder Kooperationspartner —
            beschreiben Sie, was Sie suchen. Wir finden die richtigen Kontakte, über welchen Weg auch immer.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/anfrage-einreichen" className="btn-amber">
              Gesuch einreichen →
            </Link>
            <Link href="/kontakt" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Erst mal sprechen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
