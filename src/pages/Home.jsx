import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vistaar Immigration — UK, Canada, USA, Australia Visa Consultants</title>
        <meta name="description" content="Vistaar Immigration — professional visa consultants for UK, Canada, USA, Australia and Schengen. Student, Work, Visitor and PR visas handled from first enquiry to approval. Book a free consultation." />
        <meta property="og:title" content="Vistaar Immigration — Professional Visa &amp; Immigration Consultants" />
        <meta property="og:description" content="Expert immigration consultancy for UK, Canada, USA, Australia and Schengen. Student, Work, Visitor and PR visas handled professionally from start to finish." />
        <meta property="og:url" content="https://vistaarimmigration.com" />
        <link rel="canonical" href="https://vistaarimmigration.com" />
      </Helmet>

      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
