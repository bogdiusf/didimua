import { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import RoutesData from './RoutesData'
import Navbar from '../navbar/Navbar'
import Loading from '../pages/is-loading/Loading'
import CustomRoute from './CustomRoute'

export default function NavbarRoutes() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
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
