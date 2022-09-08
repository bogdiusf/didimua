import React from 'react'
import { createUseStyles } from 'react-jss'
import Quote from '../../pages/contact/Quote'
import FooterStyles from './Footer.styles'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerQuote}>
        <Quote />
      </div>
      <div className={classes.footer}>Footer</div>
    </div>
  )
}

export default Footer
