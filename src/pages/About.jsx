import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'framer-motion'
import {
  ShieldCheck, Award, Globe, Users, Clock, TrendingUp,
  Heart, Target, Eye, ArrowUpRight, CheckCircle
} from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Visas Approved', icon: Award, color: '#14B8A6' },
  { value: '98%', label: 'Success Rate', icon: TrendingUp, color: '#38BDF8' },
  { value: '15+', label: 'Countries Served', icon: Globe, color: '#A78BFA' },
  { value: '12+', label: 'Years Experience', icon: Clock, color: '#FB923C' },
]

const values = [
  {
    icon: ShieldCheck,
    color: '#14B8A6',
    title: 'Integrity',
    desc: 'We only take on cases we believe in and give honest assessments — even when it\'s not what clients want to hear.',
  },
  {
    icon: Heart,
    color: '#F472B6',
    title: 'Care',
    desc: 'Immigration is one of the most important decisions of a person\'s life. We treat every client\'s case with the attention it deserves.',
  },
  {
    icon: Target,
    color: '#38BDF8',
    title: 'Precision',
    desc: 'Every document, every form, every detail reviewed multiple times. We believe that accuracy is what separates success from refusal.',
  },
  {
    icon: Eye,
    color: '#A78BFA',
    title: 'Transparency',
    desc: 'No hidden fees. No false promises. We give you a clear picture of your chances, costs and timeline upfront.',
  },
]

const team = [
  {
    initials: 'VT',
    name: 'Vistaar Team',
    role: 'OISC Regulated Advisors',
    color: '#14B8A6',
    desc: 'Our advisors are fully regulated by the Office of the Immigration Services Commissioner and hold Level 3 OISC accreditation — the highest level for immigration advisors in the UK.',
  },
  {
    initials: 'CS',
    name: 'Case Specialists',
    role: 'Country Experts',
    color: '#38BDF8',
    desc: 'Each visa category is handled by specialists with deep knowledge of the specific rules, embassy preferences and success strategies for that route.',
  },
  {
    initials: 'DS',
    name: 'Document Team',
    role: 'Compliance & Review',
    color: '#A78BFA',
    desc: 'Our dedicated document review team checks every application against the latest Home Office and embassy requirements before submission.',
  },
]

const milestones = [
  { year: '2012', title: 'Founded in London', desc: 'Started as a small boutique immigration consultancy serving the UK-Pakistan corridor.' },
  { year: '2015', title: 'OISC Accreditation', desc: 'Achieved Level 3 OISC regulation — the highest accreditation for immigration advisors in the UK.' },
  { year: '2018', title: 'Expanded to Canada & EU', desc: 'Opened our Schengen and Canadian immigration practice, growing our expert team significantly.' },
  { year: '2021', title: '3,000 Visas Milestone', desc: 'Celebrated 3,000 successful visa applications across all categories and countries.' },
  { year: '2024', title: '5,000+ Visas Approved', desc: 'Reached 5,000+ successful approvals and launched our digital consultation platform.' },
]

function Section({ children, bg = '#F8FAFC', className = '' }) {
  return (
    <section style={{ background: bg }} className={`py-20 ${className}`}>
      {children}
    </section>
  )
}

export default function About() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const teamRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })
  const missionInView = useInView(missionRef, { once: true, margin: '-60px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' })
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' })
  const teamInView = useInView(teamRef, { once: true, margin: '-60px' })

  return (
    <>
      <Helmet>
        <title>About Us — Vistaar Immigration | OISC Regulated Consultancy</title>
        <meta name="description" content="Learn about Vistaar Immigration — OISC regulated immigration consultancy with 12+ years experience, 5,000+ visas approved and a 98% success rate across UK, Canada, USA and Schengen." />
        <meta property="og:title" content="About Vistaar Immigration" />
        <meta property="og:description" content="OISC regulated immigration consultancy trusted by thousands. 12+ years experience, 98% success rate." />
        <meta property="og:url" content="https://vistaarimmigration.com/about" />
        <link rel="canonical" href="https://vistaarimmigration.com/about" />
      </Helmet>

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          paddingTop: '144px',
          paddingBottom: '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(13,148,136,0.12)',
                border: '1px solid rgba(13,148,136,0.3)',
                color: '#5EEAD4',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              About Vistaar Immigration
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
              Trusted Immigration{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #38BDF8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Experts
              </span>
              <br />Since 2012
            </h1>

            <p
              className="max-w-2xl mx-auto text-[16px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)' }}
            >
              Vistaar Immigration is a London-based, OISC-regulated immigration consultancy helping
              individuals, families and professionals navigate the complex world of visas and immigration.
              Over 12 years, we have built a reputation for precision, honesty and results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section
        ref={statsRef}
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon size={20} color={s.color} />
                </div>
                <p
                  className="font-extrabold"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    color: s.color,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <Section bg="#F8FAFC">
        <div ref={missionRef} className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}
              >
                Our Story
              </div>
              <h2
                className="font-bold mb-5"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  color: '#0F172A',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.2,
                }}
              >
                Built on a Mission to Make Immigration{' '}
                <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Accessible
                </span>
              </h2>
              <p
                className="text-[15px] leading-relaxed mb-5"
                style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}
              >
                Vistaar Immigration was founded in 2012 with a simple but powerful belief: that every person deserves
                access to expert, honest immigration advice — regardless of their background or budget.
              </p>
              <p
                className="text-[15px] leading-relaxed mb-7"
                style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}
              >
                What started as a small consultancy serving the UK-Pakistan corridor has grown into a full-service
                immigration practice covering the UK, Canada, USA, Australia, Schengen and beyond.
                We are proud to be OISC Level 3 regulated — the highest level of accreditation for immigration
                advisors in the United Kingdom.
              </p>
              {[
                'OISC Level 3 Regulated Consultancy',
                'Certified immigration advisors in every category',
                'Transparent, fixed-fee pricing with no surprises',
                'WhatsApp and email support throughout your case',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <CheckCircle size={16} color="#14B8A6" className="flex-shrink-0 mt-0.5" />
                  <p className="text-[14px]" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, color: '#14B8A6', title: 'Our Mission', text: 'To make expert immigration support accessible to every individual seeking a better future abroad.' },
                { icon: Eye, color: '#38BDF8', title: 'Our Vision', text: 'To be the most trusted immigration consultancy in the UK — known for results, not just promises.' },
                { icon: Heart, color: '#A78BFA', title: 'Our Promise', text: 'Honest assessments, transparent pricing and dedicated support from consultation to approval.' },
                { icon: ShieldCheck, color: '#FB923C', title: 'Our Standard', text: 'Every case is handled with OISC-compliant precision. Your documents, your future — protected.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white"
                  style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                  >
                    <item.icon size={18} color={item.color} />
                  </div>
                  <p className="font-semibold text-slate-900 text-sm mb-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ── VALUES ── */}
      <Section bg="linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)">
        <div ref={valuesRef} className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
            >
              Our Values
            </div>
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
              }}
            >
              The Principles That{' '}
              <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Guide Us
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="p-6 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${v.color}15`, border: `1px solid ${v.color}28` }}
                >
                  <v.icon size={24} color={v.color} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-[15px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {v.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.42)' }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIMELINE ── */}
      <Section bg="#F8FAFC">
        <div ref={timelineRef} className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.2)', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}
            >
              Our Journey
            </div>
            <h2
              className="font-bold"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                color: '#0F172A',
                letterSpacing: '-0.025em',
              }}
            >
              12 Years of{' '}
              <span style={{ background: 'linear-gradient(90deg, #0D9488, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Excellence
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: 'linear-gradient(to bottom, transparent, #14B8A6, #38BDF8, transparent)' }}
            />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div className="text-right hidden lg:block">
                        <div
                          className="inline-block p-6 rounded-2xl bg-white ml-auto"
                          style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                        >
                          <span
                            className="text-4xl font-extrabold block mb-1"
                            style={{ fontFamily: 'Poppins, sans-serif', color: '#14B8A6', letterSpacing: '-0.04em' }}
                          >
                            {m.year}
                          </span>
                          <h3 className="font-bold text-slate-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.title}</h3>
                          <p className="text-sm text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
                        </div>
                      </div>
                      <div className="lg:hidden p-5 rounded-2xl bg-white mb-2" style={{ border: '1px solid #E2E8F0' }}>
                        <span className="text-2xl font-extrabold text-teal-500 block mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.year}</span>
                        <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.title}</h3>
                        <p className="text-xs text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
                      </div>
                      <div className="hidden lg:flex items-start justify-start">
                        <div className="w-5 h-5 rounded-full bg-teal-500 ring-4 ring-teal-100 -ml-2.5 mt-8 flex-shrink-0" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:flex items-start justify-end">
                        <div className="w-5 h-5 rounded-full bg-sky-400 ring-4 ring-sky-100 -mr-2.5 mt-8 flex-shrink-0" />
                      </div>
                      <div className="hidden lg:block">
                        <div
                          className="p-6 rounded-2xl bg-white"
                          style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                        >
                          <span
                            className="text-4xl font-extrabold block mb-1"
                            style={{ fontFamily: 'Poppins, sans-serif', color: '#38BDF8', letterSpacing: '-0.04em' }}
                          >
                            {m.year}
                          </span>
                          <h3 className="font-bold text-slate-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.title}</h3>
                          <p className="text-sm text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
                        </div>
                      </div>
                      <div className="lg:hidden p-5 rounded-2xl bg-white mb-2" style={{ border: '1px solid #E2E8F0' }}>
                        <span className="text-2xl font-extrabold text-sky-400 block mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.year}</span>
                        <h3 className="font-bold text-slate-900 mb-1 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.title}</h3>
                        <p className="text-xs text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── TEAM ── */}
      <Section bg="linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)">
        <div ref={teamRef} className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
            >
              Our Team
            </div>
            <h2
              className="font-bold text-white"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                letterSpacing: '-0.025em',
              }}
            >
              The People Behind{' '}
              <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Visa
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="p-7 rounded-2xl text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-bold text-xl"
                  style={{ background: `${member.color}20`, border: `1px solid ${member.color}35`, color: member.color, fontFamily: 'Poppins, sans-serif' }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{member.name}</h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ fontFamily: 'Inter, sans-serif', color: member.color }}
                >
                  {member.role}
                </p>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.42)' }}
                >
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section style={{ background: '#F8FAFC' }} className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-bold mb-5"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                color: '#0F172A',
                letterSpacing: '-0.025em',
              }}
            >
              Ready to Work With Us?
            </h2>
            <p
              className="mb-8 text-[15px] leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', color: '#64748B' }}
            >
              Book a free consultation and let our team assess your case, identify the best visa route and
              give you a clear, honest action plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                boxShadow: '0 8px 28px rgba(13,148,136,0.35)',
              }}
            >
              Book Free Consultation
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
