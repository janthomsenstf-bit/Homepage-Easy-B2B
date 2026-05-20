'use client'
import { useState, useEffect } from 'react'
import styles from './InterestForm.module.css'

interface InterestFormProps {
  gesuchId: string
  gesuchTitle: string
  onClose: () => void
}

export default function InterestForm({ gesuchId, gesuchTitle, onClose }: InterestFormProps) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const response = await fetch('https://formspree.io/f/xdrkpend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          message,
          type: 'interest',
          gesuchId,
          gesuchTitle,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setTimeout(() => {
          setName('')
          setCompany('')
          setEmail('')
          setPhone('')
          setMessage('')
          onClose()
        }, 2000)
      } else {
        setStatus('error')
        setErrorMsg('Etwas ist schief gelaufen. Versuche es später erneut.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Fehler beim Senden.')
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Interesse bekunden</h3>
          <button onClick={onClose} className={styles.close}>
            ✕
          </button>
        </div>

        {status === 'success' ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h4>Danke!</h4>
            <p>Jan wird sich bald bei dir melden. Keine Eile.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.subtitle}>{gesuchTitle}</p>

            <div className={styles.field}>
              <label>Dein Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Max Mustermann"
                required
              />
            </div>

            <div className={styles.field}>
              <label>Dein Unternehmen</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Musterfirma GmbH"
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>E-Mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="du@firma.de"
                  required
                />
              </div>
              <div className={styles.field}>
                <label>Telefon (optional)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 123 456789"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Warum interessiert dich das? (optional)</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sag kurz worum es geht..."
                rows={4}
              />
            </div>

            {errorMsg && <p className={styles.error}>{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              {status === 'loading' ? 'Wird gesendet...' : 'Interesse bekunden'}
            </button>

            <p className={styles.note}>
              Jan prüft deine Anfrage persönlich. Keine automatischen Weiterleitungen.
            </p>
          </form>
        )}
      </div>
    </>
  )
}
