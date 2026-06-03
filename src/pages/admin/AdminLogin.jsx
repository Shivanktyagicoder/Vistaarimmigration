import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, User, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || 'https://vistaarimmigration.onrender.com'

const C = {
  bg:         '#080D1A',
  surface:    '#0F1629',
  border:     '#1E2A45',
  borderFocus:'#C9A84C',
  gold:       '#C9A84C',
  goldLight:  '#E8C96B',
  text:       '#F1F5F9',
  textMuted:  '#64748B',
  error:      '#F87171',
  errorBg:    '#1A0A0A',
}

export default function AdminLogin() {
  const navigate    = useNavigate()
  const [username,  setUsername]  = useState('')
  const [password,  setPassword]  = useState('')
  const [showPass,  setShowPass]  = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState(null)
  const [userFocus, setUserFocus] = useState(false)
  const [passFocus, setPassFocus] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim() || !password) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'Login failed.')
      localStorage.setItem('admin_token', data.token)
      navigate('/admin/crm', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputWrap = (focused) => ({
    display: 'flex', alignItems: 'center', gap: '10px',
    height: '48px', padding: '0 14px', borderRadius: '10px',
    background: '#0A1020',
    border: `1.5px solid ${focused ? C.borderFocus : C.border}`,
    boxShadow: focused ? `0 0 0 3px rgba(201,168,76,0.12)` : 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  })

  const inputStyle = {
    flex: 1, background: 'transparent', border: 'none', outline: 'none',
    fontFamily: 'Inter, sans-serif', fontSize: '14px', color: C.text,
  }

  const labelStyle = {
    display: 'block', fontSize: '12px', fontWeight: 600,
    color: C.textMuted, marginBottom: '8px',
    textTransform: 'uppercase', letterSpacing: '0.08em',
  }

  return (
    <div style={{
      minHeight: '100vh', background: C.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px', fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%', maxWidth: '420px',
          background: C.surface,
          border: `1px solid ${C.border}`,
          borderRadius: '20px', padding: '40px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)',
          position: 'relative', zIndex: 1,
        }}
      >
        <div style={{
          height: '3px',
          background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`,
          borderRadius: '3px', marginBottom: '32px',
        }} />

        <div style={{
          width: '52px', height: '52px', borderRadius: '14px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <Lock size={22} color={C.gold} />
        </div>

        <h1 style={{
          fontFamily: 'Poppins, sans-serif', fontSize: '22px', fontWeight: 700,
          color: C.text, marginBottom: '6px', letterSpacing: '-0.02em',
        }}>Admin Portal</h1>
        <p style={{ fontSize: '13.5px', color: C.textMuted, marginBottom: '32px', lineHeight: 1.6 }}>
          Vistaar Immigration — CRM Access
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            <div>
              <label style={labelStyle}>Username</label>
              <div style={inputWrap(userFocus)}>
                <User size={15} color={userFocus ? C.gold : C.textMuted} />
                <input
                  className="admin-input"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="Enter username"
                  autoComplete="username"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Password</label>
              <div style={inputWrap(passFocus)}>
                <Lock size={15} color={passFocus ? C.gold : C.textMuted} />
                <input
                  className="admin-input"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setPassFocus(true)}
                  onBlur={() => setPassFocus(false)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(s => !s)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '4px', color: C.textMuted,
                    display: 'flex', alignItems: 'center',
                  }}
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 14px', borderRadius: '10px',
                    background: C.errorBg, border: '1px solid rgba(248,113,113,0.25)',
                  }}
                >
                  <AlertCircle size={15} color={C.error} />
                  <p style={{ fontSize: '13px', color: C.error, lineHeight: 1.5 }}>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              disabled={loading || !username || !password}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              style={{
                width: '100%', height: '50px', borderRadius: '12px', border: 'none',
                background: (loading || !username || !password)
                  ? '#1E2A45'
                  : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                color: (loading || !username || !password) ? C.textMuted : '#0A0F1E',
                fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 700,
                cursor: (loading || !username || !password) ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: (loading || !username || !password) ? 'none' : '0 4px 20px rgba(201,168,76,0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              {loading
                ? <><Loader2 size={17} style={{ animation: 'spin 1s linear infinite' }} /> Signing in...</>
                : 'Sign In to CRM'}
            </motion.button>

          </div>
        </form>

        <p style={{
          textAlign: 'center', fontSize: '11px', color: C.textMuted,
          marginTop: '24px', lineHeight: 1.7,
        }}>
          Restricted access — authorised personnel only.
        </p>
      </motion.div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
