import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Rocket, 
  TrendingUp, 
  Building2, 
  RefreshCw, 
  Eye, 
  Target, 
  Zap, 
  Lightbulb, 
  SkipForward,
  LucideIcon
} from 'lucide-react'

interface BrandQuizProps {
  onComplete: (answers: { brandStatus: string; priorities: string }) => void
  onSkip: () => void
}

interface QuizOption {
  value: string
  label: string
  description: string
  icon: LucideIcon
}

const BrandQuiz: React.FC<BrandQuizProps> = ({ onComplete, onSkip }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ brandStatus: string; priorities: string }>({
    brandStatus: '',
    priorities: ''
  })

  const questions: Array<{
    id: string
    question: string
    options: QuizOption[]
  }> = [
    {
      id: 'brandStatus',
      question: 'Where is your brand currently?',
      options: [
        { value: 'starting', label: 'Just getting started', description: 'New business or rebrand', icon: Rocket },
        { value: 'growing', label: 'Growing and scaling', description: 'Established but expanding', icon: TrendingUp },
        { value: 'established', label: 'Well-established', description: 'Looking to optimize', icon: Building2 },
        { value: 'transforming', label: 'Transforming', description: 'Major pivot or evolution', icon: RefreshCw }
      ]
    },
    {
      id: 'priorities',
      question: 'What matters most to you?',
      options: [
        { value: 'awareness', label: 'Brand awareness', description: 'Get noticed in the market', icon: Eye },
        { value: 'conversion', label: 'Lead generation', description: 'Convert visitors to customers', icon: Target },
        { value: 'efficiency', label: 'Operational efficiency', description: 'Streamline processes', icon: Zap },
        { value: 'innovation', label: 'Innovation & growth', description: 'Stay ahead of competition', icon: Lightbulb }
      ]
    }
  ]

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 500)
    } else {
      setTimeout(() => onComplete({ ...answers, [questionId]: value }), 500)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <section className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        {currentQuestion === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-base mb-4">
              Help us understand your needs better
            </p>
          </motion.div>
        )}

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
            />
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">
            {currentQuestion + 1} of {questions.length}
          </p>
        </motion.div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            {currentQ.question}
          </h3>

          <div className="space-y-4">
            {currentQ.options.map((option, index) => {
              const IconComponent = option.icon
              
              return (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className="w-full p-6 bg-gray-800 border border-gray-700 rounded-lg text-left hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-lg mb-1">
                        {option.label}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {option.description}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </div>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Skip Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={onSkip}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <SkipForward className="w-4 h-4" />
            <span>Skip quiz</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandQuiz 