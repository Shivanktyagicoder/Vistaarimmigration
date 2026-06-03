const express   = require('express')
const jwt       = require('jsonwebtoken')
const crypto    = require('crypto')
const rateLimit = require('express-rate-limit')
const adminAuth = require('../middleware/adminAuth')
const Contact   = require('../models/Contact')

const router = express.Router()

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many login attempts. Try again in 15 minutes.' },
})

// ── POST /api/admin/login ─────────────────────────────────────────────────────
router.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body || {}

  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ success: false, message: 'Username and password required.' })
  }

  const envUser = process.env.ADMIN_USERNAME || ''
  const envPass = process.env.ADMIN_PASSWORD || ''

  if (!envUser || !envPass || !process.env.JWT_SECRET) {
    return res.status(500).json({ success: false, message: 'Server misconfiguration.' })
  }

  // Pad to equal length before timing-safe comparison to prevent length leaks
  const userBuf    = Buffer.from(username.padEnd(envUser.length))
  const envUserBuf = Buffer.from(envUser)
  const passBuf    = Buffer.from(password.padEnd(envPass.length))
  const envPassBuf = Buffer.from(envPass)

  const userMatch = userBuf.length === envUserBuf.length &&
    crypto.timingSafeEqual(userBuf, envUserBuf)
  const passMatch = passBuf.length === envPassBuf.length &&
    crypto.timingSafeEqual(passBuf, envPassBuf)

  if (!userMatch || !passMatch) {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' })
  }

  const token = jwt.sign({ username: envUser }, process.env.JWT_SECRET, { expiresIn: '8h' })
  return res.json({ success: true, token })
})

// ── GET /api/admin/leads ──────────────────────────────────────────────────────
router.get('/leads', adminAuth, async (req, res) => {
  try {
    const page   = Math.max(1, parseInt(req.query.page) || 1)
    const limit  = Math.min(100, parseInt(req.query.limit) || 50)
    const skip   = (page - 1) * limit
    const status = req.query.status
    const search = req.query.search

    const filter = {}
    if (status && ['new', 'contacted', 'in-progress', 'closed'].includes(status)) {
      filter.status = status
    }
    if (search) {
      const safe = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      filter.$or = [
        { fullName: { $regex: safe, $options: 'i' } },
        { email:    { $regex: safe, $options: 'i' } },
      ]
    }

    const [leads, total] = await Promise.all([
      Contact.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).select('-__v'),
      Contact.countDocuments(filter),
    ])

    res.json({
      success: true,
      data: leads,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (err) {
    console.error('[AdminLeads]', err.message)
    res.status(500).json({ success: false, message: 'Internal server error.' })
  }
})

// ── PATCH /api/admin/leads/:id/status ─────────────────────────────────────────
router.patch('/leads/:id/status', adminAuth, async (req, res) => {
  const VALID = ['new', 'contacted', 'in-progress', 'closed']
  const { status } = req.body || {}

  if (!VALID.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status value.' })
  }

  try {
    const lead = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, select: '-__v' }
    )
    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found.' })
    res.json({ success: true, data: lead })
  } catch (err) {
    console.error('[UpdateStatus]', err.message)
    res.status(500).json({ success: false, message: 'Internal server error.' })
  }
})

module.exports = router
