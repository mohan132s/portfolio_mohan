"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tech: string[]
    image: string
    color: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-pink-500 transition-colors h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />

        {/* Gradient overlay with project color */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-600/30 opacity-0 group-hover:opacity-60 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-800/70 rounded-full text-xs border border-gray-700 group-hover:border-pink-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="#" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 group">
            <Github className="w-4 h-4" />
            <span className="relative">
              Code
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          <Link href="#" className="text-pink-400 hover:text-pink-300 flex items-center gap-1 group">
            <ExternalLink className="w-4 h-4" />
            <span className="relative">
              Live Demo
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
        </div>
      </div>

      {/* Hover effect corner decoration */}
      <div className="absolute top-0 left-0 w-20 h-20 -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <div className="absolute bottom-0 right-0 w-10 h-10 border-t-2 border-l-2 border-pink-500" />
      </div>

      <div className="absolute bottom-0 right-0 w-20 h-20 translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <div className="absolute top-0 left-0 w-10 h-10 border-b-2 border-r-2 border-pink-500" />
      </div>
    </motion.div>
  )
}

