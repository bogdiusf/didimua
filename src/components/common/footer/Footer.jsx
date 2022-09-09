import React, { useRef, useEffect, useContext } from 'react'
import { createUseStyles } from 'react-jss'
import Quote from '../../pages/contact/Quote'
import FooterStyles from './Footer.styles'
import { useIntersectionObserverAnimation } from '../../../utils/hooks/useIntersectionObserverAnimation'

import { Context } from '../../context/Context'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const footerRef = useRef()

  const { isElementVisible, setIsElementVisibleCallback } = useContext(Context)

  useIntersectionObserverAnimation(setIsElementVisibleCallback, footerRef)

  const classes = useStyles({ isElementVisible })

  return (
    <footer className={classes.footerContainer} ref={footerRef}>
      <div className={classes.footerQuote}>
        <Quote />
      </div>
      <div className={classes.footer}>Footer</div>
    </footer>
  )
}

export default Footer
