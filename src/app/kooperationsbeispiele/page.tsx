import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Suchideen & Praxisbeispiele – Easy-B2B',
  description: 'Wie formuliert man eine gute Suchanfrage? Konkrete Beispiele und Ideen für deutsch-dänische B2B-Kooperationen.',
}

/* ══════════════════════════════════════════════
   SUCHIDEEN — Inspirationsdaten
   ══════════════════════════════════════════════ */

const SUCHIDEEN = [
  {
    id: 'vertriebspartner',
    frage: 'Du suchst einen deutschen Vertriebspartner?',
    richtung: 'DK → DE',
    beispielAnfrage:
      'Wir suchen einen Vertriebspartner mit bestehenden Kontakten zu Edeka Nord, Edeka Minden-Hannover oder regionalen Großhändlern in Norddeutschland.',
    ziel: 'Erste Listung im deutschen Lebensmitteleinzelhandel.',
    regionen: ['Hamburg', 'Schleswig-Holstein', 'Niedersachsen'],
    alternativen: ['Handelsagenten', 'Importeure', 'Großhändler', 'Einkaufsverbände'],
    stand: [
      'Produkt marktreif',
      'Verpackung vorhanden',
      'Deutsche Unterlagen verfügbar',
    ],
    erklaerung: [
      'wen man sucht',
      'welche Kontakte wichtig sind',
      'welche Region relevant ist',
      'welches Ziel erreicht werden soll',
    ],
  },
  {
    id: 'pilotkunden',
    frage: 'Du suchst Pilotkunden in einem neuen Markt?',
    richtung: 'DK → DE',
    beispielAnfrage:
      'Wir haben eine SaaS-Lösung für die Logistikbranche und suchen zwei bis drei mittelständische Speditionen in Norddeutschland, die unsere Plattform im Alltag testen möchten.',
    ziel: 'Erste Referenzkunden im deutschen Markt, realitätsnahes Produkt-Feedback.',
    regionen: ['Norddeutschland', 'Hamburg', 'Bremen'],
    alternativen: ['Logistikverbände', 'Branchennetzwerke', 'Innovationsplattformen'],
    stand: [
      'Plattform funktionsfähig',
      'Englische und deutsche Oberfläche',
      'Onboarding-Konzept vorhanden',
    ],
    erklaerung: [
      'welches Produkt getestet werden soll',
      'wie viele Pilotkunden gewünscht sind',
      'welche Branche angesprochen wird',
      'was der Pilotkunde davon hat',
    ],
  },
  {
    id: 'importeur',
    frage: 'Du suchst einen Importeur oder Großhändler?',
    richtung: 'DK → DE',
    beispielAnfrage:
      'Wir produzieren nachhaltige Reinigungsmittel und suchen einen Großhändler, der Zugang zum deutschen Fachhandel oder Drogeriemarkt hat — idealerweise mit Erfahrung im Bereich Öko-Produkte.',
    ziel: 'Aufbau eines dauerhaften Vertriebswegs über den Fachhandel.',
    regionen: ['Deutschland – bundesweit', 'Schwerpunkt Norddeutschland'],
    alternativen: ['Fachhandel-Distributoren', 'Bio-Großhändler', 'Online-Marktplätze für Nachhaltigkeit'],
    stand: [
      'Produktpalette definiert',
      'Zertifizierungen vorhanden',
      'Preislisten in Vorbereitung',
    ],
    erklaerung: [
      'welche Produktkategorie relevant ist',
      'welcher Handelskanal angestrebt wird',
      'welche Spezialisierung gewünscht ist',
      'was bereits vorbereitet ist',
    ],
  },
  {
    id: 'kommunen',
    frage: 'Du suchst Zugang zu Kommunen oder öffentlichen Auftraggebern?',
    richtung: 'DE → DK',
    beispielAnfrage:
      'Wir bieten eine digitale Lösung für die Verwaltung kommunaler Infrastruktur und suchen Kontakte zu dänischen Kommunen, Stadtwerken oder Versorgungsunternehmen, die an einem Pilotprojekt interessiert wären.',
    ziel: 'Zugang zum öffentlichen Sektor in Dänemark, Pilotprojekt mit einer Kommune.',
    regionen: ['Süddänemark', 'Region Syddanmark', 'Sjælland'],
    alternativen: ['Kommunalverbände', 'Infrastruktur-Dienstleister', 'Beratungsunternehmen im Public Sector'],
    stand: [
      'Lösung im Einsatz bei deutschen Kommunen',
      'Referenzprojekte vorhanden',
      'Englischsprachige Dokumentation',
    ],
    erklaerung: [
      'für welchen Bereich die Lösung gedacht ist',
      'welche Art von Einrichtung angesprochen wird',
      'dass bereits Referenzen existieren',
      'was konkret gesucht wird (Pilotprojekt)',
    ],
  },
  {
    id: 'servicepartner',
    frage: 'Du suchst einen Servicepartner vor Ort?',
    richtung: 'DK → DE',
    beispielAnfrage:
      'Wir verkaufen Industrieanlagen nach Deutschland und suchen einen Servicepartner, der Wartung, Ersatzteilversorgung und Kundenbetreuung im Raum Süddeutschland übernehmen kann.',
    ziel: 'Verlässliche technische Präsenz in Deutschland ohne eigene Niederlassung.',
    regionen: ['Bayern', 'Baden-Württemberg'],
    alternativen: ['Technische Dienstleister', 'Wartungsunternehmen', 'freie Servicetechniker'],
    stand: [
      'Bestehende Kunden in Deutschland',
      'Technische Dokumentation auf Deutsch',
      'Schulungskonzept vorhanden',
    ],
    erklaerung: [
      'welche Leistungen der Partner erbringen soll',
      'in welcher Region Präsenz benötigt wird',
      'dass keine eigene Gründung geplant ist',
      'welche Unterstützung geboten wird (Schulung)',
    ],
  },
  {
    id: 'kooperationspartner',
    frage: 'Du suchst einen Kooperations- oder Fertigungspartner?',
    richtung: 'DE ↔ DK',
    beispielAnfrage:
      'Wir sind ein mittelständisches Metallbauunternehmen und suchen einen dänischen Fertigungspartner für Serienbauteile — idealerweise mit CNC-Kapazitäten und Erfahrung in der Automobilzulieferung.',
    ziel: 'Langfristiger Fertigungspartner für Kapazitätserweiterung.',
    regionen: ['Dänemark – Jylland', 'Grenzregion Sønderjylland'],
    alternativen: ['Lohnfertiger', 'Co-Manufacturing', 'Zulieferer mit eigener Entwicklung'],
    stand: [
      'Technische Zeichnungen vorhanden',
      'Stückzahlen definiert',
      'Qualitätsanforderungen dokumentiert',
    ],
    erklaerung: [
      'welche Fertigungsart benötigt wird',
      'welche Branchenerfahrung wichtig ist',
      'dass es um langfristige Zusammenarbeit geht',
      'was konkret mitgebracht wird (Zeichnungen, Mengen)',
    ],
  },
  {
    id: 'referenzkunden',
    frage: 'Du suchst erste Referenzkunden für eine neue Lösung?',
    richtung: 'DK → DE',
    beispielAnfrage:
      'Wir haben eine Energiemanagement-Lösung für Gewerbeimmobilien entwickelt und suchen zwei bis drei Gebäudebetreiber in Deutschland, die bereit sind, die Lösung im laufenden Betrieb einzusetzen.',
    ziel: 'Dokumentierte Referenzprojekte für den deutschen Markt.',
    regionen: ['Norddeutschland', 'Metropolregion Hamburg'],
    alternativen: ['Facility-Management-Unternehmen', 'Immobilienverwalter', 'Stadtwerke mit Gebäudebestand'],
    stand: [
      'Lösung im Einsatz in Dänemark',
      'Deutsche Zertifizierungen in Vorbereitung',
      'Deutschsprachiger Support geplant',
    ],
    erklaerung: [
      'was die Lösung konkret tut',
      'für welche Zielgruppe sie gedacht ist',
      'wie viele Referenzkunden gesucht werden',
      'dass praktische Erfahrung im Heimatmarkt existiert',
    ],
  },
  {
    id: 'strategisch',
    frage: 'Du suchst einen strategischen Partner für den Markteintritt?',
    richtung: 'DE ↔ DK',
    beispielAnfrage:
      'Wir möchten den dänischen Markt erschließen und suchen ein lokales Unternehmen, das als Vertriebspartner oder Co-Branding-Partner auftreten kann — idealerweise mit bestehendem Kundenstamm in unserer Branche.',
    ziel: 'Strukturierter Markteintritt mit lokalem Partner statt eigener Gründung.',
    regionen: ['Dänemark – landesweit', 'Schwerpunkt København'],
    alternativen: ['Lizenzpartner', 'Joint Venture', 'Handelsvertreter', 'Franchise-Nehmer'],
    stand: [
      'Geschäftsmodell erprobt im Heimatmarkt',
      'Business Case für Dänemark erstellt',
      'Budget für Markteinführung vorhanden',
    ],
    erklaerung: [
      'welche Art von Partnerschaft gewünscht ist',
      'dass keine Neugründung geplant ist',
      'welche Vorarbeit geleistet wurde',
      'welche Rolle der Partner übernehmen soll',
    ],
  },
]

/* ══════════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════════ */

export default function KooperationsbeispielePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Inspiration</p>
          <h1>So formulieren andere Unternehmen ihre Suche</h1>
          <p className={styles.heroSub}>
            Gute Anfragen sind konkret. Hier zeigen wir, wie das aussehen kann &mdash;
            mit Beispielen, die Ihnen helfen, Ihre eigene Idee klarer zu formulieren.
          </p>
        </div>
      </section>

      {/* ── INTRO HINT ── */}
      <section className={styles.introBar}>
        <div className={styles.introInner}>
          <span className={styles.introIcon}>&#128161;</span>
          <p>
            Diese Seite ist keine Referenzliste. Sie zeigt, wie eine gut formulierte Suchanfrage
            aussehen kann &mdash; und welche M&ouml;glichkeiten Sie vielleicht noch nicht bedacht haben.
          </p>
        </div>
      </section>

      {/* ── SUCHIDEEN GRID ── */}
      <section className={styles.ideen}>
        <div className={styles.ideenInner}>
          {SUCHIDEEN.map((idee) => (
            <article key={idee.id} className={styles.card}>

              {/* Header */}
              <div className={styles.cardHeader}>
                <span className={styles.richtung}>{idee.richtung}</span>
                <h2 className={styles.cardFrage}>{idee.frage}</h2>
              </div>

              {/* Example query */}
              <div className={styles.queryBlock}>
                <p className={styles.queryLabel}>So konkret k&ouml;nnte eine Anfrage aussehen:</p>
                <blockquote className={styles.query}>
                  &bdquo;{idee.beispielAnfrage}&ldquo;
                </blockquote>
              </div>

              {/* Info grid */}
              <div className={styles.infoGrid}>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>
                    <span className={styles.infoIcon}>&#127919;</span> Ziel
                  </h3>
                  <p>{idee.ziel}</p>
                </div>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>
                    <span className={styles.infoIcon}>&#128205;</span> Region
                  </h3>
                  <div className={styles.chipGroup}>
                    {idee.regionen.map((r, i) => (
                      <span key={i} className={styles.chip}>{r}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>
                    <span className={styles.infoIcon}>&#129309;</span> Alternativ interessante Kontakte
                  </h3>
                  <ul className={styles.altList}>
                    {idee.alternativen.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.infoItem}>
                  <h3 className={styles.infoTitle}>
                    <span className={styles.infoIcon}>&#128994;</span> Stand des Vorhabens
                  </h3>
                  <ul className={styles.standList}>
                    {idee.stand.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Why it works */}
              <div className={styles.whyBox}>
                <h3 className={styles.whyTitle}>
                  <span className={styles.infoIcon}>&#128161;</span> Warum diese Anfrage gut funktioniert
                </h3>
                <p className={styles.whyIntro}>Sie beschreibt:</p>
                <ul className={styles.whyList}>
                  {idee.erklaerung.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Haben Sie eine &auml;hnliche Idee?</h2>
          <p>
            Beschreiben Sie uns Ihr Vorhaben &mdash; so konkret wie m&ouml;glich.
            Wir helfen Ihnen, daraus eine passende Suchanfrage zu machen.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/anfrage-einreichen" className="btn-amber">
              Eigenes Gesuch einreichen &rarr;
            </Link>
            <Link href="/marktplatz" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Aktuelle Gesuche ansehen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
