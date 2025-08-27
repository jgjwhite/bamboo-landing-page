import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => (
  <div className={`max-w-[1200px] mx-auto px-3 sm:px-6 py-16 ${className}`}>
    {children}
  </div>
)

export default Container 