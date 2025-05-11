"use client"

import { motion } from "framer-motion"

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Animated dots at intersections */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, rowIndex) =>
          Array.from({ length: 10 }).map((_, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className="absolute w-1 h-1 rounded-full bg-purple-500/30"
              style={{
                left: `${colIndex * 10}%`,
                top: `${rowIndex * 10}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: (rowIndex + colIndex) * 0.2,
              }}
            />
          )),
        )}
      </div>
    </div>
  )
}
