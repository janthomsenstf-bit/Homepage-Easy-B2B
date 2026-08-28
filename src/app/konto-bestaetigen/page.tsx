'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from '../konto.module.css'

type Zustand = 'pruefe' | 'ok' | 'bereits' | 'fehler'

function Bestaetigung() {
  const params = useSearchParams()
  const token = params.get('token')

  const [zustand, setZustand] = useState<Zustand>('pruefe')
  const [meldung, setMeldung] = useState('')

  useEffect(() => {
    if (!token) {
      setZustand('fehler')
      setMeldung('Dieser Link ist unvollständig. Bitte benutzen Sie den Link aus unserer E-Mail.')
      return
    }

    fetch('/api/auth/bestaetigen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(async res => {
        const daten = await res.json()
        if (res.ok) {
          setZustand(daten.bereitsBestaetigt ? 'bereits' : 'ok')
        } else {
          setZustand('fehler')
          setMeldung(daten.error || 'Der Link konnte nicht geprüft werden.')
        }
      })
      .catch(() => {
        setZustand('fehler')
        setMeldung('Wir konnten den Link gerade nicht prüfen. Bitte versuchen Sie es erneut.')
      })
  }, [token])

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        {zustand === 'pruefe' && (
          <div className={styles.zentriert}>
            <div className={styles.gross}>⏳</div>
            <h1 className={styles.title}>Einen Moment</h1>
            <p className={styles.lead}>Wir prüfen Ihren Bestätigungslink.</p>
          </div>
        )}

        {(zustand === 'ok' || zustand === 'bereits') && (
          <>
            <div className={styles.zentriert}>
              <div className={styles.gross}>✅</div>
              <h1 className={styles.title}>
                {zustand === 'ok' ? 'Konto bestätigt' : 'Schon bestätigt'}
              </h1>
            </div>
            <div className={styles.erfolg}>
              {zustand === 'ok'
                ? 'Ihre E-Mail-Adresse ist bestätigt. Sie können sich jetzt anmelden und Ihr erstes Gesuch erstellen.'
                : 'Dieses Konto war bereits bestätigt. Sie können sich direkt anmelden.'}
            </div>
            <div style={{ marginTop: 'var(--gap-lg)' }}>
              <Link href="/login" className={styles.button} style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                Jetzt anmelden
              </Link>
            </div>
          </>
        )}

        {zustand === 'fehler' && (
          <>
            <div className={styles.zentriert}>
              <div className={styles.gross}>⚠️</div>
              <h1 className={styles.title}>Das hat nicht geklappt</h1>
            </div>
            <div className={styles.fehler}>{meldung}</div>
            <p className={styles.fusszeile}>
              <Link href="/registrieren" className={styles.link}>Erneut registrieren</Link>
              {' · '}
              <Link href="/kontakt" className={styles.link}>Uns schreiben</Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default function KontoBestaetigenPage() {
  return (
    <Suspense fallback={<div className={styles.wrap}><div className={styles.card}>Lädt …</div></div>}>
      <Bestaetigung />
    </Suspense>
  )
}
