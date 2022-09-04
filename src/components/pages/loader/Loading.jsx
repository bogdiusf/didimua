import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { createUseStyles } from 'react-jss'
import LoadingStyles from './Loading.styles'
import brandLogo from '../../../assets/diana_logo_whitebg.svg'

const useStyles = createUseStyles(LoadingStyles)

const Loading = () => {
  const { isSidebarToggled } = useContext(Context)

  const classes = useStyles({ isSidebarToggled })

  return (
    <div className={classes.loadingContainer}>
      <img src={brandLogo} className={classes.loadingLogo} />
    </div>
  )
}

export default Loading
