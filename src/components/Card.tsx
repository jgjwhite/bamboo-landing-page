import React from 'react'

interface CardProps {
  title: string
  caption: string
  textColor?: 'black' | 'white'
}

const Card: React.FC<CardProps> = ({ 
  title, 
  caption, 
  textColor = 'black'
}) => (
  <div 
    className="rounded p-3 sm:p-6 h-[400px] sm:h-[400px] w-full flex flex-col justify-between"
    style={{ backgroundColor: 'var(--sand-200)' }}
  >
    <h3 className={`text-left ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{title}</h3>
    <p className={`text-left ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{caption}</p>
  </div>
)

export default Card 