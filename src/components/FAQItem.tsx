'use client'

import { useState } from 'react'

interface FAQItemProps {
  frage: string
  antwort: string
  defaultOpen?: boolean
}

export default function FAQItem({ frage, antwort, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div style={{
      border: '1px solid #e2ddd5',
      borderRadius: '16px',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px',
          background: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '15px',
          fontWeight: '600',
          color: '#1a202c',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#faf8f5'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
      >
        {frage}
        <span style={{
          display: 'inline-block',
          transition: 'transform 0.2s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div style={{
          padding: '20px',
          background: '#faf8f5',
          borderTop: '1px solid #e2ddd5',
          fontSize: '14px',
          color: '#4a5568',
          lineHeight: '1.6',
        }}>
          {antwort}
        </div>
      )}
    </div>
  )
}
