import Hero from './components/Hero'
import Container from './components/Container'
import ImageSection from './components/ImageSection'
import Card from './components/Card'
import FAQ from './components/FAQ'
import QuestionAnswer from './components/QuestionAnswer'
import Button from './components/Button'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Container pt="16" pb="8">
        <div className="headline-pairing">
          <h2>
            Why partner with Bamboo?
          </h2>
          <p>
            Partnering with Bamboo means unlocking a new revenue stream without adding overhead. You fulfill delivery-first QSR brands created by Bamboo, while our PartnerPay™ model guarantees profit on every item, giving you clarity and confidence with every order.
    
          </p>
        </div>
      </Container>
      
      <Container className="pb-2">
        <ImageSection 
          variant="full-width"
          desktopImage="/assets/images/why-01-desktop.webp"
          mobileImage="/assets/images/why-01-mobile.webp"
          headline="Delivery-First Brands"
          body="Brands created and optimized by Bamboo for scalable growth."
        />
      </Container>
      
      <Container className="pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ImageSection 
            variant="split-width"
            desktopImage="/assets/images/why-02-desktop.webp"
            mobileImage="/assets/images/why-02-mobile.webp"
            headline="Profit guaranteed"
            body="PartnerPay™ ensures you earn on every item, every time."
          />
          <ImageSection 
            variant="split-width"
            desktopImage="/assets/images/why-003-desktop.webp"
            mobileImage="/assets/images/why-003-mobile.webp"
            headline="Unlock new revenue"
            body="Generate new revenue by fulfilling Bamboo brands within your existing operations."
          />
        </div>
      </Container>
      
      <Container>
        <div className="rounded-xl py-8 px-3 sm:py-12 sm:px-6 lg:py-16" style={{ backgroundColor: 'var(--sand-200)' }}>
          <div className="headline-pairing">
            <h2>
              Trusted by operators nationwide
            </h2>
            <p>
              Bamboo is already operating at scale, with a growing network of operators and a portfolio of delivery-first QSR brands built for national growth. Every brand is designed for scalable success, and every operator fulfills with confidence through PartnerPay™.
            </p>
          </div>
          
          <div>
            <img 
              src="/assets/images/operator-map.webp" 
              alt="Operator map showing Bamboo's nationwide presence"
              className="w-full max-w-[460px] h-auto mx-auto"
            />
          </div>
          
          <div>
            <p className="max-w-[640px] mx-auto text-center">
              With Bamboo, operators across the country are helping build the next generation of QSRs.
            </p>
          </div>
        </div>
      </Container>
      

      
      
      <Container pt="16" pb="8">
        <div className="headline-pairing mb-12">
          <h2>
            Reshaping franchising for the digital era
          </h2>
        </div>
      </Container>
      
      <Container className="pt-0 pb-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <ImageSection 
          variant="split-width"
          desktopImage="/assets/images/reshaping-01-desktop.webp"
          mobileImage="/assets/images/reshaping-01-mobile.webp"
          headline="Shifting landscape"
          body="The restaurant landscape is changing quickly. By 2030, most restaurants will fulfill more than their own brand as delivery continues to reshape customer behavior."
          />
          <ImageSection 
          variant="split-width"
          desktopImage="/assets/images/reshaping-02-desktop.webp"
          mobileImage="/assets/images/reshaping-02-mobile.webp"
          headline="New standards of quality"
          body="This shift is already creating new standards of quality and scalable growth; with operating partners nationwide now part of the evolution of franchising."
          />
        </div>
      </Container>
      

      
      <Container className="pt-3">

        <ImageSection 
          variant="full-width"
          desktopImage="/assets/images/reshaping-03-desktop.webp"
          mobileImage="/assets/images/reshaping-03-mobile.webp"
          headline="Expanding reach"
          body="Our delivery-first QSR brands are designed for consistency, quality, and national reach, and operating partners across the country are unlocking new revenue while participating in this transformation."
          />
        
      </Container>
      



      <Container pt="16" pb="8">
        <div className="headline-pairing mb-12">
          <h2>
            How it works
          </h2>
        </div>
      </Container>
      
      <Container pt="1" pb="16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <h2 className="font-medium mx-auto max-w-[860px] text-center text-white">
            Bamboo is building the next generation of QSRs &amp; setting the standard for franchising in the digital era.
          </h2>
          <Button variant="inverted">Become a partner today</Button>
        </div>
      </Container>
      
      <Container>
        <div className="headline-pairing">
          <h2>
            Frequently Asked Questions
          </h2>
        </div>
      </Container>
      
      <Container>
        <div className="max-w-[640px] mx-auto">
          <FAQ sectionTitle="Earnings and PartnerPay™">
            <QuestionAnswer 
              question="How does PartnerPay™ work?" 
              answer="PartnerPay™ is Bamboo's pricing model that guarantees your profit on every item. Before you fulfill a brand, you'll see the PartnerPay™ earnings for each menu item, so you know exactly what you'll take home per order."
            />
            <QuestionAnswer 
              question="When do I get paid?" 
              answer="Operators are paid weekly via direct deposit. Reporting is available upon request so you always have visibility into your earnings."
            />
            <QuestionAnswer 
              question="Can PartnerPay™ rates change over time?" 
              answer="Yes, rates may be updated periodically to keep pricing competitive in the market. If there's a change, you'll be notified by email before it takes effect."
            />
            <QuestionAnswer 
              question="Do I have to pay Bamboo anything upfront?" 
              answer="No. There are no upfront costs to partner with Bamboo. We invest in the brands, the technology, and the marketing, so operators focus entirely on fulfillment and guaranteed earnings."
            />
            <QuestionAnswer 
              question="Do I cover food costs for Bamboo orders?" 
              answer="Yes. PartnerPay™ is designed to factor in your food cost plus guaranteed profit, so every fulfilled order delivers a positive margin."
            />
            <QuestionAnswer 
              question="Is my PartnerPay™ profit guaranteed even if food costs rise?" 
              answer="PartnerPay™ guarantees your profit per item based on current food costs. If your ingredient costs increase significantly, you can request a price change, and PartnerPay™ will be updated accordingly. Bamboo also reviews market conditions and may adjust rates proactively. You'll be notified by email if your PartnerPay™ earnings change, whether higher or lower."
            />
            <QuestionAnswer 
              question="How do taxes work on PartnerPay™ earnings?" 
              answer="Sales tax on Bamboo orders is handled under Marketplace Facilitator Tax rules, so you are not responsible for collecting or remitting it. PartnerPay™ earnings are recorded as business income for your restaurant, and payout reports are available upon request to support your bookkeeping and tax filings."
            />
            <QuestionAnswer 
              question="What if orders are slow?" 
              answer="Order volume varies by location and brand. While PartnerPay™ guarantees your profit per item, demand is influenced by your market. You can add or remove brands at any time, and many operators expand into multiple Bamboo brands to drive more volume."
            />
            <QuestionAnswer 
              question="Why is PartnerPay™ better than revenue share?" 
              answer="Revenue share puts the burden on operators to set prices high enough to cover margin, but those inflated prices often limit demand. PartnerPay™ keeps pricing competitive to drive orders, while guaranteeing your profit per item upfront. The result is steady, predictable earnings, built for growth."
            />
          </FAQ>
          
          <FAQ sectionTitle="Operations">
            <QuestionAnswer 
              question="Do I need more staff to run Bamboo brands?" 
              answer="No. Bamboo is designed to fit into your existing operations. Most operators use their current staff and scale as demand grows and there is no need to hire additional staff upfront."
            />
            <QuestionAnswer 
              question="Will this slow down my own restaurant operations?" 
              answer="No. Bamboo brands are built to run alongside your existing business. Orders flow through the Bamboo app and fit within your current workflow, so they complement your operations."
            />
            <QuestionAnswer 
              question="Do I need special training?" 
              answer="No. Bamboo provides clear brand guidelines, portion guides, and final menus so your team can be prepared quickly. Each ticket prints ingredients and portions, so your staff knows exactly what to prepare."
            />
            <QuestionAnswer 
              question="Can I pause or limit Bamboo orders if I need to?" 
              answer="Yes. Operators have full control to pause orders at any time directly in the Bamboo app. Orders are set to auto-accept so fulfillment is seamless, but you can pause if needed."
            />
          </FAQ>
          
          <FAQ sectionTitle="Kitchen and equipment">
            <QuestionAnswer 
              question="Do I need special equipment to run Bamboo brands?" 
              answer="No. During onboarding, Bamboo recommends brands that align with your existing setup. You'll only be asked to fulfill brands that fit your current operations."
            />
            <QuestionAnswer 
              question="Do I need to buy special ingredients?" 
              answer="Most brands align with standard foodservice inventory. Any additional ingredients required will be included in your final menus before launch, so you can decide if they fit your operation."
            />
            <QuestionAnswer 
              question="What if a brand requires something I don't have?" 
              answer="If a brand requires ingredients or setup you don't currently use, you can choose not to fulfill it. Bamboo only recommends brands that are a fit, but operators always have the final choice."
            />
            <QuestionAnswer 
              question="Do I need special packaging for Bamboo brands?" 
              answer="Operators use their own standard packaging to fulfill Bamboo orders. Each brand includes packing notes to ensure items are optimized for delivery. Bamboo provides branded stickers (at no cost) to label orders, and packaging costs are already factored into your PartnerPay™ earnings."
            />
          </FAQ>
          
          <FAQ sectionTitle="Onboarding">
            <QuestionAnswer 
              question="How long does onboarding take?" 
              answer="Onboarding usually takes about 2 weeks. The process is designed to be straightforward and can move faster depending on your readiness."
            />
            <QuestionAnswer 
              question="What happens after I complete the onboarding form?" 
              answer="Our team verifies your information and gives you a quick call for final confirmation before shipping your Bamboo tablet and starting setup."
            />
            <QuestionAnswer 
              question="What comes with the Bamboo tablet?" 
              answer="The tablet arrives preloaded with the Bamboo app and includes the printer app for connecting to your existing printer. Setup instructions are included."
            />
            <QuestionAnswer 
              question="How do I train my staff?" 
              answer="You'll receive final menus and brand guidelines. These are designed to be easy to follow, so your staff can review and be prepared."
            />
            <QuestionAnswer 
              question="When do I go live?" 
              answer="Once your location is set up, menus are finalized, and your team is prepared, you can request activation. Bamboo will activate you within 24 to 48 hours of your request."
            />
          </FAQ>
          
          <FAQ sectionTitle="Brand selection">
            <QuestionAnswer 
              question="Can I choose which Bamboo brands to fulfill?" 
              answer="Yes. During onboarding, you'll see the available brands and select the ones that best fit your location. You're always in control of which brands you fulfill."
            />
            <QuestionAnswer 
              question="Can I change brands later if some don't work for me?" 
              answer="Yes. You can remove brands at any time and add new ones as opportunities grow. Many operators start with one or two brands and expand once they see the results."
            />
            <QuestionAnswer 
              question="Can I fulfill multiple Bamboo brands at once?" 
              answer="Yes. Many operators run several Bamboo brands simultaneously through the Bamboo app, and orders are managed seamlessly within your existing operations."
            />
            <QuestionAnswer 
              question="How often are new brands added?" 
              answer="Bamboo is always evolving its portfolio. We design and launch delivery-first QSR brands with scale, demand, and quality in mind. We only keep brands that meet those standards. As new brands are introduced, you'll have the option to add them if they're a fit for your location."
            />
            <QuestionAnswer 
              question="Do I have to take on every Bamboo brand offered?" 
              answer="No. Bamboo is built for flexibility. You only fulfill the brands you choose, and our portfolio is designed to give operators options that align with their setup and growth goals."
            />
            <QuestionAnswer 
              question="Will I have exclusivity for a brand in my area?" 
              answer="Yes. When you fulfill a Bamboo brand, you own your delivery radius for that brand. We do not overlap operators in the same area, ensuring there's no cannibalization and that every location has the opportunity to succeed."
            />
          </FAQ>
          
          <FAQ sectionTitle="Support and partnership">
            <QuestionAnswer 
              question="What kind of support does Bamboo provide?" 
              answer="Bamboo provides centralized support for all operators. Instead of a single point of contact, your requests are routed to the right Bamboo support team member, ensuring issues are handled quickly and consistently."
            />
            <QuestionAnswer 
              question="How do I get help if there's an issue with orders or the app?" 
              answer="Support is available directly by email, with in-app chat support coming soon."
            />
            <QuestionAnswer 
              question="Do you help with staff training and onboarding?" 
              answer="Yes. We provide clear brand guidelines, portion guides, and final menus digitally so your team has everything they need to run smoothly. Our support team is also available if questions come up during onboarding or day-to-day fulfillment."
            />
            <QuestionAnswer 
              question="How do you market and promote the brands?" 
              answer="Bamboo builds and markets the brands nationally, investing in demand generation across platforms. Operators focus on fulfillment locally, ensuring every order is executed to brand standards."
            />
            <QuestionAnswer 
              question="What if something goes wrong during fulfillment?" 
              answer="Operators are paid for all completed orders, and Bamboo handles customer service and works directly with delivery platforms to resolve any issues."
            />
          </FAQ>
          
          <FAQ sectionTitle="Technology">
            <QuestionAnswer 
              question="What is the Bamboo tablet and app used for?" 
              answer="The Bamboo tablet comes preloaded with the Bamboo app, which is how you receive and manage orders. Each order ticket includes the ingredients and portions, so your staff knows exactly what to fulfill."
            />
            <QuestionAnswer 
              question="What if the Bamboo tablet stops working?" 
              answer="If your tablet has any issues, Bamboo support will troubleshoot with you. If it can't be fixed remotely, we'll send you a replacement device."
            />
            <QuestionAnswer 
              question="How do orders come through, and how do staff know what to prepare?" 
              answer="Orders arrive directly in the Bamboo app and print to your kitchen using a connected printer. Each ticket lists the ingredients and portion guide so your team can prepare the order quickly and consistently."
            />
            <QuestionAnswer 
              question="What if my printer stops working?" 
              answer="The Bamboo app is compatible with most printers. If your existing printer stops working, you can reconnect with another compatible printer from our approved list, or replace your printer if needed."
            />
            <QuestionAnswer 
              question="What happens if my location needs to pause orders?" 
              answer="Operators have full control to pause orders at any time directly from the Bamboo app. This ensures you can manage fulfillment without impacting your core operations."
            />
            <QuestionAnswer 
              question="Do I need to download or manage anything else?" 
              answer="No. The Bamboo tablet comes fully set up with the app and includes the printer app needed to connect your existing printer. There's nothing additional to download or manage."
            />
          </FAQ>
          
          <FAQ sectionTitle="Commitment">
            <QuestionAnswer 
              question="Do I have to sign a contract to partner with Bamboo?" 
              answer="No. There are no binding contracts to review or sign, and you can stop fulfilling at any time. Operators do agree to Bamboo's performance standards during onboarding, but there's no long-term contract. If you leave Bamboo, you'll return the tablet using a prepaid return label provided by us."
            />
          </FAQ>
          
          <FAQ sectionTitle="Performance standards">
            <QuestionAnswer 
              question="What standards are operators expected to maintain?" 
              answer="Operators are expected to maintain key benchmarks such as order accuracy, low cancellation rates, minimal downtime, and consistent fulfillment times. These standards ensure customers have a great experience with Bamboo brands and protect the reputation of every operator in the network."
            />
            <QuestionAnswer 
              question="Why does Bamboo enforce performance standards?" 
              answer="Bamboo brands are designed for national scale, and consistency is critical. By maintaining high standards, we ensure every customer has the same quality experience: building loyalty, repeat orders, and long-term growth for all operators."
            />
            <QuestionAnswer 
              question="What happens if my performance falls below standards?" 
              answer="If your location falls below benchmarks, Bamboo will notify you and provide support to help you get back on track. If issues continue, locations may be removed from Bamboo to protect brand quality and customer trust."
            />
          </FAQ>
        </div>
      </Container>
    </div>
  )
}

// App component restored after Cursor update
export default App 