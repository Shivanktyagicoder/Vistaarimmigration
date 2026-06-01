import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Globe, Users, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    border: 'rgba(20,184,166,0.2)',
    title: 'Study Visa',
    desc: 'Get into top universities in the UK, Canada, USA and Europe. We handle your entire student visa application from IELTS prep to approval.',
    tags: ['UK', 'Canada', 'Australia', 'USA'],
    path: '/study-visa',
  },
  {
    icon: Briefcase,
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.08)',
    border: 'rgba(56,189,248,0.2)',
    title: 'Work Visa',
    desc: 'Skilled Worker, PSW and international work permits. Our experts navigate complex sponsorship requirements so you can focus on your career.',
    tags: ['Skilled Worker', 'PSW', 'Sponsor'],
    path: '/work-visa',
  },
  {
    icon: MapPin,
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    title: 'Schengen Visa',
    desc: 'Visit 26 European countries with a single visa. Business trips, tourism or family visits — we maximise your approval chances.',
    tags: ['26 Countries', 'Tourism', 'Business'],
    path: '/schengen-visa',
  },
  {
    icon: Globe,
    color: '#FB923C',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.2)',
    title: 'Visitor Visa',
    desc: 'Tourism, family visits and medical travel made simple. We prepare a complete, compelling application package for UK, USA, Canada and more.',
    tags: ['UK', 'USA', 'Canada', 'Schengen'],
    path: '/visitor-visa',
  },
  {
    icon: Users,
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
    title: 'PR / Immigration',
    desc: 'Permanent residency and settlement pathways for the UK, Canada and beyond. We build your case from day one to ILR or Citizenship.',
    tags: ['ILR', 'Citizenship', 'Settlement'],
    path: '/pr-immigration',
  },
  {
    icon: GraduationCap,
    color: '#F472B6',
    bg: 'rgba(244,114,182,0.08)',
    border: 'rgba(244,114,182,0.2)',
    title: 'Dependent Visa',
    desc: 'Bring your family with you. We handle dependent and spouse visa applications alongside your primary visa for a smooth joint process.',
    tags: ['Spouse', 'Family', 'Children'],
    path: '/contact',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: '#F8FAFC' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(13,148,136,0.08)',
              border: '1px solid rgba(13,148,136,0.2)',
              color: '#0D9488',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            What We Offer
          </div>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: '#0F172A',
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
            }}
          >
            Complete Immigration{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0D9488, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Services
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-[15px] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
          >
            From your first enquiry to visa approval — we handle every step across all major visa categories.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={s.path}
                className="group flex flex-col h-full p-7 rounded-2xl bg-white transition-all duration-300"
                style={{
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.1), 0 0 0 1px ${s.color}30`
                  e.currentTarget.style.borderColor = `${s.color}50`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'
                  e.currentTarget.style.borderColor = '#E2E8F0'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  <s.icon size={22} color={s.color} />
                </div>

                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3
                    className="font-bold text-[17px] text-slate-900"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em' }}
                  >
                    {s.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    color={s.color}
                  />
                </div>

                <p
                  className="text-[13.5px] leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
                >
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: s.bg,
                        color: s.color,
                        border: `1px solid ${s.border}`,
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
