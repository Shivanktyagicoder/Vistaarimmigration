import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import StatsStrip from '../components/sections/StatsStrip'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vistaar Immigration — Expert Visa Consultancy | UK, Canada, USA, Schengen</title>
        <meta name="description" content="Trusted immigration consultancy helping thousands build their future abroad. Study, Work, Visitor and PR visas for UK, Canada, USA, Australia and Schengen with a 98% success rate." />
        <meta property="og:title" content="Vistaar Immigration — Your Visa Journey Starts Here" />
        <meta property="og:description" content="Expert immigration consultancy trusted by thousands. Student, work, visitor and PR visas for UK, Canada, USA, Australia and Europe." />
        <meta property="og:url" content="https://vistaarimmigration.com" />
        <link rel="canonical" href="https://vistaarimmigration.com" />
      </Helmet>

      <Hero />
      <StatsStrip />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
