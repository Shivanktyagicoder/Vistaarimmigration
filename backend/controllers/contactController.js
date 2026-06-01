const Contact = require('../models/Contact')
const { sendEnquiryNotification, sendConfirmationEmail } = require('../utils/mailer')

// Whitelist of allowed values — blocks arbitrary data being written to the DB
const ALLOWED_SERVICES = new Set([
  'Student Visa', 'Work Permit', 'PR / Immigration',
  'Business Visa', 'Schengen Visa', 'Visitor Visa', 'Dependent Visa',
])

const ALLOWED_COUNTRIES = new Set([
  'Canada 🇨🇦', 'United Kingdom 🇬🇧', 'Australia 🇦🇺',
  'United States 🇺🇸', 'Germany 🇩🇪', 'New Zealand 🇳🇿',
])

const ALLOWED_COUNTRY_CODES = new Set([
  '+44', '+1', '+91', '+61', '+64', '+49',
])

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ── POST /api/contact ─────────────────────────────────────────────────────────
const submitContact = async (req, res) => {
  try {
    const { fullName, email, countryCode, phone, service, country, message } = req.body

    // Required field check
    if (!fullName || !email || !phone || !service || !country || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' })
    }

    // Type safety
    if (
      typeof fullName !== 'string' || typeof email   !== 'string' ||
      typeof phone    !== 'string' || typeof service !== 'string' ||
      typeof country  !== 'string' || typeof message !== 'string'
    ) {
      return res.status(400).json({ success: false, message: 'Invalid field types.' })
    }

    // Length caps
    if (fullName.trim().length > 100)  return res.status(400).json({ success: false, message: 'Name too long.' })
    if (email.trim().length    > 200)  return res.status(400).json({ success: false, message: 'Email too long.' })
    if (phone.trim().length    > 20)   return res.status(400).json({ success: false, message: 'Phone too long.' })
    if (message.trim().length  < 1)    return res.status(400).json({ success: false, message: 'Message is required.' })
    if (message.trim().length  > 2000) return res.status(400).json({ success: false, message: 'Message too long.' })

    // Email format
    if (!EMAIL_RE.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Invalid email address.' })
    }

    // Whitelist: service and country must be one of the known options
    if (!ALLOWED_SERVICES.has(service)) {
      return res.status(400).json({ success: false, message: 'Invalid service selected.' })
    }
    if (!ALLOWED_COUNTRIES.has(country)) {
      return res.status(400).json({ success: false, message: 'Invalid country selected.' })
    }

    // Whitelist: country code must be a known code (if provided)
    const cleanCode = (countryCode || '').trim()
    if (cleanCode && !ALLOWED_COUNTRY_CODES.has(cleanCode)) {
      return res.status(400).json({ success: false, message: 'Invalid country code.' })
    }

    const ipAddress = req.ip || 'Unknown'

    const contact = new Contact({
      fullName:    fullName.trim(),
      email:       email.trim().toLowerCase(),
      countryCode: cleanCode,
      phone:       phone.trim(),
      service,
      country,
      message:     message.trim(),
      ipAddress,
    })
    await contact.save()

    // 1. Notify the Vistaar team
    sendEnquiryNotification({ fullName, email, countryCode: cleanCode, phone, service, country, message, ipAddress })
      .catch(err => console.error('[Mailer/Notify]', err.message))

    // 2. Send a confirmation auto-reply to the applicant
    sendConfirmationEmail({ fullName, email, service, country })
      .catch(err => console.error('[Mailer/Confirm]', err.message))

    return res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you within 2 hours.',
    })

  } catch (err) {
    console.error('[Contact]', err.message)
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or WhatsApp us directly.',
    })
  }
}

// ── GET /api/contact (admin only) ─────────────────────────────────────────────
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .select('-__v')
    res.json({ success: true, count: contacts.length, data: contacts })
  } catch (err) {
    // Never expose raw error message to client
    console.error('[GetContacts]', err.message)
    res.status(500).json({ success: false, message: 'Internal server error.' })
  }
}

module.exports = { submitContact, getContacts }
