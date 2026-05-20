import Link from 'next/link'
import styles from './AnzeigeCard.module.css'

interface AnzeigeCardProps {
  id: string
  richtung: string
  branche: string
  beschreibung: string
  reifegrad: string
  gueltigBis: string
}

export default function AnzeigeCard({
  id,
  richtung,
  branche,
  beschreibung,
  reifegrad,
  gueltigBis,
}: AnzeigeCardProps) {
  // Reifegrad Badge Farbe
  const statusColors: Record<string, string> = {
    Idee: '#94a3b8',
    Konzept: '#f59e0b',
    Bereit: '#3b82f6',
    Sofort: '#10b981',
  }

  // Datum formatieren
  const dateObj = new Date(gueltigBis)
  const formattedDate = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(dateObj)

  // Richtung in Flags
  const getRichtungDisplay = (r: string) => {
    if (r === 'DE→DK') return '🇩🇪 → 🇩🇰'
    if (r === 'DK→DE') return '🇩🇰 → 🇩🇪'
    return r
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.id}>{id}</span>
        <span className={styles.richtung}>{getRichtungDisplay(richtung)}</span>
      </div>

      <div className={styles.branche}>{branche}</div>

      <p className={styles.beschreibung}>{beschreibung}</p>

      <div className={styles.footer}>
        <div className={styles.status}>
          <span
            className={styles.statusDot}
            style={{ background: statusColors[reifegrad] || '#ccc' }}
          />
          <span className={styles.statusText}>{reifegrad}</span>
        </div>
        <span className={styles.gueltig}>Bis {formattedDate}</span>
      </div>

      <div className={styles.actions}>
        <Link href={`/anzeige/${id}`} className={styles.detailLink}>
          Details
        </Link>
        <Link href={`/interesse/${id}`} className={styles.cta}>
          Interesse bekunden →
        </Link>
      </div>
    </div>
  )
}
