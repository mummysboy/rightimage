import React from 'react'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

interface HeroSectionProps {
  onStartConversation: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartConversation }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
          alt="Modern office workspace"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        >
          Let's Make Your Brand{' '}
          <span className="text-accent">Unforgettable</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Contact Right Image Digital and take the first step to a sharper, smarter presence.
        </motion.p>

      </div>
    </section>
  )
}

export default HeroSection 