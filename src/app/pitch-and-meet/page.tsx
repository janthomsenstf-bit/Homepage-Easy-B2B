import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { PITCH_AND_MEET } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Pitch & Meet – Deutsch-dänische Unternehmenstreffen',
  description: 'Live-Format für deutsch-dänische Unternehmenspartnerschaften. Unternehmen stellen sich vor, Netzwerk entsteht persönlich.',
}

export default function PitchAndMeetPage() {
  return (
    <>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>🎤 Veranstaltungsformat</div>
            <h1 className={styles.heroTitle}>{PITCH_AND_MEET.hero.title}</h1>
            <p className={styles.heroSubtitle}>{PITCH_AND_MEET.hero.subtitle}</p>
            <p className={styles.heroIntro}>{PITCH_AND_MEET.hero.intro}</p>
            <Link href="/anfrage-einreichen" className="btn-primary">
              Jetzt bewerben →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORMAT EXPLANATION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.formatBlock}>
            <div className={styles.formatIcon}>{PITCH_AND_MEET.format.icon}</div>
            <div className={styles.formatText}>
              <h2>{PITCH_AND_MEET.format.title}</h2>
              <p className={styles.formatDescription}>{PITCH_AND_MEET.format.description}</p>
              <p className={styles.formatMessage}>{PITCH_AND_MEET.format.message}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STEP ABLAUF ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Der Ablauf in 5 Schritten</h2>
          <p className={styles.sectionIntro}>
            Von der Bewerbung bis zu echten Partnerschaften.
          </p>

          <div className={styles.ablaufContainer}>
            {PITCH_AND_MEET.ablauf.map((step, idx) => (
              <div key={step.nr} className={styles.ablaufWrapper}>
                <div className={styles.ablaufCard}>
                  <div className={styles.ablaufIcon}>{step.icon}</div>
                  <div className={styles.ablaufNumber}>Schritt {step.nr}</div>
                  <h3 className={styles.ablaufTitle}>{step.title}</h3>
                  <p className={styles.ablaufDesc}>{step.beschreibung}</p>
                </div>
                {idx < PITCH_AND_MEET.ablauf.length - 1 && (
                  <div className={styles.ablaufArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT IN CAR ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.connectInCarBlock}>
            <div className={styles.connectInCarIcon}>{PITCH_AND_MEET.connectInCar.icon}</div>
            <div className={styles.connectInCarContent}>
              <h2>{PITCH_AND_MEET.connectInCar.title}</h2>
              <p>{PITCH_AND_MEET.connectInCar.beschreibung}</p>
              <p className={styles.connectInCarNote}>
                <strong>Die Idee:</strong> Netzwerken mal anders. 10 Minuten Austausch, dann zum nächsten Gesprächspartner. Informell, effektiv, spontan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BVMW PARTNERSHIP ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <div className={styles.bvmwBlock}>
            <div className={styles.bvmwIcon}>{PITCH_AND_MEET.bvmw.icon}</div>
            <div className={styles.bvmwContent}>
              <h2>{PITCH_AND_MEET.bvmw.title}</h2>
              <p>{PITCH_AND_MEET.bvmw.beschreibung}</p>
              <p className={styles.bvmwNote}>
                Dadurch werden die richtigen Unternehmen auf die Veranstaltung aufmerksam – Gäste, Partner und Netzwerke entstehen, nicht zufällig, sondern gezielt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KOSTEN & TEILNAHME ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kosten & Teilnahme</h2>
          <p className={styles.sectionIntro}>
            {PITCH_AND_MEET.costs.intro}
          </p>

          <div className={styles.costsExplanation}>
            <p>
              <strong>Warum können Kosten entstehen?</strong> Gute Veranstaltungen brauchen gute Vorbereitung, passende Gäste, professionelle Moderation und hochwertige Netzwerk-Momente. Das kostet Zeit und Ressourcen.
            </p>
            <p>
              <strong>Für wen ist das interessant?</strong> Für Unternehmen, die ihre Idee oder ihr Produkt ernsthaft vorstellen möchten – und die mit echten, qualifizierten Partnern zusammenkommen wollen.
            </p>
            <p>
              <strong>Was ist die Alternative?</strong> Easy-B2B bleibt auch digital und kostenfrei. Pitch & Meet ist ein zusätzliches Angebot für Unternehmen, die auch persönlich präsent sein möchten.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.cta.title}</h2>
          <p className={styles.ctaDescription}>
            {PITCH_AND_MEET.cta.beschreibung}
          </p>
          <Link href={PITCH_AND_MEET.cta.link} className="btn-primary">
            {PITCH_AND_MEET.cta.button} →
          </Link>
        </div>
      </section>

      {/* ── WEITERE FORMATE ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.otherFormats.title}</h2>
          <p className={styles.sectionIntro}>
            {PITCH_AND_MEET.otherFormats.intro}
          </p>
          <div className={styles.otherFormatsGrid}>
            {PITCH_AND_MEET.otherFormats.examples.map((format, idx) => (
              <div key={idx} className={styles.formatCard}>
                <span className={styles.formatBullet}>→</span>
                <span className={styles.formatText}>{format}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACK TO HOME ── */}
      <section className={styles.backSection}>
        <div className={styles.sectionContent}>
          <Link href="/" className={styles.backLink}>
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
