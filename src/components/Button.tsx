import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => (
  <a 
    href="https://get.bambookitchens.io/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-block bg-black text-white px-6 py-5 rounded font-normal hover:bg-[#272727] transition-all duration-350 ${className}`}
  >
    {children}
  </a>
)

export default Button 