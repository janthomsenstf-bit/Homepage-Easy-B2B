'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import InterestForm from '@/components/forms/InterestForm'
import { DEMO_GESUCHE, CHARAKTERFRAGEN } from '@/lib/content'
import styles from './page.module.css'

const FILTER = [
  { key: 'alle',   label: 'Alle anzeigen' },
  { key: 'dk-de',  label: '🇩🇰 → 🇩🇪 Dänen suchen DE-Partner' },
  { key: 'de-dk',  label: '🇩🇪 → 🇩🇰 Deutsche suchen DK-Partner' },
  { key: 'tech',   label: 'Technologie' },
  { key: 'food',   label: 'Lebensmittel' },
  { key: 'handel', label: 'Handel & Vertrieb' },
  { key: 'bau',    label: 'Bau & Industrie' },
]

const REIFEGRAD_COLOR: Record<string, string> = {
  'Startbereit':       '#1D9E75',
  'In Vorbereitung':   '#EF9F27',
}

export default function Marktplatz() {
  const [selectedGesuch, setSelectedGesuch] = useState<{id: string; title: string} | null>(null)

  const handleInterest = (id: string, title: string) => {
    setSelectedGesuch({ id, title })
  }

  const closeModal = () => {
    setSelectedGesuch(null)
  }

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <p className="eyebrow eyebrow-amber">Netzwerk</p>
        <h1>Aktuelle Gesuche.</h1>
        <p>Kuratiert, geprüft, konkret. Du siehst einen Teaser – wer Interesse hat, stellt sich vor.</p>
      </div>

      {/* ── FILTER ── */}
      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filtern:</span>
        {FILTER.map((f) => (
          <button key={f.key} className={`${styles.filterBtn} ${f.key === 'alle' ? styles.filterActive : ''}`}>
            {f.label}
          </button>
        ))}
      </div>

      {/* ── GESUCHE ── */}
      <section className={`sec sec-off ${styles.section}`}>
        <div className={styles.gGrid}>
          {DEMO_GESUCHE.map((g) => (
            <div key={g.id} className={styles.gCard}>
              <div className={styles.gTop}>
                <div className={styles.gBranche}>{g.branche}</div>
                <div className={styles.gDir}>{g.richtung}</div>
              </div>
              <p className={styles.gText}>{g.teaser}</p>
              <div className={styles.gBottom}>
                <div className={styles.gRg}>
                  <div
                    className={styles.gRgDot}
                    style={{ background: REIFEGRAD_COLOR[g.reiferadLabel] ?? '#aaa' }}
                  />
                  Reifegrad {g.reifegrad}/10
                </div>
                <button className={styles.gBtn} onClick={() => handleInterest(g.id, g.teaser)}>
                  Interesse bekunden →
                </button>
              </div>
              <p className={styles.gHint}>Jan prüft deine Anfrage – du wirst nicht direkt weitergeleitet.</p>
            </div>
          ))}
        </div>

        {/* CTA für Einreicher */}
        <div className={styles.einreicherCta}>
          <div>
            <div className={styles.einreicherTitle}>Du hast selbst etwas anzubieten?</div>
            <p className={styles.einreicherDesc}>
              Reich dein Gesuch ein – wir prüfen es persönlich und leiten es nur weiter wenn es wirklich passt.
            </p>
          </div>
          <Link href="#einreichen" className="btn-primary">
            Eigenes Gesuch einreichen →
          </Link>
        </div>
      </section>

      {/* ── EINREICHEN ── */}
      <section className={`sec sec-white ${styles.section}`} id="einreichen">
        <p className="eyebrow">Mitmachen</p>
        <h2>Wir fangen nicht mit Zahlen an.</h2>
        <p className="sec-intro">
          Unser Formular beginnt mit drei kurzen Szenarien. Wer du bist – das zählt mehr als dein Umsatz.
        </p>
        <div className={styles.charCards}>
          {CHARAKTERFRAGEN.map((f) => (
            <div key={f.nr} className={styles.charCard}>
              <div className={styles.charNr}>Frage {f.nr} · {f.thema}</div>
              <div className={styles.charQ}>{f.frage}</div>
            </div>
          ))}
        </div>
        <div className={styles.charCta}>
          {/* Tally-Formular URL hier eintragen wenn verfügbar */}
          <a href="https://tally.so" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Gesuch einreichen →
          </a>
          <span className={styles.charTime}>8 Minuten · kostenlos · persönlich geprüft</span>
        </div>
      </section>

      {/* ── ABSCHLUSS ── */}
      <section className={`sec sec-navy ${styles.section}`}>
        <h2>Qualität vor Quantität – das ist unser Versprechen.</h2>
        <p className="sec-intro">
          Jede Anfrage die du hier siehst wurde persönlich geprüft. Viele Verbindungen entstehen
          im Hintergrund – ohne dass sie je öffentlich werden. Wenn du dein eigenes Gesuch
          einreichen möchtest, freuen wir uns darauf.
        </p>
        <Link href="#einreichen" className="btn-amber">Jetzt Gesuch einreichen →</Link>
      </section>

      <Footer />

      {selectedGesuch && (
        <InterestForm
          gesuchId={selectedGesuch.id}
          gesuchTitle={selectedGesuch.title}
          onClose={closeModal}
        />
      )}
    </>
  )
}
