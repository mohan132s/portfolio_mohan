"use client"

import { motion } from "framer-motion"

export default function AnimatedText() {
  return (
    <motion.div
      className="text-2xl md:text-3xl font-light mb-8 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <span className="mr-3">I create</span>
      <div className="h-12 overflow-hidden">
        <motion.div
          animate={{ y: [0, -120, -240, -360, 0] }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        >
          <div className="h-12 flex items-center text-gradient-animated">immersive experiences</div>
          <div className="h-12 flex items-center text-gradient-animated">stunning interfaces</div>
          <div className="h-12 flex items-center text-gradient-animated">scalable applications</div>
          <div className="h-12 flex items-center text-gradient-animated">innovative solutions</div>
        </motion.div>
      </div>
    </motion.div>
  )
}
