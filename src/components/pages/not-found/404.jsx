import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import _404Styles from './404.styles'

const useStyles = createUseStyles(_404Styles)

const _404 = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes._404Container}>
      <div>Page not found - check url</div>
    </div>
  )
}

export default _404
