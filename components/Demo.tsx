'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, viewportOptions } from '@/lib/animations';
import { useState } from 'react';

export default function Demo() {
  const [activeTab, setActiveTab] = useState<'metrics' | 'code'>('metrics');

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
            Experience SLM Performance
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            See real-time model deployment and inference metrics
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
              onClick={() => setActiveTab('metrics')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'metrics'
                  ? 'btn-gradient'
                  : 'glass hover:glass-strong'
              }`}
            >
              Live Metrics
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
              Edge Deployment
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
            {activeTab === 'metrics' ? (
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Live SLM Deployment
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Model Type</span>
                      <span className="glass px-4 py-2 rounded-lg text-cyan-400">
                        SLM-13B (Specialized)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Memory Usage</span>
                      <span className="glass px-4 py-2 rounded-lg text-green-400">
                        2.1 GB (84% optimized)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Inference Latency</span>
                      <span className="glass px-4 py-2 rounded-lg text-purple-400">
                        45ms (edge device)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Task Accuracy</span>
                      <span className="glass px-4 py-2 rounded-lg text-orange-400">
                        96.2% (domain-specific)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Cost Analysis vs LLMs
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Inference Cost (1M tokens)</span>
                      <span className="glass px-4 py-2 rounded-lg text-green-400">
                        $0.08 (vs $2.50 LLM)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Memory Savings</span>
                      <span className="glass px-4 py-2 rounded-lg text-green-400">
                        84% Reduction (18GB → 2.1GB)
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Hardware Required</span>
                      <span className="glass px-4 py-2 rounded-lg text-blue-400">
                        Raspberry Pi / Mobile CPU
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    RAG Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Accuracy Improvement</span>
                      <span className="glass px-4 py-2 rounded-lg text-green-400">
                        70% Better than Traditional RAG
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Semantic Caching</span>
                      <span className="glass px-4 py-2 rounded-lg text-blue-400">
                        73% Cost Reduction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Deploy to Edge in Minutes
                  </h3>
                  <pre className="bg-black/50 p-4 rounded-lg text-sm text-cyan-400 overflow-x-auto font-mono">
                    {`// 1. Deploy SLM to edge device
const model = await SLM.deploy({
  modelId: "slm-13b-medical",
  hardware: "mobile",
  optimization: "fused-kernels",
  quantization: "4-bit"
});

// 2. Run inference locally - no cloud!
const result = await model.inference(
  "Classify patient symptoms",
  { latency: "45ms", privacy: "on-device" }
);

// 3. Monitor performance
console.log({
  inference_ms: 45,
  memory_mb: 2100,
  accuracy: 0.962,
  cost_per_1M_tokens: 0.08
});`}
                  </pre>
                </div>

                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 gradient-text-static">
                    Hybrid RAG with SLM
                  </h3>
                  <pre className="bg-black/50 p-4 rounded-lg text-sm text-green-400 overflow-x-auto font-mono">
                    {`// Combine SLM reasoning + semantic retrieval
const response = await model.ragQuery({
  prompt: "Find similar medical cases",
  retrieverConfig: {
    type: "semantic-cache",
    indexSize: "local"
  },
  metrics: {
    accuracy: 0.94,  // 20% better
    latency_ms: 78,
    cost_reduction: 0.73
  }
});

// Works entirely on edge - HIPAA compliant
// No data leaves the device`}
                  </pre>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-gradient py-4 rounded-xl font-semibold mt-4"
                >
                  Start Building →
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
