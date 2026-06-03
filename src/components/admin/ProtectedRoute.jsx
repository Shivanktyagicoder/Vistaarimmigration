import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('admin_token')

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (Date.now() / 1000 > payload.exp) {
      localStorage.removeItem('admin_token')
      return <Navigate to="/admin/login" replace />
    }
  } catch {
    localStorage.removeItem('admin_token')
    return <Navigate to="/admin/login" replace />
  }

  return children
}
