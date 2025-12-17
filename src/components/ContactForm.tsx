import React, { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
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
  DollarSign,
  CheckCircle2,
  ChevronDown,
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
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  issues: z.array(z.string()).optional(),
  budget: z.string().optional(),
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      issues: [],
    },
  })

  const selectedServices = watch('services') || []
  const selectedIssues = watch('issues') || []
  const selectedBudget = watch('budget') || ''
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)
  const budgetDropdownRef = useRef<HTMLDivElement>(null)

  const services: Array<{ value: string; label: string; icon: LucideIcon }> = [
    { value: 'branding', label: 'Branding & Identity', icon: Palette },
    { value: 'campaign', label: 'Campaign Strategy', icon: Megaphone },
    { value: 'performance', label: 'Performance Marketing', icon: TrendingUp },
    { value: 'amazon-ads', label: 'Amazon Ads Management', icon: Megaphone },
    { value: 'amazon-seo', label: 'Amazon SEO & Listing Optimization', icon: TrendingUp },
    { value: 'amazon-consulting', label: 'Amazon Seller Consulting', icon: Target },
    { value: 'tech', label: 'Custom Tech Solutions', icon: Settings },
  ]

  const issues: Array<{ value: string; label: string }> = [
    { value: 'low-dpvr', label: 'Low DPVR - Detail Page View Rate' },
    { value: 'amazon-ranking', label: 'Amazon ranking challenges' },
    { value: 'amazon-ppc', label: 'Amazon PPC optimization' },
    { value: 'low-conversion', label: 'Low conversion rates' },
    { value: 'roas', label: 'Poor ROAS/ROI' },
  ]

  const budgetOptions: Array<{ value: string; label: string }> = [
    { value: 'under-5k', label: 'Under $5,000/month' },
    { value: '5k-10k', label: '$5,000 - $10,000/month' },
    { value: '10k-25k', label: '$10,000 - $25,000/month' },
    { value: '25k-50k', label: '$25,000 - $50,000/month' },
    { value: '50k-100k', label: '$50,000 - $100,000/month' },
    { value: '100k-plus', label: '$100,000+/month' },
  ]

  const selectedBudgetLabel = budgetOptions.find(opt => opt.value === selectedBudget)?.label || 'Select budget range'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (budgetDropdownRef.current && !budgetDropdownRef.current.contains(event.target as Node)) {
        setIsBudgetOpen(false)
      }
    }

    if (isBudgetOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isBudgetOpen])

  const handleServiceToggle = (value: string) => {
    const current = selectedServices
    const updated = current.includes(value)
      ? current.filter((s) => s !== value)
      : [...current, value]
    setValue('services', updated)
  }

  const handleIssueToggle = (value: string) => {
    const current = selectedIssues
    const updated = current.includes(value)
      ? current.filter((i) => i !== value)
      : [...current, value]
    setValue('issues', updated)
  }

  const handleFormSubmit = async (data: FormSchemaType) => {
    try {
      // Format services list
      const servicesLabels = services
        .filter(s => data.services.includes(s.value))
        .map(s => s.label)
        .join(', ')

      // Format issues list
      const issuesLabels = issues
        .filter(i => data.issues?.includes(i.value))
        .map(i => i.label)
        .join(', ')

      // Format budget
      const budgetLabel = budgetOptions.find(opt => opt.value === data.budget)?.label || 'Not specified'

      // Format timeline and scope
      const timelineLabel = data.timeline 
        ? data.timeline === 'urgent' ? 'Urgent (1-2 weeks)' 
          : data.timeline === 'standard' ? 'Standard (1-2 months)' 
          : 'Flexible (3+ months)'
        : 'Not specified'

      const scopeLabel = data.scope
        ? data.scope === 'small' ? 'Small project'
          : data.scope === 'medium' ? 'Medium project'
          : data.scope === 'large' ? 'Large project'
          : 'Enterprise solution'
        : 'Not specified'

      // Prepare email template parameters
      // All form fields are available as individual template variables for custom formatting
      const templateParams = {
        // Basic contact info
        name: data.name,
        email: data.email,
        title: `New Contact Form Submission from ${data.name}`,
        time: new Date().toLocaleString(),
        
        // Services (formatted)
        services: servicesLabels || 'None selected',
        services_list: services
          .filter(s => data.services.includes(s.value))
          .map(s => s.label)
          .join('\n• ') || 'None selected',
        
        // Challenges/Issues (formatted)
        issues: issuesLabels || 'None selected',
        issues_list: issues
          .filter(i => data.issues?.includes(i.value))
          .map(i => i.label)
          .join('\n• ') || 'None selected',
        
        // Budget, timeline, and scope
        budget: budgetLabel,
        timeline: timelineLabel,
        scope: scopeLabel,
        
        // User's message
        message: data.message,
        
        // Quiz answers (if available)
        quiz_brand_status: quizAnswers?.brandStatus || 'Not completed',
        quiz_priorities: quizAnswers?.priorities || 'Not completed',
        
        // Pre-formatted message (backup - contains everything in one string)
        formatted_message: `
Name: ${data.name}
Email: ${data.email}

Services Interested In: ${servicesLabels}

Challenges Facing:
${issuesLabels || 'None selected'}

Monthly Ad Budget: ${budgetLabel}
${data.timeline ? `Timeline: ${timelineLabel}` : ''}
${data.scope ? `Scope: ${scopeLabel}` : ''}

Message:
${data.message}

${quizAnswers ? `
Quiz Answers:
- Brand Status: ${quizAnswers.brandStatus}
- Priorities: ${quizAnswers.priorities}
` : ''}
        `.trim(),
      }

      // Send email using EmailJS
      // You'll need to set these up in your EmailJS account and add them to .env file
      const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || ''
      const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || ''
      const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || ''

      // Only send email if credentials are configured
      if (serviceId && templateId && publicKey && serviceId !== 'YOUR_SERVICE_ID') {
        try {
          await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            publicKey
          )
          console.log('Email sent successfully')
        } catch (emailError) {
          console.error('Failed to send email:', emailError)
          // Log error but don't block form submission
          // In production, you might want to show an error toast or notification
        }
      } else {
        console.warn('EmailJS credentials not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file')
        // In development, you might want to show a warning
      }

      // Call the original onSubmit handler regardless of email status
      onSubmit(data)
    } catch (error) {
      console.error('Form submission error:', error)
      // Still call onSubmit to show success message
      onSubmit(data)
    }
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
              {/* Hidden inputs for arrays */}
              <input type="hidden" {...register('services')} />
              <input type="hidden" {...register('issues')} />
              
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

              {/* Service Selection - Multiple */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-teal-600" />
                  What type of support are you looking for? (Select all that apply)
                </label>
                <div className="grid gap-3">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    const isSelected = selectedServices.includes(service.value)
                    return (
                      <label
                        key={service.value}
                        onClick={() => handleServiceToggle(service.value)}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-teal-600 bg-teal-50' 
                            : 'border-gray-200 hover:border-teal-300'
                        }`}
                      >
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
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                          isSelected ? 'border-teal-600 bg-teal-600' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </label>
                    )
                  })}
                </div>
                {errors.services && (
                  <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
                )}
              </div>

              {/* Estimated Monthly Ad Budget */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-teal-600" />
                  Estimated Monthly Ad Budget
                </label>
                <div className="relative" ref={budgetDropdownRef}>
                  <input type="hidden" {...register('budget')} />
                  <button
                    type="button"
                    onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                    className={`w-full form-input pl-10 pr-10 text-left flex items-center justify-between transition-all duration-300 ${
                      selectedBudget 
                        ? 'border-teal-600 bg-teal-50' 
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <DollarSign className="text-gray-400 w-5 h-5" />
                      <span className={selectedBudget ? 'text-teal-900 font-medium' : 'text-gray-500'}>
                        {selectedBudgetLabel}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isBudgetOpen ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isBudgetOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl overflow-hidden"
                      >
                        <div className="py-2">
                          {budgetOptions.map((option, index) => {
                            const isSelected = selectedBudget === option.value
                            return (
                              <motion.button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setValue('budget', option.value)
                                  setIsBudgetOpen(false)
                                }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-teal-50 transition-colors duration-200 ${
                                  isSelected ? 'bg-teal-50' : ''
                                }`}
                              >
                                <span className={`font-medium transition-colors duration-200 ${
                                  isSelected ? 'text-teal-900' : 'text-charcoal'
                                }`}>
                                  {option.label}
                                </span>
                                {isSelected && (
                                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                )}
                              </motion.button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Issues/Concerns - Multiple Selection */}
              <div>
                <label className="form-label flex items-center gap-2">
                  <Target className="w-4 h-4 text-teal-600" />
                  What challenges are you facing? (Select all that apply)
                </label>
                <div className="grid gap-3">
                  {issues.map((issue) => {
                    const isSelected = selectedIssues.includes(issue.value)
                    return (
                      <label
                        key={issue.value}
                        onClick={() => handleIssueToggle(issue.value)}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-teal-600 bg-teal-50' 
                            : 'border-gray-200 hover:border-teal-300'
                        }`}
                      >
                        <span className={`font-medium transition-colors duration-300 flex-1 ${
                          isSelected ? 'text-teal-900' : 'text-charcoal'
                        }`}>{issue.label}</span>
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                          isSelected ? 'border-teal-600 bg-teal-600' : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Conditional Tech Fields */}
              {selectedServices.includes('tech') && (
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
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Marketing team collaboration"
                className="w-full h-64 object-cover blur-sm"
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