import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Zap, TrendingUp, Code } from 'lucide-react'

const CapabilitiesGrid: React.FC = () => {
  const capabilities = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Visual systems that communicate with precision and purpose.',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Zap,
      title: 'Campaign Systems',
      description: 'Strategic frameworks that scale from concept to execution.',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Data-driven platforms that convert intention into growth.',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: Code,
      title: 'Custom Tech Solutions',
      description: 'Bespoke digital infrastructure that powers your vision.',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-6 tracking-tight">
            Our Capabilities
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto font-light">
            We don't just create — we architect experiences that perform.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${capability.color} backdrop-blur-sm rounded-2xl p-8 border ${capability.borderColor} transition-all duration-500 hover:shadow-2xl`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-charcoal" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-charcoal mb-4 group-hover:text-electric transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-slate leading-relaxed font-light">
                  {capability.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CapabilitiesGrid 