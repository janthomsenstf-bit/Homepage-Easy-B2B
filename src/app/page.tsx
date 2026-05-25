import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'

export const metadata = {
  title: 'EasyB2B – Deutsche und dänische Kooperationen',
  description: 'Easy-B2B verbindet Unternehmen aus Deutschland und Dänemark für Vertrieb, Projekte, Produkte und neue Marktchancen.',
}

export default function Home() {
  return (
    <>
      <Nav />

      <main style={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0066cc 0%, #3399ff 100%)',
          color: 'white',
          padding: '80px 48px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '48px',
              fontFamily: "'Playfair Display', Georgia, serif",
              marginBottom: '16px',
              fontWeight: 400,
            }}>
              Deutsch-dänische Kooperationen. Persönlich verbunden.
            </h1>
            <p style={{
              fontSize: '18px',
              marginBottom: '32px',
              opacity: 0.9,
              lineHeight: 1.6,
            }}>
              Easy-B2B verbindet Unternehmen aus Deutschland und Dänemark für Vertrieb, Projekte, Produkte und neue Marktchancen.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/marktplatz" style={{
                padding: '12px 32px',
                background: 'white',
                color: '#0066cc',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
              }}>
                Marktplatz durchsuchen
              </Link>
              <Link href="/anfrage-einreichen" style={{
                padding: '12px 32px',
                border: '2px solid white',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '16px',
              }}>
                Anfrage stellen
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 48px', background: '#f9f9f9' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '36px',
              fontFamily: "'Playfair Display', Georgia, serif",
              marginBottom: '48px',
              textAlign: 'center',
              fontWeight: 400,
            }}>
              Was ist Easy-B2B?
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}>
              {[
                { icon: '🔍', title: 'Finde Partner', desc: 'Durchsuche verifizierte Anfragen aus Deutschland und Dänemark' },
                { icon: '🤝', title: 'Echte Kontakte', desc: 'Wir vermitteln persönlich, nicht automatisiert' },
                { icon: '📈', title: 'Wachstum', desc: 'Erschließe neue Märkte über die Grenze hinweg' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: '#666666', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 48px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: "'Playfair Display', Georgia, serif",
            marginBottom: '20px',
            fontWeight: 400,
          }}>
            Bereit zu starten?
          </h2>
          <p style={{ fontSize: '16px', color: '#666666', marginBottom: '32px' }}>
            Werde Teil des deutsch-dänischen Netzwerks
          </p>
          <Link href="/marktplatz" style={{
            display: 'inline-block',
            padding: '14px 40px',
            background: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '16px',
          }}>
            Zum Marktplatz →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
