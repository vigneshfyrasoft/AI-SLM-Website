'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const features = [
  {
    icon: '⚡',
    title: 'Mobile & Edge First',
    description: 'Deploy directly to mobile devices, IoT sensors, and edge servers. Instant inference with zero cloud latency.',
  },
  {
    icon: '💰',
    title: '84% Memory Reduction',
    description: 'Our fused kernel optimization cuts memory usage dramatically. Run SLMs on devices that LLMs cannot touch.',
  },
  {
    icon: '🧠',
    title: 'Contextual Retrieval',
    description: 'Hybrid architecture combining SLM reasoning with semantic retrieval. 70% better accuracy than traditional RAG.',
  },
  {
    icon: '🔒',
    title: 'Data Privacy First',
    description: 'Train and inference entirely on-device. Zero data transmission. Perfect for regulated industries.',
  },
  {
    icon: '🎯',
    title: 'Domain Specialization',
    description: 'Fine-tune SLMs for specific domains. Achieves 94%+ accuracy on specialized tasks with minimal data.',
  },
  {
    icon: '📊',
    title: 'Cost-Efficient Inference',
    description: '1/20th the inference cost of large models. Semantic caching cuts API bills by 73% automatically.',
  },
  {
    icon: '🔄',
    title: 'Federated Learning',
    description: 'Train models where data lives. Collaborative learning across multiple parties without data sharing.',
  },
  {
    icon: '🚀',
    title: 'Agentic AI Ready',
    description: 'Build multi-agent systems with orchestration-first design. Proven framework for complex workflows.',
  },
];

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Powerful Features
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Everything you need to build, train, and deploy world-class AI models
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -8 }}
              className="feature-card group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text-static">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
