'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './InteresseForm.module.css'

interface InteresseFormProps {
  anfrageId: string
  anzeigenId: string
}

export default function InteresseForm({
  anfrageId,
  anzeigenId,
}: InteresseFormProps) {
  const [formData, setFormData] = useState({
    firmenname: '',
    ansprechpartner: '',
    email: '',
    telefon: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('/api/interessenten/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          anfrageId,
          ...formData,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Fehler beim Absenden')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={styles.successMessage}>
        <div className={styles.icon}>✅</div>
        <h2>Danke für dein Interesse!</h2>
        <p>
          Wir haben deine Anfrage erhalten und werden sie in den nächsten 2-3
          Werktagen überprüfen.
        </p>
        <p className={styles.nextSteps}>
          <strong>Nächste Schritte:</strong>
        </p>
        <ul>
          <li>Wir überprüfen dein Unternehmen und deine Informationen</li>
          <li>Wir schauen, ob ihr wirklich zusammenpasst</li>
          <li>Falls ja: Wir leiten deine Daten weiter</li>
        </ul>
        <p className={styles.contact}>
          Falls Fragen entstehen, schreiben wir dir auf {formData.email}.
        </p>
        <Link href="/marktplatz" className="btn-primary">
          Zurück zum Marktplatz
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && (
        <div className={styles.error}>
          <strong>Fehler:</strong> {error}
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="firmenname">Dein Unternehmensname</label>
        <input
          type="text"
          id="firmenname"
          name="firmenname"
          value={formData.firmenname}
          onChange={handleChange}
          required
          disabled={loading}
          placeholder="z.B. Musterfirma GmbH"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="ansprechpartner">Dein Name</label>
        <input
          type="text"
          id="ansprechpartner"
          name="ansprechpartner"
          value={formData.ansprechpartner}
          onChange={handleChange}
          required
          disabled={loading}
          placeholder="z.B. Max Mustermann"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email-Adresse</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            placeholder="max@example.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefon">Telefon (optional)</label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            disabled={loading}
            placeholder="+49 123 456789"
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
        >
          {loading ? 'Wird gesendet...' : 'Interesse bekunden →'}
        </button>
        <Link href={`/anzeige/${anzeigenId}`} className={styles.cancelLink}>
          Zurück zur Anfrage
        </Link>
      </div>

      <p className={styles.privacy}>
        Mit dem Absenden bestätigst du, dass wir deine Daten verarbeiten
        dürfen. Mehr Infos in unserer{' '}
        <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>
    </form>
  )
}
