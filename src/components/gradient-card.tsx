"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GradientCardProps {
  item: {
    number: string
    label: string
    icon: ReactNode
  }
  index: number
}

export default function GradientCard({ item, index }: GradientCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors group relative overflow-hidden"
      whileHover={{ y: -8, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      {/* Gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center gap-3 mb-2 relative z-10">
        <div className="p-2 rounded-full bg-gray-800 group-hover:bg-pink-500/20 transition-colors">{item.icon}</div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
          {item.number}
        </h3>
      </div>
      <p className="text-gray-400 relative z-10">{item.label}</p>

      {/* Corner decoration */}
      <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}
