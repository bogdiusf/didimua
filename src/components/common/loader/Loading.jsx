import React from 'react'
import { createUseStyles } from 'react-jss'
import LoadingStyles from './Loading.styles'
import brandLogo from '../../../assets/diana_logo_whitebg.svg'

const useStyles = createUseStyles(LoadingStyles)

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.loadingContainer}>
      <img src={brandLogo} className={classes.loadingLogo} />
    </div>
  )
}

export default Loading
