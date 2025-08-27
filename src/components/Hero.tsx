import React from 'react'
import Button from './Button'

const Hero: React.FC = () => {
  return (
    <div className="px-[12px] sm:px-[24px] pt-[12px] sm:pt-[24px]">
      <section className="relative bg-[#efefef] text-black pt-12 pb-12 flex items-center justify-center h-[760px] sm:min-h-[600px] lg:min-h-[700px] max-h-[700px] overflow-hidden">
        {/* Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-12">
          <img 
            src="/assets/bamboo-logo.svg" 
            alt="Bamboo Logo" 
            className="w-[156px] h-[52px]"
            style={{ filter: 'brightness(0)' }}
          />
        </div>

        {/* Content Block */}
        <div className="max-w-[800px] mx-auto text-center space-y-6 px-3 sm:px-0">
          <h1 className="text-black">
            The Next Generation of QSRs, Fulfilled by Trusted Partners
          </h1>
          
          <p className="text-black">
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