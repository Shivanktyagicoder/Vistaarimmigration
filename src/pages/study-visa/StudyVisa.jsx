import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, TrendingUp } from 'lucide-react'
import { studyVisaCountries } from '../../data/study-visa'

const comingSoon = []

export default function StudyVisa() {
    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* ── HEADER — starts at y=0 so transparent navbar sees dark bg ── */}
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '144px', paddingBottom: '96px' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm"
                            style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
                        >
                            🎓 Study Visa Services
                        </div>
                        <h1 className="font-bold mb-4" style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            color: 'white',
                            letterSpacing: '-0.02em',
                        }}>
                            Study Abroad With{' '}
                            <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Confidence
                            </span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
                            Choose your destination. Our experts handle everything from university selection to visa approval.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* ── CARDS ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16" style={{ marginTop: '-48px' }}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* LIVE CARDS */}
                    {studyVisaCountries.map((country, i) => (
                        <motion.div
                            key={country.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link to={`/study-visa/${country.id}`} className="block group h-full">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    className="relative rounded-2xl p-6 h-full flex flex-col overflow-hidden bg-white"
                                    style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,0.06)', transition: 'box-shadow 0.3s, border-color 0.3s' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(15,23,42,0.12)'; e.currentTarget.style.borderColor = '#CCFBF1' }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                                >
                                    {/* Top color bar */}
                                    <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                        style={{ background: `linear-gradient(90deg, ${country.heroColor}, ${country.accentColor ?? country.heroColor}88)` }} />

                                    {/* Flag */}
                                    <div className="pt-2 mb-4">
                                        <span className="text-5xl">{country.flag}</span>
                                    </div>

                                    {/* Name + badge */}
                                    <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-bold text-xl leading-tight" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                            {country.country}
                                        </h3>
                                        <span className="flex-shrink-0 ml-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                                            style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #CCFBF1', fontFamily: 'Inter, sans-serif' }}>
                                            Active
                                        </span>
                                    </div>
                                    <p className="text-sm mb-5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{country.tagline}</p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 py-3 mb-4"
                                        style={{ borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
                                        <div className="flex items-center gap-1.5">
                                            <TrendingUp size={13} color="#0D9488" />
                                            <span className="text-xs font-bold" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>{country.successRate}</span>
                                            <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>success</span>
                                        </div>
                                        <div className="w-px h-4" style={{ background: '#E2E8F0' }} />
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={13} color="#0D9488" />
                                            <span className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{country.processingTime}</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-5 flex-1">
                                        {country.highlights.slice(0, 3).map((h, idx) => (
                                            <span key={idx} className="text-xs px-2.5 py-1 rounded-full"
                                                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                                                {h.icon} {h.text}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between pt-4"
                                        style={{ borderTop: '1px solid #F1F5F9' }}>
                                        <span className="text-sm font-semibold" style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>
                                            View Full Details
                                        </span>
                                        <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
                                            <ArrowRight size={16} color="#0D9488" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* COMING SOON CARDS */}
                    {comingSoon.map((country, i) => (
                        <motion.div
                            key={country.country}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (studyVisaCountries.length + i) * 0.1, duration: 0.5 }}
                        >
                            <div className="relative rounded-2xl p-6 h-full bg-white"
                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}>
                                <div className="absolute top-4 right-4">
                                    <span className="text-xs px-2.5 py-1 rounded-full"
                                        style={{ background: '#F1F5F9', color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                        Coming Soon
                                    </span>
                                </div>
                                <span className="text-5xl mb-3 block opacity-35">{country.flag}</span>
                                <h3 className="font-bold text-xl mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#CBD5E1' }}>{country.country}</h3>
                                <p className="text-sm" style={{ color: '#CBD5E1', fontFamily: 'Inter, sans-serif' }}>Detailed guide coming soon</p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    )
}
