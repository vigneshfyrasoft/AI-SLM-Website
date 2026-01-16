'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, floatingOrb, floatingOrbSlow } from '@/lib/animations';

const stats = [
  { value: '84%', label: 'Memory Reduction' },
  { value: '31x', label: 'Cost Savings' },
  { value: '45ms', label: 'Edge Latency' },
  { value: '96%+', label: 'Accuracy' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb orb-purple w-96 h-96 top-20 -left-20"
          variants={floatingOrb}
          animate="animate"
        />
        <motion.div
          className="orb orb-cyan w-96 h-96 top-1/3 right-0"
          variants={floatingOrbSlow}
          animate="animate"
        />
        <motion.div
          className="orb orb-blue w-80 h-80 bottom-20 left-1/4"
          variants={floatingOrb}
          animate="animate"
        />
        <motion.div
          className="orb orb-pink w-96 h-96 top-1/2 right-10"
          variants={floatingOrbSlow}
          animate="animate"
        />
      </div>

      {/* Content */}
      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Enterprise AI at{' '}
            <span className="gradient-text">Edge Speed</span>
            <br />
            Without the Cloud Cost
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Deploy specialized Small Language Models that run 10x faster on edge devices, 
            use 84% less memory, and cost a fraction of LLMs—while maintaining enterprise-grade accuracy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Building Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
