import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ExternalLink, X, Calendar, RefreshCw, Clock,
  ArrowRight, ChevronRight, Rss, BookOpen,
} from 'lucide-react'
import { blogPosts } from '../../data/blog'

// ── Config ──────────────────────────────────────────────────────────────────
const GNEWS_API_KEY = '5e83ce3c61de032c6f2a08eae9480c91'
const CACHE_TTL     = 10 * 60 * 1000  // 10 minutes
const ARTICLES_PER_PAGE = 12

// Query for each country/topic tab
const NEWS_QUERIES = {
  all:     'visa immigration 2026',
  uk:      'UK visa immigration Home Office 2026',
  canada:  'Canada visa immigration IRCC 2026',
  usa:     'USA visa immigration USCIS 2026',
  australia: 'Australia visa immigration 2026',
  schengen: 'Schengen visa Europe EES 2026',
  work:    'work permit visa sponsorship 2026',
  study:   'international student visa study abroad 2026',
}

// Tab definitions
const TABS = [
  { id: 'all',       label: 'All News',   flag: '🌍' },
  { id: 'uk',        label: 'UK',         flag: '🇬🇧' },
  { id: 'canada',    label: 'Canada',     flag: '🇨🇦' },
  { id: 'usa',       label: 'USA',        flag: '🇺🇸' },
  { id: 'australia', label: 'Australia',  flag: '🇦🇺' },
  { id: 'schengen',  label: 'Schengen',   flag: '🇪🇺' },
  { id: 'work',      label: 'Work',       flag: '💼' },
  { id: 'study',     label: 'Study',      flag: '🎓' },
]

// Fallback articles shown until API responds (or if rate-limited)
const FALLBACK_ARTICLES = {
  all: [
    { title: 'UK Home Office raises Skilled Worker salary threshold to £41,700', source: { name: 'GOV.UK' }, publishedAt: '2025-07-01', url: 'https://www.gov.uk/skilled-worker-visa', description: 'The minimum salary for most Skilled Worker visa roles increased as part of the government\'s immigration reforms.', image: null },
    { title: 'Canada caps international student permits at 295,000 for 2026', source: { name: 'IRCC' }, publishedAt: '2025-11-01', url: 'https://www.canada.ca/immigration', description: 'Immigration, Refugees and Citizenship Canada announced new limits on study permit approvals.', image: null },
    { title: 'EES biometric border system goes live across Schengen borders', source: { name: 'Frontex' }, publishedAt: '2025-10-06', url: 'https://frontex.europa.eu', description: 'The Entry/Exit System collects biometric data from non-EU travellers at all Schengen borders.', image: null },
    { title: 'Australia skills in demand visa opens new pathways for tech workers', source: { name: 'Home Affairs' }, publishedAt: '2025-12-01', url: 'https://immi.homeaffairs.gov.au', description: 'Australia\'s Skills in Demand visa replaces the Temporary Skill Shortage visa for most applicants.', image: null },
    { title: 'USA H-1B lottery reforms taking effect in 2026 selection rounds', source: { name: 'USCIS' }, publishedAt: '2026-01-15', url: 'https://www.uscis.gov', description: 'Changes to the H-1B lottery system aim to reduce fraud and prioritise genuine skilled workers.', image: null },
    { title: 'ETIAS travel authorisation for Schengen delayed to 2026 — €7 fee', source: { name: 'ETIAS.com' }, publishedAt: '2026-02-14', url: 'https://etias.com', description: 'The European Travel Information and Authorisation System has been delayed again but is confirmed for late 2026.', image: null },
  ],
  uk: [
    { title: 'UK Home Office raises Skilled Worker salary threshold to £41,700', source: { name: 'GOV.UK' }, publishedAt: '2025-07-01', url: 'https://www.gov.uk/skilled-worker-visa', description: 'Minimum salary for most Skilled Worker visa roles increased under the new immigration reforms.', image: null },
    { title: 'UK Graduate Route remains open for international students through 2026', source: { name: 'UKCISA' }, publishedAt: '2025-10-01', url: 'https://www.gov.uk/graduate-visa', description: 'The Graduate visa allows international students to stay and work in the UK after graduation for up to 2–3 years.', image: null },
    { title: 'UK Global Talent visa expanded to cover more STEM disciplines', source: { name: 'GOV.UK' }, publishedAt: '2026-01-20', url: 'https://www.gov.uk/global-talent', description: 'More science and technology fields now qualify under the UK Global Talent visa endorsement criteria.', image: null },
    { title: 'Care worker overseas recruitment closed under new UK immigration rules', source: { name: 'BBC News' }, publishedAt: '2024-03-15', url: 'https://www.bbc.co.uk/news', description: 'Overseas care worker recruitment halted as the government tightens rules on international hiring in the sector.', image: null },
  ],
  canada: [
    { title: 'Canada caps international student permits at 295,000 for 2026', source: { name: 'IRCC' }, publishedAt: '2025-11-01', url: 'https://www.canada.ca/immigration', description: 'IRCC announced limits on study permit approvals as part of a two-year cap policy.', image: null },
    { title: 'PGWP-eligible program list frozen — check your DLI status', source: { name: 'Canada.ca' }, publishedAt: '2025-09-15', url: 'https://www.canada.ca/pgwp', description: 'Post-Graduation Work Permit eligibility is now tied to a specific list of approved programs and institutions.', image: null },
    { title: 'Canada Express Entry targets tech workers with new category-based draws', source: { name: 'IRCC' }, publishedAt: '2026-03-10', url: 'https://www.canada.ca', description: 'Category-based selection rounds in Express Entry give STEM professionals a higher chance of receiving an ITA.', image: null },
    { title: 'Living cost requirement for study permit rises to CAD $15,000+', source: { name: 'IRCC' }, publishedAt: '2025-06-01', url: 'https://www.canada.ca', description: 'New cost of living requirements mean study permit applicants must show more funds than before.', image: null },
  ],
  usa: [
    { title: 'USA H-1B lottery reforms taking effect in 2026 selection rounds', source: { name: 'USCIS' }, publishedAt: '2026-01-15', url: 'https://www.uscis.gov', description: 'Rule changes aim to reduce fraud by prioritising registrations tied to actual job offers.', image: null },
    { title: 'US F-1 visa interview waiver extended to first-time applicants in 2026', source: { name: 'State Dept' }, publishedAt: '2026-02-01', url: 'https://travel.state.gov', description: 'Eligible first-time F-1 applicants can now use the interview waiver program to streamline the process.', image: null },
    { title: 'STEM OPT extension unchanged at 24 months for eligible graduates', source: { name: 'USCIS' }, publishedAt: '2025-12-15', url: 'https://www.uscis.gov', description: 'STEM degree holders on OPT can continue to apply for the 24-month extension through 2026.', image: null },
  ],
  australia: [
    { title: 'Australia Skills in Demand visa opens new pathways for tech workers', source: { name: 'Home Affairs' }, publishedAt: '2025-12-01', url: 'https://immi.homeaffairs.gov.au', description: 'The SID visa replaces TSS for most applicants and offers faster processing for in-demand roles.', image: null },
    { title: 'Australian student visa processing time rises to 8–10 weeks in 2026', source: { name: 'Home Affairs' }, publishedAt: '2026-02-10', url: 'https://immi.homeaffairs.gov.au', description: 'Applicants should apply earlier than usual due to high volumes and extended processing.', image: null },
    { title: 'Australia expands Pacific Engagement Visa program in 2026', source: { name: 'DFAT' }, publishedAt: '2026-03-01', url: 'https://immi.homeaffairs.gov.au', description: 'The Pacific Engagement Visa offers a pathway to permanent residency for selected Pacific nationals.', image: null },
  ],
  schengen: [
    { title: 'EES biometric border system goes live across all Schengen borders', source: { name: 'Frontex' }, publishedAt: '2025-10-06', url: 'https://frontex.europa.eu', description: 'The Entry/Exit System records biometric data from non-EU nationals at every Schengen border crossing.', image: null },
    { title: 'ETIAS travel authorisation delayed to late 2026 — €7 fee confirmed', source: { name: 'ETIAS.com' }, publishedAt: '2026-02-14', url: 'https://etias.com', description: 'ETIAS is a mandatory pre-travel authorisation for visa-exempt nationals visiting the Schengen Area.', image: null },
    { title: 'Digital Schengen visa pilot launched for select nationalities', source: { name: 'Schengenvisainfo' }, publishedAt: '2026-03-01', url: 'https://schengenvisainfo.com', description: 'A digital visa application pilot is underway, removing the need to visit a consulate in person.', image: null },
  ],
  work: [
    { title: 'Work permit processing times surge in 2026 — apply well in advance', source: { name: 'Immigration News' }, publishedAt: '2026-04-15', url: 'https://immigrationnews.co.uk', description: 'Backlogs across major destinations mean work permit applicants face delays of 4–8 weeks or more.', image: null },
    { title: 'UK Global Talent visa expanded to cover more STEM disciplines', source: { name: 'GOV.UK' }, publishedAt: '2026-01-20', url: 'https://www.gov.uk', description: 'More endorsed roles now qualify under the Global Talent visa for exceptional talent.', image: null },
    { title: 'Canada Express Entry targets tech workers with category-based draws', source: { name: 'IRCC' }, publishedAt: '2026-03-10', url: 'https://www.canada.ca', description: 'Tech workers in eligible NOC codes can benefit from dedicated category-based CRS rounds.', image: null },
  ],
  study: [
    { title: 'International students face tighter documentation in 2026', source: { name: 'Study International' }, publishedAt: '2026-01-10', url: 'https://www.studyinternational.com', description: 'UK, Canada and Australia are all requiring additional proof of finances and intent.', image: null },
    { title: 'UK, Canada, Australia update student visa income thresholds for 2026', source: { name: 'PIE News' }, publishedAt: '2025-12-01', url: 'https://thepienews.com', description: 'Living cost requirements for student visa applicants have increased across all major destinations.', image: null },
    { title: 'Language test waivers being removed in major English-speaking destinations', source: { name: 'IDP Education' }, publishedAt: '2025-10-20', url: 'https://www.idp.com', description: 'Universities and visa authorities are scaling back IELTS/TOEFL waivers after post-pandemic flexibility.', image: null },
  ],
}

// Fallback images per tab (from Unsplash)
const TAB_IMAGES = {
  all:       'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=70',
  uk:        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70',
  canada:    'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=70',
  usa:       'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=70',
  australia: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=70',
  schengen:  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70',
  work:      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=70',
  study:     'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=70',
}

// ── In-memory cache (lives as long as the tab/session is open) ───────────────
const newsCache = {}

function getCached(tab) {
  const entry = newsCache[tab]
  if (!entry) return null
  if (Date.now() - entry.ts > CACHE_TTL) return null
  return entry.articles
}

function setCache(tab, articles) {
  newsCache[tab] = { articles, ts: Date.now() }
}

// ── Utility ──────────────────────────────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const m    = Math.floor(diff / 60000)
  const h    = Math.floor(diff / 3600000)
  const d    = Math.floor(diff / 86400000)
  if (m < 2)  return 'Just now'
  if (m < 60) return `${m}m ago`
  if (h < 24) return `${h}h ago`
  if (d < 7)  return `${d}d ago`
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatFull(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ── Slide-in article panel ───────────────────────────────────────────────────
function ArticlePanel({ article, onClose }) {
  const fallbackImg = TAB_IMAGES.all

  return (
    <AnimatePresence>
      {article && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(4px)' }}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
            style={{ width: 'min(520px, 100vw)', background: 'white', boxShadow: '-8px 0 48px rgba(15,23,42,0.12)', borderLeft: '1px solid #E2E8F0' }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
              style={{ background: 'white', borderBottom: '1px solid #F1F5F9', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
              <div className="flex items-center gap-2">
                <div className="relative flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-40" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                  {article.source?.name || 'Live News'}
                </span>
              </div>
              <button onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: '#F1F5F9' }}
                onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                onMouseLeave={e => e.currentTarget.style.background = '#F1F5F9'}>
                <X size={16} color="#64748B" />
              </button>
            </div>

            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={article.image || fallbackImg}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={e => { e.currentTarget.src = fallbackImg }}
              />
            </div>

            <div className="px-6 py-6 flex flex-col gap-5">
              {/* Meta */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: '#F0FDFA', border: '1px solid #CCFBF1', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                  {article.source?.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} color="#94A3B8" />
                  <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    {formatFull(article.publishedAt)}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: '#0F172A', lineHeight: 1.4, fontWeight: 700 }}>
                {article.title}
              </h2>

              {/* Description */}
              {article.description && (
                <p className="text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                  {article.description}
                </p>
              )}

              {/* Content excerpt */}
              {article.content && (
                <div className="p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>
                    {article.content.replace(/\[\+\d+ chars\]$/, '').trim()}
                  </p>
                  <p className="text-xs mt-2 italic" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Continue reading on the original source.
                  </p>
                </div>
              )}

              {/* CTA */}
              <a href={article.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white"
                style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)' }}>
                <ExternalLink size={15} />
                Read Full Article on {article.source?.name}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── News card ────────────────────────────────────────────────────────────────
function NewsCard({ article, tabId, onClick, index }) {
  const img = article.image || TAB_IMAGES[tabId] || TAB_IMAGES.all

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      <button
        onClick={() => onClick(article)}
        className="w-full text-left group bg-white rounded-2xl overflow-hidden flex flex-col h-full"
        style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.05)', transition: 'all 0.25s ease' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(15,23,42,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={img}
            alt={article.title}
            className="w-full h-full object-cover"
            style={{ transition: 'transform 0.4s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onError={e => { e.currentTarget.src = TAB_IMAGES.all }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 55%)' }} />
          <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
            {article.source?.name}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <h3
            className="font-bold text-sm leading-snug group-hover:text-teal-600 transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {article.title}
          </h3>

          {article.description && (
            <p className="text-xs leading-relaxed flex-1"
              style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {article.description}
            </p>
          )}

          <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #F1F5F9' }}>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              <Clock size={10} /> {timeAgo(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
              style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
              Read more <ChevronRight size={11} />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

// ── Main Blog component ──────────────────────────────────────────────────────
export default function Blog() {
  const [activeTab, setActiveTab]       = useState('all')
  const [articles, setArticles]         = useState([])
  const [loading, setLoading]           = useState(true)
  const [lastUpdated, setLastUpdated]   = useState(null)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [visibleGuides, setVisibleGuides]     = useState(4)
  const refreshTimer = useRef(null)

  // Fetch news for the given tab, with caching
  const fetchNews = useCallback(async (tab, forceRefresh = false) => {
    if (!forceRefresh) {
      const cached = getCached(tab)
      if (cached) {
        setArticles(cached)
        setLoading(false)
        return
      }
    }

    setLoading(true)

    try {
      const res  = await fetch(
        `https://gnews.io/api/v4/search?q=${encodeURIComponent(NEWS_QUERIES[tab])}&lang=en&max=${ARTICLES_PER_PAGE}&sortby=publishedAt&apikey=${GNEWS_API_KEY}`
      )
      const data = res.ok ? await res.json() : null
      const fetched = data?.articles?.length > 0 ? data.articles : null

      if (fetched) {
        setCache(tab, fetched)
        setArticles(fetched)
      } else {
        // API limit hit or error — use fallback
        const fallback = FALLBACK_ARTICLES[tab] || FALLBACK_ARTICLES.all
        setArticles(fallback)
      }
    } catch {
      const fallback = FALLBACK_ARTICLES[tab] || FALLBACK_ARTICLES.all
      setArticles(fallback)
    }

    setLoading(false)
    setLastUpdated(new Date())
  }, [])

  // Load news on tab change
  useEffect(() => {
    fetchNews(activeTab)

    // Auto-refresh every 10 minutes
    clearInterval(refreshTimer.current)
    refreshTimer.current = setInterval(() => fetchNews(activeTab, true), CACHE_TTL)
    return () => clearInterval(refreshTimer.current)
  }, [activeTab, fetchNews])

  return (
    <>
      <Helmet>
        <title>Immigration News &amp; Visa Updates | Vistaar Immigration</title>
        <meta name="description" content="Live immigration news and visa updates for UK, Canada, USA, Australia and Schengen. Stay informed on the latest policy changes, processing times and travel guidance." />
        <meta property="og:title" content="Immigration News — Vistaar Immigration" />
        <meta property="og:url" content="https://vistaarimmigration.com/blog" />
        <link rel="canonical" href="https://vistaarimmigration.com/blog" />
      </Helmet>

      <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '144px', paddingBottom: '60px' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)' }}>
                {/* Live pulse dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-50" />
                </div>
                <span className="text-xs font-medium" style={{ color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}>
                  Live Immigration News
                </span>
              </div>

              <h1 className="font-bold mb-3"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', letterSpacing: '-0.02em' }}>
                Latest Immigration{' '}
                <span style={{ background: 'linear-gradient(90deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  News &amp; Updates
                </span>
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: '520px' }}>
                Real-time visa and immigration updates across UK, Canada, USA, Australia and Schengen — refreshed every 10 minutes.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── TABS + REFRESH BAR ── */}
        <div style={{ background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 64, zIndex: 20 }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between gap-4 py-3">

              {/* Scrollable tabs */}
              <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setVisibleGuides(4) }}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      background: activeTab === tab.id ? '#F0FDFA' : 'transparent',
                      color:      activeTab === tab.id ? '#0D9488'  : '#64748B',
                      border:     activeTab === tab.id ? '1px solid #CCFBF1' : '1px solid transparent',
                    }}
                  >
                    <span>{tab.flag}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Refresh + last-updated */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {lastUpdated && (
                  <span className="text-xs hidden sm:block" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Updated {timeAgo(lastUpdated.toISOString())}
                  </span>
                )}
                <button
                  onClick={() => fetchNews(activeTab, true)}
                  disabled={loading}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                  style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #CCFBF1', fontFamily: 'Inter, sans-serif' }}
                >
                  <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── LIVE NEWS GRID ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-6">
            <Rss size={16} color="#0D9488" />
            <h2 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
              {TABS.find(t => t.id === activeTab)?.flag}{' '}
              {TABS.find(t => t.id === activeTab)?.label} Immigration News
            </h2>
            <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse" style={{ border: '1px solid #E2E8F0' }}>
                  <div className="h-44 bg-slate-100" />
                  <div className="p-4 flex flex-col gap-2">
                    <div className="h-4 rounded bg-slate-100 w-3/4" />
                    <div className="h-3 rounded bg-slate-100 w-full" />
                    <div className="h-3 rounded bg-slate-100 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles grid */}
          {!loading && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {articles.map((article, i) => (
                  <NewsCard
                    key={article.url || i}
                    article={article}
                    tabId={activeTab}
                    onClick={setSelectedArticle}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Empty state */}
          {!loading && articles.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl" style={{ border: '1px solid #E2E8F0' }}>
              <Rss size={36} color="#CBD5E1" className="mb-4" />
              <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>No news found</p>
              <p className="text-sm" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>Try refreshing or select a different category.</p>
              <button
                onClick={() => fetchNews(activeTab, true)}
                className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', fontFamily: 'Poppins, sans-serif' }}>
                Refresh News
              </button>
            </div>
          )}
        </div>

        {/* ── IMMIGRATION GUIDES (static blog posts) ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={16} color="#0D9488" />
            <h2 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
              Immigration Guides
            </h2>
            <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.slice(0, visibleGuides).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={`/blog/${post.slug}`} className="block group bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(15,23,42,0.04)', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,23,42,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                      style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #CCFBF1', fontFamily: 'Inter, sans-serif' }}>
                      {post.categoryLabel}
                    </span>
                    <h3 className="font-bold text-sm leading-snug group-hover:text-teal-600 transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed flex-1"
                      style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: '1px solid #F1F5F9' }}>
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                        <Clock size={10} /> {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                        style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visibleGuides < blogPosts.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setVisibleGuides(v => v + 4)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif', background: 'white', border: '1px solid #E2E8F0', color: '#0F172A', boxShadow: '0 2px 8px rgba(15,23,42,0.06)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0D9488'; e.currentTarget.style.color = '#0D9488' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#0F172A' }}>
                Load More Guides <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Slide-in article panel */}
      <ArticlePanel article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </>
  )
}
