import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  Calendar, 
  Target, 
  Hand, 
  MapPin, 
  FolderOpen, 
  Palette, 
  Megaphone, 
  TrendingUp, 
  Settings, 
  Brain,
  LucideIcon
} from 'lucide-react'
import { FormData } from './ContactPage'

interface ContactFormProps {
  onSubmit: (data: FormData) => void
  quizAnswers?: { brandStatus: string; priorities: string } | null
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  timeline: z.string().optional(),
  scope: z.string().optional(),
})

type FormSchemaType = z.infer<typeof formSchema>

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, quizAnswers }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const selectedService = watch('service')

  const services: Array<{ value: string; label: string; icon: LucideIcon }> = [
    { value: 'branding', label: 'Branding & Identity', icon: Palette },
    { value: 'campaign', label: 'Campaign Strategy', icon: Megaphone },
    { value: 'performance', label: 'Performance Marketing', icon: TrendingUp },
    { value: 'tech', label: 'Custom Tech Solutions', icon: Settings },
  ]

  const handleFormSubmit = async (data: FormSchemaType) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    onSubmit(data)
  }

  return (
    <section className="min-h-screen bg-white section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Let's Start Building
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Tell us about your project and we'll craft a solution that fits your vision perfectly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <Hand className="w-4 h-4 text-teal-600" />
                  What should we call you?
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('name')}
                    type="text"
                    className="form-input pl-10"
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  Where can we reach you?
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    {...register('email')}
                    type="email"
                    className="form-input pl-10"
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-teal-600" />
                  What type of support are you looking for?
                </label>
                <div className="grid gap-3">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    const isSelected = selectedService === service.value
                    return (
                      <label
                        key={service.value}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-teal-600 bg-teal-50' 
                            : 'border-gray-200 hover:border-teal-300'
                        }`}
                      >
                        <input
                          {...register('service')}
                          type="radio"
                          value={service.value}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-3 w-full">
                          <div className={`p-2 rounded-lg transition-colors duration-300 ${
                            isSelected ? 'bg-teal-100' : 'bg-gray-100'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              isSelected ? 'text-teal-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <span className={`font-medium transition-colors duration-300 ${
                            isSelected ? 'text-teal-900' : 'text-charcoal'
                          }`}>{service.label}</span>
                        </div>
                        <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected ? 'border-teal-600' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          )}
                        </div>
                      </label>
                    )
                  })}
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>

              {/* Conditional Tech Fields */}
              {selectedService === 'tech' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="form-label flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      What's your timeline?
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        {...register('timeline')}
                        className="form-input pl-10"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="standard">Standard (1-2 months)</option>
                        <option value="flexible">Flexible (3+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label flex items-center gap-2">
                      <Target className="w-4 h-4 text-teal-600" />
                      What's the scope?
                    </label>
                    <div className="relative">
                      <Target className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        {...register('scope')}
                        className="form-input pl-10"
                      >
                        <option value="">Select scope</option>
                        <option value="small">Small project</option>
                        <option value="medium">Medium project</option>
                        <option value="large">Large project</option>
                        <option value="enterprise">Enterprise solution</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Message Field */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <Brain className="w-4 h-4 text-teal-600" />
                  Tell us more about your project
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="form-input pl-10 resize-none"
                    placeholder="Describe your vision, goals, and any specific requirements..."
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Let's Talk
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Marketing team collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Your Success Team</h3>
                <p className="text-sm opacity-90">Dedicated experts ready to bring your vision to life</p>
              </div>
            </div>

            {/* Quiz Results (if available) */}
            {quizAnswers && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-electric to-blue-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-semibold mb-3">Based on your answers:</h3>
                <div className="space-y-2 text-sm">
                  <p>• Brand Status: <span className="font-medium">{quizAnswers.brandStatus}</span></p>
                  <p>• Priority: <span className="font-medium">{quizAnswers.priorities}</span></p>
                </div>
              </motion.div>
            )}

            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate">
                <div className="w-8 h-8 bg-electric/10 rounded-full flex items-center justify-center">
                  <span className="text-electric font-bold">✓</span>
                </div>
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-slate">
                <div className="w-8 h-8 bg-electric/10 rounded-full flex items-center justify-center">
                  <span className="text-electric font-bold">✓</span>
                </div>
                <span className="text-sm">Free consultation call</span>
              </div>
              <div className="flex items-center gap-3 text-slate">
                <div className="w-8 h-8 bg-electric/10 rounded-full flex items-center justify-center">
                  <span className="text-electric font-bold">✓</span>
                </div>
                <span className="text-sm">Custom strategy proposal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 