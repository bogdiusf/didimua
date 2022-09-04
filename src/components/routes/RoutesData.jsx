import { lazy, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../context/Context'

function RoutesData() {
  const Homepage = lazy(() => import('../pages/homepage/Homepage'))
  const MyWork = lazy(() => import('../pages/work/Work'))
  const AboutMe = lazy(() => import('../pages/about/About'))
  const ContactMe = lazy(() => import('../pages/contact/Contact'))
  const _404 = lazy(() => import('../pages/not-found/404'))

  const routes = [
    {
      path: '/',
      component: <Homepage />
    },
    {
      path: '/work',
      component: <MyWork />
    },
    {
      path: '/about',
      component: <AboutMe />
    },
    {
      path: '/contact',
      component: <ContactMe />
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
