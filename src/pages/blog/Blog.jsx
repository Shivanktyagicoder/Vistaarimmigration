import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, ExternalLink, X, Calendar } from 'lucide-react'
import { blogPosts } from '../../data/blog'

const GNEWS_API_KEY = '5e83ce3c61de032c6f2a08eae9480c91'

// ── Category filters ─────────────────────────────────────────────────────────
const FILTERS = [
  { id: 'all',      label: 'All'      },
  { id: 'uk',       label: 'UK'       },
  { id: 'canada',   label: 'Canada'   },
  { id: 'schengen', label: 'Schengen' },
  { id: 'work-visa',  label: 'Work'   },
  { id: 'study-visa', label: 'Study'  },
]

// ── Static fallback news (shown if API is unavailable) ───────────────────────
const FALLBACK_NEWS = [
  {
    title: 'UK Skilled Worker salary threshold raised to £41,700',
    source: 'GOV.UK',
    date: '2025-07-01',
    url: 'https://www.gov.uk/skilled-worker-visa',
  },
  {
    title: 'Canada caps international study permits at 295,000 for 2026',
    source: 'IRCC',
    date: '2025-11-01',
    url: 'https://www.canada.ca/immigration',
  },
  {
    title: 'EES biometric border system now live at all Schengen crossings',
    source: 'Frontex',
    date: '2025-10-06',
    url: 'https://frontex.europa.eu',
  },
  {
    title: 'ETIAS travel authorisation confirmed for late 2026 — €7 fee',
    source: 'ETIAS.com',
    date: '2026-02-14',
    url: 'https://etias.com',
  },
  {
    title: 'Australia Skills in Demand visa replaces TSS for most applicants',
    source: 'Home Affairs',
    date: '2025-12-01',
    url: 'https://immi.homeaffairs.gov.au',
  },
  {
    title: 'USA H-1B lottery reforms taking effect in 2026 selection rounds',
    source: 'USCIS',
    date: '2026-01-15',
    url: 'https://www.uscis.gov',
  },
]

function timeAgo(dateStr) {
  const d = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000)
  if (d < 1)  return 'Today'
  if (d < 7)  return `${d}d ago`
  if (d < 30) return `${Math.floor(d / 7)}w ago`
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ── Slide-in article panel ───────────────────────────────────────────────────
function ArticlePanel({ article, onClose }) {
  if (!article) return null
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
        style={{ width: 'min(480px, 100vw)', background: 'white', boxShadow: '-8px 0 40px rgba(15,23,42,0.12)', borderLeft: '1px solid #E2E8F0' }}
      >
        <div className="sticky top-0 flex items-center justify-between px-6 py-4"
          style={{ background: 'white', borderBottom: '1px solid #F1F5F9' }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
            {article.source?.name || article.source || 'News'}
          </span>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: '#F1F5F9' }}>
            <X size={16} color="#64748B" />
          </button>
        </div>

        <div className="px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={13} color="#94A3B8" />
            <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              {new Date(article.publishedAt || article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.4 }}>
            {article.title}
          </h2>

          {article.description && (
            <p className="text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
              {article.description}
            </p>
          )}

          <a href={article.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white mt-2"
            style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
            <ExternalLink size={14} />
            Read on {article.source?.name || article.source}
          </a>
        </div>
      </motion.div>
    </>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [news, setNews]                 = useState(FALLBACK_NEWS)
  const [selectedArticle, setSelectedArticle] = useState(null)

  // Try to fetch live news once on mount — falls back to static list silently
  useEffect(() => {
    const query = activeFilter === 'all'
      ? 'visa immigration 2026'
      : `${activeFilter.replace('-', ' ')} visa immigration 2026`

    fetch(`https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=6&sortby=publishedAt&apikey=${GNEWS_API_KEY}`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.articles?.length > 0) setNews(data.articles)
      })
      .catch(() => {})
  }, [activeFilter])

  // Filter static blog posts by category
  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeFilter)

  return (
    <>
      <Helmet>
        <title>Immigration Blog &amp; Visa Guides | Vistaar Immigration</title>
        <meta name="description" content="Practical immigration guides, visa tips and the latest updates for UK, Canada, USA, Australia and Schengen countries — from the Vistaar Immigration team." />
        <link rel="canonical" href="https://vistaarimmigration.com/blog" />
      </Helmet>

      <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

        {/* ── Header ── */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '120px', paddingBottom: '56px' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)' }}>
                <span className="text-xs font-medium" style={{ color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}>
                  Visa Guides &amp; News
                </span>
              </div>
              <h1 className="font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'white', letterSpacing: '-0.02em' }}>
                Immigration Guides
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: '460px' }}>
                Practical advice and the latest visa updates from the Vistaar team.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10">

          {/* ── Category filter ── */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: activeFilter === f.id ? '#0D9488' : 'white',
                  color:      activeFilter === f.id ? 'white'    : '#475569',
                  border:     `1px solid ${activeFilter === f.id ? '#0D9488' : '#E2E8F0'}`,
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* ── Blog post cards ── */}
          {filteredPosts.length > 0 ? (
            <>
              <h2 className="text-base font-bold mb-5" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                Our Guides
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {filteredPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex flex-col h-full bg-white rounded-2xl p-5"
                      style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 6px rgba(15,23,42,0.04)', transition: 'all 0.2s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(15,23,42,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(15,23,42,0.04)'; e.currentTarget.style.transform = 'none' }}
                    >
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-3"
                        style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #CCFBF1', fontFamily: 'Inter, sans-serif' }}>
                        {post.categoryLabel}
                      </span>
                      <h3 className="font-bold text-sm leading-snug mb-2 flex-1 group-hover:text-teal-600 transition-colors"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                        {post.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-4"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                        <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                          <Clock size={10} /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                          style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 mb-12">
              <p className="text-sm" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                No guides yet for this category — check back soon.
              </p>
              <button onClick={() => setActiveFilter('all')} className="mt-3 text-sm font-medium" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                View all guides
              </button>
            </div>
          )}

          {/* ── Latest News (simple list) ── */}
          <div>
            <h2 className="text-base font-bold mb-5" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
              Latest Immigration News
            </h2>
            <div className="flex flex-col gap-3">
              {news.map((item, i) => {
                const title   = item.title
                const source  = item.source?.name || item.source
                const date    = item.publishedAt  || item.date
                const url     = item.url

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      onClick={() => setSelectedArticle({ title, source: { name: source }, publishedAt: date, url, description: item.description })}
                      className="w-full text-left flex items-start gap-4 p-4 bg-white rounded-xl group"
                      style={{ border: '1px solid #E2E8F0', transition: 'all 0.2s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#99F6E4'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(13,148,136,0.08)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none' }}
                    >
                      {/* Dot */}
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#14B8A6' }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-snug group-hover:text-teal-700 transition-colors"
                          style={{ fontFamily: 'Inter, sans-serif', color: '#0F172A' }}>
                          {title}
                        </p>
                        <p className="text-xs mt-1" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                          {source} · {timeAgo(date)}
                        </p>
                      </div>
                      <ExternalLink size={13} color="#CBD5E1" className="flex-shrink-0 mt-1 group-hover:text-teal-500 transition-colors" />
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-12 p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>
              Have a visa question?
            </h3>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
              Book a free consultation — our team responds within 2 hours.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
              Book Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide-in article panel */}
      {selectedArticle && (
        <ArticlePanel article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </>
  )
}
