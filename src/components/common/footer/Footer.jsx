import React, { useRef, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import Quote from '../../pages/contact/Quote'
import FooterStyles from './Footer.styles'
import { useIntersectionObserverAnimation } from '../../../utils/hooks/useIntersectionObserverAnimation'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const footerRef = useRef()
  const classes = useStyles()

  const observer = useIntersectionObserverAnimation()

  useEffect(() => {
    observer.observe(footerRef.current)
  }, [])

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
