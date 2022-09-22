import React from 'react'
import { motion } from 'framer-motion'

const LeftSlideIn = ({ children }) => {
  const slideInVariants = {
    offscreen: {
      x: '-100vw',
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        stiffness: 50,
        duration: 2
      }
    }
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
    >
      <motion.div variants={slideInVariants}>{children}</motion.div>
    </motion.div>
  )
}

export default LeftSlideIn
