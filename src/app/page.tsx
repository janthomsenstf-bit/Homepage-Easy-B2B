import Link from 'next/link'
import AnzeigeCard from '@/components/AnzeigeCard'
import UseCaseCard from '@/components/UseCaseCard'
import ChecklistCard from '@/components/ChecklistCard'
import EventCard from '@/components/EventCard'
import FAQItem from '@/components/FAQItem'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import {
  SITE,
  DEMO_ANFRAGEN,
  PROZESS_HOMEPAGE,
  PROZESS_HINWEIS,
  BEISPIEL_ANFRAGE,
  BEISPIEL_INTERESSENTEN,
  WHAT_IS_POSSIBLE,
  WHAT_WE_ASK,
  WHAT_WE_ASK_INTRO,
  REIFEGRAD_SKALA,
  KULTUR_HINTS,
  TRUST_VALUES,
  QUICK_REQUEST_TEMPLATES,
  EVENTS_FORMATS,
  PRICING_INFO,
  FAQ,
} from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'EasyB2B – Deutsche und dänische Kooperationen',
  description: 'Deutsch-dänische Kooperationen. Persönlich verbunden. Easy-B2B vermittelt Unternehmen für Vertrieb, Projekte, Produkte und neue Marktchancen.',
}

// Hilfsfunktion: Konvertiert **text** zu <strong>text</strong>
function parseHighlight(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g)
  return parts.map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
  )
}

export default function Home() {
  const featuredAnzeigen = DEMO_ANFRAGEN.slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1>Deutsch-dänische Kooperationen.<br />Persönlich verbunden.</h1>
            <p className={styles.heroSub}>
              Easy-B2B verbindet Unternehmen aus Deutschland und Dänemark für Vertrieb, Projekte, Produkte und neue Marktchancen.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/anfrage-einreichen" className="btn-primary">
                Anfrage stellen
              </Link>
              <Link href="/so-funktioniert-es" className="btn-outline">
                So funktioniert's
              </Link>
            </div>
          </div>
          <div className={styles.heroImg}>
            <div className={styles.heroPlaceholder}>🤝</div>
          </div>
        </div>
      </section>

      {/* ── 2. WAS PASSIERT HIER? ── */}
      <section className={`${styles.section} ${styles.whatHappensSection}`}>
        <div className={styles.sectionContent}>
          <div className={styles.whatHappensHeader}>
            <h2>Was passiert hier?</h2>
            <p className={styles.whatHappensIntro}>
              Easy-B2B verbindet Unternehmen aus Deutschland und Dänemark für konkrete Kooperationen, neue Märkte und gemeinsame Geschäftsideen.
            </p>
          </div>

          <div className={styles.whatHappensGrid}>
            {WHAT_IS_POSSIBLE.map((item, idx) => (
              <div key={idx} className={styles.whatHappensCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{item.icon}</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <p className={styles.cardExpl}>{item.erklärung}</p>

                <div className={styles.cardExamples}>
                  {item.inspirationText && (
                    <p className={styles.cardInspirationText}>{item.inspirationText}</p>
                  )}
                  <ul className={styles.examplesList}>
                    {item.beispiele.map((beispiel, bidx) => (
                      <li key={bidx} className={styles.exampleItem}>
                        {parseHighlight(beispiel)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardArrow}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WIE FUNKTIONIERT EASY-B2B? ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Wie funktioniert Easy-B2B?</h2>
          <p className={styles.sectionIntro}>
            4 persönliche Schritte vom Gesuch zur echten Zusammenarbeit.
          </p>

          <div className={styles.processStepsContainer}>
            {PROZESS_HOMEPAGE.map((step, idx) => (
              <div key={step.nr}>
                <div className={styles.processStepItem}>
                  <div className={styles.stepNumber}>{step.nr}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{parseHighlight(step.desc)}</p>
                </div>
                {idx < PROZESS_HOMEPAGE.length - 1 && (
                  <div className={styles.stepArrow}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── 4. WAS WOLLEN WIR VON DIR WISSEN? ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Was wollen wir von dir wissen?</h2>
          <p className={styles.sectionIntro}>
            {WHAT_WE_ASK_INTRO}
          </p>

          {/* Hauptpunkte (12 Fragen mit Icons) */}
          <div className={styles.whatWeAskGrid}>
            {WHAT_WE_ASK.map((item, idx) => (
              <div key={idx} className={styles.whatWeAskCard}>
                <div className={styles.askCardIcon}>{item.icon}</div>
                <h3 className={styles.askCardQuestion}>{item.frage}</h3>
                <p className={styles.askCardExplanation}>{item.erklärung}</p>
              </div>
            ))}
          </div>

          {/* Reifegrad-Skala */}
          <div className={styles.reifeGradSection}>
            <h3 className={styles.reifeGradTitle}>Wie weit ist deine Idee bereits?</h3>
            <p className={styles.reifeGradIntro}>
              Wir versuchen einzuschätzen, wie konkret und realistisch deine Anfrage ist.
            </p>
            <div className={styles.reifeGradScale}>
              {REIFEGRAD_SKALA.map((stufe) => (
                <div key={stufe.stufe} className={styles.reifeGradStep}>
                  <div className={styles.reifeGradBubble}>{stufe.stufe}</div>
                  <h4 className={styles.reifeGradLabel}>{stufe.label}</h4>
                  <p className={styles.reifeGradDesc}>{stufe.beschreibung}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. KULTUR & MENSCHEN ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Kultur & Menschen</h2>
          <p className={styles.sectionIntro}>
            Gute Kooperationen entstehen zwischen Menschen – nicht nur zwischen Firmen.
          </p>
          <div className={styles.kulturGrid}>
            {KULTUR_HINTS.map((hint, idx) => (
              <div key={idx} className={styles.kulturCard}>
                <h3 className={styles.kulturFrage}>{hint.frage}</h3>
                <p className={styles.kulturHinweis}>{hint.hinweis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AKTUELLE GESUCHE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Aktuelle Anfragen im Netzwerk</h2>
          <p className={styles.sectionIntro}>
            Einige aktuelle Anfragen aus unserem Netzwerk – hochwertig kuratiert, nicht automatisiert.
          </p>
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
            Alle {DEMO_ANFRAGEN.length} Anfragen im Marktplatz ansehen →
          </Link>
        </div>
      </section>

      {/* ── 7. VERTRAUEN & WERTE ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Vertrauen & Werte</h2>
          <p className={styles.sectionIntro}>
            Das ist uns wichtig bei Easy-B2B.
          </p>
          <div className={styles.trustGrid}>
            {TRUST_VALUES.map((value, idx) => (
              <div key={idx} className={styles.trustCard}>
                <div className={styles.trustIcon}>{value.icon}</div>
                <h3 className={styles.trustTitle}>{value.statement}</h3>
                <p className={styles.trustDesc}>{value.erklärung}</p>
              </div>
            ))}
          </div>

          <div className={styles.trustNote}>
            <p>
              <strong>Easy-B2B ist ein Service von Etablering Tyskland</strong> – einer Organisation die Unternehmen beim Einstieg in den deutsch-dänischen Markt hilft.
              Die Idee: Erste Kontakte einfacher machen, Vertrauen aufbauen, echte Geschäfte ermöglichen.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. VORBEREITETE ANFRAGEN ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Schneller Einstieg</h2>
          <p className={styles.sectionIntro}>
            Hier sind vorgefertigte Anfrage-Vorlagen. Klick eine an und los geht's.
          </p>
          <div className={styles.quickRequestsGrid}>
            {QUICK_REQUEST_TEMPLATES.map((template, idx) => (
              <Link
                key={idx}
                href={template.href}
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                {template.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. VERANSTALTUNGEN & TREFFEN VOR ORT ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Veranstaltungen & Treffen vor Ort</h2>
          <p className={styles.sectionIntro}>
            Easy-B2B existiert nicht nur online. Wir treffen uns persönlich.
          </p>
          <div className={styles.eventsGrid}>
            {EVENTS_FORMATS.map((event, idx) => (
              <EventCard
                key={idx}
                icon={event.icon}
                name={event.name}
                beschreibung={event.beschreibung}
                status={event.status}
                href={event.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. KOSTEN ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kosten</h2>
          <p className={styles.sectionIntro}>
            Warum ist Easy-B2B kostenfrei – und wann könnten trotzdem Kosten entstehen?
          </p>

          {/* Zwei-Block Layout */}
          <div className={styles.pricingGrid}>

            {/* LINKER BLOCK – Kostenfrei */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingCardIcon}>{PRICING_INFO.free.icon}</div>
              <h3 className={styles.pricingCardTitle}>{PRICING_INFO.free.title}</h3>

              <p className={styles.pricingCardText}>
                {PRICING_INFO.free.intro}
              </p>

              <p className={styles.pricingCardStory}>
                {PRICING_INFO.free.story}
              </p>

              <p className={styles.pricingCardGoal}>
                <strong>{PRICING_INFO.free.goal}</strong>
              </p>

              <p className={styles.pricingCardPartnership}>
                {PRICING_INFO.free.partnership}
              </p>

              <Link href={PRICING_INFO.free.button.link} className={styles.pricingButton}>
                {PRICING_INFO.free.button.text} →
              </Link>
            </div>

            {/* RECHTER BLOCK – Kosten können entstehen */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingCardIcon}>{PRICING_INFO.costs.icon}</div>
              <h3 className={styles.pricingCardTitle}>{PRICING_INFO.costs.title}</h3>

              <p className={styles.pricingCardText}>
                {PRICING_INFO.costs.intro}
              </p>

              <ul className={styles.pricingList}>
                {PRICING_INFO.costs.examples.map((example, idx) => (
                  <li key={idx}>{example}</li>
                ))}
              </ul>

              <p className={styles.pricingCardNote}>
                {PRICING_INFO.costs.note}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 11. FAQ ── */}
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
        <h2>Bereit für neue Partnerschaften?</h2>
        <p>Konkrete B2B-Anfragen treffen auf echte Unternehmen.</p>
        <Link href="/anfrage-einreichen" className="btn-amber">
          Jetzt Anfrage stellen →
        </Link>
      </section>

      <Footer />
    </>
  )
}
