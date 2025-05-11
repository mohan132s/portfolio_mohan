"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ChevronRight } from "lucide-react"
import GlowingButton from "./glowing-button"
import { ArrowRight } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative overflow-hidden group"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5" />

        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent relative z-10">
          Contact Information
        </h3>
        <p className="text-gray-300 mb-8 relative z-10">
          I&apos;m currently available for freelance work and full-time positions. If you have a project that needs some
          creative touch, I'd love to hear about it!
        </p>

        <div className="space-y-8 relative z-10">
          {[
            {
              icon: <Mail className="w-5 h-5 text-pink-400" />,
              title: "Email",
              value: "mohanadhi132@gmail.com",
              link: "mailto:mohanadhi132@gmail.com",
            },
            {
              icon: <Linkedin className="w-5 h-5 text-pink-400" />,
              title: "LinkedIn",
              value: "linkedin.com/in/Mohanasundaram S G",
              link: "https://www.linkedin.com/in/mohanasundaram-s-g-00888024b/?originalSubdomain=in",
            },
            {
              icon: <Github className="w-5 h-5 text-pink-400" />,
              title: "GitHub",
              value: "github.com/mohan132s",
              link: "https://github.com/mohan132s",
            },
          ].map((item, index) => (
            <motion.a key={index} href={item.link} className="flex items-center gap-4 group" whileHover={{ x: 5 }}>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm text-gray-400">{item.title}</h4>
                <p className="text-lg group-hover:text-pink-400 transition-colors">{item.value}</p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-pink-400" />
            </motion.a>
          ))}
        </div>

        {/* Availability indicator */}
        <div className="mt-12 p-4 rounded-lg bg-gray-800/50 border border-gray-700 relative z-10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-pink-500 animate-ping opacity-75"></div>
            </div>
            <p className="font-medium">Currently available for new projects</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 relative overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5" />

        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent relative z-10">
          Send Me a Message
        </h3>
        <form className="space-y-6 relative z-10">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          <GlowingButton fullWidth>
            Send Message <ArrowRight className="ml-2 h-5 w-5" />
          </GlowingButton>
        </form>
      </motion.div>
    </div>
  )
}
