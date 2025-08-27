import Hero from './components/Hero'
import Container from './components/Container'
import SplitSection from './components/SplitSection'
import Card from './components/Card'
import FAQ from './components/FAQ'
import QuestionAnswer from './components/QuestionAnswer'

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Hero />
      <Container>
        <div className="max-w-[640px] mx-auto text-center">
          <h2>
            Why partner with Bamboo?
          </h2>
          <p>
            Partnering with Bamboo means unlocking a new revenue stream without
adding overhead. You fulfill delivery-first QSR brands created by Bamboo, while
our PartnerPay™ model guarantees profit on every item, giving you clarity and co
nfidence with every order.
    
          </p>
        </div>
      </Container>
      
      <Container>
        <SplitSection 
          variant="imageLeft"
          eyebrow=""
          headline="Delivery-First Brands"
          body="Brands created and optimized by Bamboo for scalable growth."
        />
      </Container>
      
      <Container>
        <SplitSection 
          variant="imageRight"
          eyebrow=""
          headline="Profit guaranteed"
          body="PartnerPay™ ensures you earn on every item, every time."
        />
      </Container>
      
      <Container>
        <SplitSection 
          variant="imageLeft"
          eyebrow=""
          headline="Unlock new revenue"
          body="Generate new revenue by fulfilling Bamboo brands within your exi
sting operations."
        />
      </Container>
      
    
      
      <Container>
        <div className="max-w-[640px] mx-auto text-center">
          <h2>
            How PartnerPay™ works
          </h2>
          <p>
            PartnerPay™ is our transparent pricing model that guarantees you earn
on every item, every time. Here's how it works:
          </p>
        </div>
      </Container>
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            title="Create your account"
            caption="Start onboarding in minutes."
          />
          <Card 
            title="Select brands"
            caption="Choose the Bamboo brands that fit your location."
          />
          <Card 
            title="Confirm PartnerPay™ earnings"
            caption="Know your guaranteed profit upfront."
          />
        </div>
      </Container>
      
      <Container>
        <div className="max-w-[640px] mx-auto text-center">
          <h2>
            Frequently Asked Questions
          </h2>
        </div>
      </Container>
      
      <Container>
        <div className="max-w-[640px] mx-auto">
          <FAQ sectionTitle="Earnings & PartnerPay™">
            <QuestionAnswer 
              question="How does PartnerPay™ work?" 
              answer="PartnerPay™ is our transparent pricing model. You set your own price for each menu item, and Bamboo covers the gap between your price and the customer's order total. This ensures you always earn your full price, regardless of delivery fees, platform commissions, or customer discounts."
            />
            <QuestionAnswer 
              question="How much can I earn with Bamboo?" 
              answer="Earnings depend on your pricing strategy and order volume. Most operators see 15-25% profit margins on Bamboo orders, with some achieving even higher margins through strategic pricing."
            />
            <QuestionAnswer 
              question="When do I get paid?" 
              answer="Bamboo processes payments weekly, with funds typically hitting your account within 3-5 business days after the payment period closes."
            />
            <QuestionAnswer 
              question="Are there any hidden fees?" 
              answer="No. PartnerPay™ is completely transparent. You set your price, and that's exactly what you earn. Bamboo covers all delivery platform fees, commissions, and customer discounts."
            />
            <QuestionAnswer 
              question="What if a customer cancels or there's an issue?" 
              answer="Operators are paid for all completed orders. If there are customer issues, Bamboo handles customer service and works directly with delivery platforms to resolve them."
            />
          </FAQ>
          
          <FAQ sectionTitle="Operations">
            <QuestionAnswer 
              question="How do orders come through?" 
              answer="Orders arrive directly in the Bamboo app on your tablet and print to your kitchen using a connected printer. Each ticket includes ingredients, portions, and preparation instructions."
            />
            <QuestionAnswer 
              question="What if I can't fulfill an order?" 
              answer="You have full control to pause orders at any time directly from the Bamboo app. This ensures you can manage fulfillment without impacting your core operations."
            />
            <QuestionAnswer 
              question="How do staff know what to prepare?" 
              answer="Each order ticket includes detailed ingredients, portions, and preparation notes. Your team follows these guidelines to ensure consistency with brand standards."
            />
            <QuestionAnswer 
              question="What if something goes wrong during fulfillment?" 
              answer="Operators are paid for all completed orders, and Bamboo handles customer service and works directly with delivery platforms to resolve any issues."
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
              answer="Once your location is set up, menus are finalized, and your team is prepared, you can request activation. Bamboo will activate you within 24–48 hours of your request."
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
              answer="Bamboo is always evolving its portfolio. We design and launch delivery-first QSR brands with scale, demand, and quality in mind and only keep brands that meet those standards. As new brands are introduced, you'll have the option to add them if they're a fit for your location."
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
          
          <FAQ sectionTitle="Support">
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
          
          <FAQ sectionTitle="Technology and operations">
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
        </div>
      </Container>
    </div>
  )
}

// App component restored after Cursor update
export default App 