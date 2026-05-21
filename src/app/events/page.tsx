import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { PITCH_AND_MEET } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Events – Pitch & Meet Deutsch-Dänische Begegnungen',
  description: 'Pitch & Meet: Deutsche und dänische Unternehmen treffen sich live. Konkrete Ideen, echte Kooperation, echte Begegnungen. Nicht digital. Nicht anonym. Sondern echt.',
}

export default function EventsPage() {
  return (
    <>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{PITCH_AND_MEET.hero.title}</h1>
          <p className={styles.heroSubtitle}>{PITCH_AND_MEET.hero.subtitle}</p>
          <p className={styles.heroIntro}>{PITCH_AND_MEET.hero.intro}</p>
          <div className={styles.heroCTA}>
            <Link href="#pitch-meet" className="btn-primary">
              Zum Pitch & Meet Format ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPRACHE & KULTUR SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.cultureBlock}>
            <div className={styles.cultureLead}>
              <h2 className={styles.cultureTitle}>{PITCH_AND_MEET.culture_section.title}</h2>
              <p className={styles.cultureIntro}>{PITCH_AND_MEET.culture_section.intro}</p>
            </div>
            <div className={styles.culturePoints}>
              <p className={styles.culturePoint}>{PITCH_AND_MEET.culture_section.point1}</p>
              <p className={styles.culturePoint}>{PITCH_AND_MEET.culture_section.point2}</p>
            </div>
            <div className={styles.cultureBenefits}>
              <h3 className={styles.cultureBenefitsTitle}>Das hilft dabei:</h3>
              <ul className={styles.benefitsList}>
                {PITCH_AND_MEET.culture_section.benefits.map((benefit, idx) => (
                  <li key={idx} className={styles.benefitItem}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PITCH & MEET FORMAT SECTION ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="pitch-meet">
        <div className={styles.sectionContent}>
          <h2 className={styles.formatTitle}>{PITCH_AND_MEET.pitch_format.title}</h2>
          <p className={styles.formatSubtitle}>{PITCH_AND_MEET.pitch_format.subtitle}</p>

          <div className={styles.formatDescription}>
            <p>{PITCH_AND_MEET.pitch_format.description}</p>
          </div>

          <div className={styles.pitchHighlight}>
            <p className={styles.highlight}>{PITCH_AND_MEET.pitch_format.highlight}</p>
          </div>

          <div className={styles.whatCompaniesSeek}>
            <h3>Was Unternehmen auf Pitch & Meet suchen:</h3>
            <ul className={styles.seekList}>
              {PITCH_AND_MEET.pitch_format.what_companies_seek.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.importantMessage}>
            <p>{PITCH_AND_MEET.pitch_format.important_message}</p>
          </div>
        </div>
      </section>

      {/* ── CONNECT IN CAR SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.connectBlock}>
            <div className={styles.connectIcon}>{PITCH_AND_MEET.connectInCar.icon}</div>
            <div className={styles.connectContent}>
              <h2 className={styles.connectTitle}>{PITCH_AND_MEET.connectInCar.title}</h2>
              <p className={styles.connectDesc}>{PITCH_AND_MEET.connectInCar.description}</p>
              <p className={styles.connectDetail}>{PITCH_AND_MEET.connectInCar.detail}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABLAUF (5 SCHRITTE) SECTION ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Der Ablauf: 5 konkrete Schritte</h2>
          <p className={styles.sectionIntro}>
            Vom Gedanken bis zur Kooperation.
          </p>

          <div className={styles.ablaufContainer}>
            {PITCH_AND_MEET.ablauf.map((step, idx) => (
              <div key={step.nr} className={styles.ablaufItem}>
                <div className={styles.ablaufHeader}>
                  <div className={styles.ablaufIcon}>{step.icon}</div>
                  <h3 className={styles.ablaufTitle}>
                    <span className={styles.ablaufNumber}>{step.nr}.</span>
                    {step.title}
                  </h3>
                </div>
                <p className={styles.ablaufText}>{step.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FÜR WEN IST PITCH & MEET? SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.for_whom.title}</h2>
          <p className={styles.forWhomIntro}>{PITCH_AND_MEET.for_whom.intro}</p>

          <div className={styles.profilesGrid}>
            {PITCH_AND_MEET.for_whom.profiles.map((profile, idx) => (
              <div key={idx} className={styles.profileCard}>
                <div className={styles.profileIcon}>{profile.icon}</div>
                <h3 className={styles.profileTitle}>{profile.title}</h3>
                <p className={styles.profileDesc}>{profile.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BVMW PARTNERSHIP SECTION ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <div className={styles.bvmwBlock}>
            <h2>{PITCH_AND_MEET.bvmw.title}</h2>
            <p>{PITCH_AND_MEET.bvmw.beschreibung}</p>
            <p className={styles.bvmwNote}>
              Der BVMW (Bundesverband mittelständische Wirtschaft) hilft dabei, passende Besucher, Unternehmen und Netzwerke zu schaffen – und gibt Pitch & Meet große Reichweite.
            </p>
          </div>
        </div>
      </section>

      {/* ── KOSTEN & TEILNAHME SECTION ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kosten & Teilnahme</h2>

          <div className={styles.costsGrid}>
            <div className={styles.costCard}>
              <h3>Warum können Kosten entstehen?</h3>
              <p>{PITCH_AND_MEET.costs.why_costs}</p>
            </div>
            <div className={styles.costCard}>
              <h3>Für wen ist das interessant?</h3>
              <p>{PITCH_AND_MEET.costs.for_whom}</p>
            </div>
            <div className={styles.costCard}>
              <h3>Was ist die Alternative?</h3>
              <p>{PITCH_AND_MEET.costs.alternative}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.cta.title}</h2>
          <p>{PITCH_AND_MEET.cta.beschreibung}</p>
          <Link href={PITCH_AND_MEET.cta.link} className="btn-primary">
            {PITCH_AND_MEET.cta.button} →
          </Link>
        </div>
      </section>

      {/* ── WEITERE FORMATE TEASER ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>{PITCH_AND_MEET.otherFormats.title}</h2>
          <p className={styles.sectionIntro}>{PITCH_AND_MEET.otherFormats.intro}</p>
          <div className={styles.otherFormatsList}>
            {PITCH_AND_MEET.otherFormats.examples.map((format, idx) => (
              <div key={idx} className={styles.formatItem}>
                <span className={styles.formatBullet}>→</span>
                {format}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
