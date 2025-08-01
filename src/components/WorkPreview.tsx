import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'

const WorkPreview: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Nova Financial',
      category: 'Brand Identity',
      description: 'Complete visual system for a next-generation fintech platform.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: '+340% brand recognition',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'Echo Campaign',
      category: 'Performance Marketing',
      description: 'Multi-channel campaign system driving sustainable growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: '+127% conversion rate',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 3,
      title: 'Pulse Platform',
      category: 'Custom Tech',
      description: 'Scalable infrastructure powering real-time analytics.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      metrics: '99.9% uptime achieved',
      color: 'from-orange-500/20 to-red-500/20'
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
            Featured Work
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto font-light">
            A selection of projects that demonstrate our approach to design and technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden border border-gray-200/50 transition-all duration-500 hover:shadow-2xl`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <ExternalLink className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-electric uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-charcoal mb-3 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate text-sm leading-relaxed font-light mb-4">
                    {project.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">
                      {project.metrics}
                    </span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 text-slate group-hover:text-electric transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-charcoal border border-charcoal/20 px-8 py-3 rounded-full font-light text-lg hover:bg-charcoal hover:text-white transition-all duration-500"
          >
            View All Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkPreview 