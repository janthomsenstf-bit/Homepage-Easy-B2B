'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/',                     label: 'Start' },
  { href: '/marktplatz',           label: 'Marktplatz' },
  { href: '/so-funktioniert-es',   label: 'So funktioniert\'s' },
  { href: '/kontakt',              label: 'Kontakt' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        easy<span>-b2b</span>
      </Link>
      <div className={styles.links}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={`${styles.link} ${path === l.href ? styles.active : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/marktplatz#einreichen" className={styles.cta}>
          Gesuch einreichen
        </Link>
      </div>
    </nav>
  )
}
