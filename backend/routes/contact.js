const express   = require('express')
const router    = express.Router()
const rateLimit = require('express-rate-limit')
const crypto    = require('crypto')
const { submitContact, getContacts } = require('../controllers/contactController')

// ── RATE LIMITER: 5 submissions per IP per hour ───────────────────────────────
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many submissions from this IP. Please try again after an hour.',
  },
})

// ── ADMIN KEY VERIFICATION (timing-safe comparison) ───────────────────────────
const verifyAdminKey = (req, res, next) => {
  const apiKey   = req.headers['x-api-key'] || ''
  const secureKey = process.env.ADMIN_API_KEY || ''

  if (!secureKey || secureKey === 'your_secure_admin_api_key_here') {
    return res.status(500).json({ success: false, message: 'Server misconfiguration.' })
  }

  // Timing-safe comparison prevents timing attacks
  const keyBuf    = Buffer.from(apiKey.padEnd(secureKey.length))
  const secureBuf = Buffer.from(secureKey)

  if (
    keyBuf.length !== secureBuf.length ||
    !crypto.timingSafeEqual(keyBuf, secureBuf)
  ) {
    return res.status(401).json({ success: false, message: 'Unauthorized.' })
  }

  next()
}

// POST /api/contact
router.post('/', contactLimiter, submitContact)

// GET /api/contact — admin only
router.get('/', verifyAdminKey, getContacts)

module.exports = router
