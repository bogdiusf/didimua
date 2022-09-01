import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import HomepageStyles from './Homepage.styles'

const useStyles = createUseStyles(HomepageStyles)

function Homepage() {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.homepageContainer}>
      <div>Homepage</div>
    </div>
  )
}

export default Homepage
