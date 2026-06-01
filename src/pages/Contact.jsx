import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Mail, Phone, Globe, MapPin, MessageSquare,
  ArrowRight, Loader2, CheckCircle, ChevronDown,
  AlertCircle, Clock, Shield, Award, Headphones,
} from 'lucide-react'

import { Helmet } from 'react-helmet-async'

const API_URL = import.meta.env.VITE_API_URL || 'https://vistaarimmigration.onrender.com'

// ── VALIDATION ───────────────────────────────────────────────────────────────
const schema = z.object({
  fullName: z.string().min(3, 'Please enter your full name'),
  email:    z.string().email('Please enter a valid email'),
  phone:    z.string().min(7, 'Enter a valid phone number').max(15, 'Too long'),
  service:  z.string().min(1, 'Please select a service'),
  country:  z.string().min(1, 'Please select a country'),
  message:  z.string().min(1, 'Please enter your message').max(2000, 'Max 2000 characters'),
})

// ── STATIC DATA ──────────────────────────────────────────────────────────────
const services = [
  'Student Visa', 'Work Permit', 'PR / Immigration',
  'Business Visa', 'Schengen Visa', 'Visitor Visa', 'Dependent Visa',
]

const countries = [
  'Canada 🇨🇦', 'United Kingdom 🇬🇧', 'Australia 🇦🇺',
  'United States 🇺🇸', 'Germany 🇩🇪', 'New Zealand 🇳🇿',
]

const countryCodes = [
  { code: '+44',    label: '🇬🇧 +44' },
  { code: '+1',     label: '🇨🇦 +1'  },
  { code: '+91',    label: '🇮🇳 +91' },
  { code: '+61',    label: '🇦🇺 +61' },
  { code: '+1-US',  label: '🇺🇸 +1'  },
  { code: '+64',    label: '🇳🇿 +64' },
  { code: '+49',    label: '🇩🇪 +49' },
]

const trustPoints = [
  { icon: Award,      title: '98% Success Rate',     desc: 'Across all visa categories' },
  { icon: Clock,      title: 'Response in 2 Hours',  desc: 'Mon – Sat, 9 AM – 6 PM GMT' },
  { icon: Shield,     title: 'Fully Certified',      desc: 'OISC regulated consultants' },
  { icon: Headphones, title: 'End-to-End Support',   desc: 'From application to approval' },
]

// ── FIELD COMPONENTS ─────────────────────────────────────────────────────────
function Field({ icon: Icon, register, name, placeholder, type = 'text', error }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <motion.div
        animate={{ borderColor: error ? 'rgba(239,68,68,0.6)' : focused ? 'rgba(20,184,166,0.55)' : 'rgba(255,255,255,0.1)' }}
        transition={{ duration: 0.18 }}
        className="flex items-center h-[52px] rounded-xl px-4 gap-3"
        style={{ background: focused ? 'rgba(20,184,166,0.05)' : 'rgba(255,255,255,0.04)', border: '1px solid' }}
      >
        <Icon size={16} color={error ? '#EF4444' : focused ? '#14B8A6' : 'rgba(255,255,255,0.3)'} />
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/25"
          style={{ fontFamily: 'Inter, sans-serif' }}
        />
      </motion.div>
      {error && <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>}
    </div>
  )
}

function SelectField({ icon: Icon, register, name, options, placeholder, error }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <motion.div
        animate={{ borderColor: error ? 'rgba(239,68,68,0.6)' : focused ? 'rgba(20,184,166,0.55)' : 'rgba(255,255,255,0.1)' }}
        transition={{ duration: 0.18 }}
        className="flex items-center h-[52px] rounded-xl px-4 gap-3"
        style={{ background: focused ? 'rgba(20,184,166,0.05)' : 'rgba(255,255,255,0.04)', border: '1px solid' }}
      >
        <Icon size={16} color={error ? '#EF4444' : focused ? '#14B8A6' : 'rgba(255,255,255,0.3)'} />
        <select
          {...register(name)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent outline-none text-sm text-white appearance-none cursor-pointer"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <option value="" style={{ background: '#0D1B2E' }}>{placeholder}</option>
          {options.map(o => (
            <option key={o} value={o} style={{ background: '#0D1B2E' }}>{o}</option>
          ))}
        </select>
        <ChevronDown size={14} color="rgba(255,255,255,0.25)" />
      </motion.div>
      {error && <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>}
    </div>
  )
}

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function Contact() {
  const [loading,     setLoading]     = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [phoneCode,   setPhoneCode]   = useState('+44')

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    setSubmitError(null)

    // Abort controller gives us a clean 15-second timeout.
    // If Render is still waking up the user sees a clear message and WhatsApp fallback.
    const controller = new AbortController()
    const timeoutId  = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        signal:  controller.signal,
        body: JSON.stringify({
          ...data,
          countryCode: phoneCode.replace('-US', ''),
        }),
      })
      clearTimeout(timeoutId)

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Server error. Please try again.')
      }

      setSubmitted(true)
      reset()
    } catch (err) {
      clearTimeout(timeoutId)

      if (err.name === 'AbortError') {
        setSubmitError('The server took too long to respond. Please try again in a moment, or reach us directly on WhatsApp.')
      } else if (err.message === 'Failed to fetch') {
        setSubmitError('Cannot reach server. Please try again or contact us on WhatsApp.')
      } else {
        setSubmitError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Helmet>
      <title>Book a Free Consultation — Vistaar Immigration</title>
      <meta name="description" content="Book a free immigration consultation with Vistaar Immigration. Certified specialists respond within 2 hours. Study, work, visitor and PR visas for UK, Canada, USA and more." />
      <meta property="og:title" content="Contact Vistaar Immigration — Free Consultation" />
      <meta property="og:url" content="https://vistaarimmigration.com/contact" />
      <link rel="canonical" href="https://vistaarimmigration.com/contact" />
    </Helmet>
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ background: 'linear-gradient(135deg, #060E1A 0%, #0A1628 50%, #060E1A 100%)' }}
    >
      {/* Ambient glows — hidden on mobile to prevent GPU lag */}
      <div className="hidden md:block fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: '#14B8A6', filter: 'blur(100px)', transform: 'translateY(-30%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: '#38BDF8', filter: 'blur(80px)', transform: 'translateY(30%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 pt-24 md:pt-32">

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.25)', color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}
          >
            Free Consultation
          </div>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Start Your{' '}
            <span style={{ background: 'linear-gradient(90deg, #14B8A6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Visa Journey
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
            Fill in the form and our certified immigration specialists will review your profile
            and contact you within 2 hours.
          </p>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">

          {/* ── LEFT PANEL ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4 min-w-0"
          >
            {/* Trust points */}
            {trustPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.2)' }}
                >
                  <pt.icon size={18} color="#14B8A6" />
                </div>
                <div>
                  <p className="font-semibold text-white text-[14px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {pt.title}
                  </p>
                  <p className="text-[12.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp card */}
            <motion.a
              href="https://wa.me/447344896264"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-5 rounded-2xl cursor-pointer"
              style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.2)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37,211,102,0.15)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[14px]" style={{ color: '#25D366', fontFamily: 'Poppins, sans-serif' }}>
                  Chat on WhatsApp
                </p>
                <p className="text-[12px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                  +44 7344 896 264 — instant reply
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* ── RIGHT: FORM CARD ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-6 sm:p-8 md:p-10 w-full min-w-0"
            style={{
              background: 'rgba(13,27,46,0.85)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
            }}
          >
            {/* Top gradient line */}
            <div className="h-px mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)' }} />

            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── SUCCESS STATE ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.3)' }}
                  >
                    <CheckCircle size={38} color="#14B8A6" />
                  </motion.div>
                  <h2 className="text-white font-bold text-2xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Application Submitted!
                  </h2>
                  <p className="max-w-sm text-[14px] leading-relaxed mb-8"
                    style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}>
                    Our immigration team has received your details and will get back to you within 2 business hours
                    via email or WhatsApp.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold"
                    style={{ background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)', color: '#14B8A6', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Submit Another
                  </motion.button>
                </motion.div>
              ) : (
                /* ── FORM ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field icon={User} register={register} name="fullName" placeholder="Full Name" error={errors.fullName?.message} />
                    <Field icon={Mail} register={register} name="email" type="email" placeholder="Email Address" error={errors.email?.message} />
                  </div>

                  {/* Phone with country code */}
                  <div className="min-w-0">
                    <div
                      className="flex rounded-xl overflow-hidden h-[52px] w-full"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                    >
                      <select
                        value={phoneCode}
                        onChange={e => setPhoneCode(e.target.value)}
                        className="bg-transparent text-sm text-white outline-none cursor-pointer px-3 flex-shrink-0"
                        style={{ borderRight: '1px solid rgba(255,255,255,0.1)', fontFamily: 'Inter, sans-serif', minWidth: '90px' }}
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code} style={{ background: '#0D1B2E' }}>{c.label}</option>
                        ))}
                      </select>
                      <div className="flex items-center gap-3 px-4 flex-1">
                        <Phone size={16} color="rgba(255,255,255,0.3)" />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          {...register('phone')}
                          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/25"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.phone.message}</p>}
                  </div>

                  {/* Service + Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField icon={Globe} register={register} name="service" placeholder="Select Service" options={services} error={errors.service?.message} />
                    <SelectField icon={MapPin} register={register} name="country" placeholder="Preferred Country" options={countries} error={errors.country?.message} />
                  </div>

                  {/* Message */}
                  <div>
                    <div
                      className="rounded-xl p-4"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                    >
                      <div className="flex gap-3">
                        <MessageSquare size={16} color="rgba(255,255,255,0.3)" className="mt-0.5 flex-shrink-0" />
                        <textarea
                          rows={4}
                          placeholder="Tell us about your immigration goals..."
                          {...register('message')}
                          className="flex-1 bg-transparent outline-none resize-none text-sm text-white placeholder:text-white/25"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                    {errors.message && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message.message}</p>}
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="flex items-start gap-3 p-4 rounded-xl"
                        style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}
                      >
                        <AlertCircle size={15} color="#EF4444" className="flex-shrink-0 mt-0.5" />
                        <p className="text-[13px] leading-relaxed" style={{ color: '#FCA5A5', fontFamily: 'Inter, sans-serif' }}>
                          {submitError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.99 }}
                    className="relative w-full h-[52px] rounded-xl flex items-center justify-center gap-3 text-white font-semibold overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '15px',
                      background: 'linear-gradient(135deg, #0D9488, #14B8A6)',
                      boxShadow: loading ? 'none' : '0 8px 28px rgba(13,148,136,0.35)',
                    }}
                  >
                    {!loading && (
                      <motion.div
                        animate={{ x: ['-110%', '110%'] }}
                        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5 }}
                        className="absolute inset-0 hidden sm:block"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                      />
                    )}
                    {loading ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                    ) : (
                      <>
                        Submit Application Review
                        <ArrowRight size={17} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[11.5px]" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}>
                    We never share your information. By submitting you agree to be contacted by our team.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}
