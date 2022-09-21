import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import { MdClose } from 'react-icons/md'
import Links from '../../../shared/components/navigation/Links'
import { useLockBodyOverflow } from '../../../../utils/hooks/useLockBodyOverflow'
// import { useDetectOutsideClick } from '../../utils/hooks/useDetectOutsideClick'
import SidebarStyles from './Sidebar.styles'

const useStyles = createUseStyles(SidebarStyles)

const Sidebar = ({ toggleSidebar, isSidebarToggled }) => {
  const sidebarRef = useRef(null)

  // if (useDetectOutsideClick(sidebarRef)) {
  //   const handleSidebarPromise = new Promise((resolve) => {
  //     resolve()
  //   })
  //   handleSidebarPromise.then(handleSidebar())
  // }

  useLockBodyOverflow(isSidebarToggled)
  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.sidebar} ref={sidebarRef}>
      <MdClose className={classes.closeIcon} onClick={toggleSidebar} />
      <Links
        wrapperClass={classes.sidebarLinks}
        isSidebarToggled={isSidebarToggled}
        toggleSidebar={toggleSidebar}
      />
    </div>
  )
}

export default Sidebar
