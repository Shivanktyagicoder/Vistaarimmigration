import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Amara K.',
    origin: 'Nigeria → United Kingdom',
    service: 'Skilled Worker Visa',
    avatar: 'AK',
    color: '#14B8A6',
    rating: 5,
    text: 'I was overwhelmed by the UK Skilled Worker process — the sponsorship requirements alone almost made me give up. Vistaar walked me through every single step. Got my visa in 6 weeks. Absolutely life-changing service.',
  },
  {
    name: 'Simran M.',
    origin: 'India → Canada',
    service: 'Study Permit',
    avatar: 'SM',
    color: '#38BDF8',
    rating: 5,
    text: 'Vistaar helped me get into my dream university in Toronto. They handled my study permit, SOP review and even mock interviews. The team responded to every WhatsApp message within the hour. Highly recommend!',
  },
  {
    name: 'Rajan J.',
    origin: 'Pakistan → Schengen',
    service: 'Schengen Visa',
    avatar: 'RJ',
    color: '#A78BFA',
    rating: 5,
    text: 'Applied for a Schengen visa twice on my own and got rejected both times. Vistaar took over and I was approved first attempt. They know exactly what embassies look for and how to present your documents.',
  },
  {
    name: 'Priya L.',
    origin: 'Sri Lanka → Australia',
    service: 'Student Visa',
    avatar: 'PL',
    color: '#FB923C',
    rating: 5,
    text: 'The team at Vistaar are genuine professionals. No empty promises — they told me exactly what my chances were and what to improve. My visa was approved and I am now studying in Melbourne. Thank you!',
  },
  {
    name: 'Nadia K.',
    origin: 'Bangladesh → USA',
    service: 'Visitor Visa (B-1/B-2)',
    avatar: 'NK',
    color: '#34D399',
    rating: 5,
    text: 'Very impressed with the level of personalisation. They prepared a complete travel itinerary, hotel bookings advice and coached me for the consular interview. Got my B-2 approved on first try after two previous rejections.',
  },
  {
    name: 'Omar S.',
    origin: 'Egypt → UK',
    service: 'PSW Visa',
    avatar: 'OS',
    color: '#F472B6',
    rating: 5,
    text: 'Completed my Master\'s and needed help with the Graduate Route visa. Vistaar made it incredibly simple. They submitted my application the day after I graduated. Visa came back in 3 days. Outstanding service.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#FBBF24" color="#FBBF24" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [page, setPage] = useState(0)

  const perPage = 3
  const pages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)' }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            Client Stories
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
            Real People,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #14B8A6, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Visas
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-[15px] leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}
          >
            Thousands of clients have trusted us with their immigration journey. Here are some of their stories.
          </p>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((t) => (
              <div
                key={t.name}
                className="flex flex-col p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Quote icon */}
                <Quote size={28} color={t.color} className="mb-4 opacity-60" />

                {/* Rating */}
                <Stars count={t.rating} />

                {/* Text */}
                <p
                  className="flex-1 text-[13.5px] leading-relaxed mt-4 mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)' }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                    style={{ background: `${t.color}25`, border: `1px solid ${t.color}40`, color: t.color, fontFamily: 'Poppins, sans-serif' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[13px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>
                      {t.origin}
                    </p>
                  </div>
                  <span
                    className="ml-auto text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}25`,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage(p => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'white',
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === page ? '24px' : '8px',
                  height: '8px',
                  background: i === page ? '#14B8A6' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setPage(p => Math.min(p + 1, pages - 1))}
            disabled={page === pages - 1}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'white',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}
