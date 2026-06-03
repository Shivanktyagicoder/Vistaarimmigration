import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MapPin, Phone, Mail,
  MessageCircle, Clock, Shield, Award, ChevronRight
} from 'lucide-react'

const InstagramIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none" />
  </svg>
)

const LinkedInIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
// Logo served from /public so it can be preloaded in index.html (stable URL, no Vite hash)
const logo = '/logo.png'

const services = [
  { label: 'UK Skilled Worker Visa', path: '/work-visa' },
  { label: 'UK PSW Visa', path: '/work-visa' },
  { label: 'Canada Study Visa', path: '/study-visa' },
  { label: 'Schengen Visa', path: '/schengen-visa' },
  { label: 'USA Visitor Visa', path: '/visitor-visa' },
  { label: 'PR / Immigration', path: '/pr-immigration' },
  { label: 'Dependant Visa', path: '/contact' },
  { label: 'Visitor Visa', path: '/visitor-visa' },
]

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/study-visa' },
  { label: 'Book Appointment', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
]

const socials = [
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/447344896264',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.1)',
    bgHover: 'rgba(37,211,102,0.25)',
    border: 'rgba(37,211,102,0.25)',
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/Vistaarimmigration',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.1)',
    bgHover: 'rgba(225,48,108,0.25)',
    border: 'rgba(225,48,108,0.25)',
  },
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    href: 'https://linkedin.com/company/vistaar-immigration',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.1)',
    bgHover: 'rgba(10,102,194,0.25)',
    border: 'rgba(10,102,194,0.25)',
  },
]

const trustBadges = [
  { icon: Shield, text: 'Trusted Consultancy' },
  { icon: Award, text: 'Expert Guidance' },
  { icon: Clock, text: 'Fast & Reliable Service' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#060E1A', fontFamily: 'Inter, sans-serif' }}>


      {/* ── MAIN FOOTER ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* COL 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-5 group w-fit">
              <div
                className="flex-shrink-0"
                style={{
                  width:              '84px',
                  height:             '84px',
                  backgroundImage:   `url(${logo})`,
                  backgroundSize:    '110%',
                  backgroundPosition:'center 8%',
                  backgroundRepeat:  'no-repeat',
                }}
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-white font-extrabold group-hover:text-teal-400 transition-colors duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em', fontSize: '1.6rem' }}
                >
                  VISTAAR
                </span>
                <span
                  className="text-teal-400 font-semibold tracking-[0.28em] uppercase mt-0.5"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem' }}
                >
                  IMMIGRATION
                </span>
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '260px' }}
            >
              Trusted immigration consultancy helping thousands build their future abroad.
              UK, Canada, USA, Schengen &amp; more.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-2 mb-7">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.25)' }}
                  >
                    <b.icon size={12} color="#14B8A6" />
                  </div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{b.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.bgHover }}
                  onMouseLeave={e => { e.currentTarget.style.background = s.bg }}
                >
                  <s.icon size={16} color={s.color} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COL 2 — Services */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}
            >
              Our Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    to={s.path}
                    className="flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#14B8A6' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                  >
                    <ChevronRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 flex-shrink-0"
                      color="#14B8A6"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Quick Links + Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    to={l.path}
                    className="flex items-center gap-2 text-sm transition-all duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#14B8A6' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                  >
                    <ChevronRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 flex-shrink-0"
                      color="#14B8A6"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact card */}
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Call Us
              </p>
              <a
                href="tel:+447344896264"
                className="flex items-center gap-2 font-semibold text-sm mb-2 transition-colors duration-200"
                style={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#14B8A6' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'white' }}
              >
                <Phone size={14} color="#14B8A6" />
                +44 7344 896 264
              </a>
              <a
                href="mailto:info@vistaarimmigration.com"
                className="flex items-center gap-2 text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#14B8A6' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
              >
                <Mail size={12} color="#14B8A6" />
                info@vistaarimmigration.com
              </a>
            </div>
          </div>

          {/* COL 4 — Map + Address */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Our Office
            </p>

            {/* Google Maps embed */}
            <div
              className="rounded-xl overflow-hidden mb-4 relative"
              style={{ height: '180px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <iframe
                title="Vistaar Immigration Office — London"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19866.72!2d-0.1340!3d51.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20W1%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Pulse dot */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 rounded-full"
                  style={{ background: 'rgba(13,148,136,0.6)', boxShadow: '0 0 0 6px rgba(13,148,136,0.2)' }}
                />
              </div>
            </div>

            {/* Address card */}
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.25)' }}
                >
                  <MapPin size={14} color="#14B8A6" />
                </div>
                <div>
                  <p
                    className="text-white text-sm font-semibold mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    London Office
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    London, United Kingdom
                  </p>
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Mon–Sat: 9:00 AM – 6:00 PM GMT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Vistaar Immigration. All rights reserved.
            &nbsp;·&nbsp; London, United Kingdom
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Terms of Service', to: '/terms' },
              { label: 'Cookie Policy', to: '/cookies' },
            ].map((t, i) => (
              <Link
                key={i}
                to={t.to}
                className="text-xs transition-colors duration-200"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#14B8A6' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)' }}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
