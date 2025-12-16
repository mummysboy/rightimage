import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Phone } from 'lucide-react'
import { FormData } from './ContactPage'

interface SuccessMessageProps {
  formData: FormData | null
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ formData }) => {

  return (
    <section className="min-h-screen bg-gradient-to-br from-electric to-blue-600 flex items-center justify-center section-padding">
      <div className="max-w-2xl mx-auto text-center text-white">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Thanks, {formData?.name?.split(' ')[0] || 'there'}!
          </h1>
          <p className="text-xl sm:text-2xl mb-6 opacity-90">
            We'll be in touch within 1 business day.
          </p>
          <p className="text-lg opacity-80">
            Your brand's in the right hands.
          </p>
        </motion.div>

        {/* Confetti Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="w-3 h-3 bg-accent rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>We'll review your project details</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>Schedule a discovery call</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Present custom strategy proposal</span>
              </div>
            </div>
          </div>


          {/* Contact Info */}
          <div className="text-sm opacity-80">
            <p>Questions? Reach us at hello@rightimagedigital.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessMessage 