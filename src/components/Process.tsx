import React from 'react'
import { motion } from 'framer-motion'
import { Target, Palette, Code, TrendingUp } from 'lucide-react'

const Process: React.FC = () => {
  const phases = [
    {
      number: '01',
      title: 'Strategy',
      description: 'We analyze your business, market, and goals to create a comprehensive roadmap.',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create visual systems that communicate with precision and purpose.',
      icon: Palette,
      color: 'text-blue-600'
    },
    {
      number: '03',
      title: 'Build',
      description: 'We develop custom solutions using modern technologies and best practices.',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Continuous improvement through data analysis and performance monitoring.',
      icon: TrendingUp,
      color: 'text-blue-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const phaseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="py-24 bg-gray-50">
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
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A bespoke approach that emphasizes measurable outcomes and sustainable growth.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              variants={phaseVariants}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16"
            >
              {/* Phase Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-lg">{phase.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <phase.icon className={`w-4 h-4 ${phase.color}`} />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {phase.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-16 w-px h-16 bg-gray-200"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Results Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Measurable Results
          </h3>
          <p className="text-gray-600 font-light">
            Every project is designed to deliver concrete business outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 