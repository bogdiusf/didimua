import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { useLockNavScroll } from '../../../../utils/hooks/useLockNavScroll'
import { useScrollToTop } from '../../../../utils/hooks/useScrollToTop'
import TextLoop from 'react-text-loop'
import { MdMenu } from 'react-icons/md'
import Sidebar from '../sidebar/Sidebar'
import Links from '../../../shared/components/navigation/Links'
import NavbarStyles from './Navbar.styles'
import brandLogo from '../../../../assets/1717679-200.png'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../../redux/actions'

import { motion } from 'framer-motion'

const useStyles = createUseStyles(NavbarStyles)

const Navbar = () => {
  const currentPath = useLocation()
  const dispatch = useDispatch()
  const navigateTo = useNavigate()
  const { isSidebarToggled, isComponentSticky } = useSelector((state) => state)
  const { toggleSidebar, triggerComponentStickiness } = bindActionCreators(
    actions,
    dispatch
  )

  useLockNavScroll(triggerComponentStickiness)

  const classes = useStyles({ isSidebarToggled, isComponentSticky })

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navLeftSide}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            onClick={() => navigateTo('/')}
          >
            <img
              src={brandLogo}
              className={classes.brandLogo}
              alt="brand-logo"
            />
          </motion.div>
          <div className={classes.logoText}>
            <div>Diana Mua</div>
            <TextLoop
              springConfig={{ stiffness: 110, damping: 5 }}
              adjustingSpeed={2000}
            >
              <span className={classes.animatingText}>
                Perfection
                <br />
                as make up
              </span>
              <span className={classes.animatingText}>
                Love, beauty
                <br />
                passion
              </span>
            </TextLoop>
          </div>
        </div>
        <div className={classes.navRightSide}>
          <Links wrapperClass={classes.navLinks} path={currentPath.pathname} />
          <MdMenu
            onClick={() => {
              toggleSidebar()
              useScrollToTop()
            }}
            className={classes.menuIcon}
          />
        </div>
      </nav>

      <Sidebar
        toggleSidebar={toggleSidebar}
        isSidebarToggled={isSidebarToggled}
      />
    </>
  )
}

export default Navbar
