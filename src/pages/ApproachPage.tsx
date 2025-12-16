import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Target, DollarSign, Zap, BarChart3, RefreshCw, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import Process from '../components/Process'
import FooterCTA from '../components/FooterCTA'

const ApproachPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLetsBuild = () => {
    navigate('/contact')
  }

  const methodologyDetails = [
    {
      step: 'Business Goals',
      icon: Target,
      timeline: 'Week 1-2',
      deliverables: [
        'Corporate goal alignment session',
        'KPI framework development',
        'Retail media role definition',
        'Success metrics documentation',
        'Stakeholder alignment'
      ],
      outcomes: 'Clear understanding of how Amazon advertising supports overall business objectives'
    },
    {
      step: 'Budgets and Mix',
      icon: DollarSign,
      timeline: 'Week 2-3',
      deliverables: [
        'Full funnel media mix strategy',
        'Budget allocation framework',
        'Channel performance benchmarks',
        'ROI projections by channel',
        'Budget optimization recommendations'
      ],
      outcomes: 'Strategic budget plan that maximizes ROI across the customer journey'
    },
    {
      step: 'Tactics and Execution',
      icon: Zap,
      timeline: 'Week 3-4',
      deliverables: [
        'Campaign structure design',
        'Ad type and placement strategy',
        'Targeting and keyword plans',
        'Creative brief development',
        'Launch timeline and milestones'
      ],
      outcomes: 'Ready-to-execute campaign plans aligned with goals and budget'
    },
    {
      step: 'Measuring Success',
      icon: BarChart3,
      timeline: 'Ongoing',
      deliverables: [
        'KPI dashboard setup',
        'Weekly performance reports',
        'Attribution modeling',
        'ROI and ROAS tracking',
        'Business impact analysis'
      ],
      outcomes: 'Clear visibility into performance and business impact'
    },
    {
      step: 'Analyze and Iterate',
      icon: RefreshCw,
      timeline: 'Ongoing',
      deliverables: [
        'Weekly optimization recommendations',
        'A/B test results and learnings',
        'Market trend analysis',
        'Competitive intelligence',
        'Strategic pivot recommendations'
      ],
      outcomes: 'Continuous improvement and adaptation to market changes'
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
              Our Approach
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            >
              The Right Image Way - A proven methodology for Amazon success
            </motion.p>
          </div>
        </section>

        <Process />

        {/* Detailed Methodology Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Methodology Deep Dive
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Each step of our process includes specific deliverables, timelines, and outcomes
              </p>
            </div>

            <div className="space-y-12">
              {methodologyDetails.map((method, index) => (
                <motion.div
                  key={method.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-12"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-medium text-gray-900">{method.step}</h3>
                        <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                          {method.timeline}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 font-light mb-6">{method.outcomes}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Key Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {method.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 font-light">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Amazon Marketing Funnel Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Amazon Marketing Funnel
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Our strategic approach to building awareness and driving conversions
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-medium text-teal-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Sponsored Brands - Top of Funnel</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      We start with Sponsored Brands to build top-of-funnel awareness. These campaigns are designed to increase brand visibility, drive consideration, and capture shoppers early in their journey. Our strategy focuses on:
                    </p>
                    <ul className="space-y-2 text-gray-600 font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Brand store optimization to create immersive shopping experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Video and image creative that showcases brand values and product benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Broad category targeting to capture new-to-brand customers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-medium text-teal-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Sponsored Products - High Intent Conversion</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      Once awareness is established, we focus on Sponsored Products to capture high-intent conversions. This is where we drive the majority of our performance, focusing on:
                    </p>
                    <ul className="space-y-2 text-gray-600 font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Precision keyword targeting to win top-of-search placements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Product-level optimization to maximize ROAS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Competitor conquest strategies to capture market share</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-medium text-teal-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Sponsored Display - Expansion & Retargeting</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">
                      Sponsored Display is introduced later, once Sponsored Products opportunities are fully leveraged. This allows us to:
                    </p>
                    <ul className="space-y-2 text-gray-600 font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Retarget high-intent shoppers who didn't convert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Expand reach into new customer segments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>Complement core strategy with display advertising</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Our Approach Works */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Why Our Approach Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Data-Driven Decisions</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Every strategy is backed by comprehensive data analysis. We track KPIs that directly support your business goals, ensuring every dollar spent drives measurable results. Our team uses advanced analytics tools and custom reporting to provide insights that go beyond surface-level metrics.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Continuous Optimization</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We don't set it and forget it. Our team continuously tests, analyzes, and optimizes campaigns to ensure you stay ahead of the competition and adapt to changing market conditions. Weekly optimization cycles mean your campaigns are always improving.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Full Funnel Strategy</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  From awareness to conversion, we plan and execute across the entire customer journey. Our media mix strategy ensures optimal budget allocation at every stage, maximizing both short-term performance and long-term brand building.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">Business Alignment</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  We start with your corporate goals and work backwards. Every tactic, placement, and target is informed by your business objectives, not just advertising metrics. This ensures Amazon advertising is a strategic driver of growth, not just a cost center.
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

export default ApproachPage

