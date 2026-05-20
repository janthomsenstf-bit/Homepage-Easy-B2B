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
  const anfrage = getAnfrageById(params.id)
  return {
    title: `${anfrage?.id} – EasyB2B`,
    description: anfrage?.beschreibung,
  }
}

export default function AnzeigePage({ params }: PageProps) {
  const anfrage = getAnfrageById(params.id)

  if (!anfrage) {
    notFound()
  }

  // Datum formatieren
  const dateObj = new Date(anfrage.gueltigBis)
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateObj)

  // Status Farbe
  const statusColors: Record<string, string> = {
    Idee: '#94a3b8',
    Konzept: '#f59e0b',
    Bereit: '#3b82f6',
    Sofort: '#10b981',
  }

  // Richtung Display
  const getRichtungDisplay = (r: string) => {
    if (r === 'DE→DK') return '🇩🇪 → 🇩🇰'
    if (r === 'DK→DE') return '🇩🇰 → 🇩🇪'
    return r
  }

  return (
    <>
      <Nav />

      <article className={styles.page}>
        <div className={styles.content}>
          {/* Back Link */}
          <Link href="/marktplatz" className={styles.backLink}>
            ← Zurück zum Marktplatz
          </Link>

          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerTop}>
              <div>
                <span className={styles.id}>{anfrage.id}</span>
                <h1>{anfrage.art}</h1>
              </div>
              <div className={styles.badges}>
                <span className={styles.richtung}>{getRichtungDisplay(anfrage.richtung)}</span>
                <span className={styles.branche}>{anfrage.branche}</span>
              </div>
            </div>

            <div className={styles.headerMeta}>
              <div className={styles.meta}>
                <span className={styles.label}>Gültig bis:</span>
                <span>{formattedDate}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.label}>Sprachen:</span>
                <span>{anfrage.sprachen.join(', ')}</span>
              </div>
              <div className={styles.meta}>
                <span className={styles.label}>Reifegrad:</span>
                <div className={styles.reifegradBadge}>
                  <span
                    className={styles.dot}
                    style={{ background: statusColors[anfrage.reifegrad] || '#ccc' }}
                  />
                  {anfrage.reifegrad}
                </div>
              </div>
            </div>
          </header>

          {/* Sections */}
          <section className={styles.section}>
            <h2>Was wird gesucht?</h2>
            <p>{anfrage.beschreibung}</p>
          </section>

          <section className={styles.section}>
            <h2>Was soll entstehen?</h2>
            <p>{anfrage.ziel}</p>
          </section>

          {anfrage.mussHaves && anfrage.mussHaves.length > 0 && (
            <section className={styles.section}>
              <h2>Must-Haves</h2>
              <ul className={styles.list}>
                {anfrage.mussHaves.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {anfrage.niceToHaves && anfrage.niceToHaves.length > 0 && (
            <section className={styles.section}>
              <h2>Nice-to-Haves</h2>
              <ul className={styles.list}>
                {anfrage.niceToHaves.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.section}>
            <h2>Über das Unternehmen</h2>
            <p>{anfrage.persoenlichTouched}</p>
          </section>

          <section className={styles.section}>
            <h2>Standort</h2>
            <p>{anfrage.standort}</p>
          </section>

          {/* CTA */}
          <div className={styles.cta}>
            <h3>Interessiert?</h3>
            <p>Bekunde dein Interesse und wir kümmern uns um den Rest.</p>
            <Link href={`/interesse/${anfrage.id}`} className="btn-primary">
              Interesse bekunden →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
