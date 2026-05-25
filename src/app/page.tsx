export const metadata = {
  title: 'EasyB2B',
  description: 'Deutsch-dänische Kooperationen',
}

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <header style={{ background: '#0066cc', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1>EasyB2B</h1>
        <p>Deutsch-dänische Kooperationen. Persönlich verbunden.</p>
      </header>

      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Willkommen!</h2>
        <p>Dashboard ist live geschaltet. Weitere Inhalte folgen.</p>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <a href="/marktplatz" style={{ padding: '10px 20px', background: '#0066cc', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
            Marktplatz
          </a>
          <a href="/dashboard" style={{ padding: '10px 20px', background: '#999', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
            Dashboard
          </a>
        </div>
      </main>

      <footer style={{ background: '#f9f9f9', padding: '40px', textAlign: 'center', borderTop: '1px solid #ddd', marginTop: '60px' }}>
        <p>&copy; 2025 EasyB2B. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}
