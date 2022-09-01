import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import AboutStyles from './About.styles'

const useStyles = createUseStyles(AboutStyles)

const About = () => {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.aboutContainer}>
      <div>About</div>
    </div>
  )
}

export default About
