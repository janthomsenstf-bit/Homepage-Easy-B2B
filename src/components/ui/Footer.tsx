import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link href="/" className={styles.logo}>easy<span>-b2b</span></Link>
          <p className={styles.claim}>
            Ein Netzwerk von Jan Thomsen.<br />
            🇩🇰 Dänemark · 🇩🇪 Deutschland
          </p>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Entdecken</span>
          <Link href="/marktplatz" className={styles.link}>Aktuelle Gesuche</Link>
          <Link href="/beispiele" className={styles.link}>Beispiele & Use Cases</Link>
          <Link href="/typisch" className={styles.link}>Typisch DK · DE</Link>
          <Link href="/marktplatz#einreichen" className={styles.link}>Gesuch einreichen</Link>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Über uns</span>
          <Link href="/ueber-uns" className={styles.link}>Über Jan</Link>
          <Link href="/ueber-uns#partner" className={styles.link}>Kooperationspartner</Link>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Extern</span>
          {/* Etablering-Tyskland ist eine SEPARATE Website mit eigener Domain */}
          <a
            href="https://etablering-tyskland.de"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Etablering-Tyskland →
          </a>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Rechtliches</span>
          <Link href="/impressum" className={styles.link}>Impressum</Link>
          <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 Easy-B2B · Jan Thomsen</span>
        <span>Hamburg · København</span>
      </div>
    </footer>
  )
}
