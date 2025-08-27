import React from 'react'

interface SplitSectionProps {
  variant?: 'imageLeft' | 'imageRight'
  eyebrow: string
  headline: string
  body: string
}

const SplitSection: React.FC<SplitSectionProps> = ({ 
  variant = 'imageLeft', 
  eyebrow, 
  headline, 
  body 
}) => {
  const ImageBlock = () => (
    <div className="w-full max-w-[400px] aspect-[3/4] sm:aspect-[4/5] bg-[#DCEEFF] rounded-sm mx-auto" />
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