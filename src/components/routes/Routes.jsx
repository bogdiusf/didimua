import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutesData from './RoutesData'
import Navbar from '../common/navigation/navbar/Navbar'
import CustomRoute from './CustomRoute'
import { AnimatePresence } from 'framer-motion'

export default function NavbarRoutes() {
  return (
    <>
      <Navbar />
      <Suspense>
        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      </Suspense>
    </>
  )
}
