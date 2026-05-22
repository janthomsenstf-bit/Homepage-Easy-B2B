'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const links = [
  { href: '/',                     label: 'Start' },
  { href: '/marktplatz',           label: 'Marktplatz' },
  { href: '/so-funktioniert-es',   label: 'Ablauf' },
  { href: '/events',               label: 'Events' },
  { href: '/kontakt',              label: 'Kontakt' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/Stickman/Logo Easy-B2B.jpg"
          alt="Easy-B2B Logo"
          width={130}
          height={45}
          priority
          style={{ height: 'auto', width: 'auto' }}
        />
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
