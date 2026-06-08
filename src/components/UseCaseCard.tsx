interface UseCaseCardProps {
  icon: string
  title: string
  erklärung: string
}

export default function UseCaseCard({ icon, title, erklärung }: UseCaseCardProps) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2ddd5',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a202c', margin: '0 0 8px 0' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
        {erklärung}
      </p>
    </div>
  )
}
