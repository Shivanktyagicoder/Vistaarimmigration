import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Clock, TrendingUp, Globe, Users, Shield,
    CheckCircle, X, ChevronDown, ChevronUp,
    AlertCircle, Ban
} from 'lucide-react'
import { visitorVisaCountries } from '../../data/visitor-visa'

export default function VisitorVisa() {
    const [selected, setSelected] = useState(null)
    const [openFaq, setOpenFaq] = useState(null)

    const activeCountry = visitorVisaCountries.find(c => c.id === selected)

    const handleSelect = (country) => {
        if (country.status === 'coming-soon') return
        setSelected(country.id === selected ? null : country.id)
        setOpenFaq(null)
    }

    return (
        <>
        <Helmet>
            <title>Visitor Visa — UK, USA, Canada &amp; Schengen | Vistaar Immigration</title>
            <meta name="description" content="Visitor visa assistance for UK, USA, Canada, Australia and Schengen. Tourism, family visits and medical travel. Expert preparation and 98% success rate." />
            <meta property="og:title" content="Visitor Visa Services — Vistaar Immigration" />
            <meta property="og:url" content="https://vistaarimmigration.com/visitor-visa" />
            <link rel="canonical" href="https://vistaarimmigration.com/visitor-visa" />
        </Helmet>
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* ── HERO ── */}
            <div className="relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', minHeight: '360px' }}>

                {/* Static ambient glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #0D948818 0%, transparent 70%)', transform: 'translate(25%,-25%)', filter: 'blur(80px)' }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16" style={{ paddingTop: '144px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>
                            <Globe size={13} color="rgba(255,255,255,0.6)" />
                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Visitor Visa Services</span>
                        </div>
                        <h1 className="font-bold mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                            Visit Any Country{' '}
                            <span style={{ background: 'linear-gradient(90deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                With Confidence
                            </span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', lineHeight: 1.75, fontSize: '0.95rem' }}>
                            Expert visitor visa guidance for UK, USA, Canada, Australia, Schengen and New Zealand. Click any country to see full details.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {[
                                { icon: Shield, label: 'OISC Regulated' },
                                { icon: Users, label: 'Expert Advisors' },
                                { icon: Clock, label: 'Fast Processing' },
                            ].map((s, i) => (
                                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full"
                                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <s.icon size={13} color="rgba(255,255,255,0.5)" />
                                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── CARDS ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
                <p className="text-xs font-semibold uppercase tracking-widest mb-6"
                    style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Visitor Visa Services — Select a Country
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visitorVisaCountries.map((country, i) => {
                        const isClickable = country.status !== 'coming-soon'
                        const isSelected = selected === country.id

                        return (
                            <motion.div
                                key={country.id}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={isClickable ? { y: -4 } : {}}
                                onClick={() => handleSelect(country)}
                                className="relative rounded-2xl p-5 bg-white"
                                style={{
                                    border: isSelected ? `2px solid ${country.accentColor}` : '1px solid #E2E8F0',
                                    boxShadow: isSelected ? `0 8px 32px ${country.accentColor}20` : '0 2px 12px rgba(15,23,42,0.05)',
                                    cursor: isClickable ? 'pointer' : 'default',
                                    transition: 'box-shadow 0.3s, border-color 0.3s',
                                }}
                                onMouseEnter={e => { if (isClickable && !isSelected) { e.currentTarget.style.boxShadow = '0 12px 40px rgba(15,23,42,0.1)' } }}
                                onMouseLeave={e => { if (!isSelected) e.currentTarget.style.boxShadow = '0 2px 12px rgba(15,23,42,0.05)' }}
                            >
                                {/* Top color bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                    style={{ background: isClickable ? `linear-gradient(90deg, ${country.color}, ${country.accentColor})` : '#E2E8F0' }}
                                />

                                {/* Flag + Country name */}
                                <div className="flex items-center gap-3 pt-2 mb-4">
                                    <div className="w-12 h-9 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
                                        style={{ border: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                                        <img
                                            src={`https://flagcdn.com/w80/${country.code}.png`}
                                            alt={country.country}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base leading-tight"
                                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                            {country.country}
                                        </h3>
                                        {country.tagline && (
                                            <p className="text-xs mt-0.5"
                                                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                                {country.tagline}
                                            </p>
                                        )}
                                        {country.status === 'coming-soon' && (
                                            <span className="text-xs"
                                                style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                Coming soon
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-col gap-1.5 mb-3">
                                    {[
                                        { label: 'Visa Fee', value: country.fee },
                                        { label: 'Max Stay', value: country.maxStay },
                                        { label: 'Processing', value: country.processing },
                                    ].map((stat, j) => (
                                        <div key={j} className="flex items-center justify-between py-1.5"
                                            style={{ borderBottom: j < 2 ? '1px solid #F1F5F9' : 'none' }}>
                                            <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                {stat.label}
                                            </span>
                                            <span className="text-xs font-semibold" style={{ color: '#0F172A', fontFamily: 'Poppins, sans-serif' }}>
                                                {stat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3"
                                    style={{ borderTop: '1px solid #F1F5F9' }}>
                                    <div className="flex items-center gap-1.5">
                                        <TrendingUp size={12} color="#0D9488" />
                                        <span className="text-xs font-medium" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                                            {country.successRate} success
                                        </span>
                                    </div>
                                    {isClickable && (
                                        <span className="text-xs font-semibold"
                                            style={{ color: isSelected ? country.accentColor : '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                            {isSelected ? 'Viewing ↓' : 'View Details →'}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* ── SLIDE-IN PANEL ── */}
            <AnimatePresence>
                {selected && activeCountry?.status !== 'coming-soon' && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 z-40"
                            style={{ background: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(4px)' }}
                        />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
                            style={{ width: 'min(520px, 100vw)', background: 'white', boxShadow: '-10px 0 60px rgba(15,23,42,0.15)', borderLeft: '1px solid #E2E8F0' }}
                        >
                            {/* Panel header */}
                            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
                                style={{ background: 'white', borderBottom: '1px solid #F1F5F9', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-7 rounded-md overflow-hidden flex-shrink-0"
                                        style={{ border: '1px solid #E2E8F0' }}>
                                        <img
                                            src={`https://flagcdn.com/w80/${activeCountry.code}.png`}
                                            alt={activeCountry.country}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base"
                                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                            {activeCountry.country} Visitor Visa
                                        </h3>
                                        <p className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                            {activeCountry.tagline}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setSelected(null)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ background: '#F1F5F9', color: '#64748B' }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#F1F5F9'}>
                                    <X size={16} />
                                </button>
                            </div>

                            {/* Panel content */}
                            <div className="px-6 py-6 flex flex-col gap-7">

                                {activeCountry.importantUpdates && (
                                    <div className="rounded-xl p-4" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <AlertCircle size={14} color="#D97706" />
                                            <p className="font-semibold text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: '#92400E' }}>2026 Updates</p>
                                        </div>
                                        {activeCountry.importantUpdates.map((u, i) => (
                                            <div key={i} className="flex items-start gap-2 mb-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                                    style={{ background: u.type === 'warning' ? '#EF4444' : u.type === 'positive' ? '#10B981' : '#D97706' }} />
                                                <span className="text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#78350F' }}>{u.update}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <PanelSection title="Key Highlights">
                                    <div className="grid grid-cols-2 gap-2">
                                        {activeCountry.highlights?.map((h, i) => (
                                            <div key={i} className="flex items-center gap-2 p-3 rounded-xl"
                                                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                                                <span className="text-lg">{h.icon}</span>
                                                <span className="text-xs font-medium" style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>{h.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </PanelSection>

                                {/* NZeTA Info (NZ specific) */}
                                {activeCountry.nzetaInfo && (
                                    <PanelSection title={activeCountry.nzetaInfo.title}>
                                        <p className="text-xs mb-3"
                                            style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                            {activeCountry.nzetaInfo.desc}
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            {activeCountry.nzetaInfo.items.map((item, i) => (
                                                <div key={i}
                                                    className="flex items-center justify-between p-3 rounded-xl bg-white"
                                                    style={{ border: '1px solid #E2E8F0' }}>
                                                    <div>
                                                        <p className="text-xs font-semibold"
                                                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                                            {item.type}
                                                        </p>
                                                        <p className="text-xs mt-0.5"
                                                            style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                            {item.note}
                                                        </p>
                                                    </div>
                                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2"
                                                        style={{
                                                            background: item.requirement === 'No visa needed' ? '#F0FDF4' :
                                                                        item.requirement === 'NZeTA only' ? '#F0FDFA' : '#EFF6FF',
                                                            color: item.requirement === 'No visa needed' ? '#16A34A' :
                                                                   item.requirement === 'NZeTA only' ? '#0D9488' : '#3B82F6',
                                                            border: `1px solid ${item.requirement === 'No visa needed' ? '#BBF7D0' :
                                                                     item.requirement === 'NZeTA only' ? '#CCFBF1' : '#BFDBFE'}`,
                                                            fontFamily: 'Inter, sans-serif',
                                                            whiteSpace: 'nowrap',
                                                        }}>
                                                        {item.requirement}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </PanelSection>
                                )}

                                {activeCountry.visaTypes && (
                                    <PanelSection title="Visa Types & Fees">
                                        <div className="flex flex-col gap-2">
                                            {activeCountry.visaTypes.map((v, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white"
                                                    style={{ border: '1px solid #E2E8F0' }}>
                                                    <div>
                                                        <p className="text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{v.type}</p>
                                                        <p className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{v.validity} validity · {v.stay}</p>
                                                    </div>
                                                    <span className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0D9488' }}>{v.fee}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </PanelSection>
                                )}

                                {activeCountry.processingOptions && (
                                    <PanelSection title="Processing Options">
                                        <div className="flex flex-col gap-2">
                                            {activeCountry.processingOptions.map((p, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl"
                                                    style={{ background: i === 0 ? '#F0FDFA' : '#F8FAFC', border: `1px solid ${i === 0 ? '#CCFBF1' : '#E2E8F0'}` }}>
                                                    <div>
                                                        <p className="text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{p.type}</p>
                                                        <p className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{p.note}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0D9488' }}>{p.time}</p>
                                                        <p className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{p.fee}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </PanelSection>
                                )}

                                <PanelSection title="Required Documents">
                                    <div className="flex flex-col gap-2">
                                        {activeCountry.requirements?.map((r, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white"
                                                style={{ border: '1px solid #E2E8F0' }}>
                                                <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                                                    style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                                    <CheckCircle size={11} color="#0D9488" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{r.item}</p>
                                                    <p className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{r.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PanelSection>

                                {activeCountry.permitted && (
                                    <PanelSection title="What You Can & Cannot Do">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 rounded-xl" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                                                <p className="text-xs font-semibold mb-2" style={{ color: '#166534', fontFamily: 'Poppins, sans-serif' }}>✅ Permitted</p>
                                                {activeCountry.permitted.map((p, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 mb-1">
                                                        <CheckCircle size={10} color="#16A34A" className="flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs" style={{ color: '#166534', fontFamily: 'Inter, sans-serif' }}>{p}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-3 rounded-xl" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                                                <p className="text-xs font-semibold mb-2" style={{ color: '#991B1B', fontFamily: 'Poppins, sans-serif' }}>❌ Not Allowed</p>
                                                {activeCountry.notPermitted?.map((p, i) => (
                                                    <div key={i} className="flex items-start gap-1.5 mb-1">
                                                        <Ban size={10} color="#DC2626" className="flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs" style={{ color: '#991B1B', fontFamily: 'Inter, sans-serif' }}>{p}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </PanelSection>
                                )}

                                {activeCountry.approvalTips && (
                                    <PanelSection title="Tips to Improve Approval">
                                        {activeCountry.approvalTips.map((t, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 rounded-xl mb-2 bg-white"
                                                style={{ border: '1px solid #E2E8F0' }}>
                                                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
                                                    <span className="text-white text-xs font-bold">{i + 1}</span>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{t.tip}</p>
                                                    <p className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{t.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </PanelSection>
                                )}

                                {activeCountry.refusalReasons && (
                                    <PanelSection title="Common Refusal Reasons">
                                        <div className="flex flex-col gap-2">
                                            {activeCountry.refusalReasons.map((r, i) => (
                                                <div key={i} className="flex items-center gap-2 p-3 rounded-xl"
                                                    style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                                                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FEE2E2' }}>
                                                        <span className="text-xs font-bold text-red-400">✕</span>
                                                    </div>
                                                    <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>{r}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </PanelSection>
                                )}

                                <PanelSection title="Application Process">
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 bottom-4 w-px"
                                            style={{ background: 'linear-gradient(to bottom, #0D9488, #E2E8F0)' }} />
                                        {activeCountry.steps?.map((s, i) => (
                                            <div key={i} className="flex items-start gap-4 mb-4 pl-0.5">
                                                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-white text-xs font-bold"
                                                    style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 2px 8px rgba(13,148,136,0.3)', fontFamily: 'Poppins, sans-serif' }}>
                                                    {s.step}
                                                </div>
                                                <div className="pt-1.5">
                                                    <p className="text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>{s.title}</p>
                                                    <p className="text-xs mt-0.5" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PanelSection>

                                {activeCountry.faqs?.length > 0 && (
                                    <PanelSection title="FAQs">
                                        {activeCountry.faqs.map((faq, i) => (
                                            <div key={i} className="rounded-xl overflow-hidden mb-2" style={{ border: '1px solid #E2E8F0' }}>
                                                <button
                                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                    className="w-full flex items-center justify-between p-3 text-left"
                                                    style={{ background: openFaq === i ? '#F0FDFA' : 'white' }}>
                                                    <span className="text-xs font-medium pr-3" style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>{faq.q}</span>
                                                    {openFaq === i ? <ChevronUp size={13} color="#0D9488" /> : <ChevronDown size={13} color="#94A3B8" />}
                                                </button>
                                                <AnimatePresence>
                                                    {openFaq === i && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}>
                                                            <p className="px-3 pb-3 pt-1 text-xs leading-relaxed"
                                                                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                                                {faq.a}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </PanelSection>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
        </>
    )
}

function PanelSection({ title, children }) {
    return (
        <div>
            <p className="font-semibold text-sm mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', borderLeft: '3px solid #0D9488', paddingLeft: '10px' }}>
                {title}
            </p>
            {children}
        </div>
    )
}
