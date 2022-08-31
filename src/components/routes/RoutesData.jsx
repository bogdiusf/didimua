import { lazy } from 'react'

const Homepage = lazy(() => import('../pages/homepage/Homepage'))
const MyWork = lazy(() => import('../pages/my-work/Work'))
const AboutMe = lazy(() => import('../pages/about-me/About'))
// const ContactUsPage = lazy(() => import('../pages/contact/ContactUsPage'))
// const NotFoundPage = lazy(() => import('../pages/not-found/NotFoundPage'))

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
  // {
  //   path: '/contact-us',
  //   component: ContactUsPage
  // },
  // {
  //   path: '*',
  //   component: NotFoundPage
  // }
]

export { routes }
