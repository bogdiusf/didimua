import React from 'react'
import { createUseStyles } from 'react-jss'
import SidebarStyles from './Sidebar.styles'
import Links from '../../shared/navigation/Links'

// import { useRef } from 'react'
// import OutsideClick from '../services/outsideClick'

import { MdClose } from 'react-icons/md'

const useStyles = createUseStyles(SidebarStyles)

const Sidebar = ({ handleSidebar, isSidebarToggled }) => {
  // TODO: Deal with closing sidebar when clicking outside
  // const sidebarRef = useRef(null)
  // const outsideSidebarClick = OutsideClick(sidebarRef)

  // outsideSidebarClick ? handleSidebar() : null

  // ---------------------------------------------------------------- //

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.sidebar}>
      <MdClose className={classes.closeIcon} onClick={handleSidebar} />
      <Links wrapperClass={classes.sidebarLinks} />
    </div>
  )
}

export default Sidebar
