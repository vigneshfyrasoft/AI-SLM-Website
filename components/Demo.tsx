'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from '@/lib/animations';
import { useState } from 'react';

export default function Demo() {
  const [activeTab, setActiveTab] = useState<'code' | 'visual'>('visual');

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
            See It In Action
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Experience the power of our platform with an interactive demo
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={scaleIn}
          className="max-w-5xl mx-auto"
        >
          {/* Tab selector */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('visual')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'visual'
                  ? 'btn-gradient'
                  : 'glass hover:glass-strong'
              }`}
            >
              Visual Builder
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('code')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'code'
                  ? 'btn-gradient'
                  : 'glass hover:glass-strong'
              }`}
            >
              Code API
            </motion.button>
          </div>

          {/* Demo content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="liquid-glass p-8 md:p-12 rounded-3xl"
          >
            {activeTab === 'visual' ? (
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Model Configuration
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Model Type</span>
                      <span className="glass px-4 py-2 rounded-lg text-cyan-400">
                        Text Generation
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Training Data</span>
                      <span className="glass px-4 py-2 rounded-lg text-green-400">
                        15,000 samples
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Accuracy</span>
                      <span className="glass px-4 py-2 rounded-lg text-purple-400">
                        94.7%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Training Progress
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Epoch 8/10</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-gradient py-4 rounded-xl font-semibold"
                >
                  Deploy Model →
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 gradient-text-static">
                  Quick Start Code
                </h3>
                <div className="bg-[#1a1a2e] p-6 rounded-xl font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>{`// Install the SDK
npm install @ai-slm/sdk

// Initialize client
import { AIClient } from '@ai-slm/sdk';

const client = new AIClient({
  apiKey: 'your-api-key'
});

// Train a model
const model = await client.train({
  type: 'text-generation',
  data: trainingData,
  config: {
    epochs: 10,
    batchSize: 32
  }
});

// Deploy and predict
const prediction = await model.predict({
  input: 'Your prompt here'
});`}</code>
                  </pre>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-gradient py-4 rounded-xl font-semibold"
                >
                  View Documentation →
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
