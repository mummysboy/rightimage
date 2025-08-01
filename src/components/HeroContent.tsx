import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroContentProps {
  onBookCall: () => void
  onExplorePlatform: () => void
}

const HeroContent: React.FC<HeroContentProps> = ({ onBookCall, onExplorePlatform }) => {
  return (
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight tracking-tight"
        >
          We Engineer the Digital{' '}
          <span className="text-blue-400 font-bold">Backbone</span>
          <br />
          for Ambitious Brands.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
        >
          From AI-powered campaigns to revenue automation, Right Image Digital builds software systems that power brand growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            onClick={onBookCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Discovery Call
          </motion.button>

          <motion.button
            onClick={onExplorePlatform}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Explore Our Platform Capabilities
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center gap-2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-xs font-light tracking-wider">SCROLL</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroContent 