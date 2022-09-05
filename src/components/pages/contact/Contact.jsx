import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import GMap from '../../google-map/GMap'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../../shared/styles/PageContainer.styles'

const useStyles = createUseStyles(PageContainerStyles)

const Contact = () => {
  const { isSidebarToggled } = useContext(Context)
  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.pageContainer}>
      <GMap />
    </div>
  )
}

export default Contact
