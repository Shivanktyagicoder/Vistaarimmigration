import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Users, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    color: '#14B8A6',
    bg: '#F0FDFA',
    border: '#CCFBF1',
    title: 'Book Free Consultation',
    desc: 'Fill in the contact form or WhatsApp us. We review your profile and identify the best visa route for your goals — no obligation.',
  },
  {
    number: '02',
    icon: Users,
    color: '#38BDF8',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'Expert Assessment',
    desc: 'Our OISC-regulated advisors assess your eligibility, explain the process clearly, and build a personalised application strategy.',
  },
  {
    number: '03',
    icon: CheckCircle,
    color: '#34D399',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    title: 'We Handle Everything',
    desc: 'Documents, forms, translations, submissions — we manage the entire process so your application is accurate and on time.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: 'white' }} className="py-24">
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
            How It Works
          </div>
          <h2 className="font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Your Visa Journey in{' '}
            <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              3 Simple Steps
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}>
            We make the visa process straightforward, transparent, and stress-free from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative">
          {/* Connecting dashes (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px pointer-events-none"
            style={{ background: 'repeating-linear-gradient(90deg, #0D9488 0, #0D9488 8px, transparent 8px, transparent 16px)' }} />

          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Circle with number */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.12, type: 'spring', stiffness: 200, damping: 14 }}
                className="relative mb-6"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: s.bg, border: `2px solid ${s.border}`, boxShadow: `0 0 0 6px ${s.bg}` }}>
                  <s.icon size={28} color={s.color} />
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 2px 8px rgba(13,148,136,0.4)' }}>
                  <span className="text-xs font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{i + 1}</span>
                </div>
              </motion.div>

              <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', letterSpacing: '-0.01em' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B', maxWidth: '260px' }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
            style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 6px 24px rgba(13,148,136,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(13,148,136,0.45)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(13,148,136,0.3)'}
          >
            Start Step 1 — Book Free Consultation <ArrowRight size={15} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
