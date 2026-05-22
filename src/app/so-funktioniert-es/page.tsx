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

      {/* ── STORY TIMELINE (Interessierte) – DETAILLIERT & VERTRAUENSAUFBAU ── */}
      {activeRole === 'interessierte' && (
        <section className={styles.storySection}>
          <div className={styles.sectionContent}>
            <div className={styles.storyHeader}>
              <h2>So läuft deine Interessenbekundung ab</h2>
              <p className={styles.storySubtitle}>
                Von der Entdeckung bis zum ersten Kontakt – wir helfen dir, sinnvolle Kontakte zu knüpfen. Nicht wahllos, sondern bewusst vorbereitet.
              </p>
            </div>

            <div className={styles.storyTimeline}>
              {PROZESS_INTERESSENTEN.map((step) => (
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
