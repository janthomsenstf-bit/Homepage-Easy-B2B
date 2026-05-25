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
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
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
          color: '#1a1a1a',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#f9f9f9'}
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
          background: '#f9f9f9',
          borderTop: '1px solid #e0e0e0',
          fontSize: '14px',
          color: '#666666',
          lineHeight: '1.6',
        }}>
          {antwort}
        </div>
      )}
    </div>
  )
}
