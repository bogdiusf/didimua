import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import RoutesData from '../../../routes/RoutesData'
import { createUseStyles } from 'react-jss'
import { defaultLinkStyles } from './Links.styles'

import { MdHome, MdArrowForwardIos } from 'react-icons/md'

const useStyles = createUseStyles(defaultLinkStyles)

const Links = ({ wrapperClass, isSidebarToggled = false, toggleSidebar }) => {
  const classes = useStyles({ isSidebarToggled })

  const navigateTo = useNavigate()
  const currentLocation = useLocation()

  const handleLinkClick = (path) => {
    navigateTo(path)
    isSidebarToggled && toggleSidebar()
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
          <MdHome />
          <span>home</span>
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
            {route.icon}
            {!isSidebarToggled && <MdArrowForwardIos />}
            {route.path === '/'
              ? '/home'
              : route.path.substring(1, route.path.length)}
          </div>
        )
      })}
    </div>
  )
}

export default Links
