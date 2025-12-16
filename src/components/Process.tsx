import React from 'react'
import { motion } from 'framer-motion'

// Process component for "How We Build for Scale" section
const Process: React.FC = () => {
  const steps = [
    {
      title: 'Business Goals',
      description: 'Understanding the role of retail media aligning on KPI\'s, tactics, and approach.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: 'We start by understanding your corporate goals and how retail media fits into your overall strategy. We align on KPIs, tactics, and approach to ensure every decision supports your business objectives.'
    },
    {
      title: 'Budgets and Mix',
      description: 'Full funnel media mix and budget planning that aligns with business needs.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: 'Strategic budget allocation across the full marketing funnel. We plan media mix and budgets that align with your business needs and maximize ROI at every stage of the customer journey.'
    },
    {
      title: 'Tactics and Execution',
      description: 'Tactics, ad types, placements, and targets informed by retail media goals, mix and budget.',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: 'Precision execution of tactics, ad types, placements, and targeting strategies. Every campaign is informed by your retail media goals, budget allocation, and media mix to drive optimal performance.'
    },
    {
      title: 'Measuring Success',
      description: 'KPI driven approach to support business goals.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: 'Data-driven measurement and analysis. We track KPIs that directly support your business goals, providing clear visibility into performance and ROI across all campaigns.'
    },
    {
      title: 'Analyze and Iterate',
      description: 'Test, analyze, plan ongoing optimizations and consistent realignment of tactics.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      details: 'Continuous optimization through testing and analysis. We plan ongoing optimizations and consistently realign tactics to ensure retail media adaptations that keep you ahead of the competition.'
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
            Right Image Way
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A proven methodology for Amazon success
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
                        <h3 className="text-2xl lg:text-3xl font-medium mb-3 group-hover:text-teal-300 transition-colors duration-300">
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
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Data-Driven</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">KPI Focused</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">Results Oriented</span>
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
            Amazon Marketing Funnel
          </h3>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            Sponsored Brands to build top-of-funnel awareness. Sponsored Products to capture high-intent conversions. Sponsored Display introduced later, once Sponsored Products opportunities are fully leveraged.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Process 