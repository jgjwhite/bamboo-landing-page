import React from 'react'

interface ImageSectionProps {
  variant: 'full-width' | 'split-width'
  desktopImage: string
  mobileImage: string
  headline: string
  body: string
  className?: string
}

const ImageSection: React.FC<ImageSectionProps> = ({
  variant,
  desktopImage,
  mobileImage,
  headline,
  body,
  className = ''
}) => {
  const aspectRatio = variant === 'full-width' 
    ? "aspect-[900/1200] sm:aspect-[5/4]" 
    : "aspect-[900/1200] sm:aspect-square"
  
  return (
    <div className={`relative overflow-hidden rounded-lg w-full ${aspectRatio} ${className}`}>
      {/* Desktop Image */}
      <div 
        className="hidden sm:block w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />
      
      {/* Mobile Image */}
      <div 
        className="block sm:hidden w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mobileImage})` }}
      />
      
      {/* Text Content - Bottom Centered */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-center space-y-2 max-w-[640px] mx-auto">
          <h3 className="text-white">{headline}</h3>
          <p className="text-white">{body}</p>
        </div>
      </div>
    </div>
  )
}

export default ImageSection
