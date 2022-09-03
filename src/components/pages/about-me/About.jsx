import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import AboutStyles from './About.styles'

const useStyles = createUseStyles(AboutStyles)

const About = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.aboutContainer}>
      <div>About</div>
    </div>
  )
}

export default About
