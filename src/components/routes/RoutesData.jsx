import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { MdHome, MdWork, MdInfo, MdContactPage } from 'react-icons/md'

function RoutesData() {
  const Homepage = lazy(() => import('../pages/homepage/Homepage'))
  const MyWork = lazy(() => import('../pages/work/Work'))
  const AboutMe = lazy(() => import('../pages/about/About'))
  const ContactMe = lazy(() => import('../pages/contact/Contact'))
  const _404 = lazy(() => import('../pages/not-found/404'))

  const routes = [
    {
      path: '/',
      component: <Homepage />,
      icon: <MdHome />
    },
    {
      path: '/work',
      component: <MyWork />,
      icon: <MdWork />
    },
    {
      path: '/about',
      component: <AboutMe />,
      icon: <MdInfo />
    },
    {
      path: '/contact',
      component: <ContactMe />,
      icon: <MdContactPage />
    },
    {
      path: '/page-not-found',
      component: <_404 />
    },
    {
      path: '*',
      component: <Navigate to="/page-not-found" />
    }
  ]

  return routes
}

export default RoutesData
