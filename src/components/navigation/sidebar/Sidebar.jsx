import React, { useRef, useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { MdClose } from 'react-icons/md'
import Links from '../../shared/navigation/Links'
import { useLockBodyOverflow } from '../../utils/hooks/useLockBodyOverflow'
// import { useDetectOutsideClick } from '../../utils/hooks/useDetectOutsideClick'
import SidebarStyles from './Sidebar.styles'

const useStyles = createUseStyles(SidebarStyles)

const Sidebar = ({ handleSidebar, isSidebarToggled }) => {
  const sidebarRef = useRef(null)

  const classes = useStyles({ isSidebarToggled })

  // if (useDetectOutsideClick(sidebarRef)) {
  //   const handleSidebarPromise = new Promise((resolve) => {
  //     resolve()
  //   })
  //   handleSidebarPromise.then(handleSidebar())
  // }

  useLockBodyOverflow(isSidebarToggled)

  return (
    <div className={classes.sidebar} ref={sidebarRef}>
      <MdClose className={classes.closeIcon} onClick={handleSidebar} />
      <Links
        wrapperClass={classes.sidebarLinks}
        isSidebarToggled={isSidebarToggled}
        handleSidebar={handleSidebar}
      />
    </div>
  )
}

export default Sidebar
