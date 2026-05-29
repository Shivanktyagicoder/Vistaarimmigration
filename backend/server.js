require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

// ── HEALTH CHECK FIRST (before all middleware) ────────────
app.get('/health', (req, res) =>
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
)

// ── SECURITY HEADERS ──────────────────────────────────────
app.use(helmet())

// ── CORS ──────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'https://vistaarimmigration.com',
  'https://www.vistaarimmigration.com',
]
app.use(cors({
  origin: (origin, callback) => {
    if (!origin && process.env.NODE_ENV !== 'production') return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error(`CORS blocked: ${origin}`))
  },
  methods: ['GET', 'POST'],
  credentials: true,
}))

// ── BODY PARSER ───────────────────────────────────────────
app.use(express.json({ limit: '16kb' }))
app.use(mongoSanitize())
app.set('trust proxy', 1)

// ── ROUTES ────────────────────────────────────────────────
app.use('/api/contact', require('./routes/contact'))

// ── 404 ───────────────────────────────────────────────────
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Route not found' })
)

// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err.message && err.message.startsWith('CORS blocked')) {
    return res.status(403).json({ success: false, message: err.message })
  }
  console.error(err.stack)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ── CONNECT DB → START SERVER ─────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('✅  MongoDB connected')
    app.listen(PORT, () =>
      console.log(`🚀  Server running → http://localhost:${PORT}`)
    )
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message)
    process.exit(1)
  })