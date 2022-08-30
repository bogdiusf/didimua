import React, { useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Context } from '../context/Context'
import Sidebar from './Sidebar'
import brandLogo from '../../assets/1717679-200.png'
import NavbarStyles from './Navbar.styles'

import { MdMenu } from 'react-icons/md'

const useStyles = createUseStyles(NavbarStyles)

const Navbar = () => {
  const { isNavbarToggled, setIsNavbarToggled, handleSidebar } =
    useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navLeftSide}>
          <img src={brandLogo} className={classes.brandLogo} alt="brand-logo" />
          <div>
            <span>Diana Mua</span>
            <span>Perfection as make up</span>
          </div>
        </div>
        <MdMenu onClick={handleSidebar} className={classes.navRightSide} />
      </nav>
      <Sidebar
        handleSidebar={handleSidebar}
        isNavbarToggled={isNavbarToggled}
      />
      <div className={classes.bgLayerWhenToggled}></div>
    </>
  )
}

export default Navbar
