'use client'
import { useState } from 'react'
import styles from './NewsletterForm.module.css'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [frequency, setFrequency] = useState('weekly')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/xdrkpend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          frequency,
          type: 'newsletter',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Danke! Du wirst in Kürze aktualisiert.')
        setEmail('')
        setFrequency('weekly')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setMessage('Etwas ist schief gelaufen. Versuche es später erneut.')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Fehler beim Senden. Versuche es später erneut.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>Deine E-Mail</label>
        <input
          type="email"
          placeholder="du@firma.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={`${styles.field} ${styles.fieldSmall}`}>
        <label className={styles.label}>Häufigkeit</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className={styles.input}
        >
          <option value="instant">Sofort-Alert</option>
          <option value="weekly">Wöchentlicher Digest</option>
          <option value="monthly">Monatlich</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn-amber ${styles.submitBtn}`}
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Anmelden'}
      </button>
      {status === 'success' && <p className={styles.success}>{message}</p>}
      {status === 'error' && <p className={styles.error}>{message}</p>}
    </form>
  )
}
