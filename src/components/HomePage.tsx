import React, { useState } from 'react'
import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, Globe2, Headphones, Megaphone, Menu, PenTool, Phone, Search, ShieldCheck, Sparkles, Star, Store, Wrench, X, ChevronDown } from 'lucide-react'
import logo from '../rightimagelogo.png'

const navLinks = [
  {
    label: 'Services',
    children: [
      'Full service management',
      'Advertising (PPC)',
      'Amazon SEO',
      'Account audit',
      'SOPs',
      'Consulting',
      'Coaching call'
    ]
  },
  {
    label: 'DTC',
    children: [
      'DTC services',
      'Ecommerce audit',
      'SEO for websites',
      'Email marketing',
      'Backlink building',
      'Google Ads management',
      'Meta Ads management'
    ]
  },
  { label: 'Digital Products' },
  { label: 'Case Studies' },
  { label: 'Testimonials' },
  {
    label: 'Careers',
    children: [
      'Apply here',
      'Employee reviews',
      'Internships',
      'Brand Director',
      'Brand Manager',
      'IT Jobs',
      'PPC',
      'Design',
      'Sales',
      'Social Media',
    ]
  },
  {
    label: 'Resources',
    children: [
      'News',
      'Articles',
      'Webinar Library',
      'Partnership',
      'Press',
      'Tariff Calculator',
      'Music'
    ]
  },
  { label: 'About Us' },
  { label: 'Free Audit' },
]

const brandLogos = ['Nestlé', 'Honeywell', 'Death Wish Coffee', 'Chirp', 'Alen', 'Chinook Seedery', 'Rare Beauty', 'Macuhealth', 'Heavenly Hunks', 'Revel Nail']

const stats = [
  { label: 'Brands managed', value: '450+' },
  { label: 'Annual revenue generated', value: '$1.2B+' },
  { label: 'Employees', value: '460+' },
  { label: 'Trustpilot rating', value: '4.5★' },
  { label: 'Google rating', value: '4.7★' }
]

const services = [
  {
    icon: Megaphone,
    title: 'Amazon PPC',
    desc: 'Higher revenue, lower ACOS, transparent ad management.',
  },
  {
    icon: Search,
    title: 'Amazon SEO',
    desc: 'Four-phase SEO plan driving dramatic ranking gains in 90 days.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'A+ content, Brand Stores, CTR-first creative that converts.',
  },
  {
    icon: Store,
    title: 'Platform Management',
    desc: 'Catalog optimization, troubleshooting, and always-on improvement.',
  },
]

const caseStudies = [
  {
    title: 'Stamp Hub',
    result: '293% higher monthly revenue',
    summary: 'Revamped creative assets and PPC overhaul delivered explosive growth.',
  },
  {
    title: 'Chirp',
    result: '519% growth to date',
    summary: 'Full-funnel optimization in a crowded market produced outsized gains.',
  },
  {
    title: 'Heavenly Hunks',
    result: 'Brand store lift',
    summary: 'Creative refresh and marketplace hygiene boosted visibility.',
  },
]

const testimonials = [
  {
    name: 'Chad Littlefield',
    role: 'Co-founder, We and Me',
    quote: '“Extra grateful… tens all across the board.”',
  },
  {
    name: 'Matt',
    role: 'Amazon Seller',
    quote: '“The only guy I trust on Amazon.”',
  },
  {
    name: 'Cynthia Li',
    role: 'Founder, Whole Parts',
    quote: '“80% growth in four months – over 200% versus prior period.”',
  },
]

const faqs = [
  {
    q: 'What is an Amazon agency?',
    a: 'A team of marketplace experts who handle SEO, PPC, creative, and troubleshooting so you can focus on your brand.',
  },
  {
    q: 'How do you optimize product listings?',
    a: 'We run a four-phase SEO program, refresh titles and media for CTR, and layer A+ content with conversion copy.',
  },
  {
    q: 'Can you improve my rankings?',
    a: 'Yes. We prioritize strike-zone keywords, search query data, and PPC tuning to climb and hold page-one positions.',
  },
  {
    q: 'What support should I expect?',
    a: 'Fast responses, weekly reporting, and proactive fixes from a 460+ person team dedicated to Amazon success.',
  },
]

const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className, id }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>
    {children}
  </section>
)

const HomePage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white text-mag-dark">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Right Image Digital" className="h-9 w-auto object-contain" />
            </a>

            <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-mag-dark">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="inline-flex items-center gap-1 hover:text-mag-orange transition-colors focus:outline-none"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup={!!link.children}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {link.children && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-3 grid grid-cols-1 gap-2">
                      {link.children.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-mag-orange transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-semibold text-mag-orange border border-mag-orange/40 rounded-xl bg-amber-50 hover:border-mag-orange hover:shadow-sm transition-all">
                Free listing audit
              </button>
              <button className="px-5 py-2.5 text-sm font-semibold bg-mag-yellow text-mag-dark rounded-xl hover:brightness-95 transition-all flex items-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                Fast quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              className="lg:hidden p-2 text-mag-dark hover:text-mag-orange"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <div key={link.label} className="space-y-2">
                  <a
                    href="#"
                    className="block text-sm font-semibold text-mag-dark hover:text-mag-orange"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="pl-3 space-y-1">
                      {link.children.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-sm text-slate-600 hover:text-mag-orange"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button className="w-full px-4 py-2 text-sm font-semibold text-mag-orange border border-mag-orange/30 rounded-lg hover:border-mag-orange hover:shadow-sm transition-all">
                  Free listing audit
                </button>
                <button className="w-full px-4 py-2 text-sm font-semibold bg-mag-yellow text-mag-dark rounded-lg hover:brightness-95 transition-all flex items-center justify-center gap-2">
                  Fast quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative bg-white text-mag-dark">
          <SectionWrapper className="py-16 lg:py-20 relative">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-mag-orange px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                  The Amazon agency that gets your products seen and sold
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Have great products, but sales are sluggish? We understand the struggle—and our Amazon agency is here to make it easier.
                </h1>
                <p className="text-lg text-mag-gray max-w-3xl">
                  Full-service management across PPC, SEO, design, catalog, and troubleshooting. Get a FREE listing audit and see exactly what’s blocking growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-mag-yellow text-mag-dark font-semibold rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    Grow your Amazon sales <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-6 py-3 bg-mag-orange text-white font-semibold rounded-full hover:brightness-95 transition-all flex items-center justify-center gap-2">
                    Solve an Amazon problem
                  </button>
                </div>
                <p className="text-sm text-mag-dark">
                  Not sure where to start? Get a <span className="text-mag-orange font-semibold">FREE listing audit</span>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Weekly performance reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Fast catalog fixes & reinstatements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>460+ specialists across every pillar</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-mag-yellow text-mag-dark font-semibold flex items-center justify-center">4.7</div>
                    <div>
                      <p className="text-sm text-mag-gray">Trusted by sellers big and small</p>
                      <p className="font-semibold text-mag-dark">420+ Trustpilot & Google reviews</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'PPC + SEO balanced for ranking and profitability',
                      'Design systems that lift CTR and conversion',
                      'Catalog cleanup, brand registry, suspensions, reinstatements',
                      'Data-backed audits before you sign'
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-mag-orange mt-0.5" />
                        <p className="text-mag-dark">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2">
                    <button className="w-full px-5 py-3 bg-mag-orange text-white font-semibold rounded-full hover:brightness-95 transition-all flex items-center justify-center gap-2">
                      Book a coaching call
                    </button>
                    <p className="text-xs text-mag-gray text-center">Calls start with an audit of your ASIN</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* Trusted logos */}
        <section className="bg-white border-b border-slate-200">
          <SectionWrapper className="py-8">
            <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
              Trusted by major brands and Amazon FBA sellers
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-500">
              {brandLogos.map((logo) => (
                <div key={logo} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-semibold">
                  {logo}
                </div>
              ))}
            </div>
          </SectionWrapper>
        </section>

        {/* Stats */}
        <SectionWrapper className="py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-semibold text-blue-700">{stat.value}</p>
                <p className="text-xs text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Trust badges */}
        <SectionWrapper className="py-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <img src="https://myamazonguy.com/wp-content/uploads/2024/08/Trustpilot-1.png" alt="Trustpilot" className="h-10 w-auto" />
              <div>
                <p className="text-sm font-semibold text-slate-800">4.5 Stars • 420 Reviews</p>
                <p className="text-xs text-slate-500">Trustpilot</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <img src="https://myamazonguy.com/wp-content/uploads/2024/07/Google-reviews2webp.webp" alt="Google Reviews" className="h-10 w-auto" />
              <div>
                <p className="text-sm font-semibold text-slate-800">4.7 Stars • 135 Reviews</p>
                <p className="text-xs text-slate-500">Google Reviews</p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Process (3-part) */}
        <SectionWrapper className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Our 3-part process</h2>
            <p className="text-slate-600 mt-3">We set goals, execute across every pillar, and report results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '1: Onboarding',
                desc: 'Onboarding survey • Kickoff • Competitor analysis • Account audit'
              },
              {
                title: '2: Optimization',
                desc: 'Catalog • PPC • SEO • Design — a never-ending cycle of work'
              },
              {
                title: '3: Results',
                desc: 'Traffic • Conversion • Sales — measured weekly with clear actions'
              },
            ].map((step) => (
              <div key={step.title} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Growth pillars */}
        <SectionWrapper className="py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Full-service Seller Central</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">We manage all four Amazon pillars</h2>
              <p className="text-slate-600">SEO, PPC, creative, and catalog troubleshooting under one roof so you never juggle vendors.</p>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-500" /> Brand registry and compliance</div>
                <div className="flex items-center gap-2"><Wrench className="w-5 h-5 text-amber-500" /> Suspensions, listing reinstatements, catalog hygiene</div>
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-600" /> ACOS + TACOS dashboards updated weekly</div>
                <div className="flex items-center gap-2"><ClipboardList className="w-5 h-5 text-purple-600" /> SOP-driven execution by 460+ specialists</div>
              </div>
              <div className="flex gap-3 pt-2">
                <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">Book a discovery call</button>
                <button className="px-5 py-3 border border-slate-200 rounded-lg font-semibold text-slate-800 hover:border-blue-300 transition-all">View our SOPs</button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { icon: Search, title: 'SEO 4-phase program', desc: 'Indexing, strike-zone keywords, CTR creative, Search Query Performance-driven iteration.' },
                { icon: Megaphone, title: 'PPC management', desc: 'Segmentation, keyword isolation, ACOS/TACOS control, DSP ready.' },
                { icon: PenTool, title: 'Creative & design', desc: 'CTR-upgraded main images, A+ content, Brand Stores, brand story.' },
                { icon: Wrench, title: 'Catalog & ops', desc: 'Flat files, variations, reimbursements, stranded inventory, brand name changes.' },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper className="py-16" id="services">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How our Amazon experts grow your brand</h2>
            <p className="text-lg text-slate-600 mt-3">Holistic Amazon growth: PPC, SEO, design, catalog, and troubleshooting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
              See all services <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 border border-slate-200 text-slate-800 font-semibold rounded-lg hover:border-blue-300 transition-all">
              Download Amazon SEO toolkit
            </button>
          </div>
        </SectionWrapper>

        {/* DTC + omni */}
        <SectionWrapper className="py-16 bg-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Build growth beyond Amazon</p>
              <h2 className="text-3xl font-semibold text-slate-900">DTC growth stack for high-intent shoppers</h2>
              <p className="text-slate-600">Email/SMS, Meta, Google, and site CRO to capture the traffic your marketplace presence creates.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Globe2, title: 'SEO for websites' },
                  { icon: Megaphone, title: 'Meta & Google ads' },
                  { icon: PenTool, title: 'Brand stores & landing pages' },
                  { icon: ClipboardList, title: 'Ecommerce audits' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <item.icon className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">See DTC services</button>
                <button className="px-5 py-3 border border-slate-200 rounded-lg font-semibold text-slate-800 hover:border-blue-300 transition-all">Download the DTC deck</button>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-800 mb-3">Omni-channel reporting</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Revenue, sessions, unit session %, units ordered</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ad spend, ad revenue, impressions, CTR, ACOS, true ACOS</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly performance recaps + recommended actions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dashboard access for total transparency</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Case studies */}
        <SectionWrapper className="py-16 bg-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-widest">Results</p>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">Recent wins from our clients</h2>
              <p className="text-slate-600 mt-2">Direct revenue lifts driven by creative, PPC, and catalog clean up.</p>
            </div>
            <button className="px-5 py-3 border border-slate-200 rounded-lg font-semibold text-slate-800 hover:border-blue-300 transition-all flex items-center gap-2">
              View more case studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.title} className="border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all bg-gradient-to-br from-slate-50 to-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center">★</div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-semibold tracking-widest">Case Study</p>
                    <p className="text-lg font-semibold text-slate-900">{study.title}</p>
                  </div>
                </div>
                <p className="text-xl font-semibold text-emerald-600 mb-2">{study.result}</p>
                <p className="text-sm text-slate-600">{study.summary}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Hear it from people we’ve helped</h2>
            <p className="text-lg text-slate-600 mt-3">Real feedback from brands that trusted My Amazon Guy.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-amber-400 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-lg text-slate-900 font-semibold mb-2">{t.quote}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
                <p className="text-sm text-slate-500">{t.name}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Free audit form */}
        <SectionWrapper className="py-16">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden grid lg:grid-cols-2">
            <div className="p-8 lg:p-10 space-y-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">Start simple</p>
              <h3 className="text-3xl font-semibold">Get a FREE listing audit</h3>
              <p className="text-blue-100">We review indexing, SEO ranking, PPC/SEO ratio, market share, traffic and conversion opportunities.</p>
              <div className="space-y-3 text-sm text-blue-50">
                <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-300" /> Complimentary professional video analysis of your ASIN</div>
                <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-300" /> Clear action items before you sign anything</div>
                <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-amber-300" /> Delivered by senior Amazon strategists</div>
              </div>
            </div>
            <div className="p-8 lg:p-10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="form-input" placeholder="First name" />
                <input className="form-input" placeholder="Last name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="form-input" placeholder="Email" type="email" />
                <input className="form-input" placeholder="Phone" type="tel" />
              </div>
              <input className="form-input" placeholder="Amazon store / brand name" />
              <textarea className="form-input h-28" placeholder="ASIN(s) or main challenge on Amazon" />
              <button className="w-full px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                Request my free listing audit
              </button>
              <p className="text-xs text-slate-500 text-center">We reply within 24 hours, Monday–Friday.</p>
            </div>
          </div>
        </SectionWrapper>

        {/* FAQs */}
        <SectionWrapper className="py-16 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
            <p className="text-slate-600 mt-3">How we simplify Amazon and drive predictable growth.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{faq.q}</p>
                    <p className="text-sm text-slate-600 mt-2">{faq.a}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <SectionWrapper className="py-16">
          <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12 shadow-xl grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">Ready to boost your sales?</p>
              <h3 className="text-3xl font-semibold">Get a complimentary video analysis of your ASIN.</h3>
              <p className="text-blue-100">
                We review PPC/SEO ratio, indexing, rankings, and creative. You’ll know exactly what to fix before you sign.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2">
                  Request free audit <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-3 border border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                  Call +1 470-623-1951
                </button>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Headphones className="w-10 h-10 text-amber-300" />
                <div>
                  <p className="font-semibold text-white">Live support</p>
                  <p className="text-blue-100 text-sm">Replies within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-10 h-10 text-amber-300" />
                <div>
                  <p className="font-semibold text-white">Mon–Fri, 9:00 AM – 5:00 PM EST</p>
                  <p className="text-blue-100 text-sm">sales@myamazonguy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-10 h-10 text-amber-300" />
                <p className="text-blue-50 text-sm">
                  Join our free Friday AMA on YouTube at 12:00 PM EST for live Amazon troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <footer className="bg-slate-900 text-slate-200">
        <SectionWrapper className="py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-lg font-semibold">My Amazon Guy</p>
              <p className="text-sm text-slate-400">Atlanta, GA • +1 470-623-1951 • sales@myamazonguy.com</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">YouTube</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">X</a>
            </div>
          </div>
        </SectionWrapper>
      </footer>
    </div>
  )
}

export default HomePage 