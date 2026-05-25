interface ChecklistCardProps {
  icon: string
  frage: string
  erklärung: string
}

export default function ChecklistCard({ icon, frage, erklärung }: ChecklistCardProps) {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      gap: '16px',
    }}>
      <div style={{ fontSize: '24px', flexShrink: 0 }}>{icon}</div>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', margin: '0 0 6px 0' }}>
          {frage}
        </h3>
        <p style={{ fontSize: '13px', color: '#666666', margin: 0, lineHeight: '1.5' }}>
          {erklärung}
        </p>
      </div>
    </div>
  )
}
