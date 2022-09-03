import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { useLockNavScroll } from '../../utils/hooks/useLockNavScroll'
import TextLoop from 'react-text-loop'
import { MdMenu } from 'react-icons/md'
import { Context } from '../../context/Context'
import Sidebar from '../sidebar/Sidebar'
import Links from '../../shared/navigation/Links'
import NavbarStyles from './Navbar.styles'
import brandLogo from '../../../assets/1717679-200.png'

const useStyles = createUseStyles(NavbarStyles)

const Navbar = () => {
  const { isSidebarToggled, setIsSidebarToggled, handleSidebar } =
    useContext(Context)
  const [isNavSticky, setIsNavSticky] = useState(false)

  useLockNavScroll(setIsNavSticky)

  const navigateTo = useNavigate()

  const classes = useStyles({ isSidebarToggled, isNavSticky })

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
          <Links
            wrapperClass={classes.navLinks}
            setIsSidebarToggled={setIsSidebarToggled}
          />
          <MdMenu onClick={handleSidebar} className={classes.menuIcon} />
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
