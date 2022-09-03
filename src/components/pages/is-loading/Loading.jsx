import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import LoadingStyles from './Loading.styles'

const useStyles = createUseStyles(LoadingStyles)

const Loading = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.loadingContainer}>
      <div>Loading...</div>
    </div>
  )
}

export default Loading
