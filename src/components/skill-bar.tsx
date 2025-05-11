"use client"

import { motion } from "framer-motion"

interface SkillBarProps {
  skill: {
    name: string
    level: number
  }
  index: number
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-pink-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden p-0.5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5 + index * 0.2,
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}

