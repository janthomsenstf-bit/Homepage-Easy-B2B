'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import AnzeigeCard from '@/components/AnzeigeCard'
import { DEMO_ANFRAGEN, BRANCHEN, filterAnfragen } from '@/lib/content'
import styles from './page.module.css'

export default function Marktplatz() {
  // Filter State
  const [richtung, setRichtung] = useState<string | null>(null)
  const [branche, setBranche] = useState<string | null>(null)
  const [reifegrad, setReifegrad] = useState<string | null>(null)

  // Gefilterte Anfragen
  const filteredAnfragen = filterAnfragen(
    richtung || undefined,
    branche || undefined,
    reifegrad || undefined,
  )

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
            >
              <option value="">Alle</option>
              {BRANCHEN.map((b) => (
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
            >
              Filter löschen ({activeFilters})
            </button>
          )}
        </div>
      </div>

      {/* ── ERGEBNISSE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
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
                  id={anzeige.id}
                  richtung={anzeige.richtung}
                  branche={anzeige.branche}
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
