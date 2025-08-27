import React from 'react'

interface CardProps {
  title: string
  caption: string
}

const Card: React.FC<CardProps> = ({ title, caption }) => (
  <div className="bg-white rounded p-3 sm:p-6 h-80 sm:h-[400px] w-full flex flex-col justify-between">
    <h3 className="text-left">{title}</h3>
    <p className="text-left">{caption}</p>
  </div>
)

export default Card 