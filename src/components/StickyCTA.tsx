import React from 'react'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

interface StickyCTAProps {
  onStartConversation: () => void
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onStartConversation }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden"
    >
      <button
        onClick={onStartConversation}
        className="bg-electric text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold hover:bg-blue-600 transition-colors duration-300 hover:scale-105 active:scale-95"
      >
        <Rocket className="w-5 h-5" />
        Start Quiz
      </button>
    </motion.div>
  )
}

export default StickyCTA 