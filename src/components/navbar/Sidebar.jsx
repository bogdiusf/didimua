import React from 'react'
import { createUseStyles } from 'react-jss'
import SidebarStyles from './Sidebar.styles'

// import { useRef } from 'react'
// import OutsideClick from '../services/outsideClick'

import { MdClose } from 'react-icons/md'

const useStyles = createUseStyles(SidebarStyles)

const Sidebar = (props) => {
  const { handleSidebar, isNavbarToggled } = props

  // TODO: Deal with closing sidebar when clicking outside
  // const sidebarRef = useRef(null)
  // const outsideSidebarClick = OutsideClick(sidebarRef)

  // outsideSidebarClick ? handleSidebar() : null

  // ---------------------------------------------------------------- //

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.sidebar}>
      <MdClose className={classes.closeIcon} onClick={handleSidebar} />
    </div>
  )
}

export default Sidebar
