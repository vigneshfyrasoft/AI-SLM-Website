'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const whySLMs = [
  {
    title: 'The Edge Revolution',
    description: 'Deploy AI directly on devices - phones, IoT sensors, autonomous vehicles. No latency, no data transmission, full autonomy.',
    impact: 'Enable real-time AI at scale',
  },
  {
    title: 'Privacy by Design',
    description: 'Models run entirely on-device. Patient data in hospitals, financial data in banks - stays exactly where it should be. HIPAA & GDPR compliant by architecture.',
    impact: 'Zero data exfiltration',
  },
  {
    title: 'Cost Revolution',
    description: 'Inference costs drop from $2.50 per 1M tokens (LLM) to just $0.08 (SLM). Run thousands of models for the price of one LLM.',
    impact: '31x cheaper than LLMs',
  },
  {
    title: 'Domain Mastery',
    description: 'Fine-tune smaller models on specialized data. Achieves 96%+ accuracy on domain tasks with just 5-10% of LLM data requirements.',
    impact: 'Expert-level accuracy, tiny datasets',
  },
  {
    title: 'Intelligent Retrieval',
    description: 'Hybrid approach: SLM reasoning + semantic retrieval. 70% better accuracy than traditional RAG. 73% reduction in API costs with semantic caching.',
    impact: 'Smart RAG, not brute force',
  },
  {
    title: 'Federated Learning',
    description: 'Train models across multiple organizations without sharing raw data. Healthcare networks, financial consortiums, research collaborations - all with zero data sharing.',
    impact: 'Collaborate securely',
  },
];

export default function WhySLMs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />

      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Why SLMs Are the Future
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Research-backed advantages from leading AI institutions and industry leaders
          </motion.p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whySLMs.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="liquid-glass p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="mb-4">
                <div className="inline-block px-4 py-2 glass rounded-full mb-4">
                  <span className="gradient-text text-sm font-bold">{item.impact}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Research credibility section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="mt-20 glass p-8 md:p-12 rounded-3xl"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-6 text-center gradient-text">
            Backed by Leading Research
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
              <p className="text-gray-300">Accuracy improvement with hybrid retrieval (Databricks, 2025)</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">84%</div>
              <p className="text-gray-300">Memory reduction with fused kernels (VentureBeat, 2026)</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">73%</div>
              <p className="text-gray-300">Cost savings with semantic caching (MongoDB, 2025)</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
