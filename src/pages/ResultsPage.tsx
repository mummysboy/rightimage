import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, Users, DollarSign, Award, Quote } from 'lucide-react'
import Header from '../components/Header'
import Results from '../components/Results'
import FooterCTA from '../components/FooterCTA'

const ResultsPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLetsBuild = () => {
    navigate('/contact')
  }

  const caseStudies = [
    {
      title: 'Consumer Packaged Goods Brand',
      challenge: 'Struggling to compete with established category leaders and low brand awareness',
      solution: 'Implemented comprehensive Sponsored Brands strategy with category keyword dominance approach',
      results: [
        { metric: 'Share of Voice', value: '340%', description: 'Increase in category keyword visibility' },
        { metric: 'New to Brand Rate', value: '127%', description: 'Growth in new customer acquisition' },
        { metric: 'Organic Sales', value: '99.9%', description: 'Increase in organic sales velocity' },
        { metric: 'ROAS', value: '240%', description: 'Return on ad spend improvement' }
      ],
      quote: 'Right Image Digital transformed our Amazon presence. We went from struggling to compete to dominating category keywords and driving significant organic growth.',
      author: 'VP of E-commerce'
    },
    {
      title: 'Health & Wellness Brand',
      challenge: 'Low conversion rates and high cost per acquisition on branded keywords',
      solution: 'Shifted budget from branded to category keywords, optimized for NTB acquisition',
      results: [
        { metric: 'NTB Rate', value: '127%', description: 'Increase in new-to-brand customers' },
        { metric: 'Conversion Rate', value: '62%', description: 'Improvement in overall conversion' },
        { metric: 'CPA Reduction', value: '38%', description: 'Decrease in cost per acquisition' },
        { metric: 'Sales Velocity', value: '85%', description: 'Increase in sales velocity' }
      ],
      quote: 'The shift to category keywords was a game-changer. We\'re now acquiring new customers at scale while maintaining strong ROAS.',
      author: 'Marketing Director'
    },
    {
      title: 'Home & Kitchen Brand',
      challenge: 'Stagnant growth and inability to rank on major keywords',
      results: [
        { metric: 'Ranking Improvement', value: '38%', description: 'Improvement in keyword rankings' },
        { metric: 'Organic Sales', value: '99.9%', description: 'Increase in organic sales percentage' },
        { metric: 'Click Growth', value: '62%', description: 'Growth in total clicks' },
        { metric: 'Market Share', value: '45%', description: 'Increase in category market share' }
      ],
      quote: 'Right Image Digital helped us break through the competition. We\'re now ranking on major keywords and driving significant organic growth.',
      author: 'E-commerce Manager'
    }
  ]

  const testimonials = [
    {
      quote: 'Right Image Digital doesn\'t just manage our Amazon advertising—they\'re an extension of our team. Their deep understanding of our business and obsession with our success is unmatched.',
      author: 'CEO',
      company: 'Consumer Products Company'
    },
    {
      quote: 'The data-driven approach and continuous optimization have transformed our Amazon performance. We\'ve seen consistent growth month over month.',
      author: 'VP of Marketing',
      company: 'Health & Wellness Brand'
    },
    {
      quote: 'Working with Right Image Digital has been a game-changer. Their strategic approach and execution have helped us achieve transformational growth on Amazon.',
      author: 'Director of E-commerce',
      company: 'Home & Kitchen Brand'
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
              Our Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Data-driven strategies that deliver transformational growth on Amazon
            </motion.p>
          </div>
        </section>

        <Results />

        {/* Stats Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Proven Track Record
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-teal-600" />
                </div>
                <div className="text-5xl font-light text-teal-600 mb-4">9+</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Years of Experience</h3>
                <p className="text-gray-600 font-light">Nearly a decade of Amazon expertise</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-teal-600" />
                </div>
                <div className="text-5xl font-light text-teal-600 mb-4">$100M+</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Sales Managed</h3>
                <p className="text-gray-600 font-light">Nine figures in sales across our client portfolio</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-teal-600" />
                </div>
                <div className="text-5xl font-light text-teal-600 mb-4">$10M+</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Ad Spend Managed</h3>
                <p className="text-gray-600 font-light">Eight figures in Amazon ad spend optimized</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Real results from real clients
              </p>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-medium text-gray-900 mb-4">{study.title}</h3>
                    {study.challenge && (
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 font-light">{study.challenge}</p>
                      </div>
                    )}
                    {study.solution && (
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 font-light">{study.solution}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 text-center">
                        <div className="text-3xl font-light text-teal-600 mb-2">{result.value}</div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                        <div className="text-xs text-gray-600 font-light">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  {study.quote && (
                    <div className="border-t border-gray-200 pt-8">
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-lg text-gray-700 font-light italic mb-4">"{study.quote}"</p>
                          <p className="text-sm text-gray-600">— {study.author}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Client Testimonials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <Quote className="w-8 h-8 text-teal-600 mb-4" />
                  <p className="text-gray-700 font-light mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600 font-light">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Analysis Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Data Analysis Drives Brand Strategies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Our KPI-driven approach ensures every strategy is backed by comprehensive data analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Keyword Analysis</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We analyze clicks by keyword to identify opportunities. Category keywords should dominate clicks as ads drive impressions and conversions. We focus on driving into slightly longer tail keywords to avoid direct competition while gaining share of voice where we're already winning.
                </p>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Category keyword dominance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Long-tail keyword opportunity identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Competitive keyword gap analysis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Performance Metrics</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We track KPIs that directly support business goals, providing clear visibility into performance and ROI. Our reporting goes beyond surface-level metrics to show true business impact.
                </p>
                <ul className="space-y-3 text-gray-600 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>ROAS and ROI tracking aligned with business goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>New-to-brand customer acquisition metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Sales velocity and organic ranking impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FooterCTA onLetsBuild={handleLetsBuild} />
      </div>
    </div>
  )
}

export default ResultsPage

