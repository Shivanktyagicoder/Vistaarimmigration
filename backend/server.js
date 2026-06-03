require('dotenv').config({ path: require('path').resolve(__dirname, '.env') })
const path          = require('path')
const express       = require('express')
const cors          = require('cors')
const helmet        = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const mongoose      = require('mongoose')
const contactRouter = require('./routes/contact')
const adminRouter   = require('./routes/admin')

const app  = express()
const PORT = process.env.PORT || 5000

// ── CORS first ────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://vistaarimmigration.com',
  'https://www.vistaarimmigration.com',
  'https://vistaarimmigration.onrender.com',
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) return callback(null, true)
    callback(new Error(`CORS blocked: ${origin}`))
  },
  methods: ['GET', 'POST', 'PATCH'],
  credentials: true,
}))

// ── Helmet ────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}))

// ── Static files (logo, favicon) ──────────────────────────
// Serves backend/public/ at the root so the email template can use:
//   https://vistaarimmigration.onrender.com/logo.png
app.use(express.static(path.join(__dirname, 'public')))

// ── Body parser ───────────────────────────────────────────
app.use(express.json({ limit: '16kb' }))
app.use(mongoSanitize())
app.set('trust proxy', 1)

// ── Health check ──────────────────────────────────────────
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Vistaar Immigration API is running',
    timestamp: new Date().toISOString(),
  })
})

// ── Routes ────────────────────────────────────────────────
app.use('/api/contact', contactRouter)
app.use('/api/admin', adminRouter)

// ── 404 ───────────────────────────────────────────────────
app.use((_req, res) =>
  res.status(404).json({ success: false, message: 'Route not found' })
)

// ── Error handler ─────────────────────────────────────────
app.use((err, req, res, next) => {
  if (err.message && err.message.startsWith('CORS blocked')) {
    return res.status(403).json({ success: false, message: err.message })
  }
  console.error(err.stack)
  res.status(500).json({ success: false, message: 'Internal server error' })
})

// ── Connect DB → Start server ─────────────────────────────
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
