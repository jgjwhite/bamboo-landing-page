import Hero from './components/Hero'
import Container from './components/Container'
import ImageSection from './components/ImageSection'
import Card from './components/Card'
import FAQ from './components/FAQ'
import QuestionAnswer from './components/QuestionAnswer'
import Button from './components/Button'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <main className="main-content">
        <Hero />

      <Container>
        <div className="headline-pairing pb-12">
          <h2 className="fade-in">
            Why partner with Bamboo?
          </h2>
          <p className="fade-in">
            Partnering with Bamboo means unlocking a new revenue stream without adding overhead. You fulfill delivery-first QSR brands created by Bamboo, while our PartnerPay™ model guarantees profit on every item, giving you clarity and confidence with every order.
    
          </p>
        </div>

        <ImageSection 
          variant="full-width"
          desktopImage="/assets/images/why-01-desktop.webp"
          mobileImage="/assets/images/why-01-mobile.webp"
          headline="Delivery-First Brands"
          body="Brands created and optimized by Bamboo for scalable growth."
          className="fade-in"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
          <ImageSection 
            variant="split-width"
            desktopImage="/assets/images/why-02-desktop.webp"
            mobileImage="/assets/images/why-02-mobile.webp"
            headline="Profit guaranteed"
            body="PartnerPay™ ensures you earn on every item, every time."
            className="fade-in"
          />
          <ImageSection 
            variant="split-width"
            desktopImage="/assets/images/why-003-desktop.webp"
            mobileImage="/assets/images/why-003-mobile.webp"
            headline="Unlock new revenue"
            body="Generate new revenue by fulfilling Bamboo brands within your existing operations."
            className="fade-in"
          />
        </div>
      </Container>
      
      <Container>
        <div className="headline-pairing pb-12">
          <h2 className="fade-in">
            Brands that expand your reach
          </h2>
          <p className="fade-in">
            Our brands give independent restaurants a way to grow orders during slow periods or reach new delivery customers using the kitchen they already have. Each concept is non-competitive with your core menu and designed for efficient execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img 
            src="/assets/images/brand-hero/egg-smash-brand-hero.png" 
            alt="Egg Smash brand"
            className="w-full aspect-square object-cover rounded-lg fade-in"
          />
          <img 
            src="/assets/images/brand-hero/feta-fig-brand-hero.png" 
            alt="Feta and Fig brand"
            className="w-full aspect-square object-cover rounded-lg fade-in"
          />
          <img 
            src="/assets/images/brand-hero/hot-nosh-brand-hero.png" 
            alt="Hot Nosh brand"
            className="w-full aspect-square object-cover rounded-lg fade-in"
          />
          <img 
            src="/assets/images/brand-hero/bindas-brand-hero.png" 
            alt="Bindas brand"
            className="w-full aspect-square object-cover rounded-lg fade-in"
          />
        </div>

        <div className="text-center mt-6">
          <a 
            href="https://get.bambookitchens.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[18px] text-[#0B6B45] hover:text-[#074325] fade-in"
            
          >
            See all of our brands
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
      
      <Container>

        <div className="rounded-xl py-8 px-3 sm:py-12 sm:px-6 lg:py-16" style={{ backgroundColor: 'var(--sand-200)' }}>
          <div className="headline-pairing">
            <h2 className="fade-in">
              Trusted by operators nationwide
            </h2>
            <p className="fade-in">
              Bamboo is already operating at scale, with a growing network of operators and a portfolio of delivery-first QSR brands built for national growth. Every brand is designed for scalable success, and every operator fulfills with confidence through PartnerPay™.
            </p>
          </div>
          
          <div>
            <picture>
              <source srcSet="/assets/images/operator-map/Operator-map.svg" type="image/svg+xml" />
              <img 
                src="/assets/images/operator-map/operator-map.webp" 
                alt="Operator map showing Bamboo's nationwide presence"
                className="w-full max-w-[460px] h-auto mx-auto fade-in"
              />
            </picture>
          </div>
          
          <div>
            <p className="max-w-[640px] mx-auto text-center fade-in">
              With Bamboo, operators across the country are helping build the next generation of QSRs.
            </p>
          </div>
        </div>
      </Container>
      

      
      
      <Container>
        <div className="headline-pairing pb-12">
          <h2 className="fade-in">
            Reshaping franchising for the digital era
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <ImageSection 
          variant="split-width"
          desktopImage="/assets/images/reshaping-01-desktop.webp"
          mobileImage="/assets/images/reshaping-01-mobile.webp"
          headline="Shifting landscape"
          body="The restaurant landscape is changing quickly. By 2030, most restaurants will fulfill more than their own brand as delivery continues to reshape customer behavior."
          className="fade-in"
          />
          <ImageSection 
          variant="split-width"
          desktopImage="/assets/images/reshaping-02-desktop.webp"
          mobileImage="/assets/images/reshaping-02-mobile.webp"
          headline="New standards of quality"
          body="This shift is already creating new standards of quality and scalable growth; with operating partners nationwide now part of the evolution of franchising."
          className="fade-in"
          />
        </div>

        <ImageSection
          variant="full-width"
          desktopImage="/assets/images/reshaping-03-desktop.webp"
          mobileImage="/assets/images/reshaping-03-mobile.webp"
          headline="Expanding reach"
          body="Our delivery-first QSR brands are designed for consistency, quality, and national reach, and operating partners across the country are unlocking new revenue while participating in this transformation." 
          className="fade-in pt-6"
          />
        
      </Container>
      



      <Container>
        <div className="headline-pairing pb-12">
          <h2 className="fade-in">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
          <Card 
            title="1. Create your account"
            caption="Start onboarding in minutes."
          />
          <Card 
            title="2. Select brands"
            caption="Choose the Bamboo brands that fit your location."
          />
          <Card 
            title="3. Confirm PartnerPay™ earnings"
            caption="Know your guaranteed profit upfront."
          />
          <Card 
            title="4. Fulfill orders with Bamboo app"
            caption="Receive and manage orders seamlessly with the Bamboo tablet."
          />
        </div>
      </Container>





      <Container>
        <div className="text-center space-y-6 sm:space-y-8 px-4 py-16 rounded-xl cta-bg">
          <h2 className="font-medium mx-auto max-w-[860px] text-center text-white fade-in">
            Bamboo is building the next generation of QSRs &amp; setting the standard for franchising in the digital era.
          </h2>
          <Button variant="inverted" className="fade-in">Become a partner today</Button>
        </div>
      </Container>
      
      <Container className="mb-16">
        <div className="headline-pairing pb-12">
          <h2>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[640px] mx-auto flex flex-col gap-2">
          <FAQ sectionTitle="Earnings and PartnerPay™">
            <QuestionAnswer 
              question="How does PartnerPay™ work?" 
              answer="PartnerPay™ is Bamboo's pricing model that guarantees your profit on every item. Before you fulfill a brand, you'll see the PartnerPay™ earnings for each menu item, so you know exactly what you'll take home per order."
            />
            <QuestionAnswer 
              question="When do I get paid?" 
              answer="Operators are paid weekly via direct deposit."
            />
            <QuestionAnswer 
              question="Can PartnerPay™ rates change over time?" 
              answer=" Yes. Rates may be updated periodically to keep pricing competitive and demand strong. You’ll always be notified before any change takes effect."
            />
            <QuestionAnswer 
              question="Do I have to pay Bamboo anything upfront?" 
              answer="No. There are no upfront costs to partner with Bamboo. We invest in the brands, the technology, and the marketing, so operators focus entirely on fulfillment and guaranteed earnings."
            />
            <QuestionAnswer 
              question="Do I cover food costs for Bamboo orders?" 
              answer="Yes. PartnerPay™ factors in your food cost plus guaranteed profit, so every order delivers a positive margin."
            />
            {/* <QuestionAnswer 
              question="Is my PartnerPay™ profit guaranteed even if food costs rise?" 
              answer="PartnerPay™ guarantees your profit per item based on current food costs. If your ingredient costs increase significantly, you can request a price change, and PartnerPay™ will be updated accordingly. Bamboo also reviews market conditions and may adjust rates proactively. You'll be notified by email if your PartnerPay™ earnings change, whether higher or lower."
            /> */}
            {/* <QuestionAnswer 
              question="How do taxes work on PartnerPay™ earnings?" 
              answer="Sales tax on Bamboo orders is handled under Marketplace Facilitator Tax rules, so you are not responsible for collecting or remitting it. PartnerPay™ earnings are recorded as business income for your restaurant, and payout reports are available upon request to support your bookkeeping and tax filings."
            /> */}
            <QuestionAnswer 
              question="What if orders are slow?" 
              answer="Order volume varies by market. PartnerPay™ ensures every order is profitable, and you can add or remove brands to grow revenue over time."
            />
            <QuestionAnswer 
              question="Why is PartnerPay™ better than revenue share?" 
              answer="Revenue share leaves operators guessing: profits fluctuate, marketing is often deducted before you get paid, and higher menu prices set to protect margin can limit demand. PartnerPay™ eliminates that uncertainty with guaranteed profit per item and competitive pricing that drives orders. The result is predictable, steady earnings with no hidden costs."
            />
          </FAQ>
          



          <FAQ sectionTitle="Operations">
            <QuestionAnswer 
              question="Do I need more staff to run Bamboo brands?" 
              answer="No. Bamboo is designed to fit into your existing operations, so there is no need to hire additional staff upfront."
            />
            <QuestionAnswer 
              question="Will this slow down my own restaurant operations?" 
              answer="No. Bamboo brands run alongside your existing business and integrates smoothly into your workflow."
            />
            <QuestionAnswer 
              question="Do I need special training?" 
              answer="No. Menus are designed to be simple, and we provide everything your team needs to fulfill orders with ease."
            />
            <QuestionAnswer 
              question="Can I pause or limit Bamboo orders if I need to?" 
              answer="Yes. Operators have full control to pause orders at any time directly in the Bamboo app."
            />
          </FAQ>

          
          
          <FAQ sectionTitle="Kitchen and equipment">
            <QuestionAnswer 
              question="Do I need special equipment to run Bamboo brands?" 
              answer="No. Bamboo brands are designed to work with the equipment you already have."
            />
            <QuestionAnswer 
              question="Do I need to buy special ingredients?" 
              answer="Most brands use standard ingredients you already stock. Any extras are minimal and covered in your PartnerPay™ earnings."
            />
            
            <QuestionAnswer 
              question="Do I need special packaging for Bamboo brands?" 
              answer="No. Operators use their own standard packaging. Bamboo provides branded stickers at no cost, and packaging costs are factored into PartnerPay™ earnings."
            />
          </FAQ>



          
          <FAQ sectionTitle="Onboarding">
            <QuestionAnswer 
              question="How long does onboarding take?" 
              answer="Onboarding usually takes about 2 weeks and is designed to be simple and straightforward."
            />
            <QuestionAnswer 
              question="What happens after I complete the onboarding form?" 
              answer="After you complete the form, our team guides you through setup and ships your Bamboo tablet to get you started."
            />
            <QuestionAnswer 
              question="What comes with the Bamboo tablet?" 
              answer="The tablet comes preloaded with the Bamboo app so you can start receiving and managing orders right away."
            />
            <QuestionAnswer 
              question="How do I train my staff?" 
              answer="We provide brand guidelines and final menus so your team can be prepared quickly."
            />
            <QuestionAnswer 
              question="When do I go live?" 
              answer="Once your setup is complete and your team is prepared, you can request activation. Bamboo will activate your location within 24 to 48 hours."
            />
          </FAQ>
          



          <FAQ sectionTitle="Brand selection">
            <QuestionAnswer 
              question="Can I choose which Bamboo brands to fulfill?" 
              answer="Yes. During onboarding, you choose the brands that best fit your location. You’re always in control of which brands you fulfill."
            />
            <QuestionAnswer 
              question="Can I change brands later if some don't work for me?" 
              answer="Yes. You can remove brands at any time and add new ones as opportunities grow"
            />
            <QuestionAnswer 
              question="Can I fulfill multiple Bamboo brands at once?" 
              answer="Yes. Many operators run multiple Bamboo brands at the same time through the Bamboo app."
            />
            <QuestionAnswer 
              question="How often are new brands added?" 
              answer="Bamboo continually evolves its portfolio, keeping only brands built for quality, demand, and scale. As new brands are introduced, you’ll have the option to add them if they fit your location."
            />
            <QuestionAnswer 
              question="Do I have to take on every Bamboo brand offered?" 
              answer="No. You only fulfill the brands you choose, with flexibility to align with your goals and setup."
            />
            <QuestionAnswer 
              question="Will I have exclusivity for a brand in my area?" 
              answer="Yes. When you fulfill a Bamboo brand, you own your delivery radius. We don’t overlap operators, ensuring there’s no cannibalization."
            />
          </FAQ>
          



          <FAQ sectionTitle="Support and partnership">
            <QuestionAnswer 
              question="What kind of support does Bamboo provide?" 
              answer="Bamboo provides centralized support, routing your requests to the right team so issues are handled quickly and consistently."
            />
            <QuestionAnswer 
              question="How do I get help if there's an issue with orders or the app?" 
              answer="Support is available directly by email, with more options being added to make it even easier to reach us."
            />
            <QuestionAnswer 
              question="Do you help with staff training and onboarding?" 
              answer="Yes. We provide brand guidelines and final menus so your team has everything they need. Our support team is available if questions come up."
            />
            <QuestionAnswer 
              question="How do you market and promote the brands?" 
              answer="Bamboo builds and markets the brands nationally, investing in demand generation so operators can focus entirely on fulfillment."
            />
            <QuestionAnswer 
              question="What if something goes wrong during fulfillment?" 
              answer="Operators are paid for all completed orders. Bamboo handles customer service and works directly with delivery platforms to resolve any issues."
            />
          </FAQ>
          



          <FAQ sectionTitle="Technology">
            <QuestionAnswer 
              question="What is the Bamboo tablet and app used for?" 
              answer="The Bamboo tablet comes preloaded with our app, which is how you receive and manage orders."
            />
            <QuestionAnswer 
              question="What if the Bamboo tablet stops working?" 
              answer="If your tablet has any issues, Bamboo support will troubleshoot and send a replacement if needed."
            />
            <QuestionAnswer 
              question="How do orders come through, and how do staff know what to prepare?" 
              answer="Orders flow through the Bamboo app with all the details your staff needs to fulfill them consistently."
            />
            {/* <QuestionAnswer 
              question="What if my printer stops working?" 
              answer="The Bamboo app is compatible with most printers. If your existing printer stops working, you can reconnect with another compatible printer from our approved list, or replace your printer if needed."
            /> */}
            <QuestionAnswer 
              question="What happens if my location needs to pause orders?" 
              answer="Operators can pause orders at any time directly in the Bamboo app."
            />
            <QuestionAnswer 
              question="Do I need to download or manage anything else?" 
              answer="No. The Bamboo tablet comes fully set up. Nothing additional is required."
            />
          </FAQ>
          



          <FAQ sectionTitle="Commitment">
            <QuestionAnswer 
              question="Do I have to sign a contract to partner with Bamboo?" 
              answer="No. There are no binding long-term contracts, and you can stop at any time. Operators agree to Bamboo’s performance standards during onboarding, and if you leave, we provide a prepaid label to return the tablet."
            />
          </FAQ>
          
          <FAQ sectionTitle="Performance standards">
            <QuestionAnswer 
              question="What standards are operators expected to maintain?" 
              answer="Operators are expected to maintain benchmarks like order accuracy, low cancellations, minimal downtime, and consistent fulfillment times. These standards protect brand quality and ensure a great customer experience."
            />
            <QuestionAnswer 
              question="Why does Bamboo enforce performance standards?" 
              answer="Bamboo brands are built for national scale, and consistency is key. High standards ensure every customer has the same quality experience, driving loyalty, repeat orders, and growth for all operators."
            />
            <QuestionAnswer 
              question="What happens if my performance falls below standards?" 
              answer="If performance falls below benchmarks, Bamboo will provide support to help you get back on track. Continued issues may result in removal to protect brand quality and customer trust."
            />
          </FAQ>
        </div>
      </Container>
      </main>
      
      <footer className="footer">
        <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-6">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
            {/* Logo */}
            <div>
              <img 
                src="/assets/images/bamboo-logo.svg" 
                alt="Bamboo Logo" 
                className="w-[156px] h-[52px]"
                style={{ 
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 sm:gap-8 mt-10 sm:mt-0">
              <a 
                href="mailto:support@bambookitchens.io" 
                className="caption text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                Email Us
              </a>
              <a 
                href="/assets/Bamboo%20Kitchens%20Privacy%20Policy%20%5BMarch%202026%5D.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="caption text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </a>
              <a 
                href="https://calendly.com/bambookitchens"
                target="_blank"
                rel="noopener noreferrer"
                className="caption text-white opacity-70 hover:opacity-100 transition-opacity"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// App component restored after Cursor update
export default App 