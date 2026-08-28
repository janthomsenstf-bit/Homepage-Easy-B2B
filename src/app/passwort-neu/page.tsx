'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from '../konto.module.css'

function NeuesPasswort() {
  const params = useSearchParams()
  const token = params.get('token')

  const [passwort, setPasswort] = useState('')
  const [passwort2, setPasswort2] = useState('')
  const [laedt, setLaedt] = useState(false)
  const [fehler, setFehler] = useState('')
  const [fertig, setFertig] = useState(false)

  async function absenden(e: React.FormEvent) {
    e.preventDefault()
    setFehler('')

    if (passwort !== passwort2) {
      setFehler('Die beiden Passwörter stimmen nicht überein.')
      return
    }

    setLaedt(true)
    try {
      const res = await fetch('/api/auth/passwort-neu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, passwort }),
      })
      const daten = await res.json()
      if (!res.ok) {
        setFehler(daten.error || 'Etwas ist schiefgelaufen.')
        setLaedt(false)
        return
      }
      setFertig(true)
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      setLaedt(false)
    }
  }

  if (!token) {
    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.zentriert}>
            <div className={styles.gross}>⚠️</div>
            <h1 className={styles.title}>Link unvollständig</h1>
          </div>
          <div className={styles.fehler}>
            Dieser Link ist nicht vollständig. Bitte benutzen Sie den Link aus unserer E-Mail.
          </div>
          <p className={styles.fusszeile}>
            <Link href="/passwort-vergessen" className={styles.link}>Neuen Link anfordern</Link>
          </p>
        </div>
      </div>
    )
  }

  if (fertig) {
    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.zentriert}>
            <div className={styles.gross}>✅</div>
            <h1 className={styles.title}>Passwort geändert</h1>
          </div>
          <div className={styles.erfolg}>
            Ihr neues Passwort ist gespeichert. Sie können sich jetzt damit anmelden.
          </div>
          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <Link href="/login" className={styles.button} style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              Jetzt anmelden
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.kicker}>Passwort zurücksetzen</div>
        <h1 className={styles.title}>Neues Passwort vergeben</h1>
        <p className={styles.lead}>Wählen Sie ein Passwort, das Sie sonst nirgends benutzen.</p>

        {fehler && <div className={styles.fehler}>{fehler}</div>}

        <form onSubmit={absenden}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="passwort">Neues Passwort</label>
            <input
              id="passwort" type="password" className={styles.input} value={passwort}
              onChange={e => setPasswort(e.target.value)}
              required autoComplete="new-password" minLength={10}
            />
            <p className={styles.hint}>Mindestens 10 Zeichen, mit Buchstaben und einer Ziffer.</p>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="passwort2">Passwort wiederholen</label>
            <input
              id="passwort2" type="password" className={styles.input} value={passwort2}
              onChange={e => setPasswort2(e.target.value)}
              required autoComplete="new-password"
            />
          </div>

          <button type="submit" className={styles.button} disabled={laedt}>
            {laedt ? 'Wird gespeichert …' : 'Passwort speichern'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function PasswortNeuPage() {
  return (
    <Suspense fallback={<div className={styles.wrap}><div className={styles.card}>Lädt …</div></div>}>
      <NeuesPasswort />
    </Suspense>
  )
}
