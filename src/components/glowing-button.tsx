"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  fullWidth?: boolean
}

export default function GlowingButton({ children, fullWidth = false }: GlowingButtonProps) {
  return (
    <motion.button
      className={`relative group overflow-hidden ${
        fullWidth ? "w-full" : ""
      } bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium px-8 py-6 rounded-full text-lg shadow-[0_5px_15px_rgba(236,72,153,0.4)]`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </motion.button>
  )
}
