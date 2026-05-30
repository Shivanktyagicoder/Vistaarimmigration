import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight, GraduationCap, Briefcase, Globe, Users, MapPin } from 'lucide-react'
import logo from '../../assets/logo.png'

const dropdownIcons = {
  'Study Visa': GraduationCap,
  'Work Visa': Briefcase,
  'Schengen Visa': MapPin,
  'Visitor Visa': Globe,
  'PR / Immigration': Users,
}

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', path: '/study-visa',
    dropdown: [
      { label: 'Study Visa', path: '/study-visa', desc: 'Universities & colleges abroad' },
      { label: 'Work Visa', path: '/work-visa', desc: 'International job permits' },
      { label: 'Schengen Visa', path: '/schengen-visa', desc: 'Europe tourism & short stays' },
      { label: 'Visitor Visa', path: '/visitor-visa', desc: 'Tourism & family visits' },
      { label: 'PR / Immigration', path: '/contact', desc: 'Permanent residency pathways' },
    ]
  },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={
          scrolled
            ? { background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 2px 24px rgba(0,0,0,0.08)', transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease' }
            : { background: 'transparent', transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease' }
        }
      >
        <div
          className="max-w-7xl mx-auto px-6 xl:px-12 flex items-center justify-between gap-8"
          style={{ paddingTop: '6px', paddingBottom: '6px' }}
        >

          {/* ── LOGO + WORDMARK ── */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex-shrink-0 overflow-hidden"
              style={{ width: '84px', height: '84px' }}
            >
              <img
                src={logo}
                alt="Vistaar Immigration"
                fetchPriority="high"
                style={{
                  width: '110%',
                  height: 'auto',
                  marginLeft: '-5%',
                  display: 'block',
                }}
              />
            </motion.div>
            <div className="flex flex-col leading-none select-none">
              <span
                className="font-extrabold transition-colors duration-500"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '-0.02em',
                  fontSize: '1.6rem',
                  color: scrolled ? '#0F172A' : 'white',
                }}
              >
                VISTAAR
              </span>
              <span
                className="font-semibold text-teal-500 tracking-[0.28em] uppercase mt-0.5"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem' }}
              >
                IMMIGRATION
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link, i) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.comingSoon ? (
                    <span
                      className="relative flex items-center gap-2 px-5 py-3 text-[15px] font-medium tracking-wide select-none"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: scrolled ? 'rgba(71,85,105,0.5)' : 'rgba(255,255,255,0.35)',
                        cursor: 'default',
                      }}
                    >
                      {link.label}
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                        style={{ background: scrolled ? 'rgba(20,184,166,0.1)' : 'rgba(255,255,255,0.1)', color: scrolled ? '#0D9488' : 'rgba(94,234,212,0.8)', border: `1px solid ${scrolled ? 'rgba(20,184,166,0.25)' : 'rgba(94,234,212,0.2)'}` }}
                      >
                        Soon
                      </span>
                    </span>
                  ) : link.dropdown ? (
                    <button
                      className="group relative flex items-center gap-1.5 px-5 py-3 text-[15px] font-medium tracking-wide transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: scrolled ? '#475569' : 'rgba(255,255,255,0.8)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = scrolled ? '#0F172A' : 'white' }}
                      onMouseLeave={e => { e.currentTarget.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.8)' }}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="opacity-50"
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                      <span
                        className="absolute bottom-1.5 left-5 right-5 h-[2px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        style={{ background: scrolled ? '#14B8A6' : 'rgba(255,255,255,0.7)' }}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="group relative flex items-center gap-1.5 px-5 py-3 text-[15px] font-medium tracking-wide transition-colors duration-300"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: scrolled
                          ? (location.pathname === link.path ? '#0D9488' : '#475569')
                          : (location.pathname === link.path ? '#5EEAD4' : 'rgba(255,255,255,0.8)'),
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = scrolled ? '#0F172A' : 'white' }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = scrolled
                          ? (location.pathname === link.path ? '#0D9488' : '#475569')
                          : (location.pathname === link.path ? '#5EEAD4' : 'rgba(255,255,255,0.8)')
                      }}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-1.5 left-5 right-5 h-[2px] rounded-full origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                        style={{ background: scrolled ? '#14B8A6' : 'rgba(255,255,255,0.7)' }}
                      />
                    </Link>
                  )}
                </motion.div>

                {/* ── DROPDOWN ── */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl overflow-hidden bg-white"
                      style={{
                        border: '1px solid rgba(0,0,0,0.07)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(13,148,136,0.08)',
                      }}
                    >
                      <div className="h-[2.5px] bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500/0" />
                      <div className="p-2">
                        {link.dropdown.map((item, idx) => {
                          const Icon = dropdownIcons[item.label]
                          return (
                            <motion.div
                              key={item.path + item.label}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.04 }}
                            >
                              <Link
                                to={item.path}
                                className="group/item flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-teal-50 transition-all duration-200"
                              >
                                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-slate-100 group-hover/item:bg-teal-100 flex items-center justify-center transition-colors duration-200">
                                  {Icon && <Icon size={16} className="text-slate-400 group-hover/item:text-teal-600 transition-colors" />}
                                </span>
                                <span className="flex flex-col">
                                  <span
                                    className="text-[13.5px] font-semibold text-slate-700 group-hover/item:text-slate-900 transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                  >
                                    {item.label}
                                  </span>
                                  <span
                                    className="text-[11px] text-slate-400 group-hover/item:text-slate-500 transition-colors"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                  >
                                    {item.desc}
                                  </span>
                                </span>
                                <ArrowUpRight
                                  size={13}
                                  className="ml-auto text-slate-300 group-hover/item:text-teal-500 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
                                />
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── CTA BUTTON ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex-shrink-0 lg:block"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-[14.5px] font-semibold overflow-hidden transition-all duration-300"
              style={
                scrolled
                  ? { fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)', color: 'white', boxShadow: '0 4px 16px rgba(13,148,136,0.3)' }
                  : { fontFamily: 'Poppins, sans-serif', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.35)', color: 'white', backdropFilter: 'blur(8px)' }
              }
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(13,148,136,0.45)'; e.currentTarget.style.background = scrolled ? 'linear-gradient(135deg, #0f766e 0%, #0D9488 100%)' : 'rgba(255,255,255,0.22)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = scrolled ? '0 4px 16px rgba(13,148,136,0.3)' : 'none'; e.currentTarget.style.background = scrolled ? 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)' : 'rgba(255,255,255,0.12)' }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <span className="relative">Book Consultation</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </Link>
          </motion.div>

          {/* ── MOBILE HAMBURGER ── */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
            style={
              scrolled
                ? { border: '1px solid #E2E8F0', background: '#F8FAFC', color: '#334155' }
                : { border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)', color: 'white', backdropFilter: 'blur(8px)' }
            }
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white border-l border-slate-100 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <img
                      src={logo}
                      alt="Vistaar Immigration"
                      fetchPriority="high"
                      style={{ width: '44px', height: 'auto', marginLeft: '-2px', display: 'block' }}
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-extrabold text-sm tracking-tight text-slate-900" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>VISTAAR</span>
                    <span className="text-teal-500 font-semibold text-[0.55rem] tracking-[0.25em] uppercase mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>IMMIGRATION</span>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X size={17} />
                </motion.button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-5 px-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.comingSoon ? (
                      <div
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium border border-transparent"
                        style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(71,85,105,0.45)', cursor: 'default' }}
                      >
                        {link.label}
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(20,184,166,0.08)', color: '#0D9488', border: '1px solid rgba(20,184,166,0.2)' }}
                        >
                          Soon
                        </span>
                      </div>
                    ) : link.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileExpandedSection(
                            mobileExpandedSection === link.label ? null : link.label
                          )}
                          className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[15px] font-medium border border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {link.label}
                          <motion.span
                            animate={{ rotate: mobileExpandedSection === link.label ? 180 : 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            <ChevronDown size={14} className="opacity-40" />
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {mobileExpandedSection === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden mt-1 ml-4 space-y-0.5"
                            >
                              {link.dropdown.map((item) => {
                                const Icon = dropdownIcons[item.label]
                                return (
                                  <Link
                                    key={item.path + item.label}
                                    to={item.path}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13px] text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                  >
                                    {Icon && <Icon size={13} className="flex-shrink-0 text-teal-400" />}
                                    {item.label}
                                  </Link>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${location.pathname === link.path
                          ? 'bg-teal-50 text-teal-600 border border-teal-100'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                          }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-4 py-5 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[15px] font-semibold text-white relative overflow-hidden"
                  style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  <span className="relative">Book Free Consultation</span>
                  <ArrowUpRight size={16} className="relative" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
