import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight, ExternalLink, X, Calendar, RefreshCw, Newspaper } from 'lucide-react'
import { blogPosts } from '../../data/blog'

const GNEWS_API_KEY = '5e83ce3c61de032c6f2a08eae9480c91'
const CACHE_TTL     = 10 * 60 * 1000

// ── Country tabs ─────────────────────────────────────────────────────────────
const TABS = [
  { id: 'all',       label: 'All',       flag: '🌍', query: 'visa immigration 2025 2026' },
  { id: 'uk',        label: 'UK',        flag: '🇬🇧', query: 'UK visa immigration Home Office 2025 2026' },
  { id: 'canada',    label: 'Canada',    flag: '🇨🇦', query: 'Canada immigration IRCC visa 2025 2026' },
  { id: 'usa',       label: 'USA',       flag: '🇺🇸', query: 'USA visa USCIS immigration 2025 2026' },
  { id: 'australia', label: 'Australia', flag: '🇦🇺', query: 'Australia immigration visa 2025 2026' },
  { id: 'schengen',  label: 'Schengen',  flag: '🇪🇺', query: 'Schengen visa Europe EES 2025 2026' },
]

// ── Banner images per country (Unsplash) ─────────────────────────────────────
const BANNERS = {
  all:       'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=70',
  uk:        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70',
  canada:    'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=70',
  usa:       'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=70',
  australia: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=70',
  schengen:  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=70',
  'study-visa': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=70',
  tips:      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=70',
  'work-visa': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=70',
}

// ── 6 fallback news per country ───────────────────────────────────────────────
const FALLBACK = {
  all: [
    { title: 'UK raises Skilled Worker salary threshold to £41,700 for 2025', source: 'GOV.UK', publishedAt: '2025-07-01', url: 'https://www.gov.uk/skilled-worker-visa', description: 'The minimum salary for most Skilled Worker visa roles has increased as part of the UK\'s immigration reforms.', image: null },
    { title: 'Canada caps international study permits at 295,000 for 2026', source: 'IRCC', publishedAt: '2025-11-01', url: 'https://www.canada.ca/immigration', description: 'IRCC announced limits on study permit approvals as part of a two-year cap policy.', image: null },
    { title: 'EES biometric border system now active at Schengen crossings', source: 'Frontex', publishedAt: '2025-10-06', url: 'https://frontex.europa.eu', description: 'The Entry/Exit System now collects biometric data from all non-EU travellers.', image: null },
    { title: 'Australia Skills in Demand visa launched for in-demand workers', source: 'Home Affairs', publishedAt: '2025-12-01', url: 'https://immi.homeaffairs.gov.au', description: 'Australia\'s new Skills in Demand visa replaces the TSS visa for most applicants.', image: null },
    { title: 'USA H-1B lottery reforms take effect for 2026 selection', source: 'USCIS', publishedAt: '2026-01-15', url: 'https://www.uscis.gov', description: 'New H-1B rule changes aim to reduce fraud and prioritise genuine skilled workers.', image: null },
    { title: 'ETIAS travel authorisation confirmed for late 2026 — €7 fee', source: 'ETIAS.com', publishedAt: '2026-02-14', url: 'https://etias.com', description: 'The ETIAS system for Schengen travel authorisation is delayed to late 2026.', image: null },
  ],
  uk: [
    { title: 'UK Skilled Worker salary threshold raised to £41,700 from July 2025', source: 'GOV.UK', publishedAt: '2025-07-01', url: 'https://www.gov.uk/skilled-worker-visa', description: 'Minimum salary for most Skilled Worker roles increased under immigration reforms.', image: null },
    { title: 'UK Graduate Route remains open for international students through 2026', source: 'UKCISA', publishedAt: '2025-10-01', url: 'https://www.gov.uk/graduate-visa', description: 'The Graduate visa allows graduates to stay and work in the UK for up to 2–3 years.', image: null },
    { title: 'Global Talent visa expanded to cover more STEM disciplines', source: 'GOV.UK', publishedAt: '2026-01-20', url: 'https://www.gov.uk/global-talent', description: 'More science and technology fields now qualify under UK Global Talent visa criteria.', image: null },
    { title: 'Care worker overseas recruitment closed under new UK immigration rules', source: 'BBC News', publishedAt: '2024-03-15', url: 'https://www.bbc.co.uk/news', description: 'UK halts overseas care worker recruitment amid tightened immigration policy.', image: null },
    { title: 'UK student visa income requirement increased from January 2025', source: 'GOV.UK', publishedAt: '2025-01-10', url: 'https://www.gov.uk/student-visa', description: 'Students must show higher maintenance funds to obtain a UK student visa.', image: null },
    { title: 'UK Health and Care Worker visa salary threshold updated for 2025', source: 'GOV.UK', publishedAt: '2025-04-01', url: 'https://www.gov.uk/health-care-worker-visa', description: 'Salary requirements for health and care worker roles updated alongside new visa rules.', image: null },
  ],
  canada: [
    { title: 'Canada caps international student permits at 295,000 for 2026', source: 'IRCC', publishedAt: '2025-11-01', url: 'https://www.canada.ca/immigration', description: 'IRCC announced limits on study permit approvals for a second consecutive year.', image: null },
    { title: 'PGWP eligibility now tied to approved DLI program list', source: 'Canada.ca', publishedAt: '2025-09-15', url: 'https://www.canada.ca/pgwp', description: 'Post-Graduation Work Permit eligibility linked to specific approved programs.', image: null },
    { title: 'Canada Express Entry category-based draws target tech workers', source: 'IRCC', publishedAt: '2026-03-10', url: 'https://www.canada.ca', description: 'STEM professionals benefit from dedicated category-based CRS selection rounds.', image: null },
    { title: 'Living cost requirement for study permit rises to CAD $15,000+', source: 'IRCC', publishedAt: '2025-06-01', url: 'https://www.canada.ca', description: 'New financial requirements mean study permit applicants must show more funds.', image: null },
    { title: 'Canada permanent residence pathway for caregivers updated', source: 'IRCC', publishedAt: '2025-08-20', url: 'https://www.canada.ca/caregivers', description: 'New pathways offer eligible caregivers an improved route to permanent residency.', image: null },
    { title: 'Atlantic Immigration Program expanded in 2026 for skilled workers', source: 'Canada.ca', publishedAt: '2026-02-01', url: 'https://www.canada.ca/atlantic', description: 'The Atlantic Immigration Program grows to attract more skilled workers to Atlantic Canada.', image: null },
  ],
  usa: [
    { title: 'USA H-1B lottery reforms take effect for 2026 selection rounds', source: 'USCIS', publishedAt: '2026-01-15', url: 'https://www.uscis.gov', description: 'Changes to H-1B lottery prioritise actual job offer registrations over duplicates.', image: null },
    { title: 'F-1 visa interview waiver extended to eligible first-time applicants', source: 'State Dept', publishedAt: '2026-02-01', url: 'https://travel.state.gov', description: 'Eligible first-time F-1 applicants can now skip the in-person visa interview.', image: null },
    { title: 'STEM OPT extension remains at 24 months for qualifying graduates', source: 'USCIS', publishedAt: '2025-12-15', url: 'https://www.uscis.gov', description: 'STEM degree holders on OPT can continue to apply for the 24-month extension.', image: null },
    { title: 'US visitor visa processing times improve after post-COVID backlog', source: 'State Dept', publishedAt: '2025-10-05', url: 'https://travel.state.gov', description: 'B-1/B-2 visitor visa wait times have reduced significantly in major consulates.', image: null },
    { title: 'Green card lottery (DV-2027) registration opens October 2025', source: 'State Dept', publishedAt: '2025-09-30', url: 'https://travel.state.gov/dv', description: 'The Diversity Visa lottery for 2027 is now open for eligible applicants worldwide.', image: null },
    { title: 'EB-5 investor visa minimum investment remains at $800,000 for TEA', source: 'USCIS', publishedAt: '2026-01-01', url: 'https://www.uscis.gov/eb-5', description: 'EB-5 targeted employment area investment minimum unchanged heading into 2026.', image: null },
  ],
  australia: [
    { title: 'Australia Skills in Demand visa replaces TSS for most applicants', source: 'Home Affairs', publishedAt: '2025-12-01', url: 'https://immi.homeaffairs.gov.au', description: 'The new Skills in Demand visa offers faster processing for in-demand occupations.', image: null },
    { title: 'Australian student visa processing rises to 8–10 weeks in 2026', source: 'Home Affairs', publishedAt: '2026-02-10', url: 'https://immi.homeaffairs.gov.au', description: 'Applicants should apply earlier than usual due to high volume and extended processing.', image: null },
    { title: 'Australia Pacific Engagement Visa programme expanded in 2026', source: 'DFAT', publishedAt: '2026-03-01', url: 'https://immi.homeaffairs.gov.au', description: 'The Pacific Engagement Visa offers permanent residency pathways for Pacific nationals.', image: null },
    { title: 'Regional Australia visa pathway draws more skilled migrants in 2025', source: 'Home Affairs', publishedAt: '2025-09-01', url: 'https://immi.homeaffairs.gov.au', description: 'Regional visas (subclass 491, 494) see increased demand as incentives grow.', image: null },
    { title: 'Australia Employer Nomination Scheme processing times cut by 30%', source: 'Home Affairs', publishedAt: '2025-11-15', url: 'https://immi.homeaffairs.gov.au', description: 'ENS subclass 186 processing has improved significantly after staffing increases.', image: null },
    { title: 'Australian Citizenship applications increase 40% year-on-year', source: 'Home Affairs', publishedAt: '2026-01-20', url: 'https://immi.homeaffairs.gov.au', description: 'Record numbers of permanent residents are applying for Australian citizenship.', image: null },
  ],
  schengen: [
    { title: 'EES biometric border system now live at Schengen borders', source: 'Frontex', publishedAt: '2025-10-06', url: 'https://frontex.europa.eu', description: 'The Entry/Exit System records biometric data from all non-EU nationals entering Schengen.', image: null },
    { title: 'ETIAS travel authorisation confirmed for late 2026 — €7 fee', source: 'ETIAS.com', publishedAt: '2026-02-14', url: 'https://etias.com', description: 'ETIAS mandatory travel authorisation for visa-exempt nationals now confirmed for late 2026.', image: null },
    { title: 'Digital Schengen visa pilot launched for select nationalities', source: 'Schengenvisainfo', publishedAt: '2026-03-01', url: 'https://schengenvisainfo.com', description: 'A digital visa application pilot removes the need to visit a consulate in person.', image: null },
    { title: 'Schengen visa fees increase to €90 from June 2024', source: 'European Commission', publishedAt: '2024-06-11', url: 'https://home-affairs.ec.europa.eu', description: 'Standard Schengen short-stay visa fee rose to €90, up from €80.', image: null },
    { title: 'Germany launches fast-track visa processing for skilled workers', source: 'BAMF', publishedAt: '2025-05-01', url: 'https://www.bamf.de', description: 'Germany\'s new accelerated process reduces skilled worker visa waiting times to 4 weeks.', image: null },
    { title: 'France tops Schengen visa application volumes for 2025', source: 'French Consulate', publishedAt: '2025-08-15', url: 'https://france-visas.gouv.fr', description: 'France processes more Schengen visa applications than any other member state.', image: null },
  ],
}

// ── In-memory cache ───────────────────────────────────────────────────────────
const cache = {}
function getCached(id) {
  const e = cache[id]
  return e && Date.now() - e.ts < CACHE_TTL ? e.data : null
}
function setCache(id, data) { cache[id] = { data, ts: Date.now() } }

function timeAgo(d) {
  const diff = Date.now() - new Date(d).getTime()
  const h = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  if (h < 1)  return 'Just now'
  if (h < 24) return `${h}h ago`
  if (days < 30) return `${days}d ago`
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

// ── Article slide-in panel ────────────────────────────────────────────────────
function ArticlePanel({ article, onClose }) {
  if (!article) return null
  const img = article.image || BANNERS[article._tab] || BANNERS.all
  return (
    <>
      <motion.div className="fixed inset-0 z-40" style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} />
      <motion.div className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
        style={{ width: 'min(500px,100vw)', background: 'white', boxShadow: '-8px 0 48px rgba(15,23,42,0.12)', borderLeft: '1px solid #E2E8F0' }}
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}>
        <div className="sticky top-0 flex items-center justify-between px-6 py-4" style={{ background: 'white', borderBottom: '1px solid #F1F5F9' }}>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
            {article.source?.name || article.source}
          </span>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#F1F5F9' }}>
            <X size={16} color="#64748B" />
          </button>
        </div>
        <div className="h-52 overflow-hidden">
          <img src={img} alt={article.title} className="w-full h-full object-cover" onError={e => { e.currentTarget.src = BANNERS.all }} />
        </div>
        <div className="px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Calendar size={13} color="#94A3B8" />
            <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              {new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.4 }}>{article.title}</h2>
          {article.description && <p className="text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{article.description}</p>}
          <a href={article.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white mt-1"
            style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
            <ExternalLink size={14} /> Read Full Article
          </a>
        </div>
      </motion.div>
    </>
  )
}

// ── News card with banner ─────────────────────────────────────────────────────
function NewsCard({ article, tabId, onOpen, index }) {
  const img = article.image || BANNERS[tabId] || BANNERS.all
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
      <button onClick={() => onOpen({ ...article, _tab: tabId })}
        className="w-full text-left group bg-white rounded-2xl overflow-hidden flex flex-col h-full"
        style={{ border: '1px solid #E2E8F0', transition: 'all 0.22s ease' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(15,23,42,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
        {/* Banner */}
        <div className="relative h-40 overflow-hidden flex-shrink-0">
          <img src={img} alt={article.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.4s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onError={e => { e.currentTarget.src = BANNERS.all }}
            loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 55%)' }} />
          <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
            {article.source?.name || article.source}
          </span>
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <p className="font-bold text-sm leading-snug group-hover:text-teal-600 transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {article.title}
          </p>
          {article.description && (
            <p className="text-xs leading-relaxed flex-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {article.description}
            </p>
          )}
          <div className="flex items-center justify-between mt-auto pt-2" style={{ borderTop: '1px solid #F1F5F9' }}>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              <Clock size={10} /> {timeAgo(article.publishedAt)}
            </span>
            <span className="text-xs font-semibold group-hover:gap-2 transition-all flex items-center gap-1" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
              Read <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

// ── Blog guide card with banner ───────────────────────────────────────────────
function GuideCard({ post, index }) {
  const img = BANNERS[post.category] || BANNERS.all
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
      <Link to={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden h-full flex flex-col"
        style={{ border: '1px solid #E2E8F0', transition: 'all 0.22s ease' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(15,23,42,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}>
        {/* Banner */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img src={img} alt={post.title} className="w-full h-full object-cover" style={{ transition: 'transform 0.4s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            loading="lazy" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 55%)' }} />
          <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
            {post.categoryLabel}
          </span>
          {post.featured && (
            <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ background: 'rgba(13,148,136,0.85)', color: 'white', fontFamily: 'Inter, sans-serif' }}>
              ⭐ Featured
            </span>
          )}
        </div>
        {/* Content */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <h3 className="font-bold text-sm leading-snug group-hover:text-teal-600 transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {post.title}
          </h3>
          <p className="text-xs leading-relaxed flex-1" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto pt-2" style={{ borderTop: '1px solid #F1F5F9' }}>
            <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              <Clock size={10} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
              Read <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function Blog() {
  const [activeTab, setActiveTab]  = useState('all')
  const [news, setNews]            = useState(FALLBACK.all)
  const [loading, setLoading]      = useState(false)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const refreshRef = useRef(null)

  const fetchNews = useCallback(async (tabId, force = false) => {
    if (!force) {
      const cached = getCached(tabId)
      if (cached) { setNews(cached); return }
    }
    setLoading(true)
    const tab = TABS.find(t => t.id === tabId)
    try {
      const res  = await fetch(`https://gnews.io/api/v4/search?q=${encodeURIComponent(tab.query)}&lang=en&max=6&sortby=publishedAt&apikey=${GNEWS_API_KEY}`)
      const data = res.ok ? await res.json() : null
      if (data?.articles?.length >= 3) {
        setCache(tabId, data.articles)
        setNews(data.articles)
      } else {
        setNews(FALLBACK[tabId] || FALLBACK.all)
      }
    } catch {
      setNews(FALLBACK[tabId] || FALLBACK.all)
    }
    setLoading(false)
    setLastUpdated(new Date())
  }, [])

  useEffect(() => {
    fetchNews(activeTab)
    clearInterval(refreshRef.current)
    refreshRef.current = setInterval(() => fetchNews(activeTab, true), CACHE_TTL)
    return () => clearInterval(refreshRef.current)
  }, [activeTab, fetchNews])

  return (
    <>
      <Helmet>
        <title>Immigration News &amp; Guides | Vistaar Immigration</title>
        <meta name="description" content="Live immigration news and visa guides for UK, Canada, USA, Australia and Schengen. Stay informed on the latest policy changes, processing times and updates." />
        <link rel="canonical" href="https://vistaarimmigration.com/blog" />
      </Helmet>

      <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

        {/* ── Header ── */}
        <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '120px', paddingBottom: '56px' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)' }}>
                <span className="text-xs font-medium" style={{ color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}>Live Immigration News</span>
              </div>
              <h1 className="font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.6rem)', color: 'white', letterSpacing: '-0.02em' }}>
                Immigration News &amp; Guides
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', maxWidth: '480px' }}>
                Real-time visa news for UK, Canada, USA, Australia and Schengen — plus practical guides from the Vistaar team.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Country tabs ── */}
        <div style={{ background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 64, zIndex: 20 }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between py-3 gap-4">
              <div className="flex gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {TABS.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
                    style={{ fontFamily: 'Inter, sans-serif', background: activeTab === tab.id ? '#0D9488' : 'transparent', color: activeTab === tab.id ? 'white' : '#64748B', border: activeTab === tab.id ? '1px solid #0D9488' : '1px solid transparent' }}>
                    <span>{tab.flag}</span> {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {lastUpdated && <span className="text-xs hidden sm:block" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{timeAgo(lastUpdated.toISOString())}</span>}
                <button onClick={() => fetchNews(activeTab, true)} disabled={loading}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold"
                  style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #CCFBF1', fontFamily: 'Inter, sans-serif' }}>
                  <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">

          {/* ── Live News ── */}
          <div className="flex items-center gap-3 mb-6">
            <Newspaper size={16} color="#0D9488" />
            <h2 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
              {TABS.find(t => t.id === activeTab)?.flag} {TABS.find(t => t.id === activeTab)?.label} Immigration News
            </h2>
            <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse" style={{ border: '1px solid #E2E8F0' }}>
                  <div className="h-40 bg-slate-100" />
                  <div className="p-4 flex flex-col gap-2">
                    <div className="h-4 rounded bg-slate-100 w-3/4" />
                    <div className="h-3 rounded bg-slate-100 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {news.map((article, i) => (
                  <NewsCard key={article.url || i} article={article} tabId={activeTab} onOpen={setSelectedArticle} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* ── Immigration Guides ── */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-base">📚</span>
            <h2 className="font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>Immigration Guides</h2>
            <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {blogPosts.map((post, i) => <GuideCard key={post.id} post={post} index={i} />)}
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h3 className="font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem' }}>Have a visa question?</h3>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>Book a free consultation — our team responds within 2 hours.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>
              Book Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle && <ArticlePanel article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
      </AnimatePresence>
    </>
  )
}
