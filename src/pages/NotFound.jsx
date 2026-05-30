import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Study Visa', path: '/study-visa' },
  { label: 'Work Visa', path: '/work-visa' },
  { label: 'Schengen Visa', path: '/schengen-visa' },
  { label: 'Visitor Visa', path: '/visitor-visa' },
  { label: 'Contact Us', path: '/contact' },
]

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Vistaar Immigration</title>
      </Helmet>

      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: '#14B8A6', filter: 'blur(140px)', opacity: 0.06 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-lg"
        >
          {/* 404 number */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-extrabold mb-4 leading-none"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(5rem, 18vw, 10rem)',
              letterSpacing: '-0.06em',
              background: 'linear-gradient(135deg, #14B8A6, #38BDF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.25,
            }}
          >
            404
          </motion.p>

          <h1
            className="font-bold text-white mb-4 -mt-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              letterSpacing: '-0.025em',
            }}
          >
            Page Not Found
          </h1>

          <p
            className="text-[15px] leading-relaxed mb-10"
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}
          >
            The page you're looking for doesn't exist or may have been moved.
            Here are some helpful links to get you back on track.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.7)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(20,184,166,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(20,184,166,0.35)'
                  e.currentTarget.style.color = '#5EEAD4'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                boxShadow: '0 8px 24px rgba(13,148,136,0.35)',
              }}
            >
              <Home size={16} />
              Back to Home
            </Link>
            <a
              href="https://wa.me/447344896264"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: 'rgba(37,211,102,0.1)',
                border: '1px solid rgba(37,211,102,0.3)',
                color: '#25D366',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)' }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </>
  )
}
