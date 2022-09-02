import { lazy } from 'react'

function RoutesData() {
  const Homepage = lazy(() => import('../pages/homepage/Homepage'))
  const MyWork = lazy(() => import('../pages/my-work/Work'))
  const AboutMe = lazy(() => import('../pages/about-me/About'))

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
    }
  ]

  return routes
}

export default RoutesData
