import React from 'react'

interface SplitSectionProps {
  variant?: 'imageLeft' | 'imageRight'
  eyebrow: string
  headline: string
  body: string
  desktopImage?: string
  mobileImage?: string
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  variant = 'imageLeft', 
  eyebrow, 
  headline, 
  body,
  desktopImage = '/assets/placeholder/image-desktop.png',
  mobileImage = '/assets/placeholder/image-mobile.png'
}) => {
  const ImageBlock = () => (
    <div className="w-full h-full">
      <div 
        className="hidden sm:block w-full min-h-[500px] bg-cover bg-center bg-no-repeat rounded-sm"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />
      <img 
        src={mobileImage}
        alt=""
        className="block sm:hidden w-full aspect-[600/760] rounded-sm"
      />
    </div>
  )

  const TextBlock = () => (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center max-w-[400px]">
        <div className="uppercase text-sm text-gray-500 tracking-wide text-center">{eyebrow}</div>
        <h3 className="mb-2 sm:mb-3 text-center">{headline}</h3>
        <p className="text-center mt-0">{body}</p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
      <div className={`flex-1 order-1 ${variant === 'imageLeft' ? 'sm:order-none' : 'sm:order-2'}`}>
        <ImageBlock />
      </div>
      <div className={`flex-1 flex justify-center order-2 ${variant === 'imageLeft' ? 'sm:order-none' : 'sm:order-1'}`}>
        <TextBlock />
      </div>
    </div>
  )
}

export default SplitSection 