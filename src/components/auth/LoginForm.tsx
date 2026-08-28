'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from '@/app/konto.module.css'

export default function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const weiter = params.get('weiter')

  const [email, setEmail] = useState('')
  const [passwort, setPasswort] = useState('')
  const [laedt, setLaedt] = useState(false)
  const [fehler, setFehler] = useState('')

  async function absenden(e: React.FormEvent) {
    e.preventDefault()
    setLaedt(true)
    setFehler('')

    const ergebnis = await signIn('credentials', {
      email,
      password: passwort,
      redirect: false,
    })

    if (ergebnis?.error) {
      if (ergebnis.error.includes('email_nicht_bestaetigt')) {
        setFehler(
          'Ihr Konto ist noch nicht bestätigt. Bitte klicken Sie auf den Link in unserer Willkommens-E-Mail.'
        )
      } else {
        setFehler('E-Mail oder Passwort stimmen nicht.')
      }
      setLaedt(false)
      return
    }

    // Die Middleware schickt Unternehmen ohnehin in den richtigen Bereich.
    router.push(weiter || '/mein-bereich')
    router.refresh()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <div className={styles.kicker}>Anmelden</div>
        <h1 className={styles.title}>Willkommen zurück</h1>
        <p className={styles.lead}>
          Melden Sie sich an, um Ihre Gesuche zu verwalten und den Stand Ihrer Anzeigen zu sehen.
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

          <div className={styles.field}>
            <label className={styles.label} htmlFor="passwort">Passwort</label>
            <input
              id="passwort" type="password" className={styles.input} value={passwort}
              onChange={e => setPasswort(e.target.value)}
              required autoComplete="current-password"
            />
          </div>

          <button type="submit" className={styles.button} disabled={laedt}>
            {laedt ? 'Wird angemeldet …' : 'Anmelden'}
          </button>
        </form>

        <p className={styles.fusszeile}>
          <Link href="/passwort-vergessen" className={styles.link}>Passwort vergessen?</Link>
          <br />
          Noch kein Konto? <Link href="/registrieren" className={styles.link}>Jetzt anlegen</Link>
        </p>
      </div>
    </div>
  )
}
