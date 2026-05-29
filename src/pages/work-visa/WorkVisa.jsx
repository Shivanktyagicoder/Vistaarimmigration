import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, TrendingUp, Briefcase, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { workVisaData } from '../../data/work-visa'

const heroSlides = [
    {
        flag: '🇬🇧',
        badge: 'United Kingdom',
        tag: 'Skilled Worker & Graduate Route',
        headline: 'Work in the',
        highlight: 'United Kingdom',
        sub: 'UK Skilled Worker Visa and Graduate Route (PSW). We handle everything from eligibility checks to full application support.',
        color: '#0D9488',
        bg: 'linear-gradient(135deg, #0F172A 0%, #0f2a1e 60%, #0F172A 100%)',
    },
    {
        flag: '🇨🇦',
        badge: 'Canada',
        tag: 'Express Entry & Work Permits',
        headline: 'Build Your Career in',
        highlight: 'Canada',
        sub: 'Canada Express Entry, LMIA Work Permits and Provincial Nominee Programs. A top destination for skilled professionals worldwide.',
        color: '#F59E0B',
        bg: 'linear-gradient(135deg, #0F172A 0%, #1a1505 60%, #0F172A 100%)',
    },
    {
        flag: '🇩🇪',
        badge: 'Germany',
        tag: 'EU Blue Card & Opportunity Card',
        headline: 'Grow Professionally in',
        highlight: 'Germany',
        sub: 'EU Blue Card, Skilled Worker Visa and the new Opportunity Card. Zero tuition + world-class engineering and tech careers.',
        color: '#EF4444',
        bg: 'linear-gradient(135deg, #0F172A 0%, #1a0505 60%, #0F172A 100%)',
    },
    {
        flag: '🇦🇺',
        badge: 'Australia',
        tag: 'Subclass 482 & 186 Visas',
        headline: 'Start Fresh in',
        highlight: 'Australia',
        sub: 'Temporary Skill Shortage (TSS), Employer Nomination and Regional visas. Australia actively recruits skilled international workers.',
        color: '#6366F1',
        bg: 'linear-gradient(135deg, #0F172A 0%, #0a0a1a 60%, #0F172A 100%)',
    },
]

const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function WorkVisa() {
    const [slide, setSlide] = useState(0)
    const timerRef = useRef(null)

    const startTimer = () => {
        clearInterval(timerRef.current)
        timerRef.current = setInterval(() => setSlide(p => (p + 1) % heroSlides.length), 5000)
    }

    useEffect(() => {
        startTimer()
        return () => clearInterval(timerRef.current)
    }, [])

    const goTo = (i) => { clearInterval(timerRef.current); setSlide(i); startTimer() }
    const current = heroSlides[slide]

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* ── HERO — starts at y=0 so transparent navbar sees dark bg ── */}
            <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '144px', paddingBottom: '80px', minHeight: '420px' }}>

                {/* Subtle ambient glow — static, no animation */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${current.color}18 0%, transparent 70%)`, transform: 'translate(20%, -20%)', filter: 'blur(80px)' }}
                />

                {/* Slide content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

                        {/* Left — text */}
                        <div className="max-w-2xl">

                            {/* Badge */}
                            <AnimatePresence mode="wait">
                                <motion.div key={`badge-${slide}`} variants={textVariants} initial="enter" animate="center" exit="exit">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                                        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>
                                        <span>{current.flag}</span>
                                        <span style={{ color: 'rgba(255,255,255,0.85)' }}>{current.badge}</span>
                                        <span className="w-px h-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
                                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{current.tag}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Headline */}
                            <AnimatePresence mode="wait">
                                <motion.div key={`title-${slide}`} variants={textVariants} initial="enter" animate="center" exit="exit">
                                    <h1 className="font-bold mb-4 leading-[1.05]"
                                        style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: 'white', letterSpacing: '-0.02em' }}>
                                        {current.headline}{' '}
                                        <span style={{ background: 'linear-gradient(90deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                            {current.highlight}
                                        </span>
                                    </h1>
                                    <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.75, fontSize: '0.95rem' }}>
                                        {current.sub}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Dots */}
                            <div className="flex items-center gap-3 mt-8">
                                {heroSlides.map((_, i) => (
                                    <button key={i} onClick={() => goTo(i)}>
                                        <motion.div
                                            animate={{ width: i === slide ? 24 : 6, opacity: i === slide ? 1 : 0.25 }}
                                            transition={{ duration: 0.3 }}
                                            className="h-1.5 rounded-full"
                                            style={{ background: 'white' }}
                                        />
                                    </button>
                                ))}
                                {/* Arrows */}
                                <div className="flex gap-2 ml-4">
                                    {[
                                        { fn: () => goTo((slide - 1 + heroSlides.length) % heroSlides.length), icon: <ChevronLeft size={14} /> },
                                        { fn: () => goTo((slide + 1) % heroSlides.length), icon: <ChevronRight size={14} /> },
                                    ].map((btn, i) => (
                                        <button key={i} onClick={btn.fn}
                                            className="w-7 h-7 rounded-lg flex items-center justify-center text-white transition-colors"
                                            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                                        >
                                            {btn.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right — stat cards */}
                        <div className="hidden lg:flex flex-col gap-3 flex-shrink-0">
                            {[
                                { icon: TrendingUp, label: '96–98%', sub: 'Success Rate' },
                                { icon: Briefcase, label: '5,000+', sub: 'Visas Approved' },
                                { icon: Globe, label: '10+', sub: 'Countries' },
                                { icon: Clock, label: 'Fast', sub: 'Processing' },
                            ].map((s, i) => (
                                <div key={i}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                        style={{ background: 'rgba(255,255,255,0.07)' }}>
                                        <s.icon size={14} color="rgba(255,255,255,0.5)" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.label}</p>
                                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}>{s.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── VISA CARDS ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14" style={{ marginTop: '-32px' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-5"
                    style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Work Visa Services — Click to View Full Details
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Active visa cards */}
                    {[workVisaData.skilledWorker, workVisaData.psw, workVisaData.canada].map((visa, i) => (
                        <motion.div
                            key={visa.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link to={`/work-visa/${visa.id}`} className="block group h-full">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="relative rounded-2xl p-5 h-full flex flex-col bg-white"
                                    style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,0.06)', transition: 'box-shadow 0.3s, border-color 0.3s' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,23,42,0.12)'; e.currentTarget.style.borderColor = '#CCFBF1' }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                                >
                                    {/* Top accent */}
                                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                        style={{ background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }} />

                                    <div className="flex items-start justify-between mb-4 pt-1">
                                        <div>
                                            <span className="text-xs px-2.5 py-1 rounded-full font-semibold mb-3 inline-block"
                                                style={{ background: `${visa.tagColor}15`, color: visa.tagColor, border: `1px solid ${visa.tagColor}30`, fontFamily: 'Inter, sans-serif' }}>
                                                {visa.tag}
                                            </span>
                                            <h3 className="font-bold text-base leading-tight"
                                                style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                                {visa.title}
                                            </h3>
                                            <p className="text-xs mt-1"
                                                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                                {visa.subtitle}
                                            </p>
                                        </div>
                                        <span className="text-2xl">{visa.id === 'canada' ? '🇨🇦' : '🇬🇧'}</span>
                                    </div>

                                    <div className="flex items-center gap-3 py-3 mb-3"
                                        style={{ borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
                                        <div className="flex items-center gap-1.5">
                                            <TrendingUp size={12} color="#0D9488" />
                                            <span className="text-xs font-semibold" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>{visa.successRate}</span>
                                            <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>success</span>
                                        </div>
                                        <div className="w-px h-3" style={{ background: '#E2E8F0' }} />
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={12} color="#0D9488" />
                                            <span className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{visa.processingTime}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                                        {visa.highlights.slice(0, 3).map((h, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-full"
                                                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                                                {h.icon} {h.text}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-3"
                                        style={{ borderTop: '1px solid #F1F5F9' }}>
                                        <span className="text-sm font-semibold"
                                            style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>
                                            View Full Details
                                        </span>
                                        <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                                            <ArrowRight size={15} color="#0D9488" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    )
}
