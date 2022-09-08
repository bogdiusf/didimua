import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import Quote from '../../pages/contact/Quote'
import FooterStyles from './Footer.styles'
import { useInView } from 'react-intersection-observer'

const useStyles = createUseStyles(FooterStyles)

const Footer = () => {
  const { ref: footerRef, inView: isFooterVisible } = useInView({
    threshold: 0.5
  })
  const classes = useStyles({ isFooterVisible })

  console.log(isFooterVisible)

  return (
    <footer
      className={classes.footerContainer}
      ref={footerRef}
      style={{ visibility: isFooterVisible ? 'visible' : 'hidden' }}
    >
      <div className={classes.footerQuote}>
        <Quote />
      </div>
      <div className={classes.footer}>Footer</div>
    </footer>
  )
}

export default Footer
