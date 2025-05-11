"use client"

import { motion } from "framer-motion"

interface HoverCardProps {
  text: string
  index: number
}

export default function HoverCard({ text, index }: HoverCardProps) {
  return (
    <motion.div
      className="px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-pink-500 transition-colors relative overflow-hidden group"
      whileHover={{ y: -5, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      viewport={{ once: true }}
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-purple-500/30 to-pink-600/30" />

      <span className="relative z-10 font-medium">{text}</span>
    </motion.div>
  )
}
