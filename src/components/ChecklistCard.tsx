interface ChecklistCardProps {
  icon: string
  frage: string
  erklärung: string
}

export default function ChecklistCard({ icon, frage, erklärung }: ChecklistCardProps) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e2ddd5',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      gap: '16px',
    }}>
      <div style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</div>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a202c', margin: '0 0 6px 0' }}>
          {frage}
        </h3>
        <p style={{ fontSize: '13px', color: '#4a5568', margin: 0, lineHeight: '1.5' }}>
          {erklärung}
        </p>
      </div>
    </div>
  )
}
