import React from 'react'
import { motion } from 'framer-motion'

const ElementSpringMotion = ({ children, className, event }) => {
  return (
    <motion.div
      className={className}
      onClick={event}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}

export default ElementSpringMotion
