import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import AnzeigeCard from '@/components/AnzeigeCard'
import FAQItem from '@/components/FAQItem'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE, STATS, DEMO_ANFRAGEN, PROZESS_SUCHENDE } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'EasyB2B – B2B-Matchmaking DE ↔ DK',
  description: 'Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung zwischen Deutschland und Dänemark.',
}

export default function Home() {
  // Nur die neuesten 3-4 Anzeigen für Homepage
  const featuredAnzeigen = DEMO_ANFRAGEN.slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.pill}>🇩🇰 · 🇩🇪 Dänemark ↔ Deutschland</div>
            <h1>Dein Partner zwischen Nationen</h1>
            <p className={styles.heroSub}>{SITE.tagline}</p>
            <div className={styles.heroBtns}>
              <Link href="/anfrage-einreichen" className="btn-primary">
                Anfrage einreichen
              </Link>
              <Link href="/marktplatz" className="btn-outline">
                Marktplatz ansehen
              </Link>
            </div>
          </div>
          <div className={styles.heroImg}>
            <div className={styles.heroPlaceholder}>🤝</div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className={styles.statsContainer}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WIE ES FUNKTIONIERT ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Drei Schritte zum Match</h2>
          <ProcessSteps
            steps={[
              {
                nr: 1,
                icon: '✏️',
                title: 'Anfrage einreichen',
                desc: 'Du beschreibst konkret was du suchst.',
              },
              {
                nr: 2,
                icon: '🔍',
                title: 'Wir prüfen',
                desc: 'Persönliche, nicht automatisierte Prüfung.',
              },
              {
                nr: 3,
                icon: '🤝',
                title: 'Ihr werdet Vermittelt',
                desc: 'Direkter Kontakt zu qualifizierten Partnern.',
              },
            ]}
            variant="horizontal"
          />
        </div>
      </section>

      {/* ── AKTUELLE ANZEIGEN ── */}
      <section className={`${styles.section} ${styles.sectionOff}`}>
        <div className={styles.sectionContent}>
          <h2>Aktuelle Anfragen im Netzwerk</h2>
          <div className={styles.anzeigeGrid}>
            {featuredAnzeigen.map((anzeige) => (
              <AnzeigeCard
                key={anzeige.id}
                id={anzeige.id}
                richtung={anzeige.richtung}
                branche={anzeige.branche}
                beschreibung={anzeige.beschreibung}
                reifegrad={anzeige.reifegrad}
                gueltigBis={anzeige.gueltigBis}
              />
            ))}
          </div>
          <Link href="/marktplatz" className={styles.moreLink}>
            Alle {DEMO_ANFRAGEN.length} Anfragen ansehen →
          </Link>
        </div>
      </section>

      {/* ── WARUM EASYB2B ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Warum EasyB2B?</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>🛡️</span>
              <div className={styles.whyTitle}>Persönlich geprüft</div>
              <div className={styles.whyText}>
                Jede Anfrage und jeder Interessent wird persönlich überprüft. Keine Automatik.
              </div>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>🔒</span>
              <div className={styles.whyTitle}>DSGVO-konform</div>
              <div className={styles.whyText}>
                Deine Daten sind sicher. Du bestimmst wer sieht was.
              </div>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>⚡</span>
              <div className={styles.whyTitle}>Schnelle Matches</div>
              <div className={styles.whyText}>
                Im Durchschnitt 10-14 Tage zum ersten Match.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <h2>Bereit für neue Partnerschaften?</h2>
        <p>Konkrete B2B-Anfragen treffen auf echte Unternehmen.</p>
        <Link href="/anfrage-einreichen" className="btn-amber">
          Jetzt Anfrage einreichen →
        </Link>
      </section>

      <Footer />
    </>
  )
}
