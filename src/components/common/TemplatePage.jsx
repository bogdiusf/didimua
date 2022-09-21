import React from 'react'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../shared/styles/PageContainer.styles'
import { MdArrowCircleUp } from 'react-icons/md'

import { useSelector } from 'react-redux'

import { motion, useScroll } from 'framer-motion'

const useStyles = createUseStyles(PageContainerStyles)

import Footer from './footer/Footer'

const TemplatePage = ({ header, main }) => {
  const { scrollYProgress } = useScroll()
  const isSidebarToggled = useSelector((state) => state.isSidebarToggled)
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
        <motion.div
          // test button
          className={classes.floatingButton}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <MdArrowCircleUp />
        </motion.div>
        <Footer />
      </div>
    </>
  )
}

export default TemplatePage
