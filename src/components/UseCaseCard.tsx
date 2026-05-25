interface UseCaseCardProps {
  icon: string
  title: string
  erklärung: string
}

export default function UseCaseCard({ icon, title, erklärung }: UseCaseCardProps) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 8px 0' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.6' }}>
        {erklärung}
      </p>
    </div>
  )
}
