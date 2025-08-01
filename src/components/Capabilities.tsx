import React from 'react'
import { motion } from 'framer-motion'
import { Palette, Zap, Code, TrendingUp } from 'lucide-react'

const Capabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Logos, systems, guidelines that scale with your business.',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Campaign Architecture',
      description: 'Creative that scales across channels and drives results.',
      color: 'text-blue-600'
    },
    {
      icon: Code,
      title: 'Tech Infrastructure',
      description: 'Custom tools, portals, and internal applications.',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Data dashboards, CRO, and automation systems.',
      color: 'text-blue-600'
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Capabilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            We design and build the systems that power modern businesses.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="border-b border-gray-200 pb-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className={`w-6 h-6 ${capability.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Capabilities 