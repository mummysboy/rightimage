import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  UserCircle, 
  Mail, 
  Lock, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap,
  ArrowRight,
  Eye,
  DollarSign,
  Activity,
  X,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import Header from '../components/Header'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotEmailSent, setForgotEmailSent] = useState(false)

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Performance',
      description: 'Track your campaigns with live data updates'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into your Amazon performance'
    },
    {
      icon: Target,
      title: 'ROAS Tracking',
      description: 'Monitor return on ad spend across all channels'
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Get weekly insights delivered to your inbox'
    }
  ]

  const metrics = [
    { label: 'Total Revenue', value: '$2.4M', change: '+34%', trend: 'up' },
    { label: 'ROAS', value: '4.2x', change: '+18%', trend: 'up' },
    { label: 'Conversion Rate', value: '12.8%', change: '+5.2%', trend: 'up' },
    { label: 'ACOS', value: '18.3%', change: '-3.1%', trend: 'down' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <div className="mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6"
                  >
                    <UserCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Sign In
                  </h1>
                  <p className="text-gray-600">
                    Access your performance dashboard
                  </p>
                </div>

                {/* Error Notification */}
                <AnimatePresence>
                  {showError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-red-800">
                          Account not found
                        </p>
                        <p className="text-sm text-red-600 mt-1">
                          This account does not exist. Please contact us to get started.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowError(false)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Forgot Password Form */}
                <AnimatePresence>
                  {showForgotPassword && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 bg-teal-50 border border-teal-200 rounded-lg p-6"
                    >
                      {!forgotEmailSent ? (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                              Reset Password
                            </h3>
                            <button
                              onClick={() => {
                                setShowForgotPassword(false)
                                setForgotEmail('')
                              }}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">
                            Enter your email address and we'll send you instructions to reset your password.
                          </p>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                  type="email"
                                  value={forgotEmail}
                                  onChange={(e) => setForgotEmail(e.target.value)}
                                  placeholder="your@email.com"
                                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                                />
                              </div>
                            </div>
                            <motion.button
                              onClick={() => {
                                if (forgotEmail) {
                                  setForgotEmailSent(true)
                                }
                              }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300"
                            >
                              Send Reset Link
                            </motion.button>
                          </div>
                        </>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center"
                        >
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-6 h-6 text-teal-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Check Your Email
                          </h3>
                          <p className="text-sm text-gray-600">
                            If this email exists in our system, you will receive a password reset link shortly.
                          </p>
                          <button
                            onClick={() => {
                              setShowForgotPassword(false)
                              setForgotEmail('')
                              setForgotEmailSent(false)
                            }}
                            className="mt-4 text-sm text-teal-600 hover:text-teal-700 font-medium"
                          >
                            Back to Sign In
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <form 
                  className="space-y-6" 
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (email && password) {
                      setShowError(true)
                      setTimeout(() => setShowError(false), 5000)
                    }
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-600" />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForgotPassword(true)
                        setShowError(false)
                      }}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      onClick={() => navigate('/contact')}
                      className="text-teal-600 hover:text-teal-700 font-medium"
                    >
                      Contact us to get started
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Preview Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Track Your Performance
                </h2>
                <p className="text-gray-600 text-lg">
                  Get real-time insights into your Amazon advertising performance
                </p>
              </div>

              {/* Metrics Preview */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 font-medium">{metric.label}</span>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change} vs last month
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl p-8 text-white shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to see your data?</h3>
                    <p className="text-teal-100">
                      Join our clients who are already tracking their performance
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Activity className="w-8 h-8 text-white/80" />
                  </motion.div>
                </div>
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

