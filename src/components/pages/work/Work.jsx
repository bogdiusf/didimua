import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import WorkStyles from './Work.styles'

const useStyles = createUseStyles(WorkStyles)

const Work = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.workContainer}>
      <div>My work</div>
    </div>
  )
}

export default Work
