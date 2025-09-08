import React from 'react'
import Button from './Button'

const Hero: React.FC = () => {
  return (
    <div className="px-[12px] sm:px-[24px] pt-[12px] sm:pt-[24px]">
      <section className="relative text-black pt-12 pb-12 flex items-center justify-center h-[760px] sm:min-h-[600px] lg:min-h-[700px] max-h-[700px] overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/assets/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/hero-video.webm" type="video/webm" />
          <source src="/assets/hero-video-optimized.mp4" type="video/mp4" />
        </video>

        {/* Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-12 z-10">
          <img 
            src="/assets/images/bamboo-logo.svg" 
            alt="Bamboo Logo" 
            className="w-[156px] h-[52px]"
            style={{ 
              filter: 'brightness(0) invert(1)',
              mixBlendMode: 'difference'
            }}
          />
        </div>

        {/* Content Block */}
        <div className="max-w-[800px] mx-auto text-center space-y-6 px-3 sm:px-0 relative z-10">
          <h1 className="text-white">
            The Next Generation of QSRs, Fulfilled by Trusted Partners
          </h1>
          
          <p className="text-white">
            Bamboo is the franchise system for the delivery era. We create national brands, and our operating partners fulfill them with PartnerPay™, guaranteeing earnings on every order.
          </p>
          
          <Button>
            Become a Partner Today
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Hero 