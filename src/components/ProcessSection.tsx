'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ProcessSection.module.css'

/* ── Content ── */

const STEPS_SUCHENDE = [
  {
    nr: 1,
    icon: '\u{1F4A1}',
    title: 'Idee oder Vorhaben beschreiben',
    desc: 'Sie schildern, wen oder was Sie suchen. Noch nicht perfekt? Kein Problem — eine klare Idee reicht.',
  },
  {
    nr: 2,
    icon: '\u{1F4AC}',
    title: 'Gemeinsam schärfen',
    desc: 'Wir prüfen Ihre Anfrage und klären offene Fragen. Aus einer Idee wird ein konkretes Projekt.',
  },
  {
    nr: 3,
    icon: '\u{1F4E1}',
    title: 'Sichtbar werden',
    desc: 'Ihr Projekt wird gezielt sichtbar gemacht. Sie entscheiden, wie.',
    channels: ['Netzwerk', 'Empfehlungen', 'LinkedIn', 'Marktplatz', 'Social Media'],
  },
  {
    nr: 4,
    icon: '✅',
    title: 'Passende Interessenten',
    desc: 'Interessenten werden nicht ungeprüft weitergeleitet. Wir schauen: Passt die Branche, die Region, die Motivation?',
    trust: 'Qualität vor Masse',
  },
  {
    nr: 5,
    icon: '\u{1F3AF}',
    title: 'Match-Vorschlag',
    desc: 'Wir schlagen passende Kontakte vor. Beide Seiten entscheiden selbst, ob sie miteinander sprechen möchten.',
    trust: 'Beide behalten die Kontrolle',
  },
  {
    nr: 6,
    icon: '\u{1F91D}',
    title: 'Erstkontakt',
    desc: 'Nach Zustimmung beider Seiten werden die Kontaktdaten ausgetauscht. Der direkte Austausch beginnt.',
  },
]

const STEPS_INTERESSENTEN = [
  {
    nr: 1,
    icon: '\u{1F50D}',
    title: 'Projekt entdecken',
    desc: 'Sie finden ein interessantes Projekt im Marktplatz oder werden gezielt angesprochen.',
  },
  {
    nr: 2,
    icon: '✋',
    title: 'Interesse bekunden',
    desc: 'Sie beschreiben kurz, warum Sie gut passen könnten. Kein Bewerbungsschreiben — nur das Wesentliche.',
  },
  {
    nr: 3,
    icon: '\u{1F50E}',
    title: 'Kurze Prüfung',
    desc: 'Easy-B2B schaut sich Ihr Interesse an. Nicht jede Anfrage passt automatisch — das schützt beide Seiten.',
    trust: 'Persönliche Prüfung',
  },
  {
    nr: 4,
    icon: '\u{1F3AF}',
    title: 'Match-Vorschlag',
    desc: 'Wenn die Voraussetzungen passen, schlagen wir Sie dem Suchenden vor.',
  },
  {
    nr: 5,
    icon: '✅',
    title: 'Zustimmung',
    desc: 'Beide Seiten entscheiden selbst, ob Kontaktdaten ausgetauscht werden. Kein automatischer Datenaustausch.',
    trust: 'DSGVO-konform',
  },
  {
    nr: 6,
    icon: '\u{1F91D}',
    title: 'Kennenlernen',
    desc: 'Der direkte Austausch startet. Ab hier gehört die Beziehung Ihnen.',
  },
]

/* ── Types ── */

interface Step {
  nr: number
  icon: string
  title: string
  desc: string
  channels?: string[]
  trust?: string
}

/* ── Sub-component ── */

function StepCard({ step }: { step: Step }) {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepIcon}>{step.icon}</div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.desc}</p>
      {step.channels && (
        <div className={styles.stepChannels}>
          {step.channels.map(c => (
            <span key={c} className={styles.channelChip}>{c}</span>
          ))}
        </div>
      )}
      {step.trust && (
        <div className={styles.stepTrustBadge}>
          <span className={styles.trustBadgeCheck}>{'✓'}</span>
          {step.trust}
        </div>
      )}
    </div>
  )
}

/* ── Main component ── */

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState<'suchende' | 'interessenten'>('suchende')

  const steps = activeTab === 'suchende' ? STEPS_SUCHENDE : STEPS_INTERESSENTEN

  return (
    <section className={styles.process}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Ihr Weg mit Easy-B2B</p>
        <h2 className={styles.heading}>So bringen wir Sie zusammen</h2>
        <p className={styles.intro}>
          Von der ersten Idee bis zum pers&ouml;nlichen Kontakt &mdash; wir begleiten den gesamten Weg. Pers&ouml;nlich, nicht automatisiert.
        </p>

        {/* Tab Switcher */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tab} ${activeTab === 'suchende' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('suchende')}
          >
            <span className={styles.tabEmoji}>{'\u{1F50D}'}</span>
            F&uuml;r Suchende
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'interessenten' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('interessenten')}
          >
            <span className={styles.tabEmoji}>{'\u{1F91D}'}</span>
            F&uuml;r Interessenten
          </button>
        </div>

        <p className={styles.tabHint}>
          {activeTab === 'suchende'
            ? 'Sie suchen einen Partner, Lieferanten oder Vertrieb auf der anderen Seite der Grenze.'
            : 'Sie entdecken ein Projekt und möchten Ihr Interesse bekunden.'}
        </p>

        {/* Timeline */}
        <div className={styles.timeline} key={activeTab}>
          {steps.map((step, i) => (
            <div
              key={step.nr}
              className={`${styles.step} ${i % 2 === 0 ? styles.stepAlignRight : styles.stepAlignLeft}`}
            >
              <div className={styles.stepCenter}>
                <div className={styles.stepDot}>
                  <span className={styles.stepNr}>{step.nr}</span>
                </div>
              </div>
              <div className={styles.stepCardWrap}>
                <StepCard step={step} />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustCheck}>{'✓'}</span>
            <span>Pers&ouml;nliche Begleitung</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustCheck}>{'✓'}</span>
            <span>Qualifizierte Kontakte</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustCheck}>{'✓'}</span>
            <span>Keine offene Kontaktb&ouml;rse</span>
          </div>
        </div>

        <div className={styles.processCta}>
          <Link href="/so-funktioniert-es" className="more">
            Ausf&uuml;hrliche Beschreibung des Ablaufs &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
