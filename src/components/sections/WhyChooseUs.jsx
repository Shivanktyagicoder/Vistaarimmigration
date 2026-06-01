import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ShieldCheck, Clock, FileText, Headphones,
  CheckCircle, TrendingUp,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    color: '#14B8A6',
    title: 'OISC Regulated',
    desc: 'We are fully regulated by the Office of the Immigration Services Commissioner. Your case is always in compliant, expert hands.',
  },
  {
    icon: TrendingUp,
    color: '#38BDF8',
    title: '98% Success Rate',
    desc: 'Over 5,000 visas approved across all categories. Our document review and preparation process dramatically reduces refusals.',
  },
  {
    icon: Clock,
    color: '#A78BFA',
    title: '2-Hour Response',
    desc: 'Submit your enquiry and hear back within 2 hours during business hours. Fast responses mean faster visa timelines for you.',
  },
  {
    icon: FileText,
    color: '#FB923C',
    title: 'End-to-End Service',
    desc: 'From document checklist to embassy submission — we handle every step. No back-and-forth confusion, just a smooth process.',
  },
  {
    icon: Headphones,
    color: '#34D399',
    title: 'Dedicated Case Manager',
    desc: 'Every client gets a dedicated immigration advisor who knows your file inside out and is reachable via WhatsApp at any time.',
  },
  {
    icon: CheckCircle,
    color: '#F472B6',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. We give you a clear, fixed-cost quote upfront. You know exactly what you\'re paying for before you start.',
  },
]

const process = [
  { step: '01', title: 'Free Consultation', desc: 'Tell us your goals. We assess your profile and advise the best visa route for you.' },
  { step: '02', title: 'Document Prep', desc: 'We give you a precise checklist, review every document and prepare your full application pack.' },
  { step: '03', title: 'Submission', desc: 'We submit your application to the right authority at the right time for maximum success.' },
  { step: '04', title: 'Approval & Beyond', desc: 'We track your case, handle queries and support you from visa grant all the way to arrival.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const processRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const processInView = useInView(processRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* ── WHY CHOOSE US ── */}
      <section
        ref={ref}
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
        }}
        className="py-24"
      >
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
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: '#5EEAD4',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Why Choose Us
            </div>
            <h2
              className="font-bold text-white mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
              }}
            >
              The Vistaar{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Difference
              </span>
            </h2>
            <p
              className="max-w-lg mx-auto text-[15px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}
            >
              Thousands of families and professionals trust Vistaar Immigration because we combine expertise,
              speed and transparency in every case.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}
                >
                  <r.icon size={20} color={r.color} />
                </div>
                <h3
                  className="font-semibold text-white mb-2 text-[15px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.42)' }}
                >
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        ref={processRef}
        style={{ background: '#F8FAFC' }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
              How It Works
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
              Your Visa Journey in{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #0D9488, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                4 Simple Steps
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #14B8A6, #38BDF8, #14B8A6, transparent)' }}
            />

            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 bg-white"
                  style={{
                    border: '2px solid',
                    borderColor: i % 2 === 0 ? '#14B8A6' : '#38BDF8',
                    boxShadow: `0 8px 24px ${i % 2 === 0 ? 'rgba(20,184,166,0.2)' : 'rgba(56,189,248,0.2)'}`,
                  }}
                >
                  <span
                    className="font-extrabold text-xl"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      background: i % 2 === 0 ? 'linear-gradient(135deg, #0D9488, #14B8A6)' : 'linear-gradient(135deg, #38BDF8, #818CF8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {p.step}
                  </span>
                </div>
                <h3
                  className="font-semibold text-slate-900 mb-2 text-[15px]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
    </>
  )
}
