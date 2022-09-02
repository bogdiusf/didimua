import React from 'react'
import { createUseStyles } from 'react-jss'
import FooterStyles from './Footer.styles'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const classes = useStyles()

  return <div className={classes.footerContainer}>Footer</div>
}

export default Footer
