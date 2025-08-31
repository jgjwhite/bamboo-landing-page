import React from 'react'

interface CardProps {
  title: string
  caption: string
  backgroundImage?: string
  textColor?: 'black' | 'white'
}

const Card: React.FC<CardProps> = ({ 
  title, 
  caption, 
  backgroundImage = '/assets/placeholder/image-card.png',
  textColor = 'black'
}) => (
  <div 
    className={`bg-white rounded p-3 sm:p-6 h-[400px] sm:h-[400px] w-full flex flex-col justify-between ${
      backgroundImage ? 'bg-cover bg-center bg-no-repeat' : ''
    }`}
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
  >
    <h4 className={`text-left ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{title}</h4>
    <p className={`text-left ${textColor === 'white' ? 'text-white' : 'text-black'}`}>{caption}</p>
  </div>
)

export default Card 