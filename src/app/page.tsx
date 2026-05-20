import Link from 'next/link'
import AnzeigeCard from '@/components/AnzeigeCard'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE, STATS, DEMO_ANFRAGEN, KOOPERATIONS_TEASER, PROZESS_HOMEPAGE, BEISPIELE_HOMEPAGE } from '@/lib/content'
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

      {/* ── SO FUNKTIONIERT EASYB2B ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionContent}>
          <div className={styles.processHeader}>
            <h2>So funktioniert Easy-B2B</h2>
            <p className={styles.processSubtitle}>Von der ersten Idee zur passenden deutsch-dänischen Kooperation.</p>
          </div>

          <div className={styles.processSteps}>
            {PROZESS_HOMEPAGE.map((step, idx) => (
              <div key={step.nr} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.nr}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {idx < PROZESS_HOMEPAGE.length - 1 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>

          <div className={styles.processBadge}>
            <span className={styles.badgeIcon}>✓</span>
            <strong>Wir bringen nicht möglichst viele Kontakte zusammen – sondern die richtigen.</strong>
          </div>

          <div className={styles.typischeGesuche}>
            <h3 className={styles.gesuchwTitle}>Typische Gesuche können sein:</h3>
            <div className={styles.gesuchwGrid}>
              {BEISPIELE_HOMEPAGE.map((beispiel, idx) => (
                <div key={idx} className={styles.gesuchwCard}>
                  <span className={styles.gesuchwBullet}>→</span>
                  {beispiel}
                </div>
              ))}
            </div>
          </div>
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

      {/* ── KOOPERATIONEN ZUM ANFASSEN ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kooperationen zum Anfassen</h2>
          <p className={styles.introText}>
            Schau dir an, welche Arten von Partnerschaften über EasyB2B möglich sind.
          </p>
          <div className={styles.cooperationGrid}>
            {KOOPERATIONS_TEASER.map((coop) => (
              <div key={coop.id} className={styles.cooperationCard}>
                <div className={styles.coopIcon}>{coop.icon}</div>
                <h3 className={styles.coopTitle}>{coop.titel}</h3>
                <p className={styles.coopDesc}>{coop.kurzbeschreibung}</p>
              </div>
            ))}
          </div>
          <div className={styles.cooperationCta}>
            <Link href="/kooperationsbeispiele" className="btn-primary">
              Mehr Kooperationsbeispiele ansehen →
            </Link>
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
