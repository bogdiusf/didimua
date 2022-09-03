import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import SidebarStyles from './Sidebar.styles'
import Links from '../../shared/navigation/Links'

// import { useRef } from 'react'
// import OutsideClick from '../utils/hooks/useOutsideClick'

import { MdClose } from 'react-icons/md'

const useStyles = createUseStyles(SidebarStyles)

const Sidebar = ({ handleSidebar, isSidebarToggled }) => {
  // TODO: Deal with closing sidebar when clicking outside
  // const sidebarRef = useRef(null)
  // const outsideSidebarClick = OutsideClick(sidebarRef)

  // outsideSidebarClick ? handleSidebar() : null

  // ---------------------------------------------------------------- //

  const classes = useStyles({ isSidebarToggled })

  useEffect(() => {
    if (isSidebarToggled) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isSidebarToggled])

  return (
    <div className={classes.sidebar}>
      <MdClose className={classes.closeIcon} onClick={handleSidebar} />
      <Links
        wrapperClass={classes.sidebarLinks}
        isSidebarToggled={isSidebarToggled}
      />
    </div>
  )
}

export default Sidebar
