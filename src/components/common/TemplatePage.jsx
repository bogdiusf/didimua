import React from 'react'
import { createUseStyles } from 'react-jss'
import { PageContainerStyles } from '../shared/styles/PageContainer.styles'
import { MdArrowCircleUp } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Footer from './footer/Footer'
import ScrollProgress from '../shared/components/transitions/ScrollProgress'
import ElementSpringMotion from '../shared/components/transitions/ElementSpringMotion'

import { motion } from 'framer-motion'

const useStyles = createUseStyles(PageContainerStyles)

const TemplatePage = ({ header, main }) => {
  const isSidebarToggled = useSelector((state) => state.isSidebarToggled)
  const classes = useStyles({ isSidebarToggled })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ScrollProgress className={classes.scrollYProgress} />
      <div className={classes.pageContainer}>
        {header}
        {main}
        <ElementSpringMotion
          className={classes.scrollToTopButton}
          event={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <MdArrowCircleUp />
        </ElementSpringMotion>
        <Footer />
      </div>
    </motion.div>
  )
}

export default TemplatePage
