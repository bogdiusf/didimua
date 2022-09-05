import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../../shared/styles/PageContainer.styles'

const useStyles = createUseStyles(PageContainerStyles)

const About = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.pageContainer}>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
      <div>About</div>
    </div>
  )
}

export default About
