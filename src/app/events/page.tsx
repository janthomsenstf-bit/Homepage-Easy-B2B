'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { EVENTS_FORMATS } from '@/lib/content'
import styles from './page.module.css'

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(0)

  // ── ACTIVE EVENT FORMATS (Reduziert auf 3 Hauptformate) ──
  // Weitere Formate vorerst ausgeblendet: Betriebsbesichtigungen, Branchentage, Interviews & Podcasts
  // Können später leicht wieder hinzugefügt werden.
  const eventDetails = [
    {
      icon: '🎤',
      name: 'Pitch & Meet',
      isPitchAndMeet: true,
      shortDesc: 'Deutsche und dänische Unternehmen treffen sich live. Ideen werden geteilt. Kooperationen entstehen.',
      fullDesc: 'Pitch & Meet ist keine Konferenz. Es ist ein Ort, an dem deutsche und dänische Unternehmen sich begegnen – nicht online, sondern von Angesicht zu Angesicht. Hier präsentieren Gründer*innen und Unternehmer*innen ihre Ideen, Produkte und Kooperationschancen live vor realen Menschen. Nicht mit PowerPoint-Schlachten, sondern mit Persönlichkeit, Energie und echtem Interesse.',
      whySpecial: 'Sprache und Kultur sind oft die größten Barrieren, wenn Deutschland und Dänemark zusammenarbeiten möchten. Pitch & Meet baut genau diese Hemmschwellen ab – indem Menschen zusammenkommen, miteinander reden und feststellen: „Ach, wir verstehen uns ja viel besser als erwartet." Das ist der Moment, in dem Kooperationen entstehen.',
      forWhomIntro: 'Du solltest dabei sein, wenn du…',
      forWhomList: [
        'eine konkrete Idee, ein Produkt oder eine Dienstleistung hast und den deutschen oder dänischen Markt erobern möchtest',
        'auf Partnersuche bist – ob Vertrieb, Produktion, Projekte oder Innovationen',
        'offen für neue Kontakte, Inspirationen und unerwartete Chancen bist',
        'glaubst, dass die beste Geschäfte über echte Begegnungen entstehen – nicht per Email',
        'mutig genug bist, deine Idee vor anderen zu vertreten und dabei dazuzulernen',
        'von erfolgreichen Entrepreneur*innen auf der anderen Seite der Grenze lernen möchtest',
      ],
      whyBenefits: [
        '🌍 Neue Märkte entdecken – direkt von den Menschen, die sie kennen',
        '🤝 Echte Kontakte knüpfen – nicht digitale Netzwerk-Illusion, sondern persönliche Beziehungen',
        '💡 Inspiration & Austausch – von Unternehmen, die ähnliche Herausforderungen haben',
        '📍 Sichtbarkeit – dein Unternehmen wird im Netzwerk, Social Media und Newsletter vorgestellt',
        '🚀 Konkrete Geschäftsmöglichkeiten – viele Kooperationen entstehen direkt nach den Pitches',
        '🎯 Vertrauen aufbauen – indem man sich kennenlernt und versteht',
      ],
      whatHappens: [
        '🎤 Live vor Publikum: Unternehmen präsentieren ihre Idee in kurzen, persönlichen Pitches – nicht steif, sondern authentisch',
        '💬 Kurz und persönlich: Keine 50-Folien-Präsentation. Sondern Persönlichkeit, Energie und Gestik – das überzeugt echte Menschen',
        '👥 Deutsch-dänische Begegnung: Ein Raum, in dem Menschen zusammentreffen – zum Austausch, zum Diskutieren, zum Nachdenken',
        '🚗 Connect in Car: Anschließend: Netzwerken in Luxus-Fahrzeugen auf der Fahrt über die Grenze – informell, effektiv, lustig',
        '🤝 Direkte Gespräche: Nach den Pitches entstehen echte Kooperationsgespräche – zwischen Menschen, die sich jetzt kennen',
      ],
      process: [
        {
          nr: 1,
          step: 'Bewerbung',
          desc: 'Dein Unternehmen bewirbt sich, um seine Idee, sein Produkt oder seine Kooperationssuche vorzustellen.'
        },
        {
          nr: 2,
          step: 'Interviews',
          desc: 'Wir führen kurze, persönliche Interviews – nicht aus Bürokratie, sondern um deine Idee wirklich zu verstehen und die richtigen Gäste einzuladen.'
        },
        {
          nr: 3,
          step: 'Vorbereitung & Sichtbarkeit',
          desc: 'Dein Unternehmen wird vor dem Event sichtbar gemacht – in unserem Netzwerk, auf Social Media, im Newsletter. Schon vorher entstehen erste Kontakte.'
        },
        {
          nr: 4,
          step: 'Live Pitch',
          desc: '10-15 Minuten: Du erzählst deine Geschichte vor echtem Publikum. Danach: Fragen, Diskussion, echtes Interesse.'
        },
        {
          nr: 5,
          step: 'Netzwerken & Gespräche',
          desc: 'Nach den Pitches: Austausch mit anderen Unternehmen, potenzielle Partner, spannende Menschen aus beiden Ländern.'
        },
        {
          nr: 6,
          step: 'Kooperationen entstehen',
          desc: 'Manche Kooperationen entstehen am Abend selbst. Andere brauchen Zeit. Aber: Der Grundstein ist gelegt.'
        }
      ],
      regularity: 'Pitch & Meet ist nicht einmalig. Wir planen regelmäßige deutsch-dänische Veranstaltungen – im Abstand von etwa zwei Monaten. Das schafft Verbindlichkeit, Kontinuität und echte Netzwerk-Dynamik.',
      applicationHeadline: 'Mit deinem Unternehmen dabei sein',
      applicationText: 'Dein Unternehmen kann sich bewerben, um seine Idee, sein Produkt, seine Dienstleistung oder seine Kooperationssuche zu präsentieren. Wichtig: Du wirst vorbereitet und begleitet. Das ist kein „spontan auf die Bühne" – sondern ein persönlich betreuter Prozess, der dich und deine Idee in den besten Licht setzt.',
      why: 'Wenn Deutsche und Dänen echte Sache machen – dann nicht online, nicht per Email, sondern von Angesicht zu Angesicht. Genau da entsteht Vertrauen. Genau da entstehen echte Kooperationen.',
      cta: 'Mit deinem Unternehmen dabei sein →'
    },
    {
      icon: '🚗',
      name: 'Connect in Car',
      isConnectInCar: true,
      shortDesc: 'Netzwerken im Auto: 10 Minuten ungestörte Gespräche, lockere Atmosphäre, echte Begegnungen.',
      fullDesc: 'Connect in Car ist kein klassisches Netzwerk-Event. Es ist eine ganz eigene Erfahrung: Du sitzt in einem modernen Auto mit interessanten Menschen aus Deutschland und Dänemark. Kaffee, offene Gespräche, kein Small Talk, keine Geschäftskarten-Schlacht. Nur zwei Menschen, ein gutes Auto, und ungefähr zehn Minuten Zeit, um zu sehen, ob eine echte Chemie da ist.',
      whySpecial: 'In einem Auto sitzt man automatisch anders zusammen als an einem Stehtisch. Das Gespräch wird ruhiger, ehrlicher, direkter – persönlicher. Die Fahrt über die Grenze schafft eine gemeinsame Erfahrung, die Hemmschwellen abbaut und echte Verbindungen entstehen lässt.',
      forWhomIntro: 'Connect in Car ist für dich, wenn du…',
      forWhomList: [
        'unkompliziert netzwerken möchtest – ohne Anzug-Klischees',
        'dich für deutsch-dänische Begegnungen interessierst',
        'offene, interessante Menschen magst',
        'neue Märkte kennenlernen oder neue Geschäftspartner finden möchtest',
        'glaubst, dass die besten Ideen in guten Gesprächen entstehen',
        'Lust auf eine moderne, etwas andere Networkingform hast'
      ],
      atmosphere: 'Modernes Autohaus in Grenzregion, entspannte Stimmung, Kaffee und Getränke, kleine Gruppen, spontane Wechsel von Auto zu Auto, echte deutsch-dänische Atmosphäre.',
      whatHappens: [
        '🚗 Zwei Personen in einem hochwertigen Auto',
        '☕ Kaffee, entspannte Umgebung, lockerer Austausch',
        '⏱ 10 Minuten ungestörter Gesprächszeit',
        '🚙 Danach: Wechsel zum nächsten Auto, nächstem Gesprächspartner',
        '🌍 Deutsche und Dänen treffen sich auf Augenhöhe',
        '💡 Echte Gespräche entstehen – ohne Pitch-Druck'
      ],
      whyFun: 'Das ist keine klassische Businessveranstaltung. Es ist angenehm anders: entspannt, unkompliziert, spielerisch. Die Fahrt schafft Gemeinsamkeit, die Kürze macht das Kennenlernen fokussiert, und die Atmosphäre im Auto fördert echte, offene Gespräche. Du merkst schnell, ob die Chemie stimmt – und das macht es einfach.',
      regularity: 'Connect in Car findet regelmäßig statt – abwechselnd in Deutschland und Dänemark, immer in grenznah gelegenen Autohäusern mit entspannter Atmosphäre. Das Format wird zum echten Netzwerk-Termin, auf den sich Menschen freuen.',
      why: 'Manchmal entstehen die besten Kooperationen nicht auf der Bühne – sondern in einem guten Gespräch. Connect in Car schafft genau diese Momente: ungestört, persönlich, ehrlich.',
      cta: null
    },
    {
      icon: '🤝',
      name: 'Netzwerktreffen',
      shortDesc: 'Kleine Gruppen, persönlicher Austausch, echte Kontakte aufbauen.',
      fullDesc: 'Persönliche Treffen in regionalen Zentren. Lockerer Austausch, deutsch-dänische Gespräche, Kennenlernen und Kontakte knüpfen. Von kleineren Formaten bis zu spontanen Begegnungen.',
      forWhom: 'Für Unternehmen, die auf unkomplizierte Weise Kontakte knüpfen und tiefe Beziehungen schaffen möchten.',
      whatHappens: [
        '👥 Kleine bis mittlere Gruppen',
        '🍽 Informeller Austausch (Dinner, Lunch, Kaffee)',
        '💬 Echte Gespräche – keine Formalitäten',
        '🌍 Regionale Fokus – lokal und persönlich',
      ],
      why: 'Persönlich, unkompliziert, vertraut. Die beste Basis für langfristige Kooperationen.',
      cta: null
    },

    /* ── AUSGEBLENDETE FORMATE (können später wieder aktiviert werden) ──
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
    **/
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
                id={event.name.toLowerCase().replace(/\s+/g, '-').replace('&', '')}
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
              {/* ── PITCH & MEET SPEZIFISCHE STRUKTUR ── */}
              {current.isPitchAndMeet ? (
                <>
                  <div className={styles.detailSection_}>
                    <h3>Das Format</h3>
                    <p className={styles.description}>{current.fullDesc}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Warum Pitch & Meet wichtig ist</h3>
                    <p className={styles.description}>{current.whySpecial}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>{current.forWhomIntro}</h3>
                    <ul className={styles.whatHappensList}>
                      {current.forWhomList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Das bringt dir Pitch & Meet</h3>
                    <ul className={styles.whatHappensList}>
                      {current.whyBenefits.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
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
                    <h3>Der Ablauf: Von der Bewerbung zum Pitch</h3>
                    <div className={styles.processSteps}>
                      {current.process.map((p, idx) => (
                        <div key={idx} className={styles.processStep}>
                          <div className={styles.stepNumber}>{p.nr}</div>
                          <div className={styles.stepContent}>
                            <h4>{p.step}</h4>
                            <p>{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Regelmäßiges Format</h3>
                    <p className={styles.description}>{current.regularity}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h2 className={styles.applicationHeadline}>{current.applicationHeadline}</h2>
                    <p className={styles.description}>{current.applicationText}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Der Kern von Pitch & Meet</h3>
                    <p className={styles.description}>{current.why}</p>
                  </div>

                  {(current as any).cta && (
                    <div className={styles.ctaContainer}>
                      <Link href="/kontakt" className={styles.ctaButton}>
                        {(current as any).cta}
                      </Link>
                    </div>
                  )}
                </>
              ) : current.isConnectInCar ? (
                /* ── CONNECT IN CAR SPEZIELLES LAYOUT ── */
                <>
                  <div className={styles.detailSection_}>
                    <h3>Das Format</h3>
                    <p className={styles.description}>{current.fullDesc}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Warum Connect in Car besonders ist</h3>
                    <p className={styles.description}>{current.whySpecial}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>{current.forWhomIntro}</h3>
                    <ul className={styles.whatHappensList}>
                      {current.forWhomList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Was passiert bei Connect in Car?</h3>
                    <ul className={styles.whatHappensList}>
                      {current.whatHappens.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Warum macht das Spaß?</h3>
                    <p className={styles.description}>{current.whyFun}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Regelmäßiges Format</h3>
                    <p className={styles.description}>{current.regularity}</p>
                  </div>

                  <div className={styles.detailSection_}>
                    <h3>Der Kern von Connect in Car</h3>
                    <p className={styles.description}>{current.why}</p>
                  </div>

                  {(current as any).cta && (
                    <div className={styles.ctaContainer}>
                      <Link href="/kontakt" className={styles.ctaButton}>
                        {(current as any).cta}
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                /* ── NORMALE STRUKTUR FÜR ANDERE EVENTS ── */
                <>
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
                </>
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
