import React, { useState } from 'react'

interface FAQProps {
  sectionTitle: string
  children: React.ReactNode
}

const FAQ: React.FC<FAQProps> = ({ sectionTitle, children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="rounded-lg overflow-hidden bg-[var(--sand-200)] hover:bg-[var(--sand-300)] px-6">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center py-6 sm:py-8 text-left"
      >
        <h4>{sectionTitle}</h4>
        <div className={`w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      {isExpanded && (
        <div className="pt-2">
          {children}
        </div>
      )}
    </div>
  )
}

export default FAQ 