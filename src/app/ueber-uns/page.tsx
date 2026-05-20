import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE, WERTE } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Über uns – Easy-B2B',
}

export default function UeberUns() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <p className="eyebrow eyebrow-amber">Wer steckt dahinter</p>
        <h1>Das ist Jan.</h1>
        <p>In Dänemark aufgewachsen, seit vielen Jahren in Deutschland.<br />
          Easy-B2B ist der Versuch, anderen den Weg abzukürzen den Jan selbst gegangen ist.</p>
      </div>

      {/* ── JAN ── */}
      <section className={`sec sec-white ${styles.section}`} id="jan">
        <div className={styles.janCard}>
          <div className={styles.janAv}>JT</div>
          <div>
            <div className={styles.janName}>{SITE.jan.name}</div>
            <div className={styles.janRole}>{SITE.jan.role}</div>
            <p className={styles.janBio}>{SITE.jan.bio}</p>
            <div className={styles.janLinks}>
              <a href={SITE.jan.linkedin} target="_blank" rel="noopener noreferrer" className={styles.janLi}>
                {SITE.jan.linkedinLabel} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WERTE ── */}
      <section className={`sec sec-off ${styles.section}`}>
        <p className="eyebrow">Was Easy-B2B antreibt</p>
        <h2>Drei Überzeugungen. Kein Kompromiss.</h2>
        <div className={styles.werteGrid}>
          {WERTE.map((w, i) => (
            <div key={w.title} className={styles.werteCard}>
              <div className={styles.werteNr}>{i + 1}</div>
              <div className={styles.werteTitle}>{w.title}</div>
              <p className={styles.werteText}>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KOOPERATIONSPARTNER ── */}
      <section className={`sec sec-white ${styles.section}`} id="partner">
        <p className="eyebrow">Mitmachen</p>
        <h2>Kooperationspartner werden.</h2>
        <p className="sec-intro">
          Handelsvertreter, Vertriebsteams, Steuerberater, Branchenexperten – Akteure mit
          eigenem Netzwerk die dauerhaft mit Easy-B2B zusammenarbeiten wollen.
        </p>
        <div className={styles.partnerBox}>
          <div className={styles.partnerCol}>
            <div className={styles.partnerFeature}>
              <span className={styles.partnerIcon}>✓</span>
              <span>Automatischer Zugang zu neuen Gesuchen aus deinen Branchen</span>
            </div>
            <div className={styles.partnerFeature}>
              <span className={styles.partnerIcon}>✓</span>
              <span>Als Insider, nicht als Bewerber</span>
            </div>
            <div className={styles.partnerFeature}>
              <span className={styles.partnerIcon}>✓</span>
              <span>Persönliches Kennenlerngespräch mit Jan</span>
            </div>
            <div className={styles.partnerFeature}>
              <span className={styles.partnerIcon}>✓</span>
              <span>Nicht jeder Handelsvertreter ist geeignet – Jan entscheidet</span>
            </div>
          </div>
          <div>
            <a href="mailto:jan@easy-b2b.de" className="btn-primary">
              Gespräch anfragen →
            </a>
            <p className={styles.partnerNote}>Jan meldet sich persönlich.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`sec sec-navy ${styles.section}`}>
        <p className="eyebrow eyebrow-amber">Loslegen</p>
        <h2>„{SITE.kernsatz}"</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
          <Link href="/marktplatz#einreichen" className="btn-amber">Gesuch einreichen →</Link>
          <Link href="/marktplatz" className="btn-outline" style={{ color: '#e8f0f8', borderColor: 'rgba(255,255,255,.2)' }}>
            Aktuelle Gesuche ansehen
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
