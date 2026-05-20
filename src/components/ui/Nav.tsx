'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/',           label: 'Start' },
  { href: '/beispiele',  label: 'Beispiele' },
  { href: '/typisch',    label: 'Typisch' },
  { href: '/marktplatz', label: 'Marktplatz' },
  { href: '/ueber-uns',  label: 'Über uns' },
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
