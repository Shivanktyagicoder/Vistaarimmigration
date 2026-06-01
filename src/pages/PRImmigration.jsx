/**
 * PR / Immigration Page
 *
 * Dedicated page for permanent residency and settlement visa services.
 * Previously linked to /contact — now a full service page matching site design.
 *
 * Sections:
 *  1. Hero
 *  2. Overview strip (3 key facts)
 *  3. Pathways (UK ILR, Canada Express Entry, Australia SkillSelect)
 *  4. Eligibility requirements
 *  5. Our process (4 steps)
 *  6. Why choose Vistaar
 *  7. CTA
 */
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  CheckCircle, ArrowRight, Clock, Shield, Award,
  FileText, Users, Star, Globe, ChevronRight,
  MessageCircle, Phone,
} from 'lucide-react'

// ── Reusable fade-in animation config ────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

// ── Pathway data ──────────────────────────────────────────────────────────────
const pathways = [
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    title: 'Indefinite Leave to Remain (ILR)',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.06)',
    border: 'rgba(20,184,166,0.2)',
    routes: [
      { label: 'Skilled Worker Route', desc: 'After 5 years on a sponsored work visa' },
      { label: 'Family / Spouse Route', desc: 'After 5 years as a partner or spouse' },
      { label: 'Long Residence', desc: 'After 10 continuous years in the UK' },
      { label: 'British Citizenship', desc: 'After 12 months of ILR' },
    ],
    cta: 'UK ILR from £3,500+ (govt fee)',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    title: 'Permanent Residency (PR)',
    color: '#38BDF8',
    bg: 'rgba(56,189,248,0.06)',
    border: 'rgba(56,189,248,0.2)',
    routes: [
      { label: 'Express Entry (CRS)', desc: 'Points-based federal skilled worker' },
      { label: 'Provincial Nominee (PNP)', desc: 'Province-specific nomination streams' },
      { label: 'Family Sponsorship', desc: 'Sponsor a spouse, parent or dependent' },
      { label: 'Start-Up Visa', desc: 'For innovative business founders' },
    ],
    cta: 'Processing: 6–12 months',
  },
  {
    flag: '🇦🇺',
    country: 'Australia',
    title: 'Skilled Migration (PR)',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.2)',
    routes: [
      { label: 'Skilled Independent (189)', desc: 'Points-tested, no sponsorship needed' },
      { label: 'Skilled Nominated (190)', desc: 'State/territory nomination pathway' },
      { label: 'Employer Sponsored (186)', desc: 'Sponsored by Australian employer' },
      { label: 'Partner Visa (820/801)', desc: 'For partners of Australian citizens/PR' },
    ],
    cta: 'Points test: 65+ required',
  },
]

// ── Process steps ─────────────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Free Assessment',
    desc: 'We evaluate your eligibility — qualifications, work history, language scores — across all available PR pathways and recommend the strongest route.',
    icon: FileText,
    color: '#14B8A6',
  },
  {
    number: '02',
    title: 'Strategy & Documents',
    desc: 'Your dedicated case manager builds a tailored roadmap, creates a document checklist and guides you through gathering and certifying all evidence.',
    icon: Shield,
    color: '#38BDF8',
  },
  {
    number: '03',
    title: 'Application Submission',
    desc: 'We prepare, review and submit your application — forms, supporting documents, cover letters and sponsor details — to maximise first-attempt approval.',
    icon: Globe,
    color: '#A78BFA',
  },
  {
    number: '04',
    title: 'Approval & Beyond',
    desc: 'We track your case, liaise with the Home Office or IRCC on your behalf, and continue supporting you through Citizenship when the time comes.',
    icon: Award,
    color: '#34D399',
  },
]

// ── Why choose Vistaar ────────────────────────────────────────────────────────
const reasons = [
  { icon: Shield,   title: 'OISC Regulated',          desc: 'Authorised and regulated — no unlicensed advice, ever.' },
  { icon: Star,     title: '98% Success Rate',         desc: 'Across all visa and settlement categories we handle.' },
  { icon: Clock,    title: '2-Hour Response',          desc: 'Mon–Sat 9 AM–6 PM GMT. Always a real person.' },
  { icon: Users,    title: 'Dedicated Case Manager',   desc: 'One expert owns your case from start to settlement.' },
  { icon: FileText, title: 'End-to-End Handling',      desc: 'Documents, submissions, follow-ups — we do it all.' },
  { icon: Award,    title: 'Transparent Pricing',      desc: 'Fixed fees agreed upfront. No hidden charges.' },
]

// ── Eligibility checklist ─────────────────────────────────────────────────────
const ukChecklist = [
  'Valid leave to remain in the UK',
  'Minimum qualifying residence period met',
  'No significant absences (max 180 days/year)',
  'English language requirement (B1 or above)',
  'Life in the UK Test passed',
  'No criminal record or immigration violations',
]

const canadaChecklist = [
  'Eligible NOC occupation (TEER 0/1/2/3)',
  'CLB 7+ for most Express Entry streams',
  'At least 1 year of skilled work experience',
  'Valid Educational Credential Assessment (ECA)',
  'Proof of settlement funds',
  'Police clearance certificates',
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function PRImmigration() {
  const stepsRef  = useRef(null)
  const stepsView = useInView(stepsRef, { once: true, margin: '-80px' })

  return (
    <>
      <Helmet>
        <title>PR / Immigration — Permanent Residency | Vistaar Immigration</title>
        <meta
          name="description"
          content="Expert permanent residency and immigration guidance for UK (ILR), Canada (Express Entry) and Australia. OISC regulated — 98% success rate."
        />
        <meta property="og:title" content="PR & Immigration Services — Vistaar Immigration" />
        <meta property="og:url" content="https://vistaarimmigration.com/pr-immigration" />
        <link rel="canonical" href="https://vistaarimmigration.com/pr-immigration" />
      </Helmet>

      {/* ══ 1. HERO ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'linear-gradient(135deg, #060E1A 0%, #0A1628 60%, #060E1A 100%)',
          paddingTop: '120px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glows (desktop only to avoid mobile GPU lag) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              top: '-10%', left: '30%',
              width: '500px', height: '500px',
              background: '#14B8A6', opacity: 0.055,
              filter: 'blur(90px)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: '-10%', right: '20%',
              width: '400px', height: '400px',
              background: '#38BDF8', opacity: 0.04,
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp(0)}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.25)',
                color: '#5EEAD4',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Settlement & PR
            </div>

            <h1
              className="font-bold text-white mb-5"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              Your Path to{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Permanent Residency
              </span>
            </h1>

            <p
              className="max-w-2xl mx-auto text-[1.05rem] leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}
            >
              We guide you from first enquiry to settlement — UK Indefinite Leave to Remain,
              Canada Express Entry, Australian Skilled Migration and beyond.
              OISC regulated.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                  boxShadow: '0 8px 32px rgba(13,148,136,0.4)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(13,148,136,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(13,148,136,0.4)' }}
              >
                Book Free PR Assessment
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/447344896264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.25)',
                  color: '#4ADE80',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)' }}
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. STATS STRIP ════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(90deg, #0D9488, #0891B2)' }} className="py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '5,000+', label: 'PR Cases Handled' },
              { value: '98%',    label: 'Approval Rate' },
              { value: '3',      label: 'Countries Covered' },
              { value: '12+',    label: 'Years Experience' },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <p
                  className="font-bold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
                >
                  {stat.value}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', opacity: 0.85 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. PATHWAYS ═══════════════════════════════════════════════════════ */}
      <section style={{ background: '#F8FAFC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.div {...fadeUp()} className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}
            >
              PR Pathways
            </div>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Choose Your{' '}
              <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Settlement Route
              </span>
            </h2>
            <p
              className="max-w-xl mx-auto text-[15px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
            >
              Every PR journey is different. We identify the fastest, strongest route for your profile
              across all three countries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {pathways.map((pw, i) => (
              <motion.div
                key={pw.country}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-7 bg-white flex flex-col"
                style={{ border: `1px solid ${pw.border}`, boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>{pw.flag}</span>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '2px' }}>
                      {pw.country}
                    </p>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '15px', color: '#0F172A', letterSpacing: '-0.01em' }}>
                      {pw.title}
                    </h3>
                  </div>
                </div>

                {/* Routes */}
                <ul className="flex flex-col gap-3 mb-6 flex-1">
                  {pw.routes.map((route, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <ChevronRight size={14} color={pw.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <div>
                        <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '13px', color: '#1E293B' }}>
                          {route.label}
                        </span>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#64748B', display: 'block', marginTop: '1px' }}>
                          {route.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Footer badge */}
                <div
                  className="text-center py-2.5 rounded-xl text-xs font-semibold"
                  style={{ background: pw.bg, color: pw.color, fontFamily: 'Inter, sans-serif', letterSpacing: '0.5px' }}
                >
                  {pw.cta}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. ELIGIBILITY ════════════════════════════════════════════════════ */}
      <section
        style={{ background: 'linear-gradient(135deg, #060E1A 0%, #0A1628 100%)' }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.div {...fadeUp()} className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
            >
              Am I Eligible?
            </div>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Key Eligibility{' '}
              <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Criteria
              </span>
            </h2>
            <p
              className="max-w-xl mx-auto text-[15px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}
            >
              Requirements vary by country and visa route. These are the core criteria for the
              two most popular destinations. Not sure? Book a free assessment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* UK checklist */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(20,184,166,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontSize: '1.6rem' }}>🇬🇧</span>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>United Kingdom</p>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'white' }}>ILR Requirements</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {ukChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} color="#14B8A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Canada checklist */}
            <motion.div
              {...fadeUp(0.2)}
              className="rounded-2xl p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(56,189,248,0.2)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontSize: '1.6rem' }}>🇨🇦</span>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Canada</p>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '17px', color: 'white' }}>Express Entry Requirements</h3>
                </div>
              </div>
              <ul className="flex flex-col gap-3">
                {canadaChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.3)} className="text-center mt-10">
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
              Don't tick every box? That's okay — exceptions exist and alternative routes may apply.
              Contact us to discuss your specific situation.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ══ 5. PROCESS ════════════════════════════════════════════════════════ */}
      <section ref={stepsRef} style={{ background: '#F8FAFC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.div {...fadeUp()} className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}
            >
              How It Works
            </div>
            <h2
              className="font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Our{' '}
              <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                PR Process
              </span>
            </h2>
            <p
              className="max-w-lg mx-auto text-[15px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
            >
              From your first call to receiving your settlement letter — we handle every step.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl p-7"
                style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                {/* Connector line (desktop only, between cards) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-6 h-px z-10"
                    style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)', transform: 'translateX(-50%)' }}
                  />
                )}

                {/* Step number */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-sm font-bold"
                  style={{ background: `${step.color}15`, color: step.color, fontFamily: 'Poppins, sans-serif', border: `1px solid ${step.color}25` }}
                >
                  {step.number}
                </div>

                <step.icon size={20} color={step.color} style={{ marginBottom: '12px' }} />

                <h3
                  className="font-bold mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: '#0F172A', letterSpacing: '-0.01em' }}
                >
                  {step.title}
                </h3>
                <p
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#64748B', lineHeight: 1.65 }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. WHY VISTAAR ════════════════════════════════════════════════════ */}
      <section
        style={{ background: 'linear-gradient(135deg, #060E1A 0%, #0A1628 100%)' }}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <motion.div {...fadeUp()} className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
            >
              Why Us
            </div>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              Why Choose{' '}
              <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Vistaar
              </span>{' '}for PR?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp(i * 0.07)}
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.2)' }}
                >
                  <r.icon size={18} color="#14B8A6" />
                </div>
                <div>
                  <p
                    className="font-semibold text-white mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}
                  >
                    {r.title}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#F8FAFC' }} className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div {...fadeUp()}>
            <div
              className="rounded-3xl p-12 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #060E1A, #0A1628)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.18) 0%, transparent 65%)' }}
              />

              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
                  style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
                >
                  Limited Slots Available
                </div>

                <h2
                  className="font-bold text-white mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
                >
                  Ready to Begin Your Settlement Journey?
                </h2>

                <p
                  className="mb-8 text-[15px] leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}
                >
                  Book a free, no-obligation PR assessment. Our OISC-regulated advisors will evaluate
                  your profile and identify the fastest route to permanent residency.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 8px 28px rgba(13,148,136,0.4)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 36px rgba(13,148,136,0.55)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(13,148,136,0.4)' }}
                  >
                    Book Free Consultation
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href="https://wa.me/447344896264"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#4ADE80' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.1)' }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>

                  <a
                    href="tel:+447344896264"
                    className="flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
                    style={{ fontFamily: 'Poppins, sans-serif', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.8)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                  >
                    <Phone size={16} />
                    Call Us
                  </a>
                </div>

                <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>
                  OISC regulated · No obligation · Response within 2 hours Mon–Sat
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
