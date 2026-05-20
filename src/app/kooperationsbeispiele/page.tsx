import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { KOOPERATIONSBEISPIELE_DETAILS } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Kooperationsbeispiele & Ideen – EasyB2B',
  description: 'Entdecke konkrete Beispiele und Ideen für deutsch-dänische B2B-Kooperationen. Von Herstellern bis Spezialisten.',
}

export default function KooperationsbeispielePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Kooperationsbeispiele & Ideen für den deutsch-dänischen Markt</h1>
          <p>
            Du fragst dich, welche Art von Partnerschaft zu dir passt? Hier sind sechs konkrete Szenarien –
            mit echten Beispielen, die zeigen, was über EasyB2B möglich ist.
          </p>
        </div>
      </section>

      {/* ── BEISPIELE GRID ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.beispieleGrid}>
            {KOOPERATIONSBEISPIELE_DETAILS.map((beispiel) => (
              <div key={beispiel.id} className={styles.beispielCard}>
                <div className={styles.beispielHeader}>
                  <div className={styles.beispielIcon}>{beispiel.icon}</div>
                  <div>
                    <div className={styles.kategorie}>{beispiel.kategorie}</div>
                    <h2 className={styles.beispielTitle}>{beispiel.titel}</h2>
                  </div>
                </div>

                <p className={styles.intro}>{beispiel.intro}</p>

                <div className={styles.contentBlock}>
                  <h3 className={styles.blockTitle}>Die Situation</h3>
                  <p>{beispiel.situation}</p>
                </div>

                <div className={styles.contentBlock}>
                  <h3 className={styles.blockTitle}>Die Lösung</h3>
                  <p>{beispiel.loesung}</p>
                </div>

                <div className={styles.contentBlock}>
                  <h3 className={styles.blockTitle}>Konkrete Beispiele</h3>
                  <ul className={styles.exampleList}>
                    {beispiel.beispiele.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.nutzenBlock}>
                  <h3 className={styles.blockTitle}>Das bringt dir EasyB2B</h3>
                  <div className={styles.nutzenGrid}>
                    {beispiel.nutzen.map((n, idx) => (
                      <div key={idx} className={styles.nutzenItem}>
                        <span className={styles.checkmark}>✓</span>
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Was möchtest du tun?</h2>
          <div className={styles.ctaGrid}>
            <div className={styles.ctaCard}>
              <h3>Du hast eine Anfrage</h3>
              <p>Erzähl uns, was du suchst. Persönliche Prüfung. Echte Partner.</p>
              <Link href="/anfrage-einreichen" className="btn-primary">
                Anfrage einreichen →
              </Link>
            </div>

            <div className={styles.ctaCard}>
              <h3>Du möchtest mehr erfahren</h3>
              <p>Fragen beantwortet? Lieber ein persönliches Gespräch?</p>
              <Link href="/kontakt" className="btn-primary">
                Unverbindlich sprechen →
              </Link>
            </div>

            <div className={styles.ctaCard}>
              <h3>Du suchst im Marktplatz</h3>
              <p>Schau dir aktuelle Anfragen an und bekunde spontan Interesse.</p>
              <Link href="/marktplatz" className="btn-outline">
                Zum Marktplatz →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
