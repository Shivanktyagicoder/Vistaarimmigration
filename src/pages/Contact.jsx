/**
 * Contact page — professional clean design.
 *
 * Light background, white form card, labeled inputs, corporate feel.
 * No dark/gaming aesthetic — designed to match an immigration law firm.
 */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Mail, Phone, Globe, MapPin, MessageSquare,
  ArrowRight, Loader2, CheckCircle, ChevronDown,
  AlertCircle, Clock, Shield, Award, Headphones,
  MessageCircle,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const API_URL = import.meta.env.VITE_API_URL || 'https://vistaarimmigration.onrender.com'

// ── Validation schema ────────────────────────────────────────────────────────
const schema = z.object({
  fullName: z.string().min(3, 'Please enter your full name'),
  email:    z.string().email('Please enter a valid email address'),
  phone:    z.string().min(7, 'Enter a valid phone number').max(15, 'Too long'),
  service:  z.string().min(1, 'Please select a service'),
  country:  z.string().min(1, 'Please select a destination country'),
  message:  z.string().min(10, 'Please tell us a bit more (min 10 characters)').max(2000, 'Max 2000 characters'),
})

// ── Static data ──────────────────────────────────────────────────────────────
const services = [
  'Student Visa', 'Work Permit', 'PR / Immigration',
  'Business Visa', 'Schengen Visa', 'Visitor Visa', 'Dependent Visa',
]

const countries = [
  'Canada 🇨🇦', 'United Kingdom 🇬🇧', 'Australia 🇦🇺',
  'United States 🇺🇸', 'Germany 🇩🇪', 'New Zealand 🇳🇿',
]

const countryCodes = [
  { code: '+44',   label: '🇬🇧 +44' },
  { code: '+1',    label: '🇨🇦 +1'  },
  { code: '+91',   label: '🇮🇳 +91' },
  { code: '+61',   label: '🇦🇺 +61' },
  { code: '+1-US', label: '🇺🇸 +1'  },
  { code: '+64',   label: '🇳🇿 +64' },
  { code: '+49',   label: '🇩🇪 +49' },
]

const trustPoints = [
  {
    icon: Award,
    title: 'Expert Consultants',
    desc: 'OISC-registered advisors for every visa category',
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#CCFBF1',
  },
  {
    icon: Clock,
    title: 'Response Within 2 Hours',
    desc: 'Mon – Sat, 9 AM – 6 PM GMT',
    color: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
  },
  {
    icon: Shield,
    title: 'OISC Regulated',
    desc: 'Authorised, certified immigration advisors',
    color: '#7C3AED',
    bg: '#FAF5FF',
    border: '#E9D5FF',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    desc: 'From documents to visa approval',
    color: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
]

// ── Input label component ────────────────────────────────────────────────────
function Label({ children, required }) {
  return (
    <label
      style={{
        display: 'block',
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: 600,
        color: '#374151',
        marginBottom: '6px',
      }}
    >
      {children}
      {required && <span style={{ color: '#EF4444', marginLeft: '3px' }}>*</span>}
    </label>
  )
}

// ── Text / email input ───────────────────────────────────────────────────────
function Field({ label, icon: Icon, register, name, placeholder, type = 'text', error }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      {label && <Label required>{label}</Label>}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '48px',
          borderRadius: '10px',
          padding: '0 14px',
          gap: '10px',
          background: '#FFFFFF',
          border: `1.5px solid ${error ? '#FCA5A5' : focused ? '#14B8A6' : '#E5E7EB'}`,
          transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          boxShadow: focused ? '0 0 0 3px rgba(20,184,166,0.1)' : 'none',
        }}
      >
        {Icon && <Icon size={15} color={error ? '#EF4444' : focused ? '#0D9488' : '#9CA3AF'} style={{ flexShrink: 0 }} />}
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            background: 'transparent',
            outline: 'none',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#111827',
          }}
        />
      </div>
      {error && (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

// ── Select / dropdown ────────────────────────────────────────────────────────
function SelectField({ label, icon: Icon, register, name, options, placeholder, error }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      {label && <Label required>{label}</Label>}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '48px',
          borderRadius: '10px',
          padding: '0 14px',
          gap: '10px',
          background: '#FFFFFF',
          border: `1.5px solid ${error ? '#FCA5A5' : focused ? '#14B8A6' : '#E5E7EB'}`,
          transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
          boxShadow: focused ? '0 0 0 3px rgba(20,184,166,0.1)' : 'none',
          position: 'relative',
        }}
      >
        {Icon && <Icon size={15} color={error ? '#EF4444' : focused ? '#0D9488' : '#9CA3AF'} style={{ flexShrink: 0 }} />}
        <select
          {...register(name)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            background: 'transparent',
            outline: 'none',
            border: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#111827',
            appearance: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="" style={{ color: '#9CA3AF' }}>{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown size={14} color="#9CA3AF" style={{ flexShrink: 0 }} />
      </div>
      {error && (
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [loading,     setLoading]     = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [phoneCode,   setPhoneCode]   = useState('+44')
  const [msgFocused,  setMsgFocused]  = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    setLoading(true)
    setSubmitError(null)

    // 15-second timeout — gives Render free tier time to wake up
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
        setSubmitError('The server took too long to respond. Please try again, or reach us on WhatsApp.')
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

      <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

        {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #0D9488 100%)',
            paddingTop: '100px',
            paddingBottom: '60px',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  marginBottom: '18px',
                }}
              >
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
                  Free Consultation
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  marginBottom: '14px',
                }}
              >
                Start Your Visa Journey Today
              </h1>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: '520px',
                  margin: '0 auto',
                  lineHeight: 1.7,
                }}
              >
                Fill in the form below and our certified immigration specialists will
                review your profile and respond within 2 hours.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
          <div>

            {/* ── LEFT: Info panel — hidden, contact info moved below form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'none' }}
            >
              {/* Why choose us */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '16px',
                  boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '20px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Why Choose Vistaar?
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {trustPoints.map((pt, i) => (
                    <motion.div
                      key={pt.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: pt.bg,
                          border: `1px solid ${pt.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <pt.icon size={17} color={pt.color} />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13.5px',
                            fontWeight: 600,
                            color: '#111827',
                            marginBottom: '2px',
                          }}
                        >
                          {pt.title}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '12.5px',
                            color: '#6B7280',
                            lineHeight: 1.5,
                          }}
                        >
                          {pt.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact details card */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  marginBottom: '16px',
                  boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '14px',
                  }}
                >
                  Direct Contact
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="tel:+447344896264"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                  >
                    <Phone size={15} color="#0D9488" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#374151', fontWeight: 500 }}>
                      +44 7344 896 264
                    </span>
                  </a>
                  <a
                    href="mailto:info@vistaarimmigration.com"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                  >
                    <Mail size={15} color="#0D9488" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#374151', fontWeight: 500 }}>
                      info@vistaarimmigration.com
                    </span>
                  </a>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={15} color="#0D9488" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#374151', fontWeight: 500 }}>
                      London, United Kingdom
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/447344896264"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: '#F0FDF4',
                  border: '1.5px solid #86EFAC',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#DCFCE7',
                    border: '1px solid #BBF7D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={20} color="#16A34A" />
                </div>
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13.5px', fontWeight: 700, color: '#15803D', marginBottom: '2px' }}>
                    Chat on WhatsApp
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#4B7A55' }}>
                    +44 7344 896 264 — instant reply
                  </p>
                </div>
              </motion.a>
            </motion.div>

            {/* ── RIGHT: Form card ─────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '20px',
                padding: '36px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}
            >
              {/* Top teal accent bar */}
              <div
                style={{
                  height: '4px',
                  borderRadius: '4px',
                  background: 'linear-gradient(90deg, #0D9488, #14B8A6)',
                  marginBottom: '28px',
                }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── SUCCESS STATE ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ padding: '40px 0', textAlign: 'center' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: '#F0FDFA',
                        border: '2px solid #99F6E4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                      }}
                    >
                      <CheckCircle size={34} color="#0D9488" />
                    </motion.div>

                    <h2
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '22px',
                        fontWeight: 800,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        marginBottom: '10px',
                      }}
                    >
                      Enquiry Submitted Successfully
                    </h2>

                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: '#6B7280',
                        lineHeight: 1.7,
                        maxWidth: '400px',
                        margin: '0 auto 12px',
                      }}
                    >
                      Our immigration team has received your details. You will receive a
                      confirmation email shortly, and a specialist will contact you within
                      2 business hours.
                    </p>

                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: '#9CA3AF',
                        marginBottom: '28px',
                      }}
                    >
                      Check your inbox (and spam folder) for your confirmation email.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#0D9488',
                        background: '#F0FDFA',
                        border: '1.5px solid #99F6E4',
                        borderRadius: '10px',
                        padding: '10px 22px',
                        cursor: 'pointer',
                      }}
                    >
                      Submit Another Enquiry
                    </button>
                  </motion.div>

                ) : (
                  /* ── FORM ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h2
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0F172A',
                        letterSpacing: '-0.02em',
                        marginBottom: '6px',
                      }}
                    >
                      Book Your Free Consultation
                    </h2>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13.5px',
                        color: '#6B7280',
                        marginBottom: '28px',
                        lineHeight: 1.6,
                      }}
                    >
                      Complete the form below and we'll get back to you within 2 hours.
                    </p>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#F3F4F6', marginBottom: '24px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                      {/* Row 1: Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field
                          label="Full Name"
                          icon={User}
                          register={register}
                          name="fullName"
                          placeholder="e.g. John Smith"
                          error={errors.fullName?.message}
                        />
                        <Field
                          label="Email Address"
                          icon={Mail}
                          register={register}
                          name="email"
                          type="email"
                          placeholder="e.g. john@email.com"
                          error={errors.email?.message}
                        />
                      </div>

                      {/* Row 2: Phone with code */}
                      <div>
                        <Label required>Phone Number</Label>
                        <div
                          style={{
                            display: 'flex',
                            borderRadius: '10px',
                            border: `1.5px solid ${errors.phone ? '#FCA5A5' : '#E5E7EB'}`,
                            background: '#FFFFFF',
                            overflow: 'hidden',
                            height: '48px',
                          }}
                        >
                          <select
                            value={phoneCode}
                            onChange={e => setPhoneCode(e.target.value)}
                            style={{
                              background: '#F9FAFB',
                              border: 'none',
                              borderRight: '1px solid #E5E7EB',
                              outline: 'none',
                              padding: '0 12px',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '13px',
                              color: '#374151',
                              cursor: 'pointer',
                              flexShrink: 0,
                              minWidth: '92px',
                            }}
                          >
                            {countryCodes.map(c => (
                              <option key={c.code} value={c.code}>{c.label}</option>
                            ))}
                          </select>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', flex: 1 }}>
                            <Phone size={15} color="#9CA3AF" style={{ flexShrink: 0 }} />
                            <input
                              type="tel"
                              placeholder="Phone number"
                              {...register('phone')}
                              style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                color: '#111827',
                              }}
                            />
                          </div>
                        </div>
                        {errors.phone && (
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <AlertCircle size={11} /> {errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Row 3: Service + Country */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <SelectField
                          label="Visa / Service Required"
                          icon={Globe}
                          register={register}
                          name="service"
                          placeholder="Select a service"
                          options={services}
                          error={errors.service?.message}
                        />
                        <SelectField
                          label="Destination Country"
                          icon={MapPin}
                          register={register}
                          name="country"
                          placeholder="Select country"
                          options={countries}
                          error={errors.country?.message}
                        />
                      </div>

                      {/* Row 4: Message */}
                      <div>
                        <Label required>Your Message</Label>
                        <div
                          style={{
                            borderRadius: '10px',
                            border: `1.5px solid ${errors.message ? '#FCA5A5' : msgFocused ? '#14B8A6' : '#E5E7EB'}`,
                            background: '#FFFFFF',
                            padding: '12px 14px',
                            transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                            boxShadow: msgFocused ? '0 0 0 3px rgba(20,184,166,0.1)' : 'none',
                          }}
                        >
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <MessageSquare size={15} color={msgFocused ? '#0D9488' : '#9CA3AF'} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <textarea
                              rows={4}
                              placeholder="Tell us about your immigration goals, current visa status, and any questions you have..."
                              {...register('message')}
                              onFocus={() => setMsgFocused(true)}
                              onBlur={() => setMsgFocused(false)}
                              style={{
                                flex: 1,
                                background: 'transparent',
                                outline: 'none',
                                border: 'none',
                                resize: 'none',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '14px',
                                color: '#111827',
                                lineHeight: 1.6,
                              }}
                            />
                          </div>
                        </div>
                        {errors.message && (
                          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <AlertCircle size={11} /> {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Error banner */}
                      <AnimatePresence>
                        {submitError && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '14px 16px',
                              borderRadius: '10px',
                              background: '#FEF2F2',
                              border: '1px solid #FECACA',
                            }}
                          >
                            <AlertCircle size={15} color="#EF4444" style={{ flexShrink: 0, marginTop: '1px' }} />
                            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#B91C1C', lineHeight: 1.6 }}>
                              {submitError}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.01 }}
                        whileTap={{ scale: loading ? 1 : 0.99 }}
                        style={{
                          width: '100%',
                          height: '52px',
                          borderRadius: '12px',
                          border: 'none',
                          background: loading ? '#94A3B8' : 'linear-gradient(135deg, #0D9488, #14B8A6)',
                          color: '#FFFFFF',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '15px',
                          fontWeight: 700,
                          cursor: loading ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          boxShadow: loading ? 'none' : '0 4px 16px rgba(13,148,136,0.3)',
                          transition: 'box-shadow 0.2s ease',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {loading ? (
                          <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                        ) : (
                          <>Submit Enquiry <ArrowRight size={17} /></>
                        )}
                      </motion.button>

                      {/* Footer note */}
                      <p
                        style={{
                          textAlign: 'center',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '12px',
                          color: '#9CA3AF',
                          lineHeight: 1.6,
                        }}
                      >
                        🔒 Your information is kept strictly confidential and never shared with third parties.
                        By submitting, you agree to be contacted by our immigration team.
                      </p>

                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── CONTACT STRIP below form ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <a href="tel:+447344896264"
                style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', background: 'white', border: '1px solid #E5E7EB', textDecoration: 'none', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                <Phone size={16} color="#0D9488" />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '1px' }}>Call Us</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0D9488', fontWeight: 600 }}>+44 7344 896 264</p>
                </div>
              </a>
              <a href="mailto:info@vistaarimmigration.com"
                style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', background: 'white', border: '1px solid #E5E7EB', textDecoration: 'none', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                <Mail size={16} color="#0D9488" />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 700, color: '#0F172A', marginBottom: '1px' }}>Email</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0D9488', fontWeight: 600 }}>info@vistaarimmigration.com</p>
                </div>
              </a>
              <a href="https://wa.me/447344896264" target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderRadius: '12px', background: '#F0FDF4', border: '1.5px solid #86EFAC', textDecoration: 'none', boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
                <MessageCircle size={16} color="#16A34A" />
                <div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 700, color: '#15803D', marginBottom: '1px' }}>WhatsApp</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#16A34A', fontWeight: 600 }}>Instant Reply</p>
                </div>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  )
}
