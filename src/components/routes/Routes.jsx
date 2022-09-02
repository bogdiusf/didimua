import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutesData from './RoutesData'
import Navbar from '../navigation/navbar/Navbar'
import CustomRoute from './CustomRoute'

import Header from '../header/Header'
import Footer from '../footer/Footer'

// const Footer = lazy(() => import('../footer/Footer'))
// const Header = lazy(() => import('../header/Header'))

export default function NavbarRoutes() {
  return (
    <>
      <Navbar />
      <Suspense>
        <Header />
        <Routes>
          {RoutesData().map((route, index) => (
            <Route
              exact
              path={route.path}
              key={index}
              element={
                <CustomRoute element={route.component} path={route.path} />
              }
            />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}
