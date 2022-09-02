import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import LoadingStyles from './Loading.styles'

const useStyles = createUseStyles(LoadingStyles)

const Loading = () => {
  const { isNavbarToggled } = useContext(Context)

  const classes = useStyles({ isNavbarToggled })

  return (
    <div className={classes.loadingContainer}>
      <div>Loading...</div>
    </div>
  )
}

export default Loading
