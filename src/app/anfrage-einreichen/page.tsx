import ProcessSteps from '@/components/ProcessSteps'
import FAQItem from '@/components/FAQItem'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnfrageFormular from '@/components/AnfrageFormular'
import { PROZESS_SUCHENDE_KURZ, FAQ } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Anfrage einreichen – Easy-B2B',
  description: 'Reiche deine B2B-Anfrage ein und finde qualifizierte Partner in Deutschland und Dänemark.',
}

export default function AnfrageEinreichenPage() {
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

      {/* ── TIPPS ── */}
      <section className={`${styles.section} ${styles.sectionOff}`}>
        <div className={styles.sectionContent}>
          <h2>Was macht eine gute Anfrage aus?</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>1</div>
              <div className={styles.tipTitle}>Sei konkret</div>
              <div className={styles.tipText}>
                Nicht „wir suchen einen Partner" sondern „wir suchen einen Logistik-Partner für Transporte nach DK, 3× wöchentlich, min. 10 Jahre Erfahrung".
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
              <div className={styles.tipTitle}>Realistische Timeline</div>
              <div className={styles.tipText}>
                Wann bist du bereit? Noch eine Idee oder sofort im Markt? Das hilft uns, die richtigen Interessenten zu finden.
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
                Interessenten sehen deine Branche und Beschreibung, aber nicht deinen Firmennamen. Gut wenn du diskret bleiben möchtest.
              </p>
            </div>
            <div className={styles.visCard}>
              <div className={styles.visTitle}>🌐 Öffentlich</div>
              <p className={styles.visText}>
                Interessenten sehen deinen Namen und deine Website. Das schafft mehr Vertrauen und zieht gezielter an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULAR ── */}
      <section className={`${styles.section} ${styles.sectionOff}`} id="formular">
        <div className={styles.sectionContent}>
          <h2>Anfrage einreichen</h2>
          <p style={{ marginBottom: '32px', color: '#4a4845', fontSize: '15px' }}>
            Das Formular dauert ca. 5–10 Minuten. Wir prüfen alles persönlich und melden uns innerhalb von 24 Stunden.
          </p>
          <AnfrageFormular />
        </div>
      </section>

      {/* ── PROZESS ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Was passiert nach dem Einreichen?</h2>
          <ProcessSteps steps={PROZESS_SUCHENDE_KURZ} variant="vertical" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`${styles.section} ${styles.sectionOff}`}>
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
