import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import _404Styles from './404.styles'

const useStyles = createUseStyles(_404Styles)

const _404 = () => {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes._404Container}>
      <div>Page not found - check url</div>
    </div>
  )
}

export default _404
