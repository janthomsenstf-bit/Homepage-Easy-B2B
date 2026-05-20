'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { GRENZSITUATIONEN, SITE } from '@/lib/content'
import styles from './page.module.css'

const TABS = [
  { key: 'alle',    label: 'Alle anzeigen' },
  { key: 'kontakt', label: 'Erster Kontakt' },
  { key: 'treffen', label: 'Erstes Treffen' },
  { key: 'projekt', label: 'Erstes Projekt' },
  { key: 'prozess', label: 'Laufender Prozess' },
]

export default function Typisch() {
  const [active, setActive] = useState('alle')

  const filtered = active === 'alle'
    ? GRENZSITUATIONEN
    : GRENZSITUATIONEN.filter(g => g.phase === active)

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <h1>Kennst du das Gefühl –<br />du redest, aber es kommt nicht an?</h1>
        <p>
          Das liegt meistens nicht an dir. Und auch nicht am anderen. Sondern daran,
          dass Deutschland und Dänemark Dinge einfach anders meinen.
        </p>
        <p className={styles.heroBridge}>
          Easy-B2B kennt beide Seiten – und baut die Brücke dazwischen.
        </p>
      </div>

      {/* ── FILTER TABS ── */}
      <div className={styles.tabBar}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`${styles.tab} ${active === t.key ? styles.tabActive : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── SITUATIONEN ── */}
      <section className={`sec sec-off ${styles.section}`}>
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--t3)', fontSize: 14 }}>
            Für diese Phase sind noch keine Situationen eingetragen.
          </p>
        ) : (
          <div className={styles.sitGrid}>
            {filtered.map(g => (
              <div key={g.titel} className={styles.sitCard}>
                <div className={styles.sitHead}>
                  <span className={styles.sitTitle}>{g.titel}</span>
                  <span>🇩🇪🇩🇰</span>
                </div>
                <div className={styles.sitBody}>
                  <div className={styles.sitSide}>
                    <span className={styles.sitFlag}>🇩🇪</span>
                    <span>{g.de}</span>
                  </div>
                  <div className={styles.sitSide}>
                    <span className={styles.sitFlag}>🇩🇰</span>
                    <span>{g.dk}</span>
                  </div>
                  <div className={styles.sitDivider} />
                  <div className={styles.kernBlock}>
                    <span className={styles.kernLabel}>Kern des Unterschieds</span>
                    <p className={styles.kernText}>{g.erkenntnis}</p>
                  </div>
                  <div className={styles.tippBlock}>
                    <span className={styles.tippIcon}>💡</span>
                    <div>
                      <span className={styles.tippLabel}>Tipp</span>
                      <p className={styles.tippText}>{g.tipp}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── WARUM EASY-B2B ── */}
      <section className={`sec sec-white ${styles.section}`}>
        <h2>Warum Easy-B2B?</h2>
        <div className={styles.warumGrid}>
          <div className={styles.warumItem}>
            <span className={styles.warumIcon}>🧭</span>
            <div>
              <div className={styles.warumTitle}>Wir kennen beide Seiten</div>
              <p className={styles.warumText}>
                Nicht aus dem Lehrbuch, sondern aus der Praxis. Seit Jahren zwischen
                Deutschland und Dänemark – auf beiden Seiten des Tisches.
              </p>
            </div>
          </div>
          <div className={styles.warumItem}>
            <span className={styles.warumIcon}>🔍</span>
            <div>
              <div className={styles.warumTitle}>Jan prüft jede Anfrage persönlich</div>
              <p className={styles.warumText}>
                Kein Algorithmus entscheidet. Wir stellen nur vor wenn wir sicher sind
                dass es passt – auf beiden Seiten.
              </p>
            </div>
          </div>
          <div className={styles.warumItem}>
            <span className={styles.warumIcon}>🤝</span>
            <div>
              <div className={styles.warumTitle}>Kein Marktplatz – ein Netzwerk</div>
              <p className={styles.warumText}>
                Der Unterschied liegt in dem was vorher passiert. Wir begleiten die
                Verbindung – nicht nur die Anfrage.
              </p>
            </div>
          </div>
        </div>
        <Link href="/" className="more">Wie das genau funktioniert →</Link>
      </section>

      {/* ── CTA ── */}
      <section className={`sec sec-navy ${styles.section}`} style={{ textAlign: 'center' }}>
        <h2>Diese Situationen kennst du –<br />oder du wirst sie kennen.</h2>
        <p className="sec-intro" style={{ margin: '0 auto 28px', maxWidth: 520 }}>
          Du musst das nicht alleine navigieren. Wir wissen wie beide Seiten ticken –
          und wir bringen die richtigen Menschen zusammen.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/marktplatz#einreichen" className="btn-amber">Gesuch einreichen →</Link>
          <Link href="/marktplatz" className="btn-outline" style={{ color: '#e8f0f8', borderColor: 'rgba(255,255,255,.2)' }}>
            Aktuelle Kooperationen ansehen
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
