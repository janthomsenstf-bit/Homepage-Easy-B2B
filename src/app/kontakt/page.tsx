'use client'

import { useState } from 'react'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE } from '@/lib/content'
import styles from './page.module.css'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    betreff: '',
    nachricht: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.betreff || !formData.nachricht) {
      setError('Bitte fülle alle Felder aus.')
      return
    }

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mqkoxyvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          betreff: formData.betreff,
          nachricht: formData.nachricht,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', betreff: '', nachricht: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuche es später erneut.')
      }
    } catch (err) {
      setError('Netzwerkfehler. Bitte überprüfe deine Verbindung und versuche es später erneut.')
    }
  }

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Kontakt zu EasyB2B</h1>
          <p>Wir freuen uns auf deine Nachricht.</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>Schreib uns</h2>

              <div className={styles.infoBlock}>
                <h3>Email</h3>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>

              <div className={styles.infoBlock}>
                <h3>Adresse</h3>
                <p>{SITE.address}</p>
              </div>

              {SITE.phone && (
                <div className={styles.infoBlock}>
                  <h3>Telefon</h3>
                  <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
                </div>
              )}

              <div className={styles.infoBlock}>
                <h3>Öffnungszeiten</h3>
                <p>Montag–Freitag<br />9:00–17:00 Uhr</p>
              </div>

              <p className={styles.responseTime}>
                Wir antworten auf alle Anfragen innerhalb von 24 Stunden.
              </p>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2>Deine Nachricht</h2>

              {submitted && (
                <div className={styles.successMessage}>
                  ✓ Danke für deine Nachricht! Wir antworten schnellstmöglich.
                </div>
              )}

              {error && (
                <div className={styles.errorMessage}>
                  ✗ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="betreff">Betreff *</label>
                  <input
                    type="text"
                    id="betreff"
                    name="betreff"
                    value={formData.betreff}
                    onChange={handleChange}
                    placeholder="Worum geht es?"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="nachricht">Nachricht *</label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleChange}
                    placeholder="Deine Nachricht hier..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Nachricht senden →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
