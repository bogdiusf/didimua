import React, { useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import Quote from '../../pages/contact/Quote'
import FooterStyles from './Footer.styles'
import { useIntersectionObserverAnimation } from '../../../utils/hooks/useIntersectionObserverAnimation'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const [isFooterVisibile, setIsFooterVisibile] = useState(false)

  const footerRef = useRef()

  useIntersectionObserverAnimation(setIsFooterVisibile, [footerRef], 0.5)

  const classes = useStyles({ isFooterVisibile })

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
