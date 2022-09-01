import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import WorkStyles from './Work.styles'

const useStyles = createUseStyles(WorkStyles)

const Work = () => {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.workContainer}>
      <div>My work</div>
    </div>
  )
}

export default Work
