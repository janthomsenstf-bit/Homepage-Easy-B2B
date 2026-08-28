'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '../konto.module.css'

export default function RegistrierenPage() {
  const [firmenname, setFirmenname] = useState('')
  const [ansprechpartner, setAnsprechpartner] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')
  const [land, setLand] = useState('deutschland')
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
      const res = await fetch('/api/auth/registrieren', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firmenname, ansprechpartner, email, telefon, land, passwort }),
      })
      const daten = await res.json()

      if (!res.ok) {
        setFehler(daten.error || 'Bei der Registrierung ist etwas schiefgelaufen.')
        setLaedt(false)
        return
      }
      setFertig(true)
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      setLaedt(false)
    }
  }

  if (fertig) {
    return (
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={styles.zentriert}>
            <div className={styles.gross}>📬</div>
            <h1 className={styles.title}>Schauen Sie in Ihr Postfach</h1>
          </div>
          <div className={styles.erfolg}>
            Wir haben eine E-Mail an <strong>{email}</strong> geschickt. Klicken Sie auf den Link darin,
            dann ist Ihr Konto einsatzbereit. Der Link gilt 48&nbsp;Stunden.
          </div>
          <p className={styles.fusszeile}>
            Nichts angekommen? Schauen Sie im Spam-Ordner nach — oder{' '}
            <Link href="/kontakt" className={styles.link}>schreiben Sie uns</Link>.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <div className={`${styles.card} ${styles.cardWide}`}>
        <div className={styles.kicker}>Konto anlegen</div>
        <h1 className={styles.title}>Willkommen bei Easy-B2B</h1>
        <p className={styles.lead}>
          Mit einem Konto erstellen Sie eigene Gesuche, verfolgen deren Stand und bekunden
          Interesse an Anzeigen anderer Unternehmen.
        </p>

        {fehler && <div className={styles.fehler}>{fehler}</div>}

        <form onSubmit={absenden}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="firmenname">Firmenname</label>
            <input
              id="firmenname" className={styles.input} value={firmenname}
              onChange={e => setFirmenname(e.target.value)}
              required autoComplete="organization" placeholder="Musterfirma GmbH"
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="ansprechpartner">Ansprechpartner</label>
              <input
                id="ansprechpartner" className={styles.input} value={ansprechpartner}
                onChange={e => setAnsprechpartner(e.target.value)}
                required autoComplete="name" placeholder="Vor- und Nachname"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="land">Land</label>
              <select
                id="land" className={styles.select} value={land}
                onChange={e => setLand(e.target.value)}
              >
                <option value="deutschland">Deutschland</option>
                <option value="daenemark">Dänemark</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">E-Mail</label>
              <input
                id="email" type="email" className={styles.input} value={email}
                onChange={e => setEmail(e.target.value)}
                required autoComplete="email" placeholder="name@firma.de"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="telefon">
                Telefon <span className={styles.optional}>(optional)</span>
              </label>
              <input
                id="telefon" type="tel" className={styles.input} value={telefon}
                onChange={e => setTelefon(e.target.value)}
                autoComplete="tel" placeholder="+49 …"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="passwort">Passwort</label>
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
          </div>

          <button type="submit" className={styles.button} disabled={laedt}>
            {laedt ? 'Konto wird angelegt …' : 'Konto anlegen'}
          </button>
        </form>

        <p className={styles.fusszeile}>
          Sie haben schon ein Konto? <Link href="/login" className={styles.link}>Hier anmelden</Link>
          <br />
          <span style={{ fontSize: '13px' }}>
            Mit dem Anlegen stimmen Sie unserer{' '}
            <Link href="/datenschutz" className={styles.link}>Datenschutzerklärung</Link> zu.
          </span>
        </p>
      </div>
    </div>
  )
}
