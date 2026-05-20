import Link from 'next/link'
import ProcessSteps from '@/components/ProcessSteps'
import FAQItem from '@/components/FAQItem'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { PROZESS_SUCHENDE, FAQ } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Anfrage einreichen – EasyB2B',
  description: 'Reiche deine B2B-Anfrage ein und finde qualifizierte Partner in Deutschland und Dänemark.',
}

export default function AnfrageEinreichenPage() {
  const tallyFormUrl = 'https://tally.so/r/w5lPzG' // Placeholder - später mit echter ID ersetzen

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Mach den ersten Schritt</h1>
          <p>Deine konkrete B2B-Anfrage. Echte Partner. Persönlich geprüft.</p>
        </div>
      </section>

      {/* ── PROZESS ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Was passiert nach deinem Einreichen?</h2>
          <ProcessSteps steps={PROZESS_SUCHENDE} variant="vertical" />
        </div>
      </section>

      {/* ── TIPPS ── */}
      <section className={`${styles.section} ${styles.sectionOff}`}>
        <div className={styles.sectionContent}>
          <h2>Was macht eine gute Anfrage aus?</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>1</div>
              <div className={styles.tipTitle}>Sei konkret</div>
              <div className={styles.tipText}>
                Nicht „wir suchen einen Partner" sondern „wir suchen einen Logistik-Partner für Transporte nach DK, 3x wöchentlich, min. 10 Jahre Erfahrung".
              </div>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>2</div>
              <div className={styles.tipTitle}>Erzähl von dir</div>
              <div className={styles.tipText}>
                Wer bist du? Wie lange machst du das? Was ist deine Haltung? Das zählt mehr als dein Umsatz.
              </div>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>3</div>
              <div className={styles.tipTitle}>Realistic Timeline</div>
              <div className={styles.tipText}>
                Wann bist du bereit? Noch ne Idee? Sofort im Markt? Das hilft uns die richtigen Interessenten zu finden.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SICHTBARKEIT ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Wer sieht deine Anfrage?</h2>
          <div className={styles.visibilityCards}>
            <div className={styles.visCard}>
              <div className={styles.visTitle}>🔒 Anonym</div>
              <p className={styles.visText}>
                Interessenten sehen deine Branche und Beschreibung, aber nicht deinen Firmenname. Gut wenn du diskret bleiben möchtest.
              </p>
            </div>
            <div className={styles.visCard}>
              <div className={styles.visTitle}>🌐 Öffentlich</div>
              <p className={styles.visText}>
                Interessenten sehen deinen Namen und Website. Das schafft mehr Vertrauen und lockt gezielter an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Bereit?</h2>
          <p>Das Formular dauert ca. 10 Minuten. Wir prüfen alles persönlich und melden uns innerhalb von 24 Stunden.</p>
          <a href={tallyFormUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Jetzt Formular öffnen →
          </a>
          <p className={styles.ctaNote}>Öffnet sich in neuem Tab</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Häufige Fragen</h2>
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

      <Footer />
    </>
  )
}
