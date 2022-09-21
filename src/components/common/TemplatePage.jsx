import React from 'react'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../shared/styles/PageContainer.styles'

import { useSelector } from 'react-redux'

import { motion, useScroll } from 'framer-motion'

const useStyles = createUseStyles(PageContainerStyles)

import Footer from './footer/Footer'

const TemplatePage = ({ header, main }) => {
  const { scrollYProgress } = useScroll()
  const isSidebarToggled = useSelector((state) => state.toggleSidebar)
  const classes = useStyles({ isSidebarToggled })

  return (
    <>
      <motion.div
        className={classes.scrollYProgress}
        style={{ scaleX: scrollYProgress }}
      />
      <div className={classes.pageContainer}>
        {header}
        {main}
        <button
          // test button
          style={{ position: 'fixed', right: 100, top: '70%', zIndex: 10000 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Ready to go back to top? {':)'}
        </button>
        <Footer />
      </div>
    </>
  )
}

export default TemplatePage
