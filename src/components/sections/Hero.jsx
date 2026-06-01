import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, ChevronDown, Shield, Clock } from 'lucide-react'

import slide1 from '../../assets/1.jpg'
import slide2 from '../../assets/2.jpg'
import slide3 from '../../assets/3.jpg'
import slide4 from '../../assets/4.jpg'
import slide5 from '../../assets/5.jpg'
import slide6 from '../../assets/6.jpg'

const slides = [
  {
    id: 1,
    image: slide1,
    badge: '🇬🇧 United Kingdom',
    tag: 'PSW & Skilled Worker Visa',
    headline: 'Your Visa Journey',
    highlight: 'Starts Here',
    sub: 'Professional immigration consultancy helping you build a life abroad. We handle every step of your visa journey from start to finish.',
  },
  {
    id: 2,
    image: slide2,
    badge: '🇨🇦 Canada',
    tag: 'Study & PR Visa',
    headline: 'New Life,',
    highlight: 'New Beginnings',
    sub: 'From study permits to permanent residency — we guide you through every step of your Canadian immigration journey.',
  },
  {
    id: 3,
    image: slide3,
    badge: '🇪🇺 Schengen Zone',
    tag: '26 Countries, One Visa',
    headline: 'Europe Is',
    highlight: 'Waiting For You',
    sub: 'Explore 26 European countries with a single Schengen visa. Our experts ensure maximum approval chances.',
  },
  {
    id: 4,
    image: slide4,
    badge: '🇺🇸 United States',
    tag: 'Visitor & Work Visa',
    headline: 'The American',
    highlight: 'Dream Awaits',
    sub: 'US visitor and work visa guidance from certified immigration consultants. We prepare a complete, compelling application for you.',
  },
  {
    id: 5,
    image: slide5,
    badge: '🎓 Study Abroad',
    tag: 'Student Visa Specialists',
    headline: 'Study at the',
    highlight: "World's Best",
    sub: 'Get into top universities in the UK, Canada, USA and Europe. We handle your entire student visa application.',
  },
  {
    id: 6,
    image: slide6,
    badge: '✈️ Global Immigration',
    tag: 'All Visa Categories',
    headline: 'We Handle',
    highlight: 'Everything',
    sub: 'From document preparation to visa filing and embassy interviews — complete end-to-end immigration support.',
  },
]


const trustBadges = [
  { icon: Shield, text: 'Trusted Consultancy' },
  { icon: Award, text: 'Expert Guidance' },
  { icon: Clock, text: 'Fast Processing' },
]

const avatarColors = ['#0D9488', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']
const avatarLabels = ['AK', 'SM', 'RJ', 'PL', 'NK']

/* ─── Framer Motion variants ─────────────────────────────────────────────── */

// Crossfade + Ken Burns: fade in while slowly zooming in — no slide jank
const imageVariants = {
  enter: {
    opacity: 0,
    scale: 1.07,
  },
  center: {
    opacity: 1,
    scale: 1.02,
    transition: {
      opacity: { duration: 1.4, ease: 'easeInOut' },
      scale: { duration: 7, ease: 'linear' },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.0,
    transition: {
      opacity: { duration: 1.0, ease: 'easeInOut' },
      scale: { duration: 1.0 },
    },
  },
}

const textVariants = {
  enter: { opacity: 0, y: 22 },
  center: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.32, ease: 'easeIn' } },
}

const badgeVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % slides.length)
    }, 6000)
  }

  // Preload all slide images immediately so carousel transitions are instant
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image()
      img.src = slide.image
    })
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (idx) => {
    clearInterval(timerRef.current)
    setCurrent(idx)
    startTimer()
  }

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = () => goTo((current + 1) % slides.length)

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '680px' }}
    >

      {/* ── SLIDE IMAGES ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].badge}
              className="w-full h-full"
              fetchPriority={current === 0 ? 'high' : 'auto'}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays for text legibility */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.68) 55%, rgba(15,23,42,0.18) 100%)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.96) 0%, transparent 52%)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.45) 100%)' }}
        />
      </div>

      {/* ── SUBTLE GRID TEXTURE ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-20 h-full flex flex-col justify-center"
        style={{ paddingTop: '88px' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">

            {/* Country badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                variants={badgeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="inline-flex items-center gap-2.5 mb-7"
              >
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{
                    background: 'rgba(13,148,136,0.12)',
                    borderColor: 'rgba(13,148,136,0.35)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-base leading-none">
                    {slides[current].badge.split(' ')[0]}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#5EEAD4' }}
                  >
                    {slides[current].badge.split(' ').slice(1).join(' ')}
                  </span>
                  <span className="w-px h-3" style={{ background: 'rgba(94,234,212,0.3)' }} />
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {slides[current].tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h1
                  className="font-bold leading-[1.05] mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                    color: 'white',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {slides[current].headline}
                </h1>
                <h1
                  className="font-bold leading-[1.05] mb-7"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                    letterSpacing: '-0.025em',
                    background: 'linear-gradient(90deg, #14B8A6, #38BDF8, #14B8A6)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shimmer 3s linear infinite',
                  }}
                >
                  {slides[current].highlight}
                </h1>
                <p
                  className="text-[1.05rem] leading-relaxed mb-10"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(255,255,255,0.62)',
                    maxWidth: '520px',
                  }}
                >
                  {slides[current].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
                  boxShadow: '0 8px 32px rgba(13,148,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #0F766E 0%, #0D9488 100%)' }}
                />
                <span className="relative">Book Free Consultation</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>

              <Link
                to="/study-visa"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-colors duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                Explore Services
              </Link>
            </motion.div>



          </div>
        </div>
      </div>

      {/* ── SLIDE COUNTER (desktop right rail) ── */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative flex items-center justify-center"
            style={{ width: '32px', height: '32px' }}
          >
            {i === current && (
              <motion.svg
                className="absolute inset-0"
                viewBox="0 0 32 32"
                style={{ rotate: '-90deg' }}
              >
                <motion.circle
                  cx="16" cy="16" r="12"
                  fill="none"
                  stroke="#14B8A6"
                  strokeWidth="2"
                  strokeDasharray="75.4"
                  initial={{ strokeDashoffset: 75.4 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 6, ease: 'linear' }}
                />
              </motion.svg>
            )}
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '8px' : '5px',
                height: i === current ? '8px' : '5px',
                background: i === current ? '#14B8A6' : 'rgba(255,255,255,0.3)',
              }}
            />
          </button>
        ))}
      </div>

      {/* ── PREV / NEXT ARROWS ── */}
      <div className="absolute bottom-28 right-8 z-30 hidden lg:flex gap-2">
        {[{ fn: prev, label: '←' }, { fn: next, label: '→' }].map((btn, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={btn.fn}
            className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg text-white transition-colors duration-300"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,148,136,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      {/* ── BOTTOM DOTS (mobile) ── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex lg:hidden gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}>
            <motion.div
              animate={{ width: i === current ? 24 : 6, opacity: i === current ? 1 : 0.35 }}
              className="h-1.5 rounded-full"
              style={{ background: '#14B8A6' }}
            />
          </button>
        ))}
      </div>





    </section>
  )
}
