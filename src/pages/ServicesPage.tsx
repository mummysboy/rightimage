import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Target, TrendingUp, BarChart3, Users, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import FooterCTA from '../components/FooterCTA'

const ServicesPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLetsBuild = () => {
    navigate('/contact')
  }

  const services = [
    {
      title: 'Sponsored Brands',
      description: 'Build top-of-funnel awareness with brand-focused campaigns',
      icon: Target,
      details: [
        'Brand store creation and optimization',
        'Video and image ad creative development',
        'Keyword research and targeting strategy',
        'Campaign structure and bid management',
        'Brand awareness and consideration metrics tracking',
        'A/B testing for creative and messaging'
      ],
      benefits: [
        'Increase brand visibility on Amazon',
        'Drive consideration for your product portfolio',
        'Build brand equity in competitive categories',
        'Capture high-intent shoppers at the top of funnel'
      ]
    },
    {
      title: 'Sponsored Products',
      description: 'Capture high-intent conversions with precision targeting',
      icon: TrendingUp,
      details: [
        'Product-level keyword optimization',
        'Automatic and manual campaign management',
        'Negative keyword strategy and implementation',
        'Bid optimization for maximum ROAS',
        'Product targeting and competitor conquest',
        'Performance monitoring and weekly optimization'
      ],
      benefits: [
        'Maximize return on ad spend (ROAS)',
        'Win top-of-search placements',
        'Drive incremental sales velocity',
        'Improve organic ranking through paid performance'
      ]
    },
    {
      title: 'Sponsored Display',
      description: 'Expand reach and retarget customers with display advertising',
      icon: BarChart3,
      details: [
        'Audience targeting and segmentation',
        'Retargeting campaign development',
        'Product and interest-based targeting',
        'Cross-category expansion strategies',
        'View-through and click-through attribution',
        'Integration with Sponsored Products campaigns'
      ],
      benefits: [
        'Reach customers across the Amazon ecosystem',
        'Retarget high-intent shoppers',
        'Expand into new customer segments',
        'Complement core advertising strategy'
      ]
    }
  ]

  const capabilities = [
    {
      title: 'Industry Leaders',
      description: 'Nearly a decade of Amazon experience, managing nine figures in sales and eight figures in ad spend, with a proven record of scaling and transforming brands.',
      icon: Users
    },
    {
      title: 'We Wear Your Jersey',
      description: 'We are immersed in your business and obsessed with your success. Your goals become our goals, and we work as an extension of your team.',
      icon: CheckCircle2
    },
    {
      title: 'Multi-Functional Team',
      description: 'We take a direct model, understanding multiple facets of your business from the ground up. From strategy to execution, we handle it all.',
      icon: Users
    },
    {
      title: 'Data Analysis Drives Brand Strategies',
      description: 'KPI driven approach to support business goals with test, analyze, and ongoing optimizations. Every decision is backed by data.',
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            >
              We provide connected strategies across the entire Amazon ecosystem to help our clients achieve transformational growth
            </motion.p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Extraordinary Service
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                AN EXTENSION OF YOUR TEAM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="border-b border-gray-200 pb-8"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Amazon Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Comprehensive Amazon advertising and optimization services
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-medium text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-xl text-gray-600 font-light">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">What's Included</h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 font-light">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 font-light">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Delivery Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                How We Deliver
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Our service delivery model ensures consistent results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-medium text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Weekly Reporting</h3>
                <p className="text-gray-600 font-light">
                  Comprehensive performance reports delivered weekly with insights, recommendations, and action items.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-medium text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Ongoing Optimization</h3>
                <p className="text-gray-600 font-light">
                  Continuous campaign optimization based on performance data and market trends to maximize ROI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-medium text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Strategic Planning</h3>
                <p className="text-gray-600 font-light">
                  Quarterly business reviews and strategic planning sessions to align campaigns with business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterCTA onLetsBuild={handleLetsBuild} />
      </div>
    </div>
  )
}

export default ServicesPage

