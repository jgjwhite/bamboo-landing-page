import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  pt?: string
  pb?: string
}

const Container: React.FC<ContainerProps> = ({ children, className = '', pt, pb }) => {
  const paddingClasses = pt || pb ? 
    `${pt ? `pt-${pt}` : 'pt-16'} ${pb ? `pb-${pb}` : 'pb-16'}` : 
    'py-16'
  
  return (
    <div className={`max-w-[1200px] mx-auto px-3 sm:px-6 ${paddingClasses} ${className}`}>
      {children}
    </div>
  )
}

export default Container 