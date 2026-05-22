'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import ProcessSteps from '@/components/ProcessSteps'
import FAQItem from '@/components/FAQItem'
import { PROZESS_SUCHENDE, PROZESS_INTERESSENTEN, FAQ } from '@/lib/content'
import styles from './page.module.css'

export default function AblaufPage() {
  const [activeRole, setActiveRole] = useState<'suchende' | 'interessierte'>('suchende')

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Ablauf</h1>
          <p>Wähle deine Rolle und entdecke, wie Easy-B2B für dich funktioniert.</p>
        </div>
      </section>

      {/* ── AUSWAHL-KACHELN ── */}
      <section className={styles.choiceSection}>
        <div className={styles.sectionContent}>
          <div className={styles.choiceGrid}>
            {/* KACHEL 1: Suchende */}
            <button
              className={`${styles.choiceCard} ${activeRole === 'suchende' ? styles.active : ''}`}
              onClick={() => setActiveRole('suchende')}
            >
              <div className={styles.choiceIcon}>🔍</div>
              <h3 className={styles.choiceTitle}>Ablauf für Suchende</h3>
              <p className={styles.choiceText}>Du hast eine konkrete Anfrage und suchst qualifizierte Kooperationspartner.</p>
              <span className={styles.choiceButton}>Ablauf ansehen →</span>
            </button>

            {/* KACHEL 2: Interessierte */}
            <button
              className={`${styles.choiceCard} ${activeRole === 'interessierte' ? styles.active : ''}`}
              onClick={() => setActiveRole('interessierte')}
            >
              <div className={styles.choiceIcon}>💡</div>
              <h3 className={styles.choiceTitle}>Ablauf für Interessierte</h3>
              <p className={styles.choiceText}>Du möchtest auf Gesuche antworten und neue Partnerschaften aufbauen.</p>
              <span className={styles.choiceButton}>Ablauf ansehen →</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── STORY TIMELINE (Suchende) – DETAILLIERT & VERTRAUENSAUFBAU ── */}
      {activeRole === 'suchende' && (
        <section className={styles.storySection}>
          <div className={styles.sectionContent}>
            <div className={styles.storyHeader}>
              <h2>So läuft deine Anfrage ab</h2>
              <p className={styles.storySubtitle}>
                Von der ersten Idee bis zum ersten Kontakt – wir begleiten dich persönlich. Vertrauensvoll, transparent, menschlich.
              </p>
            </div>

            <div className={styles.storyTimeline}>
              {PROZESS_SUCHENDE.map((step) => (
                <div key={step.nr} className={styles.storyStep}>
                  <div className={styles.stepMarker}>
                    <div className={styles.stepNumber}>{step.nr}</div>
                    <div className={styles.stepLabel}>{step.icon}</div>
                  </div>

                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p className={styles.stepShortDesc}>{step.shortDesc}</p>
                    {step.details && step.details.length > 0 && (
                      <ul className={styles.stepDetails}>
                        {step.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DETAILLIERTES BEISPIEL: STORY TIMELINE (Interessierte) ── */}
      {activeRole === 'interessierte' && (
        <section className={styles.storySection}>
          <div className={styles.sectionContent}>
            <div className={styles.storyHeader}>
              <h2>Beispiel: So entdeckst du passende Anfragen</h2>
              <p className={styles.storySubtitle}>
                Ein beispielhafter Ablauf vom Marktplatz bis zur ersten Zusammenarbeit – aus Sicht eines Interessierten.
              </p>
            </div>

            <div className={styles.storyTimeline}>
              {/* SCHRITT 1: Entdecken */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepLabel}>Entdecken</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Du entdeckst eine interessante Anfrage</h3>
                  <p>Im Marktplatz findest du ein Gesuch, das zu deinem Unternehmen, Produkt oder Netzwerk passt.</p>
                </div>
              </div>

              {/* SCHRITT 2: Interesse bekunden */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepLabel}>Interesse</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Du bekkundest Interesse</h3>
                  <p>Du erklärst kurz, warum du zur Anfrage passt und wie du zusammenarbeiten möchtest.</p>
                </div>
              </div>

              {/* SCHRITT 3: Prüfung */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepLabel}>Prüfung</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Easy-B2B prüft das Match</h3>
                  <p>Persönliche Prüfung: Passt ihr wirklich zusammen? Sind die Anforderungen erfüllt?</p>
                </div>
              </div>

              {/* SCHRITT 4: Kontakt */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepLabel}>Kontakt</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Kontakt wird hergestellt</h3>
                  <p>Easy-B2B stellt euch vor oder gibt den Kontakt frei. Von da an läuft es direkt zwischen euch.</p>
                </div>
              </div>

              {/* SCHRITT 5: Erstes Gespräch */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepLabel}>Gespräch</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Ihr lernt euch kennen</h3>
                  <p>Erste Gespräche entstehen. Ihr überprüft, ob eine echte Zusammenarbeit sinnvoll ist.</p>
                </div>
              </div>

              {/* SCHRITT 6: Zusammenarbeit */}
              <div className={styles.storyStep}>
                <div className={styles.stepMarker}>
                  <div className={styles.stepNumber}>6</div>
                  <div className={styles.stepLabel}>Start</div>
                </div>

                <div className={styles.stepContent}>
                  <h3>Direkte Abstimmung</h3>
                  <p>Alles Weitere läuft direkt zwischen euch. Easy-B2B hat den Kontakt erfolgreich ermöglicht.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Häufig gestellte Fragen</h2>
          <div className={styles.faqList}>
            {FAQ.map((item, idx) => (
              <FAQItem
                key={idx}
                frage={item.frage}
                antwort={item.antwort}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <h2>Bereit, den nächsten Schritt zu machen?</h2>
        <p>
          {activeRole === 'suchende'
            ? 'Stelle deine Anfrage ein und finde qualifizierte Kooperationspartner.'
            : 'Entdecke interessante Anfragen und melde dein Interesse an.'}
        </p>
        <Link
          href={activeRole === 'suchende' ? '/anfrage-einreichen' : '/marktplatz'}
          className="btn-primary"
        >
          {activeRole === 'suchende' ? 'Anfrage stellen →' : 'Zum Marktplatz →'}
        </Link>
      </section>

      <Footer />
    </>
  )
}
