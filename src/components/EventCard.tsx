'use client'

import styles from './EventCard.module.css'

interface EventCardProps {
  icon: string
  name: string
  beschreibung: string
  status: string
}

export default function EventCard({ icon, name, beschreibung, status }: EventCardProps) {
  return (
    <div className={styles.card}>
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
    </div>
  )
}
