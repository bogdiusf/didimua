import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutesData from './RoutesData'
import Navbar from '../navbar/Navbar'
import CustomRoute from './CustomRoute'

export default function NavbarRoutes() {
  return (
    <>
      <Navbar />
      <Suspense>
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
      </Suspense>
    </>
  )
}
