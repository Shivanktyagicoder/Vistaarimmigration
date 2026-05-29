import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { studyVisaCountries } from '../../data/study-visa'
import {
    ArrowLeft, CheckCircle, Clock, TrendingUp,
    FileText, DollarSign, ArrowRight, ChevronDown,
    ChevronUp, ChevronLeft, ChevronRight, Phone, AlertCircle, BookOpen,
    Briefcase, GraduationCap,
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const imgVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: {
        opacity: 1, scale: 1.02,
        transition: {
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: 8, ease: [0.0, 0.0, 0.2, 1] },
        },
    },
    exit: {
        opacity: 0, scale: 1.01,
        transition: { opacity: { duration: 0.9, ease: 'easeInOut' } },
    },
}

const captionVariants = {
    enter: { opacity: 0, y: 18 },
    center: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function CountryDetail() {
    const { countryId } = useParams()
    const navigate = useNavigate()
    const [openFaq, setOpenFaq] = useState(null)
    const [slide, setSlide] = useState(0)
    const timerRef = useRef(null)

    const data = studyVisaCountries.find(c => c.id === countryId)
    const slides = data?.heroImages?.filter(img => img.src) ?? []

    useEffect(() => {
        if (!slides.length) return
        timerRef.current = setInterval(() => setSlide(p => (p + 1) % slides.length), 5000)
        return () => clearInterval(timerRef.current)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const goTo = (i) => {
        clearInterval(timerRef.current)
        setSlide(i)
        timerRef.current = setInterval(() => setSlide(p => (p + 1) % slides.length), 5000)
    }
    const prev = () => goTo((slide - 1 + slides.length) % slides.length)
    const next = () => goTo((slide + 1) % slides.length)

    if (!data) return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#F8FAFC' }}>
            <p className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>Country not found</p>
            <Link to="/study-visa" style={{ color: '#0D9488' }}>← Back to Study Visa</Link>
        </div>
    )

    return (
        <div className="min-h-screen" style={{ background: '#F8FAFC' }}>

            {/* ── HERO ── */}
            <section className="relative overflow-hidden" style={{ height: '100vh', minHeight: '640px' }}>

                {/* Sliding images — Ken Burns crossfade */}
                <div className="absolute inset-0 z-0">
                    {slides.length > 0 ? (
                        <>
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={slide}
                                    variants={imgVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={slides[slide].src}
                                        alt={slides[slide].caption}
                                        className="w-full h-full"
                                        style={{ objectFit: 'cover', objectPosition: 'center', willChange: 'transform, opacity', transform: 'translateZ(0)' }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.68) 55%, rgba(15,23,42,0.18) 100%)' }} />
                            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.96) 0%, transparent 52%)' }} />
                            <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.45) 100%)' }} />
                        </>
                    ) : (
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                                transition={{ duration: 7, repeat: Infinity }}
                                className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                                style={{ background: `radial-gradient(circle, ${data.heroColor}55, transparent 70%)`, transform: 'translate(20%, -20%)' }}
                            />
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                                backgroundSize: '36px 36px',
                            }} />
                        </div>
                    )}
                </div>

                {/* Subtle grid texture */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }} />

                {/* Hero content */}
                <div className="relative z-20 h-full flex flex-col justify-center" style={{ paddingTop: '80px' }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

                        {/* Back */}
                        <motion.button
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => navigate('/study-visa')}
                            className="flex items-center gap-2 mb-10 text-sm transition-colors duration-200"
                            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#14B8A6'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                        >
                            <ArrowLeft size={15} /> Back to Study Visa
                        </motion.button>

                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

                            {/* Left — title */}
                            <motion.div
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-xl"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                                    style={{ background: 'rgba(13,148,136,0.12)', border: '1px solid rgba(13,148,136,0.35)', backdropFilter: 'blur(8px)' }}>
                                    <span className="text-base">{data.flag}</span>
                                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#5EEAD4' }}>{data.country}</span>
                                    <span className="w-px h-3" style={{ background: 'rgba(94,234,212,0.3)' }} />
                                    <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}>Study Visa Guide</span>
                                </div>

                                <h1 className="font-bold mb-5 leading-[1.05]" style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                                    color: 'white',
                                    letterSpacing: '-0.025em',
                                }}>
                                    {data.country} Study Visa
                                </h1>

                                <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', maxWidth: '500px', lineHeight: 1.75, fontSize: '1rem' }}>
                                    {data.overview}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-7">
                                    {[
                                        { icon: TrendingUp, label: data.successRate + ' Success Rate' },
                                        { icon: Clock, label: data.processingTime },
                                    ].map((s, i) => (
                                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full"
                                            style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.25)', backdropFilter: 'blur(8px)' }}>
                                            <s.icon size={13} color="#14B8A6" />
                                            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}>{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>


                        </div>
                    </div>
                </div>

                {/* Image caption + arrows — only show if images exist */}
                {slides.length > 0 && (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full"
                            style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                                {slides[slide].badge}
                            </span>
                            <span className="w-px h-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
                            <span className="text-xs font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                                {slides[slide].caption}
                            </span>
                        </div>

                        {slides.length > 1 && (
                            <div className="flex gap-2">
                                {[
                                    { fn: prev, icon: <ChevronLeft size={14} /> },
                                    { fn: next, icon: <ChevronRight size={14} /> },
                                ].map((btn, i) => (
                                    <button key={i} onClick={btn.fn}
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors"
                                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(13,148,136,0.4)'}
                                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    >
                                        {btn.icon}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* ── BODY ── */}
            <div style={{ background: '#F1F5F9', borderTop: '1px solid #E2E8F0' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* LEFT — main content */}
                        <div className="lg:col-span-2 flex flex-col gap-10">

                            {/* Important Updates */}
                            {data.importantUpdates && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl p-5"
                                    style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertCircle size={16} color="#D97706" />
                                        <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#92400E' }}>
                                            Latest 2025 Policy Updates — Important
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {data.importantUpdates.map((u, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                                    style={{ background: u.type === 'warning' ? '#EF4444' : '#D97706' }} />
                                                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#78350F' }}>{u.update}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Key Highlights */}
                            <Section title="Key Highlights" icon="✨">
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {data.highlights.map((h, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-white"
                                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.04)', cursor: 'default', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                                            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(13,148,136,0.1)'; e.currentTarget.style.borderColor = '#99F6E4' }}
                                            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                                        >
                                            <span className="text-xl">{h.icon}</span>
                                            <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>{h.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </Section>

                            {/* Visa Type (USA) */}
                            {data.visaType && (
                                <Section title={data.visaType.name} icon="🛂">
                                    <div className="p-5 rounded-xl bg-white mb-4"
                                        style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                                        <p className="text-sm mb-4" style={{ color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}>{data.visaType.description}</p>
                                        <div className="flex flex-col gap-2">
                                            {data.visaType.benefits.map((b, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <CheckCircle size={13} color="#0D9488" className="flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Section>
                            )}

                            {/* Requirements */}
                            <Section title="Requirements & Documents" icon="📋">
                                <div className="flex flex-col gap-3">
                                    {data.requirements.map((r, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white"
                                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                        >
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 3px 10px rgba(13,148,136,0.3)' }}>
                                                <CheckCircle size={14} color="white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{r.item}</p>
                                                <p className="text-xs mt-0.5" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{r.detail}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Section>

                            {/* Financial Requirements */}
                            {data.financialRequirements && (
                                <Section title="Financial Requirements 2025" icon="💰">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {data.financialRequirements.map((f, i) => (
                                            <motion.div key={i}
                                                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                                className="p-4 rounded-xl bg-white"
                                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                            >
                                                <p className="text-xs mb-1" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{f.label}</p>
                                                <p className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{f.amount}</p>
                                                <p className="text-xs mt-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{f.note}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Intake Seasons */}
                            {data.intakes && (
                                <Section title="Intake Seasons" icon="📅">
                                    <div className="grid sm:grid-cols-3 gap-3">
                                        {data.intakes.map((intake, i) => (
                                            <motion.div key={i}
                                                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                                className="p-5 rounded-xl bg-white text-center"
                                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                            >
                                                <span className="text-3xl block mb-2">{intake.icon}</span>
                                                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{intake.season}</p>
                                                <p className="text-xs mt-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{intake.note}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Top Universities */}
                            {data.topUniversities && (
                                <Section title="Top Universities" icon="🏛️">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {data.topUniversities.map((u, i) => (
                                            <motion.div key={i}
                                                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                                className="flex items-center justify-between p-4 rounded-xl bg-white"
                                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                        style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                                        <GraduationCap size={14} color="#0D9488" />
                                                    </div>
                                                    <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>{u.name}</span>
                                                </div>
                                                <span className="text-xs px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
                                                    style={{ background: '#F0FDFA', color: '#0D9488', fontFamily: 'Inter, sans-serif', border: '1px solid #CCFBF1' }}>
                                                    {u.rank}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Work Rights */}
                            {data.workRights && (
                                <Section title="Work Opportunities" icon="💼">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        {[
                                            { title: 'During Studies', items: data.workRights.duringStudies, icon: BookOpen },
                                            { title: 'After Graduation', items: data.workRights.afterGraduation, icon: Briefcase },
                                        ].map((block, i) => (
                                            <div key={i} className="p-5 rounded-xl bg-white"
                                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                        style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                                        <block.icon size={14} color="#0D9488" />
                                                    </div>
                                                    <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{block.title}</p>
                                                </div>
                                                {block.items.map((item, j) => (
                                                    <div key={j} className="flex items-start gap-2 mb-2">
                                                        <CheckCircle size={13} color="#0D9488" className="flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Refusal Reasons */}
                            {data.refusalReasons && (
                                <Section title="Common Visa Refusal Reasons" icon="⚠️">
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {data.refusalReasons.map((r, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white"
                                                style={{ border: '1px solid #FEE2E2', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                                                    <span className="text-xs font-bold" style={{ color: '#EF4444' }}>✕</span>
                                                </div>
                                                <span className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>{r}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Interview Info (USA) */}
                            {data.interviewInfo && (
                                <Section title="Visa Interview Guide" icon="🎤">
                                    <div className="p-4 rounded-xl mb-4"
                                        style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}>
                                        <p className="text-sm" style={{ color: '#92400E', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>{data.interviewInfo.note}</p>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="p-5 rounded-xl bg-white" style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                                            <p className="font-semibold text-sm mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>Common Questions</p>
                                            {data.interviewInfo.commonQuestions.map((q, i) => (
                                                <div key={i} className="flex items-start gap-2 mb-2">
                                                    <span className="text-xs font-bold flex-shrink-0 mt-0.5" style={{ color: '#0D9488' }}>{i + 1}.</span>
                                                    <span className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>{q}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-5 rounded-xl bg-white" style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}>
                                            <p className="font-semibold text-sm mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>Interview Tips</p>
                                            {data.interviewInfo.tips.map((t, i) => (
                                                <div key={i} className="flex items-start gap-2 mb-2">
                                                    <CheckCircle size={13} color="#0D9488" className="flex-shrink-0 mt-0.5" />
                                                    <span className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Section>
                            )}

                            {/* PR Pathways (Australia) */}
                            {data.prPathways && (
                                <Section title="PR Pathways After Study" icon="🏡">
                                    <div className="flex flex-col gap-3">
                                        {data.prPathways.map((p, i) => (
                                            <motion.div key={i}
                                                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                                className="flex items-start gap-4 p-4 rounded-xl bg-white"
                                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                            >
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                    style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 3px 10px rgba(13,148,136,0.3)' }}>
                                                    <CheckCircle size={14} color="white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{p.pathway}</p>
                                                    <p className="text-xs mt-0.5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </Section>
                            )}

                            {/* Steps */}
                            <Section title="Step-by-Step Process" icon="🗺️">
                                <div className="relative">
                                    <div className="absolute left-5 top-5 bottom-5 w-px"
                                        style={{ background: 'linear-gradient(to bottom, #0D9488, transparent)' }} />
                                    <div className="flex flex-col gap-4">
                                        {data.steps.map((s, i) => (
                                            <motion.div key={i}
                                                initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                                className="flex items-start gap-5 pl-1"
                                            >
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm z-10 text-white"
                                                    style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)', fontFamily: 'Poppins, sans-serif' }}>
                                                    {s.step}
                                                </div>
                                                <div className="pt-2 pb-2">
                                                    <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{s.title}</p>
                                                    <p className="text-xs mt-0.5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Section>

                            {/* FAQs */}
                            <Section title="Frequently Asked Questions" icon="❓">
                                <div className="flex flex-col gap-3">
                                    {data.faqs.map((faq, i) => (
                                        <motion.div key={i}
                                            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                            className="rounded-xl overflow-hidden bg-white"
                                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)' }}
                                        >
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full flex items-center justify-between p-4 text-left"
                                                style={{ background: openFaq === i ? '#F0FDFA' : 'white', transition: 'background 0.2s' }}
                                            >
                                                <span className="text-sm font-medium pr-4" style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>{faq.q}</span>
                                                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{ background: openFaq === i ? '#CCFBF1' : '#F1F5F9' }}>
                                                    {openFaq === i
                                                        ? <ChevronUp size={14} color="#0D9488" />
                                                        : <ChevronDown size={14} color="#64748B" />
                                                    }
                                                </div>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {openFaq === i && (
                                                    <motion.div
                                                        key="answer"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <p className="px-4 pb-4 pt-2 text-sm leading-relaxed"
                                                            style={{ color: '#475569', fontFamily: 'Inter, sans-serif', borderTop: '1px solid #F1F5F9' }}>
                                                            {faq.a}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            </Section>
                        </div>

                        {/* RIGHT — sidebar */}
                        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">

                            {/* Fees */}
                            <SideCard title="Visa Fees 2025" icon={<DollarSign size={15} color="#0D9488" />}>
                                {data.fees.government.map((f, i) => (
                                    <div key={i} className="flex justify-between items-center py-3"
                                        style={{ borderBottom: '1px solid #F1F5F9' }}>
                                        <span className="text-sm" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{f.label}</span>
                                        <span className="text-sm font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{f.amount}</span>
                                    </div>
                                ))}
                                {data.fees.additional && (
                                    <div className="mt-3 mb-1">
                                        <p className="text-xs mb-2" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>Additional:</p>
                                        {data.fees.additional.map((a, i) => (
                                            <div key={i} className="flex items-center gap-2 py-0.5">
                                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#CBD5E1' }} />
                                                <span className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{a}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                                    <span className="text-sm" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Our Consultation</span>
                                    <span className="text-sm font-bold px-2.5 py-1 rounded-full"
                                        style={{ background: '#F0FDFA', color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>
                                        {data.fees.consultation}
                                    </span>
                                </div>
                            </SideCard>

                            {/* Processing Time */}
                            <div className="p-5 rounded-2xl"
                                style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 8px 28px rgba(13,148,136,0.3)' }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Clock size={14} color="rgba(255,255,255,0.7)" />
                                    <span className="text-xs font-semibold uppercase tracking-wider"
                                        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>Processing Time</span>
                                </div>
                                <p className="text-4xl font-bold text-white"
                                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>{data.processingTime}</p>
                                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}>Standard processing time</p>
                            </div>

                            {/* Top Courses */}
                            {data.topCourses && (
                                <SideCard title="Top Courses" icon={<BookOpen size={15} color="#0D9488" />}>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {data.topCourses.map((c, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 rounded-full"
                                                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </SideCard>
                            )}

                            {/* Why Vistaar */}
                            <SideCard title="Why Choose Vistaar" icon={<FileText size={15} color="#0D9488" />}>
                                <div className="flex flex-col gap-1 mt-1">
                                    {data.whyVistaar.map((w, i) => (
                                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                                            style={{ transition: 'background 0.15s' }}
                                            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <CheckCircle size={14} color="#0D9488" className="flex-shrink-0" />
                                            <span className="text-sm font-medium"
                                                style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{w}</span>
                                        </div>
                                    ))}
                                </div>
                            </SideCard>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ── REUSABLE SECTION ─────────────────────────────────────────
function Section({ title, icon, children }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-5" style={{ borderLeft: '3px solid #0D9488', paddingLeft: '12px' }}>
                <span className="text-lg">{icon}</span>
                <h2 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', fontSize: '1.1rem', letterSpacing: '-0.01em' }}>{title}</h2>
            </div>
            {children}
        </motion.div>
    )
}

// ── REUSABLE SIDEBAR CARD ────────────────────────────────────
function SideCard({ title, icon, children }) {
    return (
        <div className="p-5 rounded-2xl bg-white" style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
            <div className="flex items-center gap-2 mb-4">
                {icon}
                <h3 className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{title}</h3>
            </div>
            {children}
        </div>
    )
}
