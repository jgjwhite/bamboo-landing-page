import React from 'react'

interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      {children}
    </div>
  )
}

export default Card 