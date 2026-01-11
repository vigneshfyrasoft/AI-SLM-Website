'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const features = [
  {
    icon: '🚀',
    title: 'Lightning Fast Training',
    description: 'Train models 10x faster with our optimized infrastructure. Get results in minutes, not hours.',
  },
  {
    icon: '🎯',
    title: 'Precision Tuning',
    description: 'Fine-tune models with surgical precision. Achieve accuracy that rivals larger models.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance. Your data stays private and secure.',
  },
  {
    icon: '⚡',
    title: 'Edge Deployment',
    description: 'Deploy models to edge devices with zero latency. Run AI anywhere, anytime.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Monitor model performance with live metrics. Optimize on the fly with actionable insights.',
  },
  {
    icon: '🔄',
    title: 'Auto-Optimization',
    description: 'AI-powered model optimization. Continuously improve performance without manual tuning.',
  },
  {
    icon: '🌐',
    title: 'Multi-Language Support',
    description: 'Train models in 100+ languages. Break language barriers with ease.',
  },
  {
    icon: '🎨',
    title: 'No-Code Interface',
    description: 'Visual model builder with drag-and-drop simplicity. Build AI without writing code.',
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
