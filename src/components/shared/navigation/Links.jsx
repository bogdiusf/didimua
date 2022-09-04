import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import RoutesData from '../../routes/RoutesData'
import { createUseStyles } from 'react-jss'
import { defaultLinkStyles } from './Links.styles'

const useStyles = createUseStyles(defaultLinkStyles)

const Links = ({
  wrapperClass,
  setIsSidebarToggledCallback,
  isSidebarToggled = false
}) => {
  const classes = useStyles()

  const navigateTo = useNavigate()
  const currentLocation = useLocation()

  const handleLinkClick = (path) => {
    navigateTo(path)
    // isSidebarToggled ? setIsSidebarToggledCallback(false) : null
  }

  const filteredRoutesArray = RoutesData().filter(
    (route) =>
      route.path !== '*' &&
      route.path !== '/page-not-found' &&
      route.path !== '/'
  )

  return (
    <div className={wrapperClass}>
      {isSidebarToggled && (
        <div
          onClick={() => handleLinkClick('/')}
          className={
            currentLocation.pathname === '/'
              ? `${classes.defaultLink} ${classes.focusedLink}`
              : classes.defaultLink
          }
        >
          {'/home'}
        </div>
      )}
      {filteredRoutesArray.map((route, index) => {
        const activeLinkClass =
          route.path === currentLocation.pathname ? classes.focusedLink : null
        return (
          <div
            key={index}
            onClick={() => handleLinkClick(route.path)}
            className={`${classes.defaultLink} ${activeLinkClass}`}
          >
            {route.path === '/' ? '/home' : route.path}
          </div>
        )
      })}
    </div>
  )
}

export default Links
