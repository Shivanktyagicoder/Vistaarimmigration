import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ background: '#F8FAFC' }} className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0D1B2E 0%, #0F2744 50%, #0D1B2E 100%)',
          }}
        >
          {/* Ambient glows */}
          <div
            className="absolute top-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: '#14B8A6', filter: 'blur(120px)', opacity: 0.08 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: '#38BDF8', filter: 'blur(100px)', opacity: 0.07 }}
          />

          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10 text-center px-6 sm:px-12 py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(20,184,166,0.12)',
                border: '1px solid rgba(20,184,166,0.3)',
                color: '#5EEAD4',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Limited Slots Available
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-bold text-white mb-5"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Ready to Start Your{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Visa Journey?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="max-w-xl mx-auto text-[15px] leading-relaxed mb-10"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}
            >
              Book a free consultation with our certified immigration specialists.
              We'll review your profile, identify the best visa route and give you a
              clear action plan — completely free, no obligation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
                  boxShadow: '0 8px 32px rgba(13,148,136,0.45)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(13,148,136,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,148,136,0.45)' }}
              >
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative">Book Free Consultation</span>
                <ArrowUpRight size={18} className="relative" />
              </Link>

              <a
                href="https://wa.me/447344896264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  color: '#25D366',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)' }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+447344896264"
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'white',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="mt-8 text-[12px]"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.25)' }}
            >
              Free consultation · No obligation · Response within 2 hours · Mon–Sat 9 AM–6 PM GMT
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
