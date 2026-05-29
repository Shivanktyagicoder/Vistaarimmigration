import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import StudyVisa from '../pages/study-visa/StudyVisa'
import CountryDetail from '../pages/study-visa/CountryDetail'
import WorkVisa from '../pages/work-visa/WorkVisa'
import WorkVisaDetail from '../pages/work-visa/WorkVisaDetail'
import SchengenVisa from '../pages/schengen-visa/SchengenVisa'
import VisitorVisa from '../pages/visitor-visa/VisitorVisa'
import Blog from '../pages/blog/Blog'
import BlogPost from '../pages/blog/BlogPost'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <Contact /> },
      { path: 'study-visa', element: <StudyVisa /> },
      { path: 'study-visa/:countryId', element: <CountryDetail /> },
      { path: 'work-visa', element: <WorkVisa /> },
      { path: 'work-visa/:visaId', element: <WorkVisaDetail /> },
      { path: 'schengen-visa', element: <SchengenVisa /> },
      { path: 'visitor-visa', element: <VisitorVisa /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ]
  }
])
