import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

interface HeroContentProps {
  onBookCall: () => void
  onExplorePlatform: () => void
}

const HeroContent: React.FC<HeroContentProps> = ({ onBookCall, onExplorePlatform }) => {
  return (
    <div className="relative z-10 flex items-center justify-center h-full pointer-events-auto">
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 leading-tight tracking-tight">
          RIGHT IMAGE DIGITAL
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          We provide connected strategies across the entire Amazon ecosystem to help our clients achieve transformational growth
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <motion.button
            onClick={onBookCall}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl relative z-20 cursor-pointer"
            type="button"
          >
            Book a Discovery Call
          </motion.button>

          <motion.button
            onClick={onExplorePlatform}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 relative z-20 cursor-pointer"
            type="button"
          >
            Explore Our Services
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 text-white">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <ChevronDown className="w-5 h-5" />
            <span className="text-xs font-light tracking-wider">SCROLL</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent 