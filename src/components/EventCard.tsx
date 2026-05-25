interface EventCardProps {
  icon: string
  name: string
  beschreibung: string
  status: string
  href?: string
}

export default function EventCard({ icon, name, beschreibung, status, href }: EventCardProps) {
  const statusColor = status === 'Aktiv' ? '#10b981' : '#f59e0b'
  
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
        <div style={{ fontSize: '32px' }}>{icon}</div>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: statusColor,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {status}
        </span>
      </div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 8px 0' }}>
        {name}
      </h3>
      <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.6' }}>
        {beschreibung}
      </p>
    </div>
  )
}
