'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Prepare Domain Data',
    description: 'Upload specialized datasets for your domain. Our system automatically handles preprocessing and tokenization.',
    icon: '📚',
  },
  {
    number: '02',
    title: 'Configure SLM Architecture',
    description: 'Choose model size (7B, 13B, 30B params). Our guided builder recommends optimal configs for your hardware.',
    icon: '🏗️',
  },
  {
    number: '03',
    title: 'Train with Optimization',
    description: 'Fused kernel acceleration + semantic caching. Train 10x faster. Monitor real-time accuracy improvements.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Deploy to Any Device',
    description: 'One-click deployment to mobile, edge, IoT, or cloud. Your model runs autonomously without cloud dependency.',
    icon: '🎯',
  },
];

export default function HowItWorks() {
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
            How It Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            From idea to production in four simple steps
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 opacity-30 transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className="relative"
              >
                {/* Connector dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-4 border-[#0a0a14] z-10" />

                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="liquid-glass p-8 rounded-2xl mt-8 md:mt-12"
                >
                  {/* Step number */}
                  <div className="text-6xl font-bold gradient-text mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
