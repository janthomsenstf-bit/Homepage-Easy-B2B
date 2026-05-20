'use client'
import { useState } from 'react'
import styles from './FAQItem.module.css'

interface FAQItemProps {
  frage: string
  antwort: string
  defaultOpen?: boolean
}

export default function FAQItem({
  frage,
  antwort,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.frage}>{frage}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && <div className={styles.antwort}>{antwort}</div>}
    </div>
  )
}
