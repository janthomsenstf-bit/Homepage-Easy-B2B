import Link from 'next/link'
import AnzeigeCard from '@/components/AnzeigeCard'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE, STATS, DEMO_ANFRAGEN, KOOPERATIONS_TEASER, PROZESS_HOMEPAGE, BEISPIELE_KATEGORIEN, ANFRAGE_DETAILS, BEISPIEL_ANFRAGE, BEISPIEL_INTERESSENTEN } from '@/lib/content'
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
            <h3 className={styles.gesuchwTitle}>Das ist möglich über Easy-B2B:</h3>
            <div className={styles.kategorienGrid}>
              {BEISPIELE_KATEGORIEN.map((kategorie, idx) => (
                <div key={idx} className={styles.kategorieBlock}>
                  <h4 className={styles.kategorieTitle}>{kategorie.kategorie}</h4>
                  <ul className={styles.kategorieList}>
                    {kategorie.beispiele.map((beispiel, bidx) => (
                      <li
                        key={bidx}
                        className={styles.kategorieItem}
                        dangerouslySetInnerHTML={{ __html: beispiel.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KOMPAKTE STORY-VORSCHAU ── */}
      <section className={styles.storyPreviewSection}>
        <div className={styles.sectionContent}>
          <h2>So könnte eine Kooperation entstehen</h2>

          <div className={styles.storyPreviewIntro}>
            <p>
              Ein dänischer Hersteller für Holzspielzeug sucht Vertriebspartner in Deutschland.
              So könnte der Ablauf über Easy-B2B aussehen:
            </p>
          </div>

          <div className={styles.storyPreviewSteps}>
            <div className={styles.previewStep}>
              <div className={styles.previewNumber}>1</div>
              <h3>Anfrage einreichen</h3>
              <p>Hersteller beschreibt konkret, was er sucht</p>
            </div>

            <div className={styles.previewArrow}>→</div>

            <div className={styles.previewStep}>
              <div className={styles.previewNumber}>2</div>
              <h3>Easy-B2B prüft</h3>
              <p>Persönliche Prüfung & Optimierung</p>
            </div>

            <div className={styles.previewArrow}>→</div>

            <div className={styles.previewStep}>
              <div className={styles.previewNumber}>3</div>
              <h3>Interessenten melden sich</h3>
              <p>Passende Unternehmen aus dem Netzwerk</p>
            </div>

            <div className={styles.previewArrow}>→</div>

            <div className={styles.previewStep}>
              <div className={styles.previewNumber}>4</div>
              <h3>Verbindung entsteht</h3>
              <p>Erstes Gespräch oder Zusammenarbeit</p>
            </div>
          </div>

          <div className={styles.storyPreviewExamples}>
            <p className={styles.examplesLabel}>Beispielhafte Interessenten:</p>
            <div className={styles.examplesGrid}>
              <div className={styles.exampleCard}>
                <span>🇩🇪</span>
                <div>
                  <strong>Spielwarenhandel</strong>
                  <small>Düsseldorf</small>
                </div>
              </div>
              <div className={styles.exampleCard}>
                <span>🇩🇪</span>
                <div>
                  <strong>Handelsvertreter</strong>
                  <small>Hamburg</small>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.storyPreviewCta}>
            <Link href="/so-funktionierts" className="btn-primary">
              So funktioniert der Ablauf im Detail →
            </Link>
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
