'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import styles from './Nav.module.css'

const links = [
  { href: '/',                       label: 'Start' },
  { href: '/marktplatz',             label: 'Marktplatz' },
  { href: '/so-funktioniert-es',     label: 'Ablauf' },
  { href: '/kooperationsbeispiele',  label: 'Beispiele' },
  { href: '/warum-wir',              label: 'Warum wir' },
  { href: '/kontakt',                label: 'Kontakt' },
]

export default function Nav() {
  const path = usePathname()
  const { data: session, status } = useSession()
  const angemeldet = status === 'authenticated'

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

        {angemeldet ? (
          <>
            <Link
              href={session?.user?.rolle === 'operator' ? '/dashboard' : '/mein-bereich'}
              className={`${styles.link} ${path?.startsWith('/mein-bereich') ? styles.active : ''}`}
            >
              Mein Bereich
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className={styles.link}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Abmelden
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className={`${styles.link} ${path === '/login' ? styles.active : ''}`}
          >
            Anmelden
          </Link>
        )}

        <Link href="/registrieren" className={styles.cta}>
          Gesuch einreichen
        </Link>
      </div>
    </nav>
  )
}
