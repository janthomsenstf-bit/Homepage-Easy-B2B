'use client'

import Link from 'next/link'
import styles from './EventCard.module.css'

interface EventCardProps {
  icon: string
  name: string
  beschreibung: string
  status: string
  href?: string
}

export default function EventCard({ icon, name, beschreibung, status, href }: EventCardProps) {
  const content = (
    <>
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.titleArea}>
          <h3 className={styles.name}>{name}</h3>
          <div className={`${styles.status} ${styles[status.toLowerCase().replace(/\s+/g, '-')]}`}>
            {status}
          </div>
        </div>
      </div>
      <p className={styles.beschreibung}>{beschreibung}</p>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={styles.cardLink}>
        <div className={styles.card}>
          {content}
        </div>
      </Link>
    )
  }

  return <div className={styles.card}>{content}</div>
}
