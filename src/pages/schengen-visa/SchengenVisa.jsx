import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    CheckCircle, Clock, TrendingUp, ArrowRight,
    DollarSign, FileText, ChevronDown, ChevronUp,
    AlertCircle, Globe, Briefcase, Shield, Users
} from 'lucide-react'
import { schengenData, schengenCountries } from '../../data/schengen-visa'

function Section({ title, icon, label, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>
                        {label || title}
                    </span>
                </div>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                    {title}
                </h2>
                <div style={{ height: '3px', width: '44px', background: 'linear-gradient(90deg, #0D9488, #38BDF8)', borderRadius: '99px', marginTop: '10px' }} />
            </div>
            {children}
        </motion.div>
    )
}

function SideCard({ title, icon, children }) {
    return (
        <div className="p-5 rounded-2xl bg-white"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
            <div className="flex items-center gap-2 mb-4">
                {icon}
                <h3 className="font-semibold text-sm"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                    {title}
                </h3>
            </div>
            {children}
        </div>
    )
}

function VisaDetail({ visa }) {
    const [openFaq, setOpenFaq] = useState(null)
    return (
        <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-10">

                {/* Updates */}
                {visa.importantUpdates && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl p-5"
                        style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                        <div className="flex items-center gap-2 mb-3">
                            <AlertCircle size={16} color="#D97706" />
                            <p className="font-semibold text-sm"
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#92400E' }}>
                                Latest 2025–2026 Updates — Important
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            {visa.importantUpdates.map((u, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                        style={{ background: u.type === 'warning' ? '#EF4444' : u.type === 'positive' ? '#10B981' : '#D97706' }} />
                                    <span className="text-sm"
                                        style={{ fontFamily: 'Inter, sans-serif', color: '#78350F' }}>
                                        {u.update}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Highlights */}
                <Section title="Key Highlights" icon="✨">
                    <div className="grid sm:grid-cols-2 gap-3">
                        {visa.highlights.map((h, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="flex items-center gap-3 p-3.5 rounded-xl bg-white"
                                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.04)' }}>
                                <span className="text-xl">{h.icon}</span>
                                <span className="text-sm font-medium"
                                    style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>
                                    {h.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Checklist download */}
                <motion.a
                    href="/checklists/schengen-visa-checklist.pdf"
                    download
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl mb-2"
                    style={{ background: '#F0FDFA', border: '1.5px solid #0D9488', textDecoration: 'none' }}
                >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 4px 12px rgba(13,148,136,0.3)' }}>
                        <FileText size={16} color="white" />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#0D9488' }}>Download Schengen Visa Checklist</p>
                        <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}>Complete document checklist — PDF, free download</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#0D9488', color: 'white', fontFamily: 'Inter, sans-serif' }}>PDF</span>
                </motion.a>

                {/* Requirements */}
                <Section title="Required Documents" icon="📋">
                    <div className="flex flex-col gap-3">
                        {visa.requirements.map((r, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white"
                                style={{ border: '1px solid #E2E8F0' }}>
                                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                    <CheckCircle size={14} color="#0D9488" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold"
                                        style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                        {r.item}
                                    </p>
                                    <p className="text-xs mt-0.5"
                                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                        {r.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Refusal Reasons */}
                <Section title="Common Refusal Reasons" icon="⚠️">
                    <div className="grid sm:grid-cols-2 gap-3">
                        {visa.refusalReasons.map((r, i) => (
                            <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white"
                                style={{ border: '1px solid #FEE2E2' }}>
                                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: '#FEF2F2' }}>
                                    <span className="text-xs text-red-400 font-bold">✕</span>
                                </div>
                                <span className="text-sm"
                                    style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>
                                    {r}
                                </span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Steps */}
                <Section title="Step-by-Step Process" icon="🗺️">
                    <div className="relative">
                        <div className="absolute left-5 top-5 bottom-5 w-px"
                            style={{ background: 'linear-gradient(to bottom, #0D9488, #E2E8F0)' }} />
                        <div className="flex flex-col gap-4">
                            {visa.steps.map((s, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-start gap-5 pl-1">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm z-10 text-white"
                                        style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 4px 16px rgba(13,148,136,0.25)', fontFamily: 'Poppins, sans-serif' }}>
                                        {s.step}
                                    </div>
                                    <div className="pt-2">
                                        <p className="font-semibold text-sm"
                                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                            {s.title}
                                        </p>
                                        <p className="text-xs mt-0.5"
                                            style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                            {s.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* FAQs */}
                <Section title="Frequently Asked Questions" icon="❓">
                    <div className="flex flex-col gap-3">
                        {visa.faqs.map((faq, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="rounded-xl overflow-hidden bg-white"
                                style={{ border: '1px solid #E2E8F0' }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-4 text-left"
                                    style={{ background: openFaq === i ? '#F0FDFA' : 'white' }}>
                                    <span className="text-sm font-medium pr-4"
                                        style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
                                        {faq.q}
                                    </span>
                                    {openFaq === i
                                        ? <ChevronUp size={16} color="#0D9488" />
                                        : <ChevronDown size={16} color="#94A3B8" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ overflow: 'hidden' }}>
                                    <p className="px-4 pb-4 pt-1 text-sm leading-relaxed"
                                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                        {faq.a}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* SIDEBAR */}
            <div className="flex flex-col gap-5">
                <SideCard title="Visa Fees 2025–2026" icon={<DollarSign size={16} color="#0D9488" />}>
                    {visa.fees.visaFee.map((f, i) => (
                        <div key={i} className="py-2.5"
                            style={{ borderBottom: i < visa.fees.visaFee.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                            <div className="flex justify-between items-start">
                                <span className="text-sm pr-2"
                                    style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                    {f.label}
                                </span>
                                <span className="text-sm font-bold flex-shrink-0"
                                    style={{ fontFamily: 'Poppins, sans-serif', color: f.amount === 'FREE' ? '#0D9488' : '#0F172A' }}>
                                    {f.amount}
                                </span>
                            </div>
                            {f.note && (
                                <p className="text-xs mt-0.5"
                                    style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                    {f.note}
                                </p>
                            )}
                        </div>
                    ))}
                    <div className="mt-3 p-3 rounded-xl"
                        style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                        <p className="text-xs font-medium"
                            style={{ color: '#B91C1C', fontFamily: 'Inter, sans-serif' }}>
                            {visa.fees.note}
                        </p>
                    </div>
                </SideCard>

                <div className="p-5 rounded-2xl text-white"
                    style={{ background: 'linear-gradient(135deg, #0D9488, #0891B2)' }}>
                    <div className="flex items-center gap-2 mb-3">
                        <Clock size={15} color="rgba(255,255,255,0.7)" />
                        <p className="text-xs uppercase tracking-widest"
                            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.7)' }}>
                            Processing Time
                        </p>
                    </div>
                    <p className="font-bold mb-1"
                        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem' }}>
                        {visa.processingTime}
                    </p>
                    <p className="text-xs"
                        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                        Apply at least 3 weeks before travel
                    </p>
                </div>

                <SideCard title="Why Choose Vistaar" icon={<FileText size={16} color="#0D9488" />}>
                    {visa.whyVistaar.map((w, i) => (
                        <div key={i} className="flex items-center gap-3 py-2.5"
                            style={{ borderBottom: i < visa.whyVistaar.length - 1 ? '1px solid #F8FAFC' : 'none' }}>
                            <CheckCircle size={14} color="#0D9488" className="flex-shrink-0" />
                            <span className="text-sm"
                                style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                                {w}
                            </span>
                        </div>
                    ))}
                </SideCard>

            </div>
        </div>
    )
}

export default function SchengenVisa() {
    const [activeTab, setActiveTab] = useState('tourist')
    const activeVisa = activeTab === 'tourist' ? schengenData.tourist : schengenData.business

    return (
        <>
        <Helmet>
            <title>Schengen Visa — 26 Countries, One Application | Vistaar Immigration</title>
            <meta name="description" content="Apply for a Schengen visa with expert guidance. Tourist and business visas for all 26 Schengen countries. Maximum approval chances with Vistaar Immigration." />
            <meta property="og:title" content="Schengen Visa Services — Vistaar Immigration" />
            <meta property="og:url" content="https://vistaarimmigration.com/schengen-visa" />
            <link rel="canonical" href="https://vistaarimmigration.com/schengen-visa" />
        </Helmet>
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* ── HERO ── */}
            <div className="relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1a1035 50%, #0F172A 100%)', minHeight: '400px' }}>

                {/* Subtle ambient glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #00339918 0%, transparent 70%)', transform: 'translate(25%, -25%)', filter: 'blur(80px)' }}
                />



                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16" style={{ paddingTop: '144px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                            style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>
                            <Globe size={13} /> Schengen Visa Services
                        </div>
                        <h1 className="font-bold mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                            Schengen Visa —{' '}
                            <span style={{ background: 'linear-gradient(90deg, #14B8A6, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                29 Countries
                            </span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)', maxWidth: '500px', lineHeight: 1.75, fontSize: '0.95rem' }}>
                            One application. One fee. Access to 29 European countries for tourism, business, or family visits. Expert guidance from certified consultants.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {[
                                { icon: Shield, label: '90 Days / 180 Days' },
                                { icon: Users, label: '5,000+ Visas Approved' },
                                { icon: Globe, label: '29 Schengen Countries' },
                            ].map((s, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                    <s.icon size={13} color="#14B8A6" />
                                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}>{s.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

                {/* ── VISA TYPE CARDS ── */}
                <div className="mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-5"
                        style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                        Select Visa Type
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
                        {[schengenData.tourist, schengenData.business].map((visa, i) => (
                            <motion.div key={visa.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4 }}
                                onClick={() => setActiveTab(visa.id)}
                                className="relative rounded-2xl p-5 cursor-pointer bg-white"
                                style={{
                                    border: activeTab === visa.id ? '2px solid #0D9488' : '1px solid #E2E8F0',
                                    boxShadow: activeTab === visa.id ? '0 8px 32px rgba(13,148,136,0.15)' : '0 2px 12px rgba(15,23,42,0.05)',
                                }}>
                                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                                    style={{ background: activeTab === visa.id ? 'linear-gradient(90deg, #0D9488, #14B8A6)' : '#F1F5F9' }} />
                                <div className="flex items-start justify-between mb-3 pt-1">
                                    <div>
                                        <span className="text-xs px-2.5 py-1 rounded-full font-semibold mb-2 inline-block"
                                            style={{ background: `${visa.tagColor}15`, color: visa.tagColor, border: `1px solid ${visa.tagColor}25`, fontFamily: 'Inter, sans-serif' }}>
                                            {visa.tag}
                                        </span>
                                        <h3 className="font-bold text-base"
                                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                            {visa.title}
                                        </h3>
                                        <p className="text-xs mt-1"
                                            style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                            {visa.visaType} · Max {visa.maxStay}
                                        </p>
                                    </div>
                                    {activeTab === visa.id
                                        ? <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                            style={{ background: '#F0FDFA', border: '1px solid #0D9488' }}>
                                            <CheckCircle size={14} color="#0D9488" />
                                        </div>
                                        : <span className="text-2xl">🇪🇺</span>
                                    }
                                </div>
                                <div className="flex items-center gap-3 py-2.5 mt-1"
                                    style={{ borderTop: '1px solid #F1F5F9' }}>
                                    <div className="flex items-center gap-1.5">
                                        <TrendingUp size={12} color="#0D9488" />
                                        <span className="text-xs font-semibold" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>{visa.successRate}</span>
                                        <span className="text-xs" style={{ color: '#94A3B8' }}>success</span>
                                    </div>
                                    <div className="w-px h-3" style={{ background: '#E2E8F0' }} />
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={12} color="#0D9488" />
                                        <span className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{visa.processingTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── 29 SCHENGEN COUNTRIES ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 rounded-3xl p-8 bg-white"
                    style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}>
                    <div className="flex items-center gap-3 mb-2">
                        <Globe size={20} color="#0D9488" />
                        <h2 className="font-bold text-xl"
                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                            29 Schengen Countries
                        </h2>
                    </div>
                    <p className="text-sm mb-7"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                        One visa grants access to all countries below — travel freely across Europe's borderless zone
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                        {schengenCountries.map((country, i) => (
                            <motion.div
                                key={country.code}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-default transition-all duration-200"
                                style={{
                                    background: '#F8FAFC',
                                    border: '1px solid #E2E8F0',
                                    boxShadow: '0 1px 4px rgba(15,23,42,0.04)'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#F0FDFA'
                                    e.currentTarget.style.borderColor = '#CCFBF1'
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(13,148,136,0.1)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = '#F8FAFC'
                                    e.currentTarget.style.borderColor = '#E2E8F0'
                                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(15,23,42,0.04)'
                                }}
                            >
                                <img
                                    src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                    srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                                    width="20"
                                    alt={country.name}
                                    style={{ borderRadius: '2px', flexShrink: 0 }}
                                />
                                <span className="text-sm font-medium"
                                    style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>
                                    {country.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Info strip */}
                    <div className="flex flex-wrap items-center gap-6 mt-7 pt-5"
                        style={{ borderTop: '1px solid #F1F5F9' }}>
                        {[
                            { label: 'Countries', value: '29' },
                            { label: 'Max Stay', value: '90 / 180 days' },
                            { label: 'Visa Fee', value: '€90 (Adults)' },
                            { label: 'Processing', value: '2–4 Weeks' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="font-bold text-sm"
                                    style={{ fontFamily: 'Poppins, sans-serif', color: '#0D9488' }}>
                                    {s.value}
                                </span>
                                <span className="text-xs"
                                    style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── DETAIL SECTION ── */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
                    <span className="text-xs uppercase tracking-widest px-3"
                        style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                        {activeVisa.title} — Full Details
                    </span>
                    <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}>
                        <VisaDetail visa={activeVisa} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        </>
    )
}