import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './RoutesData'
import Navbar from '../navbar/Navbar'

export default function NavbarRoutes() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Fallback component - spinner</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  )
}
