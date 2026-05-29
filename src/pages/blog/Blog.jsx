import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Search, Clock, ArrowRight, Tag,
    TrendingUp, ChevronRight,
    Rss, Filter, Newspaper, ExternalLink, X, Calendar,
    Radio, ChevronLeft
} from 'lucide-react'
import { blogPosts, blogCategories } from '../../data/blog'

const GNEWS_API_KEY = '5e83ce3c61de032c6f2a08eae9480c91'

const NEWS_QUERIES = {
    uk: 'UK visa immigration 2026',
    canada: 'Canada visa immigration IRCC 2026',
    'study-visa': 'international student visa 2026',
    schengen: 'Schengen visa Europe EES 2026',
    tips: 'visa immigration tips approval',
    'work-visa': 'work permit visa immigration',
}

// Reliable Unsplash images per category
const POST_HERO = {
    uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80',
    canada: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80',
    'study-visa': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
    schengen: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
    tips: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    'work-visa': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
    default: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80',
}

const FALLBACKS = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
]

const CATEGORY_ACCENT = {
    uk: '#4169E1', canada: '#EF4444', 'study-visa': '#06B6D4',
    schengen: '#3B82F6', tips: '#14B8A6', 'work-visa': '#8B5CF6', default: '#0D9488',
}

// Fallback news shown while API loads or if API limit hit
const FALLBACK_NEWS = {
    uk: [
        { title: 'UK Home Office raises Skilled Worker salary threshold to £41,700 from July 2025', source: { name: 'GOV.UK' }, publishedAt: '2025-07-01', url: 'https://www.gov.uk/skilled-worker-visa', image: null },
        { title: 'UK Graduate Route remains open for international students through 2026', source: { name: 'UKCISA' }, publishedAt: '2025-10-01', url: 'https://www.gov.uk/graduate-visa', image: null },
        { title: 'Care worker overseas recruitment closed under new UK immigration rules', source: { name: 'BBC News' }, publishedAt: '2024-03-15', url: 'https://www.bbc.co.uk/news', image: null },
    ],
    canada: [
        { title: 'Canada caps international student permits at 295,000 for 2026', source: { name: 'IRCC' }, publishedAt: '2025-11-01', url: 'https://www.canada.ca/immigration', image: null },
        { title: 'PGWP-eligible program list frozen — check your DLI status before applying', source: { name: 'Canada.ca' }, publishedAt: '2025-09-15', url: 'https://www.canada.ca/pgwp', image: null },
        { title: 'Living cost requirement for study permit rises to CAD $15,000+', source: { name: 'IRCC' }, publishedAt: '2025-06-01', url: 'https://www.canada.ca', image: null },
    ],
    'study-visa': [
        { title: 'International students face tighter documentation requirements in 2026', source: { name: 'Study International' }, publishedAt: '2026-01-10', url: 'https://www.studyinternational.com', image: null },
        { title: 'UK, Canada, Australia update student visa income thresholds for 2026', source: { name: 'PIE News' }, publishedAt: '2025-12-01', url: 'https://thepienews.com', image: null },
        { title: 'Language test waivers being removed in major English-speaking destinations', source: { name: 'IDP Education' }, publishedAt: '2025-10-20', url: 'https://www.idp.com', image: null },
    ],
    schengen: [
        { title: 'EES biometric border system goes live across all Schengen borders in Oct 2025', source: { name: 'Frontex' }, publishedAt: '2025-10-06', url: 'https://frontex.europa.eu', image: null },
        { title: 'ETIAS travel authorisation delayed to late 2026 — €7 fee confirmed', source: { name: 'ETIAS.com' }, publishedAt: '2026-02-14', url: 'https://etias.com', image: null },
        { title: 'Digital Schengen visa pilot launched for select nationalities in 2026', source: { name: 'Schengenvisainfo' }, publishedAt: '2026-03-01', url: 'https://schengenvisainfo.com', image: null },
    ],
    tips: [
        { title: '5 documents every visa applicant must have in order before applying', source: { name: 'Vistaar Blog' }, publishedAt: '2026-04-01', url: '/blog', image: null },
        { title: 'Cover letter that works: what immigration officers actually read', source: { name: 'Vistaar Blog' }, publishedAt: '2026-03-15', url: '/blog', image: null },
        { title: 'Bank statement mistakes that lead to instant visa rejection', source: { name: 'Vistaar Blog' }, publishedAt: '2026-02-20', url: '/blog', image: null },
    ],
    'work-visa': [
        { title: 'Work permit processing times surge in 2026 — apply well in advance', source: { name: 'Immigration News' }, publishedAt: '2026-04-15', url: 'https://immigrationnews.co.uk', image: null },
        { title: 'Global Talent visa expanded to cover more STEM disciplines in the UK', source: { name: 'GOV.UK' }, publishedAt: '2026-01-20', url: 'https://www.gov.uk', image: null },
        { title: 'Canada Express Entry draw targets tech workers with new category-based rounds', source: { name: 'IRCC' }, publishedAt: '2026-03-10', url: 'https://www.canada.ca', image: null },
    ],
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const h = Math.floor(diff / 36e5)
    const d = Math.floor(diff / 864e5)
    if (h < 1) return 'Just now'
    if (h < 24) return `${h}h ago`
    if (d < 7) return `${d}d ago`
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

// ── Sliding news ticker inside a card ────────────────────────
function NewsTicker({ articles, accent, onSelect }) {
    const [idx, setIdx] = useState(0)
    const timerRef = useRef(null)

    useEffect(() => {
        if (!articles || articles.length < 2) return
        timerRef.current = setInterval(() => setIdx(i => (i + 1) % articles.length), 3500)
        return () => clearInterval(timerRef.current)
    }, [articles])

    if (!articles || articles.length === 0) return (
        <div className="px-4 py-2.5 flex items-center gap-2"
            style={{ borderTop: '1px solid #F1F5F9' }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#CBD5E1' }} />
            <span className="text-xs italic" style={{ color: '#CBD5E1', fontFamily: 'Inter, sans-serif' }}>
                Loading live news...
            </span>
        </div>
    )

    const article = articles[idx]

    return (
        <div className="px-4 py-2.5" style={{ borderTop: '1px solid #F1F5F9', background: '#FAFBFC' }}>
            <div className="flex items-center gap-1.5 mb-1">
                <div className="relative flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#EF4444' }} />
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ background: '#EF4444', opacity: 0.4 }} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                    Live News
                </span>
                <div className="flex-1" />
                <div className="flex gap-1">
                    <button onClick={e => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i - 1 + articles.length) % articles.length) }}
                        className="w-4 h-4 rounded flex items-center justify-center"
                        style={{ background: '#F1F5F9' }}>
                        <ChevronLeft size={10} color="#94A3B8" />
                    </button>
                    <button onClick={e => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i + 1) % articles.length) }}
                        className="w-4 h-4 rounded flex items-center justify-center"
                        style={{ background: '#F1F5F9' }}>
                        <ChevronRight size={10} color="#94A3B8" />
                    </button>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.button
                    key={idx}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    onClick={e => { e.preventDefault(); e.stopPropagation(); onSelect(article) }}
                    className="w-full text-left"
                >
                    <p className="text-xs leading-snug hover:underline"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#334155', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {article.title}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                        <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                            {article.source?.name} · {timeAgo(article.publishedAt)}
                        </span>
                        <span className="text-xs font-semibold" style={{ color: accent, fontFamily: 'Inter, sans-serif' }}>
                            {idx + 1}/{articles.length}
                        </span>
                    </div>
                </motion.button>
            </AnimatePresence>
        </div>
    )
}

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [searchFocused, setSearchFocused] = useState(false)
    const [visibleCount, setVisibleCount] = useState(6)
    const [newsMap, setNewsMap] = useState({})
    const [newsLoading, setNewsLoading] = useState(true)
    const [selectedNews, setSelectedNews] = useState(null)

    useEffect(() => {
        // Seed with fallback content immediately so tickers are never empty
        setNewsMap({ ...FALLBACK_NEWS })
        setNewsLoading(false)

        let cancelled = false
        const categories = Object.keys(NEWS_QUERIES)
        Promise.all(
            categories.map(cat =>
                fetch(`https://gnews.io/api/v4/search?q=${encodeURIComponent(NEWS_QUERIES[cat])}&lang=en&max=4&sortby=publishedAt&apikey=${GNEWS_API_KEY}`)
                    .then(r => r.ok ? r.json() : null)
                    .then(data => ({ id: cat, articles: (data?.articles?.length > 0 ? data.articles : null) }))
                    .catch(() => ({ id: cat, articles: null }))
            )
        ).then(results => {
            if (cancelled) return
            setNewsMap(prev => {
                const updated = { ...prev }
                results.forEach(r => {
                    if (r.articles) updated[r.id] = r.articles
                })
                return updated
            })
        })
        return () => { cancelled = true }
    }, [])

    const filtered = blogPosts.filter(post => {
        const matchCat = activeCategory === 'all' || post.category === activeCategory
        const matchSearch = !searchQuery ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchCat && matchSearch
    })

    const featured = filtered.find(p => p.featured)
    const regularRaw = filtered.filter(p => !p.featured)
    const regular = regularRaw.slice(0, visibleCount)
    const hasMore = regularRaw.length > visibleCount

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* ── HERO ── */}
            <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', paddingTop: '144px', paddingBottom: '72px' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                            style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)' }}>
                            <Rss size={12} color="#14B8A6" />
                            <span className="text-xs font-medium" style={{ color: '#5EEAD4', fontFamily: 'Inter, sans-serif' }}>
                                Immigration Insights
                            </span>
                        </div>
                        <h1 className="font-bold mb-3"
                            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', letterSpacing: '-0.02em' }}>
                            Latest Immigration{' '}
                            <span style={{ background: 'linear-gradient(90deg, #38BDF8, #818CF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Updates & Guides
                            </span>
                        </h1>
                        <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: '480px' }}>
                            Expert immigration insights, visa updates, and live news — updated regularly by the Vistaar team.
                        </p>
                        <motion.div
                            animate={{ boxShadow: searchFocused ? '0 0 0 2px rgba(13,148,136,0.5)' : '0 0 0 1px rgba(255,255,255,0.1)' }}
                            className="flex items-center gap-3 mt-7 px-4 py-3 rounded-xl max-w-md"
                            style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
                            <Search size={15} color="rgba(255,255,255,0.4)" />
                            <input type="text" placeholder="Search articles, visas, countries..."
                                value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
                                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-white/30"
                                style={{ fontFamily: 'Inter, sans-serif' }} />
                            {searchQuery && <button onClick={() => setSearchQuery('')} className="text-white/30 hover:text-white/60 text-xs">✕</button>}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── MAIN ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid lg:grid-cols-4 gap-8 items-start">

                    {/* ── SIDEBAR ── */}
                    <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 lg:sticky lg:top-24 flex flex-col gap-5">
                        <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
                            <div className="flex items-center gap-2 mb-4">
                                <Filter size={14} color="#0D9488" />
                                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', color: '#94A3B8' }}>Categories</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                {blogCategories.map((cat, i) => (
                                    <motion.button key={cat.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                                        onClick={() => { setActiveCategory(cat.id); setVisibleCount(6) }}
                                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-left w-full"
                                        style={{ fontFamily: 'Inter, sans-serif', background: activeCategory === cat.id ? '#F0FDFA' : 'transparent', color: activeCategory === cat.id ? '#0D9488' : '#475569' }}
                                        onMouseEnter={e => { if (activeCategory !== cat.id) e.currentTarget.style.background = '#F8FAFC' }}
                                        onMouseLeave={e => { if (activeCategory !== cat.id) e.currentTarget.style.background = 'transparent' }}>
                                        <div className="flex items-center gap-2">
                                            {activeCategory === cat.id && <motion.div layoutId="catDot" className="w-1.5 h-1.5 rounded-full" style={{ background: '#0D9488' }} />}
                                            <span className={activeCategory === cat.id ? '' : 'pl-3.5'}>{cat.label}</span>
                                        </div>
                                        <span className="text-xs px-2 py-0.5 rounded-full"
                                            style={{ background: activeCategory === cat.id ? '#CCFBF1' : '#F1F5F9', color: activeCategory === cat.id ? '#0D9488' : '#94A3B8', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                                            {cat.count}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
                            <div className="flex items-center gap-2 mb-4">
                                <Tag size={14} color="#0D9488" />
                                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', color: '#94A3B8' }}>Popular Tags</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['UK Visa', 'Canada', 'Study Visa', 'Schengen', '2026 Updates', 'Tips', 'Work Visa', 'Approval Guide'].map((tag, i) => (
                                    <button key={i} onClick={() => setSearchQuery(tag)}
                                        className="text-xs px-3 py-1.5 rounded-full"
                                        style={{ background: searchQuery === tag ? '#F0FDFA' : '#F8FAFC', border: `1px solid ${searchQuery === tag ? '#CCFBF1' : '#E2E8F0'}`, color: searchQuery === tag ? '#0D9488' : '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5" style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp size={14} color="#0D9488" />
                                <p className="text-xs font-semibold uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif', color: '#94A3B8' }}>Blog Stats</p>
                            </div>
                            {[{ label: 'Total Articles', value: blogPosts.length }, { label: 'Countries Covered', value: '7+' }, { label: 'Updated', value: 'May 2026' }].map((s, i) => (
                                <div key={i} className="flex items-center justify-between py-2.5" style={{ borderBottom: i < 2 ? '1px solid #F8FAFC' : 'none' }}>
                                    <span className="text-xs" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{s.label}</span>
                                    <span className="text-xs font-bold" style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.aside>

                    {/* ── POSTS ── */}
                    <div className="lg:col-span-3 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                {filtered.length === 0 ? 'No articles found' : `Showing ${filtered.length} article${filtered.length !== 1 ? 's' : ''}`}
                            </p>
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="text-xs font-medium" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                                    Clear ✕
                                </button>
                            )}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div key={activeCategory + searchQuery}
                                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                                className="flex flex-col gap-6">

                                {filtered.length === 0 && (
                                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl" style={{ border: '1px solid #E2E8F0' }}>
                                        <span className="text-5xl mb-4">🔍</span>
                                        <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>No articles found</p>
                                        <button onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                                            className="mt-4 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                                            style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)', fontFamily: 'Poppins, sans-serif' }}>
                                            View All Posts
                                        </button>
                                    </div>
                                )}

                                {/* ── FEATURED (large) ── */}
                                {featured && (
                                    <Link to={`/blog/${featured.slug}`} className="block group">
                                        <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E2E8F0', boxShadow: '0 8px 32px rgba(15,23,42,0.08)' }}>
                                            {/* Hero image */}
                                            <div className="relative h-56 overflow-hidden">
                                                <img src={POST_HERO[featured.category] || POST_HERO.default} alt={featured.title}
                                                    className="w-full h-full object-cover"
                                                    style={{ transition: 'transform 0.5s ease' }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                    onError={e => { e.currentTarget.src = FALLBACKS[0] }}
                                                />
                                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.05) 55%)' }} />
                                                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                                                    <span className="text-xs font-semibold px-3 py-1 rounded-full"
                                                        style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
                                                        {featured.categoryLabel}
                                                    </span>
                                                    <span className="text-xs px-3 py-1 rounded-full font-semibold"
                                                        style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
                                                        ⭐ Featured
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="bg-white p-6">
                                                <h2 className="font-bold text-xl mb-2 leading-snug group-hover:text-teal-600 transition-colors"
                                                    style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                                    {featured.title}
                                                </h2>
                                                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                                    {featured.excerpt}
                                                </p>
                                                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                                                    {featured.keyPoints.map((pt, i) => (
                                                        <div key={i} className="flex items-start gap-2">
                                                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                                style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                                                <span className="text-xs" style={{ color: '#0D9488' }}>✓</span>
                                                            </div>
                                                            <span className="text-xs" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{pt}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center justify-between mb-0">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                                            style={{ background: 'linear-gradient(135deg, #0D9488, #14B8A6)' }}>V</div>
                                                        <div>
                                                            <p className="text-xs font-medium" style={{ color: '#0F172A', fontFamily: 'Inter, sans-serif' }}>{featured.author}</p>
                                                            <p className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{featured.date}</p>
                                                        </div>
                                                        <span className="flex items-center gap-1 text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                            <Clock size={11} /> {featured.readTime}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                                                        style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>
                                                        Read More <ArrowRight size={15} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Live news ticker for featured */}
                                            <NewsTicker
                                                articles={newsMap[featured.category] || []}
                                                accent={CATEGORY_ACCENT[featured.category] || CATEGORY_ACCENT.default}
                                                onSelect={setSelectedNews}
                                            />
                                        </motion.div>
                                    </Link>
                                )}

                                {/* ── REGULAR GRID ── */}
                                {regular.length > 0 && (
                                    <div>
                                        {featured && (
                                            <div className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2"
                                                style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
                                                <span>More Articles</span>
                                                <div className="h-px flex-1" style={{ background: '#E2E8F0' }} />
                                            </div>
                                        )}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            {regular.map((post, i) => (
                                                <motion.div key={post.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                                                    <Link to={`/blog/${post.slug}`} className="block group h-full">
                                                        <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                                            className="bg-white rounded-2xl overflow-hidden h-full flex flex-col"
                                                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>

                                                            {/* Real image */}
                                                            <div className="relative h-40 overflow-hidden flex-shrink-0">
                                                                <img src={POST_HERO[post.category] || POST_HERO.default} alt={post.title}
                                                                    className="w-full h-full object-cover"
                                                                    style={{ transition: 'transform 0.4s ease' }}
                                                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                                    onError={e => { e.currentTarget.src = FALLBACKS[i % FALLBACKS.length] }}
                                                                />
                                                                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 60%)' }} />
                                                                <span className="absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
                                                                    style={{ background: 'rgba(255,255,255,0.15)', color: 'white', backdropFilter: 'blur(8px)', fontFamily: 'Inter, sans-serif' }}>
                                                                    {post.categoryLabel}
                                                                </span>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="p-4 flex flex-col flex-1">
                                                                <h3 className="font-bold text-sm leading-snug mb-2 group-hover:text-teal-600 transition-colors"
                                                                    style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                    {post.title}
                                                                </h3>
                                                                <p className="text-xs leading-relaxed mb-3 flex-1"
                                                                    style={{ color: '#64748B', fontFamily: 'Inter, sans-serif', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                                    {post.excerpt}
                                                                </p>
                                                                <div className="flex flex-wrap gap-1.5 mb-3">
                                                                    {post.tags.slice(0, 2).map((tag, j) => (
                                                                        <span key={j} className="text-xs px-2 py-0.5 rounded-full"
                                                                            style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                <div className="flex items-center justify-between pt-2.5" style={{ borderTop: '1px solid #F8FAFC' }}>
                                                                    <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>{post.date}</span>
                                                                    <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#0D9488', fontFamily: 'Poppins, sans-serif' }}>
                                                                        <Clock size={11} /> {post.readTime}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Live news ticker */}
                                                            <NewsTicker
                                                                articles={newsMap[post.category] || []}
                                                                accent={CATEGORY_ACCENT[post.category] || CATEGORY_ACCENT.default}
                                                                onSelect={setSelectedNews}
                                                            />
                                                        </motion.div>
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {hasMore && (
                                            <div className="flex justify-center mt-8">
                                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                                    onClick={() => setVisibleCount(v => v + 4)}
                                                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                                                    style={{ fontFamily: 'Poppins, sans-serif', background: 'white', border: '1px solid #E2E8F0', color: '#0F172A', boxShadow: '0 2px 8px rgba(15,23,42,0.06)' }}
                                                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#0D9488'; e.currentTarget.style.color = '#0D9488' }}
                                                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#0F172A' }}>
                                                    Load More <ChevronRight size={15} />
                                                </motion.button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* ── NEWS SLIDE-IN PANEL ── */}
            <AnimatePresence>
                {selectedNews && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedNews(null)}
                            className="fixed inset-0 z-40"
                            style={{ background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }} />

                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 z-50 overflow-y-auto"
                            style={{ width: 'min(520px, 100vw)', background: 'white', boxShadow: '-10px 0 60px rgba(15,23,42,0.15)', borderLeft: '1px solid #E2E8F0' }}>

                            {/* Header */}
                            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
                                style={{ background: 'white', borderBottom: '1px solid #F1F5F9', boxShadow: '0 2px 12px rgba(15,23,42,0.06)' }}>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-40" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                        {selectedNews.source?.name || 'Live News'}
                                    </span>
                                </div>
                                <button onClick={() => setSelectedNews(null)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ background: '#F1F5F9' }}
                                    onMouseEnter={e => e.currentTarget.style.background = '#FEE2E2'}
                                    onMouseLeave={e => e.currentTarget.style.background = '#F1F5F9'}>
                                    <X size={16} color="#64748B" />
                                </button>
                            </div>

                            {/* Hero image */}
                            <div className="h-60 overflow-hidden">
                                <img src={selectedNews.image || FALLBACKS[0]} alt={selectedNews.title}
                                    className="w-full h-full object-cover"
                                    onError={e => { e.currentTarget.src = FALLBACKS[0] }} />
                            </div>

                            <div className="px-6 py-6 flex flex-col gap-5">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                                        style={{ background: '#F0FDFA', border: '1px solid #CCFBF1', color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>
                                        {selectedNews.source?.name}
                                    </span>
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={12} color="#94A3B8" />
                                        <span className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                            {new Date(selectedNews.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>

                                <h2 className="font-bold leading-snug"
                                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: '#0F172A', lineHeight: 1.35 }}>
                                    {selectedNews.title}
                                </h2>

                                <p className="text-sm leading-relaxed" style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>
                                    {selectedNews.description}
                                </p>

                                {selectedNews.content && (
                                    <div className="p-4 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                                        <p className="text-sm leading-relaxed" style={{ color: '#334155', fontFamily: 'Inter, sans-serif' }}>
                                            {selectedNews.content.replace(/\[\+\d+ chars\]$/, '').trim()}
                                        </p>
                                        <p className="text-xs mt-2 italic" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                            Continue reading on the original source.
                                        </p>
                                    </div>
                                )}

                                <a href={selectedNews.url} target="_blank" rel="noreferrer"
                                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white"
                                    style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #0D9488, #14B8A6)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)' }}>
                                    <ExternalLink size={15} />
                                    Read Full Article on {selectedNews.source?.name}
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
