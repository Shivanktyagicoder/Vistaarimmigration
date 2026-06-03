import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ShieldCheck, Heart, Target, Eye, ArrowRight, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    color: '#14B8A6',
    bg: '#F0FDFA',
    border: '#CCFBF1',
    title: 'Integrity',
    desc: 'We only take on cases we believe in and give honest assessments — even when it\'s not what clients want to hear.',
  },
  {
    icon: Heart,
    color: '#F472B6',
    bg: '#FDF2F8',
    border: '#FBCFE8',
    title: 'Care',
    desc: 'Immigration is one of the most important decisions of a person\'s life. We treat every client\'s case with the attention it deserves.',
  },
  {
    icon: Target,
    color: '#38BDF8',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'Precision',
    desc: 'Every document, every form, every detail reviewed carefully. We believe accuracy is what separates success from refusal.',
  },
  {
    icon: Eye,
    color: '#A78BFA',
    bg: '#FAF5FF',
    border: '#E9D5FF',
    title: 'Transparency',
    desc: 'No hidden fees. No false promises. We give you a clear picture of your chances, costs and timeline from the start.',
  },
]

const services = [
  'Student Visa (UK, Canada, USA, Australia)',
  'Skilled Worker & Work Permit',
  'Visitor & Tourism Visa',
  'Schengen Visa (26 countries)',
  'PR & Settlement (ILR, Express Entry)',
  'Dependent & Family Visa',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Vistaar Immigration | OISC Regulated Consultants</title>
        <meta name="description" content="Vistaar Immigration is an OISC-regulated immigration consultancy based in London. We help individuals and families with UK, Canada, USA, Australia and Schengen visa applications." />
        <link rel="canonical" href="https://vistaarimmigration.com/about" />
      </Helmet>

      {/* ── HERO ── */}
      <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '144px', paddingBottom: '72px' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp()}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)' }}>
              <span className="text-xs font-medium" style={{ color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}>
                OISC Regulated · London, UK
              </span>
            </div>
            <h1 className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              About Vistaar Immigration
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '580px' }}>
              We are a professional immigration consultancy based in London, regulated by the
              Office of the Immigration Services Commissioner (OISC). Our mission is simple:
              handle every visa application with the care, accuracy and honesty it deserves.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ background: '#F8FAFC' }}>

        {/* ── WHO WE ARE ── */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div {...fadeUp()}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>Who We Are</span>
              <h2 className="font-bold mt-2 mb-5"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#0F172A', letterSpacing: '-0.02em' }}>
                A Dedicated Immigration Team
              </h2>
              <div style={{ height: '3px', width: '44px', background: 'linear-gradient(90deg, #0D9488, #38BDF8)', borderRadius: '99px', marginBottom: '24px' }} />

              <p className="text-base leading-relaxed mb-4" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                Vistaar Immigration was founded with one purpose: to make the immigration process
                straightforward, honest and stress-free for every client. We are OISC-regulated advisors
                based in London, specialising in visas for the UK, Canada, USA, Australia, Schengen
                and New Zealand.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                Whether you are a student planning your next chapter, a professional seeking a work permit,
                or a family working towards permanent residency — we handle every step from eligibility
                assessment to final submission, so you can focus on the journey ahead.
              </p>
            </motion.div>

            {/* Services covered */}
            <motion.div {...fadeUp(0.1)} className="mt-10 p-6 rounded-2xl bg-white" style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
              <p className="text-sm font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>What We Handle</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {services.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} color="#0D9488" className="flex-shrink-0" />
                    <span className="text-sm" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-16" style={{ background: 'white' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div {...fadeUp()}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>Our Values</span>
              <h2 className="font-bold mt-2 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#0F172A', letterSpacing: '-0.02em' }}>
                What We Stand For
              </h2>
              <div style={{ height: '3px', width: '44px', background: 'linear-gradient(90deg, #0D9488, #38BDF8)', borderRadius: '99px', marginBottom: '32px' }} />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)}
                  className="p-6 rounded-2xl bg-white"
                  style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: v.bg, border: `1px solid ${v.border}` }}>
                    <v.icon size={18} color={v.color} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', fontSize: '1rem' }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div {...fadeUp()}
              className="rounded-2xl p-10 text-center"
              style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 className="font-bold text-white mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', letterSpacing: '-0.02em' }}>
                Ready to Start Your Visa Journey?
              </h2>
              <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
                Book a free consultation — our team responds within 2 hours.
              </p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
                style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 6px 24px rgba(13,148,136,0.35)' }}>
                Book Free Consultation <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}
