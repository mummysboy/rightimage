import React from 'react'
import { motion } from 'framer-motion'

const Process: React.FC = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We analyze your brand, goals, and infrastructure to define what to build.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'Deep dive into your current tech stack, business objectives, and growth opportunities. We identify the gaps and opportunities that will drive your digital transformation.'
    },
    {
      title: 'Design Systems',
      description: 'We create scalable UI, user flows, and monetization architecture.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'Architect user experiences that convert. We design interfaces that not only look beautiful but are engineered to drive business outcomes and user engagement.'
    },
    {
      title: 'Engineering',
      description: 'We develop custom platforms, APIs, and automations around your business.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'Build with modern technologies that scale. We develop robust, secure, and performant systems that grow with your business and adapt to changing needs.'
    },
    {
      title: 'Optimization',
      description: 'We launch, track, test, and evolve your stack for maximum performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'Continuous improvement through data-driven insights. We monitor performance, analyze user behavior, and optimize every touchpoint for maximum ROI.'
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

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            How We Build for Scale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A structured framework to move from insight to infrastructure.
          </p>
        </motion.div>

        {/* Zigzag Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={stepVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image with Content Overlay */}
              <div className="flex-1 lg:w-1/2">
                <div className="relative group">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                      <div className="text-white">
                        <h3 className="text-2xl lg:text-3xl font-medium mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-200 font-light leading-relaxed text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="flex-1 lg:w-1/2">
                <div className={`h-full flex items-center ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="max-w-md">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-6">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light text-lg mb-6">
                        {step.details}
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Scalable Architecture</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Performance Optimized</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Business Focused</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl font-medium text-gray-900 mb-4">
            Measurable Infrastructure
          </h3>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Every system is designed to scale with your business and deliver quantifiable results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 