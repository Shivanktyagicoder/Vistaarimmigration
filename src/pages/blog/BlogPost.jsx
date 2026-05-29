import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from 'lucide-react'
import { blogPosts } from '../../data/blog'

export default function BlogPost() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const post = blogPosts.find(p => p.slug === slug)
    const related = blogPosts.filter(p => p.id !== post?.id).slice(0, 2)

    if (!post) return (
        <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#F8FAFC' }}>
            <p className="text-xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>Post not found</p>
            <Link to="/blog" style={{ color: '#0D9488', fontFamily: 'Inter, sans-serif' }}>← Back to Blog</Link>
        </div>
    )

    return (
        <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>

            {/* Hero */}
            <div className="relative overflow-hidden" style={{ background: post.gradient, minHeight: '280px' }}>
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }} />
                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pt-12 pb-14">
                    <motion.button
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/blog')}
                        className="flex items-center gap-2 mb-7 text-sm transition-colors"
                        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                        <ArrowLeft size={15} /> Back to Blog
                    </motion.button>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{post.emoji}</span>
                            <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                                style={{ background: 'rgba(255,255,255,0.18)', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                                {post.categoryLabel}
                            </span>
                        </div>
                        <h1 className="font-bold mb-4 text-white"
                            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                    style={{ background: 'rgba(255,255,255,0.2)' }}>V</div>
                                <span className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>{post.author}</span>
                            </div>
                            <span className="flex items-center gap-1.5 text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <Calendar size={13} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                                <Clock size={13} /> {post.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid lg:grid-cols-3 gap-10">

                    {/* Article */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl p-8"
                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(15,23,42,0.06)' }}
                        >
                            {/* Key Points */}
                            <div className="rounded-xl p-5 mb-7"
                                style={{ background: '#F0FDFA', border: '1px solid #CCFBF1' }}>
                                <p className="font-semibold text-sm mb-3"
                                    style={{ fontFamily: 'Poppins, sans-serif', color: '#0D9488' }}>
                                    📌 Key Points
                                </p>
                                {post.keyPoints.map((pt, i) => (
                                    <div key={i} className="flex items-start gap-2.5 mb-2">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                            style={{ background: '#0D9488' }}>
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif', color: '#334155' }}>{pt}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Placeholder content */}
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                                    {post.excerpt} This is a placeholder for the full article content. When you are ready to publish the full article, replace this section with your complete blog post content.
                                </p>
                                <div className="rounded-xl p-4 my-6"
                                    style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
                                    <p className="text-xs font-semibold mb-1" style={{ color: '#92400E', fontFamily: 'Poppins, sans-serif' }}>
                                        ✏️ Content Placeholder
                                    </p>
                                    <p className="text-xs" style={{ color: '#78350F', fontFamily: 'Inter, sans-serif' }}>
                                        Replace this section with your full article content. Add sections, subheadings, tips and official links as needed.
                                    </p>
                                </div>
                                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: '#475569' }}>
                                    For the latest and most accurate information, always refer to the official government immigration websites and consult with a certified immigration consultant before making any visa decisions.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-6" style={{ borderTop: '1px solid #F1F5F9' }}>
                                <Tag size={14} color="#94A3B8" />
                                {post.tags.map((tag, i) => (
                                    <Link key={i} to="/blog"
                                        className="text-xs px-3 py-1 rounded-full transition-colors"
                                        style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#CCFBF1'; e.currentTarget.style.color = '#0D9488' }}
                                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#64748B' }}>
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-5">

                        {/* Related */}
                        <div className="bg-white rounded-2xl p-5"
                            style={{ border: '1px solid #E2E8F0', boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}>
                            <p className="font-semibold text-sm mb-4"
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', borderLeft: '3px solid #0D9488', paddingLeft: '10px' }}>
                                Related Articles
                            </p>
                            <div className="flex flex-col gap-3">
                                {related.map((r, i) => (
                                    <Link key={i} to={`/blog/${r.slug}`} className="flex items-start gap-3 group">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                                            style={{ background: r.gradient }}>
                                            {r.emoji}
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold leading-snug group-hover:text-teal-600 transition-colors"
                                                style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A' }}>
                                                {r.title}
                                            </p>
                                            <p className="text-xs mt-1" style={{ color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
                                                {r.readTime}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Back to blog */}
                        <Link to="/blog"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-white transition-all"
                            style={{ fontFamily: 'Poppins, sans-serif', color: '#0F172A', border: '1px solid #E2E8F0' }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0D9488'; e.currentTarget.style.color = '#0D9488' }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#0F172A' }}>
                            <ArrowLeft size={15} /> Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}