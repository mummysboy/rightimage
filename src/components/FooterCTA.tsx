import React from 'react'
import { motion } from 'framer-motion'

interface FooterCTAProps {
  onLetsBuild: () => void
}

const FooterCTA: React.FC<FooterCTAProps> = ({ onLetsBuild }) => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight">
            Transformational Growth
            <br />
            Across the Amazon Ecosystem
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to scale your Amazon presence? Let's create connected strategies that drive measurable results.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            onClick={onLetsBuild}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-teal-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Build Together
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-gray-400 text-sm"
        >
          <p>hello@rightimagedigital.com</p>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterCTA 