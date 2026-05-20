import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import ProcessSteps from '@/components/ProcessSteps'
import FAQItem from '@/components/FAQItem'
import { PROZESS_SUCHENDE, PROZESS_INTERESSENTEN, FAQ } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'So funktioniert\'s – EasyB2B',
  description: 'Erfahre, wie EasyB2B funktioniert: Der Prozess für Suchende und Interessenten, sowie häufig gestellte Fragen.',
}

export default function SoFunktioniertEsPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>So funktioniert EasyB2B</h1>
          <p>Zwei einfache Prozesse für Erfolg.</p>
        </div>
      </section>

      {/* ── SUCHENDE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Für dich als Suchender</h2>
          <p className={styles.intro}>Du hast eine konkrete Anfrage und möchtest qualifizierte Partner finden?</p>
          <ProcessSteps steps={PROZESS_SUCHENDE} variant="vertical" />
        </div>
      </section>

      {/* ── INTERESSENTEN ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Für dich als Interessent</h2>
          <p className={styles.intro}>Du möchtest auf interessante Anfragen antworten und neue Partnerschaften aufbauen?</p>
          <ProcessSteps steps={PROZESS_INTERESSENTEN} variant="vertical" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
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

      {/* ── DSGVO NOTICE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Datenschutz & Sicherheit</h2>
          <p>
            Bei EasyB2B werden deine Daten mit höchster Sorgfalt behandelt. Wir halten uns strikt an die DSGVO und alle geltenden Datenschutzgesetze in Deutschland und Dänemark.
          </p>
          <ul className={styles.privacyList}>
            <li>Persönliche Daten werden nur mit deinem expliziten Einverständnis weitergegeben</li>
            <li>Du kannst jederzeit einsehen, welche Daten wir speichern und diese löschen</li>
            <li>Alle Anfragen und Interessenten-Daten werden persönlich überprüft</li>
            <li>Sichere SSL-Verschlüsselung für alle Übertragungen</li>
          </ul>
          <p className={styles.linkNote}>
            Vollständige Informationen findest du in unserer{' '}
            <a href="/datenschutz" className={styles.link}>Datenschutzerklärung</a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
