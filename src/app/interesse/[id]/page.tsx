import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { getAnfrageById } from '@/lib/content'
import styles from './page.module.css'

interface PageProps {
  params: { id: string }
}

export function generateMetadata({ params }: PageProps) {
  return {
    title: `Interesse an ${params.id} – EasyB2B`,
  }
}

export default function InteressePage({ params }: PageProps) {
  const anfrage = getAnfrageById(params.id)

  if (!anfrage) {
    notFound()
  }

  // Tally Form URL mit Referenz-ID
  const tallyFormUrl = `https://tally.so/r/w5lPzG?referenz_id=${params.id}&titel=${encodeURIComponent(anfrage.art)}`

  return (
    <>
      <Nav />

      <section className={styles.page}>
        <div className={styles.content}>
          {/* Back Link */}
          <Link href="/marktplatz" className={styles.backLink}>
            ← Zurück zum Marktplatz
          </Link>

          <div className={styles.header}>
            <div className={styles.icon}>🤝</div>
            <h1>Dein Interesse bekunden</h1>
            <p>Anfrage: {anfrage.id}</p>
          </div>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <span className={styles.label}>Art:</span>
              <span className={styles.value}>{anfrage.art}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.label}>Branche:</span>
              <span className={styles.value}>{anfrage.branche}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.label}>Richtung:</span>
              <span className={styles.value}>{anfrage.richtung}</span>
            </div>
          </div>

          <p className={styles.description}>{anfrage.beschreibung}</p>

          <div className={styles.cta}>
            <h2>Passt zu dir?</h2>
            <p>Erzähl uns kurz warum ihr zusammenpasst. Dann kümmern wir uns um den Rest.</p>
            <a href={tallyFormUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Zum Interesse-Formular →
            </a>
            <p className={styles.note}>Öffnet in neuem Tab. Dauert ca. 5 Minuten.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
