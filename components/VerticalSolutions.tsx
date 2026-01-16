'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const verticalSolutions = [
  {
    title: 'SLM Fine-Tuning as a Service (FTaaS)',
    description: 'No-code/low-code platform for businesses to fine-tune SLMs on proprietary data without ML expertise',
    businesses: ['Enterprises', 'SMBs', 'Startups'],
    features: [
      'Upload proprietary data via UI',
      'One-click fine-tuning workflow',
      'Automatic hyperparameter optimization',
      'Performance benchmarking included',
      'Version control & rollback',
    ],
    opportunity: 'SaaS subscription model ($299-999/month)',
    targetCustomers: 'Mid-market enterprises wanting AI without headcount',
  },
  {
    title: 'Domain-Specific SLM Consulting',
    description: 'End-to-end consulting for identifying, deploying, and optimizing SLMs for specific industries',
    businesses: ['Healthcare', 'Finance', 'Legal', 'Manufacturing'],
    features: [
      'Needs assessment & feasibility studies',
      'Model selection & customization',
      'Data preparation & labeling',
      'Deployment & integration support',
      'Ongoing optimization & monitoring',
    ],
    opportunity: 'Professional services ($50K-500K per engagement)',
    targetCustomers: 'Enterprise CTOs unsure how to implement SLMs',
  },
  {
    title: 'SLM Model Marketplace',
    description: 'Curated marketplace of pre-trained, industry-specific SLMs ready for deployment',
    businesses: ['Healthcare', 'Finance', 'Legal', 'E-commerce', 'Manufacturing'],
    features: [
      'Pre-trained models by industry',
      'Usage analytics & metering',
      'Version management & updates',
      'Licensing & compliance tracking',
      'Developer marketplace integration',
    ],
    opportunity: 'Licensing revenue (20-30% per transaction)',
    targetCustomers: 'Dev teams wanting plug-and-play models',
  },
  {
    title: 'Privacy-First SLM Infrastructure',
    description: 'On-premise SLM hosting for regulated industries (banking, healthcare, government)',
    businesses: ['Banking', 'Healthcare', 'Government', 'Insurance'],
    features: [
      'On-premise deployment only',
      'Air-gapped option available',
      'Compliance certifications (HIPAA, PCI, SOC 2)',
      'Managed infrastructure & support',
      'Zero data transmission guarantee',
    ],
    opportunity: 'Enterprise contracts ($100K-1M annually)',
    targetCustomers: 'Large regulated organizations with data sovereignty needs',
  },
  {
    title: 'Vertical AI Solutions Platform',
    description: 'Plug-and-play SLM solutions for specific use cases (customer support, legal review, medical coding)',
    businesses: ['SaaS', 'Support Centers', 'Law Firms', 'Hospitals'],
    features: [
      'Pre-built workflows for specific jobs',
      'Integration with existing tools',
      'Training data included',
      'Admin dashboard & analytics',
      'White-label options available',
    ],
    opportunity: 'Per-seat or per-transaction pricing',
    targetCustomers: 'Industry-specific businesses wanting AI without customization',
  },
  {
    title: 'SLM Monitoring & DevOps Platform',
    description: 'Production monitoring, performance tracking, and cost optimization for deployed SLMs',
    businesses: ['All enterprises with deployed SLMs'],
    features: [
      'Real-time performance dashboards',
      'Drift detection & alerts',
      'Hallucination detection',
      'Cost optimization recommendations',
      'A/B testing framework',
    ],
    opportunity: 'SaaS subscriptions ($200-2000/month based on volume)',
    targetCustomers: 'Enterprises running SLMs in production',
  },
  {
    title: 'SLM Training Data Curation Platform',
    description: 'Marketplace and preparation service for high-quality, validated training data',
    businesses: ['All companies fine-tuning SLMs'],
    features: [
      'Data sourcing & collection',
      'Labeling & quality control',
      'Domain-specific data curation',
      'Data validation tools',
      'Compliance & privacy filtering',
    ],
    opportunity: 'Per-sample pricing + premium curation services',
    targetCustomers: 'Companies struggling to gather quality training data',
  },
  {
    title: 'Edge AI Hardware + SLM Bundle',
    description: 'Ruggedized edge devices pre-loaded with optimized SLMs for offline AI',
    businesses: ['Agriculture', 'Logistics', 'Remote Healthcare', 'Manufacturing'],
    features: [
      'Rugged, weather-resistant hardware',
      'Pre-optimized SLM stack',
      'Offline operation',
      'Solar/battery options',
      'Remote management dashboard',
    ],
    opportunity: 'Hardware sales + SaaS subscription',
    targetCustomers: 'Organizations operating in remote or harsh environments',
  },
];

export default function VerticalSolutions() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Business Opportunities with SLMs
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            8 proven SLM business models generating revenue today
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {verticalSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="liquid-glass p-8 rounded-2xl border border-cyan-500/10 hover:border-purple-500/30 transition-all"
            >
              {/* Header */}
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                {solution.description}
              </p>

              {/* Industries */}
              <div className="flex flex-wrap gap-2 mb-4">
                {solution.businesses.map((business, i) => (
                  <span
                    key={i}
                    className="glass px-3 py-1 rounded-full text-xs text-cyan-300 font-semibold"
                  >
                    {business}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="mb-4 border-t border-cyan-500/20 pt-4">
                <p className="text-xs font-bold text-purple-300 mb-2 uppercase">Key Features:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {solution.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                  {solution.features.length > 3 && (
                    <li className="text-cyan-400 font-semibold">+{solution.features.length - 3} more features</li>
                  )}
                </ul>
              </div>

              {/* Opportunity & Target */}
              <div className="space-y-3 border-t border-cyan-500/20 pt-4">
                <div className="glass-strong p-3 rounded-lg">
                  <p className="text-xs font-semibold text-green-400 mb-1">💰 REVENUE MODEL:</p>
                  <p className="text-sm text-gray-300">{solution.opportunity}</p>
                </div>
                <div className="glass p-3 rounded-lg">
                  <p className="text-xs font-semibold text-blue-300 mb-1">🎯 TARGET:</p>
                  <p className="text-sm text-gray-300">{solution.targetCustomers}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Model Comparison */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 gradient-text text-center">
            Revenue Opportunity Comparison
          </motion.h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-500/30">
                  <th className="text-left py-3 px-4 font-semibold text-purple-300">Business Model</th>
                  <th className="text-left py-3 px-4 font-semibold text-cyan-300">Startup Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-300">Revenue Potential</th>
                  <th className="text-left py-3 px-4 font-semibold text-blue-300">Time to Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">FTaaS Platform</td>
                  <td className="py-3 px-4">$50K-100K</td>
                  <td className="py-3 px-4 text-green-400">$100K-1M/year</td>
                  <td className="py-3 px-4 text-blue-400">3-6 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Domain Consulting</td>
                  <td className="py-3 px-4">$0 (Services)</td>
                  <td className="py-3 px-4 text-green-400">$500K-5M/year</td>
                  <td className="py-3 px-4 text-blue-400">1-3 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Model Marketplace</td>
                  <td className="py-3 px-4">$100K-300K</td>
                  <td className="py-3 px-4 text-green-400">$50K-500K/year</td>
                  <td className="py-3 px-4 text-blue-400">6-12 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Private Infrastructure</td>
                  <td className="py-3 px-4">$200K-500K</td>
                  <td className="py-3 px-4 text-green-400">$1M-10M/year</td>
                  <td className="py-3 px-4 text-blue-400">6-12 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Vertical Solutions</td>
                  <td className="py-3 px-4">$100K-200K</td>
                  <td className="py-3 px-4 text-green-400">$200K-2M/year</td>
                  <td className="py-3 px-4 text-blue-400">3-9 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Monitoring Platform</td>
                  <td className="py-3 px-4">$50K-150K</td>
                  <td className="py-3 px-4 text-green-400">$100K-500K/year</td>
                  <td className="py-3 px-4 text-blue-400">6-12 months</td>
                </tr>
                <tr className="border-b border-cyan-500/10 hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Data Curation</td>
                  <td className="py-3 px-4">$25K-75K</td>
                  <td className="py-3 px-4 text-green-400">$50K-200K/year</td>
                  <td className="py-3 px-4 text-blue-400">1-3 months</td>
                </tr>
                <tr className="hover:bg-purple-900/20 transition-colors">
                  <td className="py-3 px-4">Hardware + SaaS</td>
                  <td className="py-3 px-4">$500K-2M</td>
                  <td className="py-3 px-4 text-green-400">$500K-5M/year</td>
                  <td className="py-3 px-4 text-blue-400">9-18 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.div variants={staggerItem} className="mt-8 p-6 glass-strong rounded-2xl">
            <p className="text-center text-gray-300">
              <span className="text-lg font-bold gradient-text">Key Insight:</span> Combined with your SLM platform, these business models have 
              <span className="text-green-400 font-bold"> 3-5x better margins</span> than equivalent LLM businesses while 
              addressing <span className="text-cyan-400 font-bold">underserved enterprise demand</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
