import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Results: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      id: 1,
      title: 'Nova Financial',
      category: 'Brand Identity',
      description: 'Complete visual system for a next-generation fintech platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: [
        { label: 'Brand Recognition', value: 340, suffix: '%' },
        { label: 'User Engagement', value: 62, suffix: '%' }
      ]
    },
    {
      id: 2,
      title: 'Echo Campaign',
      category: 'Performance Marketing',
      description: 'Multi-channel campaign system driving sustainable growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: [
        { label: 'Conversion Rate', value: 127, suffix: '%' },
        { label: 'ROI', value: 240, suffix: '%' }
      ]
    },
    {
      id: 3,
      title: 'Pulse Platform',
      category: 'Custom Tech',
      description: 'Scalable infrastructure powering real-time analytics.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: [
        { label: 'Uptime', value: 99.9, suffix: '%' },
        { label: 'Performance', value: 38, suffix: '% faster' }
      ]
    }
  ]

  const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isInView) {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(timer)
      }
    }, [isInView, value])

    return (
      <span className="text-3xl font-medium text-blue-600">
        {count}{suffix}
      </span>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
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
    <section className="py-24 bg-white" ref={ref}>
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
            Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Real projects with measurable business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group"
            >
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-3">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-light">
                          {metric.label}
                        </span>
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Results 