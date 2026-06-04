import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import ServicesSection from '../components/sections/ServicesSection'
import HowItWorks from '../components/sections/HowItWorks'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vistaar Immigration | UK Visa &amp; Immigration Consultants</title>
        <meta name="description" content="OISC-regulated immigration consultants in London. Expert guidance for Student, Work, Visitor, Schengen &amp; PR visas to UK, Canada, USA, Australia and more. Book a free consultation." />
        <meta property="og:title" content="Vistaar Immigration | UK Visa &amp; Immigration Consultants" />
        <meta property="og:description" content="OISC-regulated immigration consultants in London. Expert Student, Work, Visitor, Schengen and PR visa guidance for UK, Canada, USA, Australia and more." />
        <meta property="og:url" content="https://vistaarimmigration.com" />
        <link rel="canonical" href="https://vistaarimmigration.com" />
      </Helmet>

      <Hero />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
