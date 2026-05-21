'use client'

import styles from './UseCaseCard.module.css'

interface UseCaseCardProps {
  icon: string
  title: string
  beschreibung: string
}

export default function UseCaseCard({ icon, title, beschreibung }: UseCaseCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.beschreibung}>{beschreibung}</p>
    </div>
  )
}
