import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
