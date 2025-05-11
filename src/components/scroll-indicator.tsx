"use client"

import { motion } from "framer-motion"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{
        y: [0, 10, 0],
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
    >
      <div className="w-8 h-14 rounded-full border-2 border-pink-500/50 flex justify-center pt-2">
        <motion.div
          className="w-1 h-2 bg-pink-500 rounded-full"
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </div>
    </motion.div>
  )
}
