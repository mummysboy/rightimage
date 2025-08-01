import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import BrandQuiz from './BrandQuiz'
import ContactForm from './ContactForm'
import SuccessMessage from './SuccessMessage'
import StickyCTA from './StickyCTA'

export interface FormData {
  name: string
  email: string
  service: string
  message: string
  timeline?: string
  scope?: string
}

const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'hero' | 'quiz' | 'form' | 'success'>('hero')
  const [quizAnswers, setQuizAnswers] = useState<{ brandStatus: string; priorities: string } | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)

  const handleQuizComplete = (answers: { brandStatus: string; priorities: string }) => {
    setQuizAnswers(answers)
    setCurrentStep('form')
  }

  const handleFormSubmit = (data: FormData) => {
    setFormData(data)
    setCurrentStep('success')
  }

  const handleStartConversation = () => {
    setCurrentStep('quiz')
  }

  const handleSkipQuiz = () => {
    setCurrentStep('form')
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      {currentStep === 'hero' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection onStartConversation={handleStartConversation} />
        </motion.div>
      )}

      {/* Brand Quiz */}
      {currentStep === 'quiz' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <BrandQuiz 
            onComplete={handleQuizComplete}
            onSkip={handleSkipQuiz}
          />
        </motion.div>
      )}

      {/* Contact Form */}
      {currentStep === 'form' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm 
            onSubmit={handleFormSubmit}
            quizAnswers={quizAnswers}
          />
        </motion.div>
      )}

      {/* Success Message */}
      {currentStep === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <SuccessMessage formData={formData} />
        </motion.div>
      )}

      {/* Sticky CTA - Show on all steps except success */}
      {currentStep !== 'success' && (
        <StickyCTA onStartConversation={handleStartConversation} />
      )}
    </div>
  )
}

export default ContactPage 