import React from 'react'
import { motion } from 'framer-motion'

const EthosBlock: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, #2979FF 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #B2FF59 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #2979FF 0%, transparent 50%)'
            ]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto border-2 border-electric/30 rounded-full flex items-center justify-center">
            <span className="text-2xl text-electric font-light">"</span>
          </div>
        </motion.div>

        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal leading-relaxed tracking-tight">
            We believe your brand should{' '}
            <span className="text-electric font-normal">look right</span>,{' '}
            <span className="text-accent font-normal">feel right</span>, and{' '}
            <span className="text-electric font-normal">behave right</span>
            <br />
            <span className="text-xl sm:text-2xl text-slate font-light">
              — across every touchpoint.
            </span>
          </blockquote>
        </motion.div>

        {/* Animated Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-electric to-accent mx-auto"
        />

        {/* Author */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <p className="text-slate font-light">
            Right Image Digital
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-3 h-3 bg-electric rounded-full opacity-30"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full opacity-40"
      />
    </section>
  )
}

export default EthosBlock 