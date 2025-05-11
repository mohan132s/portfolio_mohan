"use client"
import { motion } from "framer-motion"

export default function FloatingParticles() {
  // Create an array of particles with random positions
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.5 + 0.3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
              Math.random() * 50 + 50,
            )}, ${Math.floor(Math.random() * 100 + 155)}, ${particle.opacity})`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
              Math.random() * 50 + 50,
            )}, ${Math.floor(Math.random() * 100 + 155)}, ${particle.opacity})`,
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 20 - 10)}%`,
              `${particle.x - (Math.random() * 20 - 10)}%`,
              `${particle.x}%`,
            ],
            y: [
              `${particle.y}%`,
              `${particle.y - (Math.random() * 20 - 10)}%`,
              `${particle.y + (Math.random() * 20 - 10)}%`,
              `${particle.y}%`,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
