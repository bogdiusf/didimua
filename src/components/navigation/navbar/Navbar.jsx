import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import TextLoop from 'react-text-loop'
import { MdMenu } from 'react-icons/md'
import { Context } from '../../context/Context'
import Sidebar from '../sidebar/Sidebar'
import NavbarStyles from './Navbar.styles'
import brandLogo from '../../../assets/1717679-200.png'

const useStyles = createUseStyles(NavbarStyles)

const Navbar = () => {
  const { isSidebarToggled, handleSidebar } = useContext(Context)

  const navigateTo = useNavigate()

  const classes = useStyles({ isSidebarToggled })

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
            <div>Diana Mua</div>
            <TextLoop
              springConfig={{ stiffness: 180, damping: 8 }}
              adjustingSpeed={1000}
            >
              <span>
                Perfection as <br />
                make up
              </span>
              <span>Love of beauty</span>
            </TextLoop>
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
        isSidebarToggled={isSidebarToggled}
      />
    </>
  )
}

export default Navbar
