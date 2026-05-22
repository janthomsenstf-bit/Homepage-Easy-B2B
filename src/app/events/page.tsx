'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { EVENTS_FORMATS } from '@/lib/content'
import styles from './page.module.css'

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(0)

  const eventDetails = [
    {
      icon: '🎤',
      name: 'Pitch & Meet',
      shortDesc: 'Deutsch-dänische Unternehmen pitchen ihre Idee live vor Publikum.',
      fullDesc: 'Unternehmer stellen ihre Idee, ihr Produkt oder ihre Kooperationssuche live vor. Vorbereitet durch kurze Interviews, sichtbar vor dem Event, mit direktem Netzwerken danach.',
      forWhom: 'Für Unternehmen, die eine konkrete Idee haben und auf der anderen Seite der Grenze Partner suchen.',
      whatHappens: [
        '🎬 Kurze Vorbereitung: Interviews mit den Pitch-Unternehmen',
        '📢 Sichtbarkeit: Vorstellung im Netzwerk, Social Media, Newsletter',
        '🎤 Live Event: 10-15 Min Pitch pro Unternehmen + Q&A',
        '🚗 Connect in Car: Netzwerken in Luxus-Fahrzeugen',
        '🤝 Direkte Gespräche: Kooperationen entstehen',
      ],
      why: 'Nicht online oder per Email – sondern von Angesicht zu Angesicht. Das baut Vertrauen auf.',
      cta: 'Mehr über Pitch & Meet →'
    },
    {
      icon: '🏭',
      name: 'Betriebsbesichtigungen',
      shortDesc: 'Besuche echte Produktionsstätten und lerne die Menschen dahinter kennen.',
      fullDesc: 'Exklusive Besuche bei Herstellern und Produktion. Verstehe, wie es wirklich funktioniert.',
      forWhom: 'Für Unternehmen, die Lieferketten verstehen, Produktion sehen oder Fertigung evaluieren möchten.',
      whatHappens: [
        '👷 Führung durch Produktion',
        '👥 Gespräch mit den Machern',
        '❓ Q&A zu Prozessen, Qualität, Kapazität',
        '☕ Informelles Netzwerken',
      ],
      why: 'Fotos und Datenblätter sind nicht genug – sehen ist glauben.',
      cta: null
    },
    {
      icon: '📅',
      name: 'Branchentage',
      shortDesc: 'Fokus auf eine Branche: Expert-Talks, Matching, Diskussionen.',
      fullDesc: 'Spezialisierte Events für Branchen wie Logistik, Maschinenbau, Handel, Technologie.',
      forWhom: 'Für Spezialisten, die Branchen-Expertise und tiefe Gespräche suchen.',
      whatHappens: [
        '🎙 Expert Talks zu Branche & Märkten',
        '📊 Markt-Updates Deutschland/Dänemark',
        '🤝 Gezieltes Matching in der Branche',
        '💼 Tiefe Gespräche mit Gleichgesinnten',
      ],
      why: 'Tiefere Fachkompetenz, besseres Matching, qualitativere Gespräche.',
      cta: null
    },
    {
      icon: '🚗',
      name: 'Connect in Car',
      shortDesc: 'Netzwerken auf der Fahrt zwischen Hamburg und Kopenhagen – 10 Min pro Kontakt.',
      fullDesc: 'Ungewöhnlich, effektiv, persönlich. Netzwerken während einer Luxus-Fahrt über die Grenze.',
      forWhom: 'Für Unternehmer, die Netzwerken mal etwas natürlicher mögen – ohne starre Konferenz-Atmosphäre.',
      whatHappens: [
        '🚙 Luxus-Fahrzeuge (Mercedes, etc.)',
        '⏱ 10 Minuten pro Gesprächs-Runde',
        '🔄 Wechsel zu neuem Gesprächspartner',
        '☕ Getränke & informelle Atmosphäre',
        '🏁 Am Ziel: Neue Kontakte & Synergien',
      ],
      why: 'Netzwerken fühlt sich natürlich an. Echte, ungezwungene Gespräche entstehen.',
      cta: null
    },
    {
      icon: '🤝',
      name: 'Persönliche Netzwerktreffen',
      shortDesc: 'Kleine Gruppen, kleine Städte, großes Ziel: echte Kontakte aufbauen.',
      fullDesc: 'Persönliche Treffen in regionalen Zentren (Hamburg, Kiel, Odense, etc.).',
      forWhom: 'Für Unternehmen, die regionale Netzwerke aufbauen und tiefe Beziehungen schaffen möchten.',
      whatHappens: [
        '👥 Kleine Gruppe (8-15 Personen)',
        '🍽 Informelles Treffen (Dinner, Lunch)',
        '💬 Echte Gespräche über Herausforderungen',
        '🌍 Regionale Fokus',
      ],
      why: 'Persönlich, vertraut, effektiv. Die beste Basis für längerfristige Kooperationen.',
      cta: null
    },
    {
      icon: '🎙',
      name: 'Interviews & Podcasts',
      shortDesc: 'Erfolgsgeschichten von deutsch-dänischen Partnerschaften – zum Hören und Lernen.',
      fullDesc: 'Wir dokumentieren echte deutsch-dänische Kooperations-Geschichten im Audio-Format.',
      forWhom: 'Für alle, die von bestehenden Kooperationen lernen und sich inspirieren lassen möchten.',
      whatHappens: [
        '🎧 Podcast-Episoden mit Unternehmern',
        '📖 Lessons Learned: Was funktioniert',
        '🌉 Deutsch-dänische Perspektiven',
        '🎯 Praktische Tipps für Kooperationen',
      ],
      why: 'Lernen von echten Menschen. Verstehen, wie Kooperationen entstehen und wachsen.',
      cta: null
    },
  ]

  const current = eventDetails[activeEvent]

  return (
    <>
      <Nav />

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroTopline}>🇩🇪 + 🇩🇰</p>
          <h1 className={styles.heroTitle}>Veranstaltungen & Begegnungen</h1>
          <p className={styles.heroSubtitle}>Wähle dein Event-Format und entdecke, wie deutsch-dänische Kooperationen entstehen.</p>
        </div>
      </section>

      {/* ── EVENT TABS / KACHELN ── */}
      <section className={styles.tabsSection}>
        <div className={styles.sectionContent}>
          <div className={styles.eventTabs}>
            {eventDetails.map((event, idx) => (
              <button
                key={idx}
                className={`${styles.eventTab} ${activeEvent === idx ? styles.active : ''}`}
                onClick={() => setActiveEvent(idx)}
              >
                <div className={styles.tabIcon}>{event.icon}</div>
                <div className={styles.tabText}>
                  <div className={styles.tabName}>{event.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT DETAILS BEREICH ── */}
      <section className={styles.detailSection}>
        <div className={styles.sectionContent}>
          <div className={styles.detailCard}>
            <div className={styles.detailHeader}>
              <div className={styles.detailIcon}>{current.icon}</div>
              <div>
                <h2 className={styles.detailTitle}>{current.name}</h2>
                <p className={styles.detailTagline}>{current.shortDesc}</p>
              </div>
            </div>

            <div className={styles.detailBody}>
              <div className={styles.detailSection_}>
                <h3>Beschreibung</h3>
                <p className={styles.description}>{current.fullDesc}</p>
              </div>

              <div className={styles.detailSection_}>
                <h3>Für wen?</h3>
                <p className={styles.description}>{current.forWhom}</p>
              </div>

              <div className={styles.detailSection_}>
                <h3>Was passiert dort?</h3>
                <ul className={styles.whatHappensList}>
                  {current.whatHappens.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.detailSection_}>
                <h3>Warum sinnvoll?</h3>
                <p className={styles.description}>{current.why}</p>
              </div>

              {current.cta && (
                <div className={styles.ctaContainer}>
                  <Link href="#kontakt" className={styles.ctaButton}>
                    {current.cta}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.sectionContent}>
          <div className={styles.ctaContent}>
            <h2>Interessiert an einem Event?</h2>
            <p>Kontaktiere uns für mehr Informationen oder um dein Unternehmen anzumelden.</p>
            <Link href="/kontakt" className="btn-primary">
              Kontakt aufnehmen →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
