'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const businessCases = [
  {
    industry: 'Healthcare',
    problem: 'Medical coders spending 6+ hours/day on documentation',
    slmSolution: 'SLM auto-generates clinical notes from provider speech',
    metrics: {
      timeReduction: '40%',
      costSaving: '$120K per coder annually',
      accuracy: '96%+',
      compliance: 'HIPAA-compliant (on-device)',
    },
    implementation: '4-6 weeks',
    payback: '3 months',
  },
  {
    industry: 'Finance',
    problem: 'Fraud detection requires constant model updates, high latency',
    slmSolution: 'SLM deployed on-device for real-time transaction analysis',
    metrics: {
      timeReduction: '99.2% accuracy',
      costSaving: '35% reduction in fraud losses',
      accuracy: '45ms decision time',
      compliance: 'Instant compliance alerts',
    },
    implementation: '8-10 weeks',
    payback: '2-3 months',
  },
  {
    industry: 'Legal',
    problem: 'Junior associates spend days reviewing contracts manually',
    slmSolution: 'SLM trained on firm\'s legal docs analyzes contracts',
    metrics: {
      timeReduction: '60% faster reviews',
      costSaving: '$250K annually per firm',
      accuracy: '94% catch rate for risks',
      compliance: 'On-premise option available',
    },
    implementation: '6-8 weeks',
    payback: '4-6 months',
  },
  {
    industry: 'E-commerce',
    problem: 'Customer support team drowning in repetitive questions',
    slmSolution: 'SLM handles 80% of support tickets on mobile app',
    metrics: {
      timeReduction: '75% fewer manual responses',
      costSaving: '$180K per support center',
      accuracy: '94% customer satisfaction',
      compliance: 'On-device personalization',
    },
    implementation: '3-4 weeks',
    payback: '1-2 months',
  },
  {
    industry: 'Manufacturing',
    problem: 'Equipment downtime costs $50K/hour, reactive maintenance',
    slmSolution: 'SLM analyzes sensor data for predictive maintenance',
    metrics: {
      timeReduction: '25% more uptime',
      costSaving: '$2M+ annually',
      accuracy: '87% issue prediction',
      compliance: 'Offline edge operation',
    },
    implementation: '12-16 weeks',
    payback: '2-3 months',
  },
  {
    industry: 'Agriculture',
    problem: 'Farmers lack real-time crop health intelligence',
    slmSolution: 'SLM analyzes imagery from drones for crop assessment',
    metrics: {
      timeReduction: '20% yield improvement',
      costSaving: '$40K per farm',
      accuracy: '91% disease detection',
      compliance: 'Works offline in fields',
    },
    implementation: '8-12 weeks',
    payback: '3-4 months',
  },
];

export default function BusinessCases() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5" />

      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Proven ROI by Industry
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Real-world SLM implementations showing 2-4 month payback periods
          </motion.p>
        </motion.div>

        {/* Business Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {businessCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerItem}
              className="liquid-glass p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
            >
              {/* Industry Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {useCase.industry}
                </h3>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4 mb-6 border-t border-cyan-500/20 pt-4">
                <div>
                  <p className="text-xs font-bold text-red-400 mb-1">❌ PROBLEM:</p>
                  <p className="text-sm text-gray-300">{useCase.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-400 mb-1">✅ SLM SOLUTION:</p>
                  <p className="text-sm text-gray-300">{useCase.slmSolution}</p>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 border-t border-cyan-500/20 pt-4">
                {Object.entries(useCase.metrics).map(([key, value]) => (
                  <div key={key} className="glass-strong p-3 rounded-lg">
                    <p className="text-xs text-gray-400 capitalize mb-1">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-lg font-bold gradient-text">{value}</p>
                  </div>
                ))}
              </div>

              {/* Implementation Timeline */}
              <div className="border-t border-cyan-500/20 pt-4 flex gap-4">
                <div className="flex-1 glass p-3 rounded-lg">
                  <p className="text-xs text-purple-300 font-bold mb-1">⏱️ IMPLEMENTATION</p>
                  <p className="text-sm font-semibold text-gray-200">{useCase.implementation}</p>
                </div>
                <div className="flex-1 glass-strong p-3 rounded-lg">
                  <p className="text-xs text-green-300 font-bold mb-1">💰 PAYBACK</p>
                  <p className="text-sm font-semibold text-green-400">{useCase.payback}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI Summary Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="glass-strong p-8 md:p-12 rounded-3xl mb-12"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 text-center gradient-text">
            Why SLMs Beat LLMs on ROI
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={staggerItem} className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl font-bold text-green-400 mb-3">31x</div>
              <p className="font-semibold text-gray-200 mb-2">Lower Inference Cost</p>
              <p className="text-sm text-gray-400">$0.08 vs $2.50 per 1M tokens</p>
            </motion.div>

            <motion.div variants={staggerItem} className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-3">3-5x</div>
              <p className="font-semibold text-gray-200 mb-2">Better Margins</p>
              <p className="text-sm text-gray-400">Hosting costs dramatically lower</p>
            </motion.div>

            <motion.div variants={staggerItem} className="glass p-6 rounded-2xl text-center">
              <div className="text-5xl font-bold text-purple-400 mb-3">2-4x</div>
              <p className="font-semibold text-gray-200 mb-2">Faster Payback</p>
              <p className="text-sm text-gray-400">Compared to LLM deployments</p>
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="mt-8 p-6 border border-green-500/30 rounded-2xl bg-green-900/10">
            <p className="text-center">
              <span className="text-lg font-bold text-green-400">💡 Key Insight:</span>
              <br />
              <span className="text-gray-300">Most enterprises break even on SLM implementations within 2-4 months, 
              enabling immediate reinvestment in additional AI projects. LLM ROI typically takes 9-18 months.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Implementation Success Factors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="glass p-8 rounded-2xl"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 gradient-text">
            SLM Success Formula
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Domain-Specific Data',
                description: 'SLMs excel with 5-10% of the data needed by LLMs for domain tasks',
                icon: '📊',
              },
              {
                title: 'Clear Use Case Definition',
                description: 'Best ROI when solving specific, well-defined business problems',
                icon: '🎯',
              },
              {
                title: 'On-Device Deployment',
                description: 'Edge processing eliminates cloud costs and privacy concerns',
                icon: '⚡',
              },
              {
                title: 'Continuous Monitoring',
                description: 'Track performance metrics and optimize models over time',
                icon: '📈',
              },
              {
                title: 'Privacy Compliance',
                description: 'On-device SLMs meet regulatory requirements by default',
                icon: '🔒',
              },
              {
                title: 'Scalable Infrastructure',
                description: 'Deploy to thousands of devices with minimal bandwidth',
                icon: '🚀',
              },
            ].map((factor, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-strong p-6 rounded-xl"
              >
                <div className="text-3xl mb-2">{factor.icon}</div>
                <h4 className="font-bold text-cyan-300 mb-2">{factor.title}</h4>
                <p className="text-sm text-gray-300">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
