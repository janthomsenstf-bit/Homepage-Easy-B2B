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
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Was passiert hier?</h2>
          <p className={styles.sectionIntro}>
            Hier sind einige Beispiele, wofür Easy-B2B genutzt wird – konkret und direkt.
          </p>
          <div className={styles.useCasesGrid}>
            {WHAT_IS_POSSIBLE.map((useCase, idx) => (
              <UseCaseCard
                key={idx}
                icon={useCase.icon}
                title={useCase.title}
                beschreibung={useCase.beschreibung}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WIE FUNKTIONIERT EASY-B2B? ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Wie funktioniert Easy-B2B?</h2>
          <p className={styles.sectionIntro}>
            4 einfache Schritte vom Gesuch zur Zusammenarbeit.
          </p>

          <div className={styles.processStepsContainer}>
            {PROZESS_HOMEPAGE.map((step, idx) => (
              <div key={step.nr}>
                <div className={styles.processStepItem}>
                  <div className={styles.stepNumber}>{step.nr}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
                {idx < PROZESS_HOMEPAGE.length - 1 && (
                  <div className={styles.stepArrow}>→</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.processBadge}>
            <span className={styles.badgeIcon}>💡</span>
            {PROZESS_HINWEIS}
          </div>
        </div>
      </section>

      {/* ── 4. KONKRETES BEISPIEL ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
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
            <Link href="/so-funktioniert-es" className="btn-primary">
              Ablauf im Detail ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. WAS FRAGEN WIR AB? ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Was fragen wir eigentlich ab?</h2>
          <p className={styles.sectionIntro}>
            Easy-B2B ist kein anonymer Kleinanzeigen-Markt. Wir filtern gezielt – damit Kontakte passen.
          </p>
          <div className={styles.checklistGrid}>
            {WHAT_WE_ASK.map((item, idx) => (
              <ChecklistCard key={idx} text={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. KULTUR & MENSCHEN ── */}
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

      {/* ── 7. AKTUELLE GESUCHE ── */}
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

      {/* ── 8. VERTRAUEN & WERTE ── */}
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

      {/* ── 9. VORBEREITETE ANFRAGEN ── */}
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

      {/* ── 10. VERANSTALTUNGEN & TREFFEN VOR ORT ── */}
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. KOSTEN ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kosten</h2>
          <div className={styles.pricingBlock}>
            <h3 className={styles.pricingHeadline}>{PRICING_INFO.hauptsatz}</h3>
            <p className={styles.pricingText}>{PRICING_INFO.beschreibung1}</p>
            <p className={styles.pricingText}>{PRICING_INFO.beschreibung2}</p>
            <p className={styles.pricingHinweis}>{PRICING_INFO.hinweis}</p>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ── */}
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
