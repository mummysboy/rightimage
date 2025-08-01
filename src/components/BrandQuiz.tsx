import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, SkipForward } from 'lucide-react'

interface BrandQuizProps {
  onComplete: (answers: { brandStatus: string; priorities: string }) => void
  onSkip: () => void
}

const BrandQuiz: React.FC<BrandQuizProps> = ({ onComplete, onSkip }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ brandStatus: string; priorities: string }>({
    brandStatus: '',
    priorities: ''
  })

  const questions = [
    {
      id: 'brandStatus',
      question: 'Where is your brand currently?',
      options: [
        { value: 'starting', label: '🚀 Just getting started', description: 'New business or rebrand' },
        { value: 'growing', label: '📈 Growing and scaling', description: 'Established but expanding' },
        { value: 'established', label: '🏢 Well-established', description: 'Looking to optimize' },
        { value: 'transforming', label: '🔄 Transforming', description: 'Major pivot or evolution' }
      ]
    },
    {
      id: 'priorities',
      question: 'What matters most to you?',
      options: [
        { value: 'awareness', label: '👁️ Brand awareness', description: 'Get noticed in the market' },
        { value: 'conversion', label: '💰 Lead generation', description: 'Convert visitors to customers' },
        { value: 'efficiency', label: '⚡ Operational efficiency', description: 'Streamline processes' },
        { value: 'innovation', label: '💡 Innovation & growth', description: 'Stay ahead of competition' }
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
    <section className="min-h-screen bg-gradient-to-br from-charcoal to-gray-900 flex items-center justify-center section-padding">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Quick Brand Check
          </h2>
          <p className="text-gray-300 text-lg">
            Help us understand your needs better
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="bg-electric h-2 rounded-full transition-all duration-500"
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
          className="mb-8"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            {currentQ.question}
          </h3>

          <div className="grid gap-4">
            {currentQ.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleAnswer(currentQ.id, option.value)}
                className="w-full p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-left hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{option.label.split(' ')[0]}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg mb-1">
                      {option.label.split(' ').slice(1).join(' ')}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {option.description}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.button>
            ))}
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
            Skip quiz
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandQuiz 