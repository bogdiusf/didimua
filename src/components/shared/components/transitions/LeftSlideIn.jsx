import React from 'react'
import { motion } from 'framer-motion'

const LeftSlideIn = ({ children, delay = 0 }) => {
  const childrenVariants = {
    offscreen: {
      x: '-100vw',
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay
      }
    }
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
    >
      <motion.div variants={childrenVariants}>{children}</motion.div>
    </motion.div>
  )
}

export default LeftSlideIn
