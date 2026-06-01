/**
 * Route configuration with lazy-loaded pages.
 *
 * Each page is loaded only when the user navigates to it (code splitting).
 * This keeps the initial JS bundle small, speeding up first paint significantly.
 * The Suspense fallback is a lightweight spinner — no heavy component needed here.
 */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'

// ── Lazy imports ─────────────────────────────────────────────────────────────
const Home          = lazy(() => import('../pages/Home'))
const Contact       = lazy(() => import('../pages/Contact'))
const About         = lazy(() => import('../pages/About'))
const StudyVisa     = lazy(() => import('../pages/study-visa/StudyVisa'))
const CountryDetail = lazy(() => import('../pages/study-visa/CountryDetail'))
const WorkVisa      = lazy(() => import('../pages/work-visa/WorkVisa'))
const WorkVisaDetail = lazy(() => import('../pages/work-visa/WorkVisaDetail'))
const SchengenVisa  = lazy(() => import('../pages/schengen-visa/SchengenVisa'))
const VisitorVisa   = lazy(() => import('../pages/visitor-visa/VisitorVisa'))
const PRImmigration = lazy(() => import('../pages/PRImmigration'))
const Blog          = lazy(() => import('../pages/blog/Blog'))
const BlogPost      = lazy(() => import('../pages/blog/BlogPost'))
const Privacy       = lazy(() => import('../pages/Privacy'))
const Terms         = lazy(() => import('../pages/Terms'))
const Cookies       = lazy(() => import('../pages/Cookies'))
const NotFound      = lazy(() => import('../pages/NotFound'))

// ── Minimal page-transition fallback ─────────────────────────────────────────
// Shown while a lazy chunk is downloading (usually < 300 ms on good connection)
function PageLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F8FAFC',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '3px solid rgba(13,148,136,0.15)',
          borderTopColor: '#14B8A6',
          animation: 'spin 0.75s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ── Wrap every lazy page in Suspense ─────────────────────────────────────────
function Lazy({ element: El }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <El />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,                          element: <Lazy element={Home} /> },
      { path: 'contact',                      element: <Lazy element={Contact} /> },
      { path: 'about',                        element: <Lazy element={About} /> },
      { path: 'study-visa',                   element: <Lazy element={StudyVisa} /> },
      { path: 'study-visa/:countryId',        element: <Lazy element={CountryDetail} /> },
      { path: 'work-visa',                    element: <Lazy element={WorkVisa} /> },
      { path: 'work-visa/:visaId',            element: <Lazy element={WorkVisaDetail} /> },
      { path: 'schengen-visa',                element: <Lazy element={SchengenVisa} /> },
      { path: 'visitor-visa',                 element: <Lazy element={VisitorVisa} /> },
      { path: 'pr-immigration',               element: <Lazy element={PRImmigration} /> },
      { path: 'blog',                         element: <Lazy element={Blog} /> },
      { path: 'blog/:slug',                   element: <Lazy element={BlogPost} /> },
      { path: 'privacy',                      element: <Lazy element={Privacy} /> },
      { path: 'terms',                        element: <Lazy element={Terms} /> },
      { path: 'cookies',                      element: <Lazy element={Cookies} /> },
      { path: '*',                            element: <Lazy element={NotFound} /> },
    ],
  },
])
