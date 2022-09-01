import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { Context } from '../context/Context'
import Sidebar from './Sidebar'
import brandLogo from '../../assets/1717679-200.png'
import NavbarStyles from './Navbar.styles'

import { Link, useNavigate } from 'react-router-dom'

import { MdMenu } from 'react-icons/md'

const useStyles = createUseStyles(NavbarStyles)

const Navbar = () => {
  const { isNavbarToggled, handleSidebar } = useContext(Context)

  const navigateTo = useNavigate()

  const classes = useStyles({ isNavbarToggled })

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navLeftSide}>
          <img
            src={brandLogo}
            className={classes.brandLogo}
            alt="brand-logo"
            onClick={() => navigateTo('/')}
          />
          <div>
            <span>Diana Mua</span>
            <span>Perfection as make up</span>
          </div>
        </div>
        <div className={classes.navRightSide}>
          <div className={classes.links}>
            <Link to="/my-work">My work</Link>
            <Link to="/about-me">About me</Link>
          </div>
          <MdMenu onClick={handleSidebar} />
        </div>
      </nav>

      <Sidebar
        handleSidebar={handleSidebar}
        isNavbarToggled={isNavbarToggled}
      />
    </>
  )
}

export default Navbar
