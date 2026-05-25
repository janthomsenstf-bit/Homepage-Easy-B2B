'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnzeigeCard from '@/components/AnzeigeCard'
import styles from './page.module.css'

interface Anfrage {
  id: string
  anzeigenId: string
  richtung: string
  branche: { name: string }
  beschreibung: string
  reifegrad: string
  gueltigBis: string
  status: string
  sichtbarkeit: string
}

export default function Marktplatz() {
  // State für Anfragen und Loading
  const [anfragen, setAnfragen] = useState<Anfrage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filter State
  const [richtung, setRichtung] = useState<string | null>(null)
  const [branche, setBranche] = useState<string | null>(null)
  const [reifegrad, setReifegrad] = useState<string | null>(null)

  // Lade Anfragen beim Mounten
  useEffect(() => {
    const fetchAnfragen = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/anfragen')
        if (!response.ok) throw new Error('Fehler beim Laden der Anfragen')

        const data = await response.json()

        // Filtere nur aktive und öffentliche/anonyme Anfragen
        const publicAnfragen = data.filter(
          (a: Anfrage) =>
            a.status === 'aktiv' &&
            (a.sichtbarkeit === 'oeffentlich' || a.sichtbarkeit === 'anonym')
        )

        setAnfragen(publicAnfragen)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      } finally {
        setLoading(false)
      }
    }

    fetchAnfragen()
  }, [])

  // Konvertiere Richtung von DB-Format zu Anzeigeformat
  const convertRichtung = (dbRichtung: string): string => {
    if (dbRichtung === 'de_dk') return 'DE→DK'
    if (dbRichtung === 'dk_de') return 'DK→DE'
    return dbRichtung
  }

  // Gefilterte Anfragen basierend auf Filter-State
  const filteredAnfragen = anfragen.filter(a => {
    if (richtung && convertRichtung(a.richtung) !== richtung) return false
    if (branche && a.branche.name !== branche) return false
    if (reifegrad && a.reifegrad !== reifegrad) return false
    return true
  })

  // Sammle eindeutige Branchen aus den geladenen Anfragen
  const uniqueBranchen = Array.from(
    new Set(anfragen.map(a => a.branche.name))
  ).sort()

  const handleClearFilters = () => {
    setRichtung(null)
    setBranche(null)
    setReifegrad(null)
  }

  const activeFilters = [richtung, branche, reifegrad].filter(Boolean).length

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Marktplatz</h1>
          <p>Aktuelle B2B-Anfragen – kuratiert und persönlich geprüft.</p>
        </div>
      </section>

      {/* ── FILTER ── */}
      <div className={styles.filterBar}>
        <div className={styles.filterContent}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Richtung</label>
            <select
              value={richtung || ''}
              onChange={(e) => setRichtung(e.target.value || null)}
              className={styles.filterSelect}
              disabled={loading}
            >
              <option value="">Alle</option>
              <option value="DE→DK">🇩🇪 → 🇩🇰 Deutschland → Dänemark</option>
              <option value="DK→DE">🇩🇰 → 🇩🇪 Dänemark → Deutschland</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Branche</label>
            <select
              value={branche || ''}
              onChange={(e) => setBranche(e.target.value || null)}
              className={styles.filterSelect}
              disabled={loading}
            >
              <option value="">Alle</option>
              {uniqueBranchen.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Reifegrad</label>
            <select
              value={reifegrad || ''}
              onChange={(e) => setReifegrad(e.target.value || null)}
              className={styles.filterSelect}
              disabled={loading}
            >
              <option value="">Alle</option>
              <option value="Idee">Idee</option>
              <option value="Konzept">Konzept</option>
              <option value="Bereit">Bereit</option>
              <option value="Sofort">Sofort</option>
            </select>
          </div>

          {activeFilters > 0 && (
            <button
              onClick={handleClearFilters}
              className={styles.clearFiltersBtn}
              disabled={loading}
            >
              Filter löschen ({activeFilters})
            </button>
          )}
        </div>
      </div>

      {/* ── ERGEBNISSE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          {loading ? (
            <div className={styles.resultHeader}>
              <p className={styles.resultInfo}>Anfragen werden geladen...</p>
            </div>
          ) : error ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>⚠️</div>
              <h3>Fehler beim Laden</h3>
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="btn-primary">
                Seite neu laden
              </button>
            </div>
          ) : (
            <>
              <div className={styles.resultHeader}>
                <h2>
                  {filteredAnfragen.length} Anfrage{filteredAnfragen.length !== 1 ? 'n' : ''}
                </h2>
                <p className={styles.resultInfo}>
                  {activeFilters > 0 ? `${activeFilters} Filter aktiv` : 'Alle Anfragen'}
                </p>
              </div>

              {filteredAnfragen.length > 0 ? (
                <div className={styles.anzeigeGrid}>
                  {filteredAnfragen.map((anzeige) => (
                    <AnzeigeCard
                      key={anzeige.id}
                      id={anzeige.anzeigenId}
                      richtung={convertRichtung(anzeige.richtung)}
                      branche={anzeige.branche.name}
                      beschreibung={anzeige.beschreibung}
                      reifegrad={anzeige.reifegrad}
                      gueltigBis={anzeige.gueltigBis}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>🔍</div>
                  <h3>Keine Anfragen gefunden</h3>
                  <p>Versuche andere Filter oder schau später wieder vorbei.</p>
                  <button onClick={handleClearFilters} className="btn-primary">
                    Alle Anfragen anzeigen
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── CTA: SELBST ANFRAGE EINREICHEN ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Du hast selbst etwas anzubieten?</h2>
          <p>Reiche deine Anfrage ein und finde qualifizierte Partner.</p>
          <Link href="/anfrage-einreichen" className="btn-primary">
            Anfrage einreichen →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
