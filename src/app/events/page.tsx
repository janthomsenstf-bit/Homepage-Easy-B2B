import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { PITCH_AND_MEET } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Events – Pitch & Meet Deutsch-Dänische Begegnungen',
  description: 'Pitch & Meet: Wenn Deutsche und Dänen echte Sache machen. Begegnungen. Synergien. Kooperationen.',
}

export default function EventsPage() {
  return (
    <>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroTopline}>{PITCH_AND_MEET.hero.topline}</p>
          <h1 className={styles.heroTitle}>{PITCH_AND_MEET.hero.title}</h1>
          <p className={styles.heroSubtitle}>{PITCH_AND_MEET.hero.subtitle}</p>
        </div>
      </section>

      {/* ── FORMAT SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.formatHeadline}>{PITCH_AND_MEET.formatSection.headline}</h2>
          <p className={styles.formatTagline}>{PITCH_AND_MEET.formatSection.tagline}</p>

          <div className={styles.formatPoints}>
            {PITCH_AND_MEET.formatSection.points.map((point, idx) => (
              <div key={idx} className={styles.formatPoint}>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT IN CAR HERO SECTION ── */}
      <section className={`${styles.section} ${styles.connectHeroSection}`}>
        <div className={styles.connectHeroContainer}>
          <div className={styles.connectHeroLeft}>
            <h2 className={styles.connectHeadline}>{PITCH_AND_MEET.connectInCar.headline}</h2>
            <p className={styles.connectTagline}>{PITCH_AND_MEET.connectInCar.tagline}</p>
            <p className={styles.connectDescription}>{PITCH_AND_MEET.connectInCar.description}</p>

            <div className={styles.connectFeeling}>
              {PITCH_AND_MEET.connectInCar.feeling.map((item, idx) => (
                <p key={idx} className={styles.connectFeelingItem}>{item}</p>
              ))}
            </div>
          </div>

          <div className={styles.connectHeroRight}>
            <div className={styles.connectPlaceholder}>
              <span className={styles.placeholderIcon}>{PITCH_AND_MEET.connectInCar.icon}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE SECTION ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.timelineTitle}>So läuft der Tag ab</h2>

          <div className={styles.timeline}>
            {PITCH_AND_MEET.timeline.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineTime}>{item.time}</div>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                  <p className={styles.timelineItemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.cultureTitle}>{PITCH_AND_MEET.culture.title}</h2>
          <p className={styles.cultureMessage}>{PITCH_AND_MEET.culture.shortMessage}</p>

          <div className={styles.cultureExamples}>
            {PITCH_AND_MEET.culture.examples.map((example, idx) => (
              <p key={idx} className={styles.cultureExample}>{example}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM SECTION ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.forWhomTitle}>Für wen ist Pitch & Meet?</h2>
          <p className={styles.forWhomIntro}>{PITCH_AND_MEET.forWhom.intro}</p>

          <div className={styles.personasGrid}>
            {PITCH_AND_MEET.forWhom.personas.map((persona, idx) => (
              <div key={idx} className={styles.personaCard}>
                <div className={styles.personaIcon}>{persona.icon}</div>
                <h3 className={styles.personaName}>{persona.name}</h3>
                <p className={styles.personaStory}>{persona.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.cta.headline}</h2>
          <Link href={PITCH_AND_MEET.cta.link} className="btn-primary">
            {PITCH_AND_MEET.cta.button} →
          </Link>
        </div>
      </section>

      {/* ── FOOTER INFO ── */}
      <section className={`${styles.section} ${styles.footerInfo}`}>
        <div className={styles.sectionContent}>
          <div className={styles.footerNotes}>
            <p><strong>Mit dem BVMW im Rücken.</strong> {PITCH_AND_MEET.bvmw_note}</p>
            <p><strong>Investition in echte Netzwerk-Momente.</strong> {PITCH_AND_MEET.costs_note}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
