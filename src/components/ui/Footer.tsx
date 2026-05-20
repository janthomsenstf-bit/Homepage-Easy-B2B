import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Link href="/" className={styles.logo}>Easy<span>B2B</span></Link>
          <p className={styles.claim}>
            B2B-Matchmaking zwischen<br />
            🇩🇰 Dänemark · 🇩🇪 Deutschland
          </p>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Entdecken</span>
          <Link href="/marktplatz" className={styles.link}>Marktplatz</Link>
          <Link href="/anfrage-einreichen" className={styles.link}>Anfrage einreichen</Link>
          <Link href="/so-funktioniert-es" className={styles.link}>So funktioniert\'s</Link>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Support</span>
          <Link href="/kontakt" className={styles.link}>Kontakt</Link>
          <a href="mailto:anfragen@easyb2b.de" className={styles.link}>E-Mail</a>
        </div>
        <div className={styles.col}>
          <span className={styles.colTitle}>Rechtliches</span>
          <Link href="/impressum" className={styles.link}>Impressum</Link>
          <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 EasyB2B</span>
        <span>Hamburg · Kopenhagen</span>
      </div>
    </footer>
  )
}
