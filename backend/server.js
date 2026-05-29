require('dotenv').config({ path: require('path').resolve(__dirname, '.env') })
require('dns').setServers(['8.8.8.8', '8.8.4.4'])

const express       = require('express')
const cors          = require('cors')
const helmet        = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const mongoose      = require('mongoose')
const rateLimit     = require('express-rate-limit')

const contactRouter = require('./routes/contact')

const app    = express()
const PORT   = process.env.PORT || 5000
const isProd = process.env.NODE_ENV === 'production'

// ── PROCESS-LEVEL CRASH GUARDS ────────────────────────────────────────────────
process.on('uncaughtException', (err) => {
  console.error('[uncaughtException]', err.message)
  process.exit(1)
})
process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason)
  process.exit(1)
})

// ── SECURITY HEADERS ──────────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:     ["'none'"],
      scriptSrc:      ["'none'"],
      objectSrc:      ["'none'"],
      frameAncestors: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy:   { policy: 'same-origin' },
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  referrerPolicy:            { policy: 'no-referrer' },
  hsts: isProd ? { maxAge: 31536000, includeSubDomains: true, preload: true } : false,
  noSniff:       true,
  xssFilter:     true,
  hidePoweredBy: true,
}))
app.disable('x-powered-by')

// ── CORS ──────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'https://vistaarimmigration.com',
  'https://www.vistaarimmigration.com',
]

app.use(cors({
  origin: (origin, callback) => {
    if (!isProd && (!origin || /^http:\/\/localhost:\d+$/.test(origin))) {
      return callback(null, true)
    }
    if (origin && allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error(`CORS blocked: ${origin || 'no-origin'}`))
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'X-Api-Key'],
  credentials: true,
}))

// ── GLOBAL RATE LIMITER ───────────────────────────────────────────────────────
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please slow down.' },
}))

// ── BODY PARSER ───────────────────────────────────────────────────────────────
app.use(express.json({ limit: '16kb' }))

// ── NOSQL INJECTION SANITIZER ─────────────────────────────────────────────────
app.use(mongoSanitize({ replaceWith: '_' }))

// ── TRUST PROXY ───────────────────────────────────────────────────────────────
app.set('trust proxy', 1)

// ── ROUTES ────────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/api/contact', contactRouter)

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ success: false, message: 'Not found' }))

// ── GLOBAL ERROR HANDLER ──────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  if (err.message && err.message.startsWith('CORS blocked')) {
    return res.status(403).json({ success: false, message: 'Forbidden' })
  }
  console.error('[ERROR]', err.message)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ── CONNECT DB → START SERVER ─────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 })
  .then(() => {
    console.log('✅  MongoDB connected')
    const server = app.listen(PORT, () =>
      console.log(`🚀  Server running → http://localhost:${PORT}`)
    )
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`❌  Port ${PORT} is already in use. Stop the other process and restart.`)
        process.exit(1)
      } else {
        throw err
      }
    })
  })
  .catch((err) => {
    console.error('❌  MongoDB connection failed:', err.message)
    process.exit(1)
  })
