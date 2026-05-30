import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import StudyVisa from '../pages/study-visa/StudyVisa'
import CountryDetail from '../pages/study-visa/CountryDetail'
import WorkVisa from '../pages/work-visa/WorkVisa'
import WorkVisaDetail from '../pages/work-visa/WorkVisaDetail'
import SchengenVisa from '../pages/schengen-visa/SchengenVisa'
import VisitorVisa from '../pages/visitor-visa/VisitorVisa'
import Blog from '../pages/blog/Blog'
import BlogPost from '../pages/blog/BlogPost'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Cookies from '../pages/Cookies'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'about', element: <About /> },
      { path: 'study-visa', element: <StudyVisa /> },
      { path: 'study-visa/:countryId', element: <CountryDetail /> },
      { path: 'work-visa', element: <WorkVisa /> },
      { path: 'work-visa/:visaId', element: <WorkVisaDetail /> },
      { path: 'schengen-visa', element: <SchengenVisa /> },
      { path: 'visitor-visa', element: <VisitorVisa /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'terms', element: <Terms /> },
      { path: 'cookies', element: <Cookies /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])
