import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const API_URL = import.meta.env.VITE_API_URL || 'https://vistaarimmigration.onrender.com'

// Wake the Render server immediately on first load (free tier cold-start fix)
// Then keep it alive with a ping every 14 minutes while the user is on the site
function useWakeServer() {
  useEffect(() => {
    const ping = () =>
      fetch(`${API_URL}/health`, { method: 'GET', mode: 'cors' }).catch(() => {})
    ping()
    const id = setInterval(ping, 14 * 60 * 1000)
    return () => clearInterval(id)
  }, [])
}

export default function Layout() {
  useWakeServer()

  return (
    <div style={{ background: '#F8FAFC' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}