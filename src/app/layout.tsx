import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Easy-B2B – Verbindungen, die zählen',
  description: 'Kuratiertes B2B-Netzwerk für deutsche und dänische Unternehmen. Persönlich begleitet. Kein Algorithmus.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
