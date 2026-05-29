import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
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