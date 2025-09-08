import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'inverted'
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'default' }) => {
  const buttonClass = variant === 'inverted' ? 'btn-inverted' : 'btn-smooth'
  
  return (
    <a 
      href="https://get.bambookitchens.io/" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${buttonClass} inline-block px-6 py-4 rounded font-normal ${className}`}
    >
      {children}
    </a>
  )
}

export default Button