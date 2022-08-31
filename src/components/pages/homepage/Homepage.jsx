import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import HomepageStyles from './Homepage.styles'

const useStyles = createUseStyles(HomepageStyles)

function Homepage() {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return <div className={`homepage ${classes.homepage}`}>Homepage</div>
}

export default Homepage
