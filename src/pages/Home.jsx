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
        <title>Vistaar Immigration — UK, Canada, USA, Australia Visa Consultants</title>
        <meta name="description" content="Vistaar Immigration — OISC-regulated visa consultants in London. Student, Work, Visitor and PR visas for UK, Canada, USA, Australia and Schengen. Book a free consultation." />
        <meta property="og:title" content="Vistaar Immigration — Professional Visa &amp; Immigration Consultants" />
        <meta property="og:description" content="OISC-regulated immigration consultancy for UK, Canada, USA, Australia and Schengen. Student, Work, Visitor and PR visas handled professionally from start to finish." />
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
