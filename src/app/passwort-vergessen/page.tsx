'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../konto.module.css'

export default function PasswortVergessenPage() {
  const [email, setEmail] = useState('')
  const [laedt, setLaedt] = useState(false)
  const [fehler, setFehler] = useState('')
  const [gesendet, setGesendet] = useState(false)

  async function absenden(e: React.FormEvent) {
    e.preventDefault()
    setLaedt(true)
    setFehler('')

    try {
      const res = await fetch('/api/auth/passwort-vergessen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const daten = await res.json()
      if (!res.ok) {
        setFehler(daten.error || 'Etwas ist schiefgelaufen.')
        setLaedt(false)
        return
      }
      setGesendet(true)
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      setLaedt(false)
    }
  }

  if (gesendet) {
    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.zentriert}>
            <div className={styles.gross}>📬</div>
            <h1 className={styles.title}>E-Mail unterwegs</h1>
          </div>
          <div className={styles.erfolg}>
            Falls für <strong>{email}</strong> ein Konto besteht, haben wir einen Link zum
            Zurücksetzen geschickt. Er gilt eine Stunde.
          </div>
          <p className={styles.fusszeile}>
            <Link href="/login" className={styles.link}>Zurück zur Anmeldung</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.kicker}>Passwort zurücksetzen</div>
        <h1 className={styles.title}>Passwort vergessen?</h1>
        <p className={styles.lead}>
          Kein Problem. Geben Sie Ihre E-Mail-Adresse an, wir schicken Ihnen einen Link zum
          Zurücksetzen.
        </p>

        {fehler && <div className={styles.fehler}>{fehler}</div>}

        <form onSubmit={absenden}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">E-Mail</label>
            <input
              id="email" type="email" className={styles.input} value={email}
              onChange={e => setEmail(e.target.value)}
              required autoComplete="email" placeholder="name@firma.de"
            />
          </div>
          <button type="submit" className={styles.button} disabled={laedt}>
            {laedt ? 'Wird gesendet …' : 'Link anfordern'}
          </button>
        </form>

        <p className={styles.fusszeile}>
          <Link href="/login" className={styles.link}>Zurück zur Anmeldung</Link>
        </p>
      </div>
    </div>
  )
}
