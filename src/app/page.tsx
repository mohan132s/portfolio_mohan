"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Code,
  Github,
  Linkedin,
  Mail,
  Star,
  Zap,
  Award,
  Sparkles,
  User,
  Briefcase,
  Layers,
  Cpu,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import GlowingButton from "@/components/glowing-button"
import FloatingParticles from "@/components/floating-particles"
import GradientCard from "@/components/gradient-card"
import AnimatedText from "@/components/animated-text"
import HoverCard from "@/components/hover-card"
import SkillBar from "@/components/skill-bar"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import BackgroundGrid from "@/components/background-grid"
import ScrollIndicator from "@/components/scroll-indicator"

// Main portfolio component
export default function Portfolio() {
  // State for active section and scroll progress
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Refs for scroll animations
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll progress for animations
  const { scrollYProgress } = useScroll()
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Mouse position effect for spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Intersection observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Project data
  const projects = [
    {
      title: "Immersive 3D Portfolio",
      description: "A three.js powered portfolio with interactive 3D elements and WebGL effects.",
      tech: ["Three.js", "React", "WebGL", "GSAP"],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-emerald-500 to-teal-700",
    },
    {
      title: "AI Content Studio",
      description:
        "An application that leverages AI to generate marketing content, blog posts, and social media captions.",
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-violet-500 to-purple-700",
    },
    {
      title: "Collaborative Workspace",
      description: "A platform for teams to collaborate on documents, designs, and code in real-time.",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: "Health Analytics Dashboard",
      description:
        "A mobile-first application for tracking workouts, nutrition, and health metrics with visualization.",
      tech: ["React Native", "GraphQL", "Firebase", "D3.js"],
      image: "/placeholder.svg?height=600&width=800",
      color: "from-rose-500 to-pink-700",
    },
  ]

  // Skills data
  const frontendSkills = [
    { name: "JavaScript / TypeScript", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "HTML / CSS / Tailwind", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Three.js / WebGL", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js / Express", level: 85 },
    { name: "GraphQL / REST APIs", level: 80 },
    { name: "SQL / NoSQL Databases", level: 75 },
    { name: "AWS / Cloud Services", level: 70 },
    { name: "DevOps / CI/CD", level: 65 },
  ]

  return (
    <div ref={containerRef} className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,1),rgba(0,0,0,1))]"></div>
      <BackgroundGrid />

      {/* Mouse spotlight effect */}
      <div
        className="fixed inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 pointer-events-none mix-blend-soft-light"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236,72,153,0.15), transparent 40%)`,
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500 origin-top z-50"
        style={{ height: progressHeight }}
      />

      {/* Navigation */}
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-40">
        <ul className="flex flex-col gap-8">
          {[
            { id: "home", icon: <Sparkles className="w-4 h-4" />, label: "Home" },
            { id: "about", icon: <User className="w-4 h-4" />, label: "About" },
            { id: "skills", icon: <Code className="w-4 h-4" />, label: "Skills" },
            { id: "projects", icon: <Briefcase className="w-4 h-4" />, label: "Projects" },
            { id: "contact", icon: <Mail className="w-4 h-4" />, label: "Contact" },
          ].map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`} className="relative block group">
                <motion.div
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeSection === section.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-pink-500/30"
                      : "bg-gray-600",
                  )}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {section.icon}
                  <span className="capitalize text-white whitespace-nowrap">{section.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating particles background */}
        <FloatingParticles />

        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-40 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-40 left-20 w-96 h-96 bg-fuchsia-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Animated text reveal */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
                >
                  <Sparkles className="h-4 w-4 text-pink-400" />
                  <span className="text-sm font-medium text-pink-300">Full Stack Developer</span>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-6"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  >
                    <span className="inline-block mr-4">I&apos;m </span>
                    <span className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                      Mohanasundaram S G
                    </span>
                  </motion.h1>
                </div>

                <AnimatedText />
              </motion.div>

              {/* 3D-like profile image with glow effect */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                  <Image
                    src="/image/mohan_ps.png"
                    alt="Developer Portrait"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-full shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-4 bg-gradient-to-br from-fuchsia-500 to-purple-600 p-3 rounded-full shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <GlowingButton>
                  Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
                </GlowingButton>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-950 px-8 py-6 rounded-full text-lg"
                >
                  Contact Me
                </Button>
              </motion.div>

              {/* Social links */}
              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {[
                  { icon: <Github className="w-5 h-5" />, url: "https://github.com/mohan132s" },
                  { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/mohanasundaram-s-g-00888024b/?originalSubdomain=in" },
                  { icon: <Mail className="w-5 h-5" />, url: "mailto:mohanadhi132@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700 hover:border-pink-500 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* About section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-16 items-center">
              {/* Left side - 3D-like image */}
              <motion.div
                className="md:w-1/2 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-purple-500/30" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-pink-500/30" />

                  {/* Main image with 3D effect */}
                  <div className="relative z-10 transform perspective-1000">
                    <motion.div
                      className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(168,85,247,0.3)] border border-purple-500/20"
                      whileHover={{
                        rotateY: 5,
                        rotateX: -5,
                        scale: 1.05,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src="/placeholder.svg?height=800&width=600"
                        alt="Developer working"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Passionate Developer</h3>
                        <p className="text-gray-300">Crafting digital experiences since 2015</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 relative">
                    <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                      About Me
                    </span>
                    <motion.div
                      className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "3rem" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  <motion.p
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    I&apos;m  a <span className="text-pink-400 font-medium">creative full-stack developer</span> with over 8
                    years of experience crafting digital experiences that users love. My journey in tech began with a
                    curiosity about how things work, which evolved into a career building solutions that make a
                    difference.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    I specialize in creating{" "}
                    <span className="text-pink-400 font-medium">
                      performant, accessible, and visually striking applications
                    </span>{" "}
                    using modern technologies. My approach combines technical expertise with creative problem-solving to
                    deliver results that exceed expectations.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    When I&apos;m not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or mentoring aspiring developers.
                  </motion.p>
                </div>

                {/* Stats with animated counters */}
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[
                    { number: "8+", label: "Years Experience", icon: <Award className="w-5 h-5 text-pink-400" /> },
                    {
                      number: "50+",
                      label: "Projects Completed",
                      icon: <Briefcase className="w-5 h-5 text-pink-400" />,
                    },
                    { number: "30+", label: "Happy Clients", icon: <Star className="w-5 h-5 text-pink-400" /> },
                    {
                      number: "15+",
                      label: "Open Source Contributions",
                      icon: <Github className="w-5 h-5 text-pink-400" />,
                    },
                  ].map((item, index) => (
                    <GradientCard key={index} index={index} item={item} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
              >
                <Code className="h-4 w-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">My Expertise</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                  Technical Skills
                </span>
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I've worked with a variety of technologies and frameworks to create exceptional digital experiences
              </p>
            </motion.div>

            {/* Main skills with animated bars */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-8 text-pink-400 flex items-center gap-2">
                  <Layers className="w-6 h-6" /> Frontend Development
                </h3>

                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-pink-400 flex items-center gap-2">
                  <Cpu className="w-6 h-6" /> Backend Development
                </h3>

                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold mb-8 text-pink-400 text-center flex items-center justify-center gap-2">
                <Globe className="w-6 h-6" /> Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "GraphQL",
                  "MongoDB",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                  "Git",
                  "Figma",
                  "Tailwind CSS",
                  "Three.js",
                  "Redux",
                  "Jest",
                ].map((tool, index) => (
                  <HoverCard key={index} text={tool} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-pink-400 text-center flex items-center justify-center gap-2">
                <User className="w-6 h-6" /> Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { skill: "Problem Solving", icon: <Zap className="w-5 h-5 text-pink-400" /> },
                  { skill: "Communication", icon: <Mail className="w-5 h-5 text-pink-400" /> },
                  { skill: "Team Leadership", icon: <Award className="w-5 h-5 text-pink-400" /> },
                  { skill: "Adaptability", icon: <Star className="w-5 h-5 text-pink-400" /> },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors text-center relative overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors relative z-10">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-lg relative z-10">{item.skill}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
              >
                <Briefcase className="h-4 w-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">My Work</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Explore some of my recent work and creative solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <GlowingButton>
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </GlowingButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_70%)]" />

        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
              >
                <Mail className="h-4 w-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">Get In Touch</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </motion.div>

            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-3 shadow-lg shadow-pink-500/20">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent">
               Mohanasundaram S G
              </span>
            </motion.div>

            <motion.div
              className="text-gray-400 text-sm mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Github className="w-5 h-5" />, url: "https://github.com/mohan132s" },
                { icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/mohanasundaram-s-g-00888024b/?originalSubdomain=in" },
                { icon: <Mail className="w-5 h-5" />, url: "mailto:mohanadhi132@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500/20 transition-colors border border-gray-700 hover:border-pink-500"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
