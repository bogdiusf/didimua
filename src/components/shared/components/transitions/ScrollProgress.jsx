import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = ({ className }) => {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className={className} />
  )
}

export default ScrollProgress
