'use client'

import styles from './ChecklistCard.module.css'

interface ChecklistCardProps {
  text: string
}

export default function ChecklistCard({ text }: ChecklistCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.checkmark}>✓</span>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
