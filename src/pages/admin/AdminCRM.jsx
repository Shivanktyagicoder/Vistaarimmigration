import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LogOut, RefreshCw, Search, ChevronLeft, ChevronRight,
  Loader2, AlertCircle, Inbox,
} from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || 'https://vistaarimmigration.onrender.com'

const C = {
  bg:         '#080D1A',
  surface:    '#0F1629',
  surfaceAlt: '#111827',
  border:     '#1E2A45',
  gold:       '#C9A84C',
  goldLight:  '#E8C96B',
  text:       '#F1F5F9',
  textMuted:  '#64748B',
  textSub:    '#94A3B8',
}

const STATUS_CONFIG = {
  new:           { label: 'New',         bg: 'rgba(59,130,246,0.15)',  color: '#60A5FA', border: 'rgba(59,130,246,0.3)'  },
  contacted:     { label: 'Contacted',   bg: 'rgba(245,158,11,0.15)',  color: '#FCD34D', border: 'rgba(245,158,11,0.3)'  },
  'in-progress': { label: 'In Progress', bg: 'rgba(168,85,247,0.15)',  color: '#C084FC', border: 'rgba(168,85,247,0.3)'  },
  closed:        { label: 'Closed',      bg: 'rgba(34,197,94,0.15)',   color: '#4ADE80', border: 'rgba(34,197,94,0.3)'   },
}

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.new
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: '999px',
      fontSize: '11px', fontWeight: 700, letterSpacing: '0.03em',
      background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`,
      whiteSpace: 'nowrap',
    }}>
      {cfg.label}
    </span>
  )
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function AdminCRM() {
  const navigate = useNavigate()

  const [leads,        setLeads]        = useState([])
  const [pagination,   setPagination]   = useState({ page: 1, limit: 50, total: 0, pages: 1 })
  const [loading,      setLoading]      = useState(true)
  const [error,        setError]        = useState(null)
  const [search,       setSearch]       = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [page,         setPage]         = useState(1)
  const [refreshKey,   setRefreshKey]   = useState(0)

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token')
    navigate('/admin/login', { replace: true })
  }, [navigate])

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token) { logout(); return }

    const controller = new AbortController()
    setLoading(true)
    setError(null)

    const params = new URLSearchParams({ page, limit: 50 })
    if (statusFilter) params.set('status', statusFilter)
    if (search.trim()) params.set('search', search.trim())

    fetch(`${API_URL}/api/admin/leads?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
    })
      .then(res => {
        if (res.status === 401) { logout(); return null }
        if (!res.ok) throw new Error(`Server error ${res.status}`)
        return res.json()
      })
      .then(data => {
        if (!data) return
        setLeads(data.data)
        setPagination(data.pagination)
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [page, statusFilter, search, refreshKey, logout])

  const counts = leads.reduce((acc, l) => {
    acc[l.status] = (acc[l.status] || 0) + 1; return acc
  }, {})

  const statCards = [
    { key: 'total',        label: 'Total Leads', value: pagination.total,          color: C.gold    },
    { key: 'new',          label: 'New',          value: counts.new          || 0,  color: '#60A5FA' },
    { key: 'contacted',    label: 'Contacted',    value: counts.contacted    || 0,  color: '#FCD34D' },
    { key: 'in-progress',  label: 'In Progress',  value: counts['in-progress'] || 0, color: '#C084FC' },
    { key: 'closed',       label: 'Closed',       value: counts.closed       || 0,  color: '#4ADE80' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: C.bg, fontFamily: 'Inter, sans-serif', color: C.text }}>

      {/* Header */}
      <div style={{
        background: C.surface, borderBottom: `1px solid ${C.border}`,
        padding: '0 24px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 40,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: C.gold }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', color: C.text }}>
            Vistaar CRM
          </span>
          <span style={{ fontSize: '12px', color: C.textMuted, marginLeft: '4px' }}>Leads Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => { setPage(1); setRefreshKey(k => k + 1) }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 14px', borderRadius: '8px',
              border: `1px solid ${C.border}`, background: 'transparent',
              color: C.textSub, fontSize: '12px', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <RefreshCw size={13} /> Refresh
          </button>
          <button
            onClick={logout}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '7px 14px', borderRadius: '8px',
              border: '1px solid rgba(248,113,113,0.25)',
              background: 'rgba(248,113,113,0.08)', color: '#F87171',
              fontSize: '12px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            }}
          >
            <LogOut size={13} /> Logout
          </button>
        </div>
      </div>

      <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px', marginBottom: '24px',
        }}>
          {statCards.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: '12px', padding: '16px 20px',
              }}
            >
              <p style={{
                fontSize: '11px', color: C.textMuted, textTransform: 'uppercase',
                letterSpacing: '0.07em', marginBottom: '8px',
              }}>{s.label}</p>
              <p style={{
                fontSize: '26px', fontWeight: 700, color: s.color,
                fontFamily: 'Poppins, sans-serif', lineHeight: 1,
              }}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '12px',
          marginBottom: '16px', alignItems: 'center',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: '10px', padding: '0 14px', height: '40px',
            minWidth: '240px', flex: 1,
          }}>
            <Search size={14} color={C.textMuted} />
            <input
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
              placeholder="Search name or email..."
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: C.text, flex: 1,
              }}
            />
          </div>
          <select
            value={statusFilter}
            onChange={e => { setStatusFilter(e.target.value); setPage(1) }}
            style={{
              background: C.surface, border: `1px solid ${C.border}`,
              borderRadius: '10px', padding: '0 14px', height: '40px',
              fontFamily: 'Inter, sans-serif', fontSize: '13.5px',
              color: C.text, cursor: 'pointer', outline: 'none',
            }}
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <span style={{ fontSize: '12px', color: C.textMuted, marginLeft: 'auto' }}>
            {pagination.total} lead{pagination.total !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Table */}
        <div style={{
          background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: '14px', overflow: 'hidden',
        }}>
          {loading ? (
            <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
              <Loader2 size={28} color={C.gold} style={{ animation: 'spin 1s linear infinite' }} />
            </div>
          ) : error ? (
            <div style={{ padding: '60px', textAlign: 'center' }}>
              <AlertCircle size={32} color="#F87171" style={{ margin: '0 auto 12px', display: 'block' }} />
              <p style={{ color: '#F87171', fontSize: '14px' }}>{error}</p>
            </div>
          ) : leads.length === 0 ? (
            <div style={{ padding: '80px', textAlign: 'center' }}>
              <Inbox size={40} color={C.textMuted} style={{ margin: '0 auto 12px', display: 'block' }} />
              <p style={{ color: C.textMuted, fontSize: '14px' }}>No leads found.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    {['Name', 'Email', 'Phone', 'Service', 'Country', 'Status', 'Date'].map(h => (
                      <th key={h} style={{
                        padding: '12px 16px', textAlign: 'left',
                        fontFamily: 'Inter, sans-serif', fontWeight: 600,
                        fontSize: '11px', color: C.textMuted,
                        textTransform: 'uppercase', letterSpacing: '0.07em',
                        background: C.surfaceAlt, whiteSpace: 'nowrap',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <motion.tr
                      key={lead._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.015 }}
                      style={{ borderBottom: `1px solid ${C.border}`, transition: 'background 0.1s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={{ padding: '14px 16px', color: C.text, fontWeight: 500 }}>
                        {lead.fullName}
                      </td>
                      <td style={{ padding: '14px 16px', color: C.textSub }}>
                        <a href={`mailto:${lead.email}`} style={{ color: C.gold, textDecoration: 'none' }}>
                          {lead.email}
                        </a>
                      </td>
                      <td style={{ padding: '14px 16px', color: C.textSub, whiteSpace: 'nowrap' }}>
                        {lead.countryCode} {lead.phone}
                      </td>
                      <td style={{ padding: '14px 16px', color: C.textSub, whiteSpace: 'nowrap' }}>
                        {lead.service}
                      </td>
                      <td style={{ padding: '14px 16px', color: C.textSub, whiteSpace: 'nowrap' }}>
                        {lead.country}
                      </td>
                      <td style={{ padding: '14px 16px' }}>
                        <StatusBadge status={lead.status} />
                      </td>
                      <td style={{ padding: '14px 16px', color: C.textMuted, whiteSpace: 'nowrap' }}>
                        {formatDate(lead.createdAt)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px', marginTop: '20px',
          }}>
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '7px 14px', borderRadius: '8px',
                border: `1px solid ${C.border}`,
                background: page === 1 ? 'transparent' : C.surface,
                color: page === 1 ? C.textMuted : C.text,
                cursor: page === 1 ? 'not-allowed' : 'pointer', fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <span style={{ fontSize: '13px', color: C.textMuted }}>
              Page {page} / {pagination.pages}
            </span>
            <button
              disabled={page === pagination.pages}
              onClick={() => setPage(p => p + 1)}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '7px 14px', borderRadius: '8px',
                border: `1px solid ${C.border}`,
                background: page === pagination.pages ? 'transparent' : C.surface,
                color: page === pagination.pages ? C.textMuted : C.text,
                cursor: page === pagination.pages ? 'not-allowed' : 'pointer', fontSize: '13px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}

      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
