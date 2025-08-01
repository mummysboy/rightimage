import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onExploreWork: () => void
}

const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-8 leading-tight tracking-tight"
        >
          We build brands that{' '}
          <span className="text-blue-600 font-normal">perform</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Right Image Digital designs identities and builds custom platforms that help modern businesses scale.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.button
            onClick={onExploreWork}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Explore Our Work
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-xs font-light tracking-wider">SCROLL</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 