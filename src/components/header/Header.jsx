import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import HeaderStyles from './Header.styles'
import { Context } from '../context/Context'

const useStyles = createUseStyles(HeaderStyles)

const Header = () => {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.headerContainer}>
      <div>Header</div>
    </div>
  )
}

export default Header
