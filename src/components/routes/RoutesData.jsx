import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

function RoutesData() {
  const Homepage = lazy(() => import('../pages/homepage/Homepage'))
  const MyWork = lazy(() => import('../pages/my-work/Work'))
  const AboutMe = lazy(() => import('../pages/about-me/About'))
  const _404 = lazy(() => import('../pages/not-found/404'))

  const routes = [
    {
      path: '/',
      component: <Homepage />
    },
    {
      path: '/my-work',
      component: <MyWork />
    },
    {
      path: '/about-me',
      component: <AboutMe />
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
