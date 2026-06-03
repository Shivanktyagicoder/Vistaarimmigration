import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, MapPin, Globe, Users, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    color: '#14B8A6',
    gradient: 'linear-gradient(135deg, #0D9488, #14B8A6)',
    glow: 'rgba(20,184,166,0.25)',
    title: 'Study Visa',
    desc: 'Get into top universities in the UK, Canada, USA and Europe. We handle your entire student visa application.',
    destinations: ['🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇺🇸 USA'],
    path: '/study-visa',
  },
  {
    icon: Briefcase,
    color: '#38BDF8',
    gradient: 'linear-gradient(135deg, #0284C7, #38BDF8)',
    glow: 'rgba(56,189,248,0.25)',
    title: 'Work Visa',
    desc: 'Skilled Worker, PSW and international work permits. We navigate complex sponsorship requirements for you.',
    destinations: ['🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇩🇪 Germany'],
    path: '/work-visa',
  },
  {
    icon: MapPin,
    color: '#A78BFA',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
    glow: 'rgba(167,139,250,0.25)',
    title: 'Schengen Visa',
    desc: 'Visit 26 European countries with a single visa. Business, tourism or family — we maximise your approval chances.',
    destinations: ['🇫🇷 France', '🇩🇪 Germany', '🇮🇹 Italy', '+ 23 more'],
    path: '/schengen-visa',
  },
  {
    icon: Globe,
    color: '#FB923C',
    gradient: 'linear-gradient(135deg, #EA580C, #FB923C)',
    glow: 'rgba(251,146,60,0.25)',
    title: 'Visitor Visa',
    desc: 'Tourism, family visits and medical travel made simple. A complete, compelling application package.',
    destinations: ['🇬🇧 UK', '🇺🇸 USA', '🇨🇦 Canada', '🇳🇿 NZ'],
    path: '/visitor-visa',
  },
  {
    icon: Users,
    color: '#34D399',
    gradient: 'linear-gradient(135deg, #059669, #34D399)',
    glow: 'rgba(52,211,153,0.25)',
    title: 'PR / Immigration',
    desc: 'Permanent residency and settlement pathways — UK ILR, Canada Express Entry and Australian Skilled Migration.',
    destinations: ['🇬🇧 ILR', '🇨🇦 Express Entry', '🇦🇺 Skilled'],
    path: '/pr-immigration',
  },
  {
    icon: GraduationCap,
    color: '#F472B6',
    gradient: 'linear-gradient(135deg, #DB2777, #F472B6)',
    glow: 'rgba(244,114,182,0.25)',
    title: 'Dependent Visa',
    desc: 'Bring your family with you. Dependent and spouse visa applications handled alongside your primary visa.',
    destinations: ['🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia'],
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
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
            Our Services
          </div>
          <h2 className="font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Everything You Need,{' '}
            <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              One Place
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}>
            From first enquiry to visa approval — we handle every step across all major visa categories.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <Link to={s.path}
                className="group flex flex-col h-full rounded-2xl bg-white overflow-hidden transition-all duration-300"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 48px ${s.glow}, 0 0 0 1px rgba(0,0,0,0.06)`; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>

                {/* Gradient header */}
                <div className="relative p-6 pb-5" style={{ background: s.gradient }}>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                  <div className="relative flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
                      <s.icon size={22} color="white" />
                    </div>
                    <ArrowUpRight size={18} color="rgba(255,255,255,0.7)"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-bold text-white mt-4 text-lg" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}>
                    {s.desc}
                  </p>
                  {/* Destination chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {s.destinations.map(d => (
                      <span key={d} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
