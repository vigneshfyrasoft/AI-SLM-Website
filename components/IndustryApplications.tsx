'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const industries = [
  {
    icon: '🏥',
    name: 'Healthcare',
    applications: [
      'Medical coding & clinical documentation',
      'Patient intake & triage automation',
      'Drug interaction analysis',
      'Radiology report summarization'
    ],
    benefit: 'On-device processing ensures HIPAA compliance',
    roi: '40% reduction in documentation time',
  },
  {
    icon: '⚖️',
    name: 'Legal & Compliance',
    applications: [
      'Contract analysis & review',
      'Legal document classification',
      'Compliance monitoring & alerts',
      'Discovery document processing'
    ],
    benefit: 'Privacy-first on-premise deployment',
    roi: '60% faster contract reviews',
  },
  {
    icon: '💳',
    name: 'Financial Services',
    applications: [
      'Fraud detection in transactions',
      'Risk assessment automation',
      'Customer service automation',
      'Regulatory compliance checking'
    ],
    benefit: 'Real-time processing, zero cloud latency',
    roi: '35% reduction in fraud losses',
  },
  {
    icon: '🏭',
    name: 'Manufacturing',
    applications: [
      'Quality control inspection',
      'Predictive maintenance alerts',
      'Production line optimization',
      'Safety protocol documentation'
    ],
    benefit: 'Offline operation on factory edge devices',
    roi: '25% increase in equipment uptime',
  },
  {
    icon: '🛒',
    name: 'E-commerce & Retail',
    applications: [
      'Product description generation',
      'Customer support automation',
      'Personalized recommendations',
      'Inventory management insights'
    ],
    benefit: 'Mobile app integration, on-device personalization',
    roi: '45% improvement in support metrics',
  },
  {
    icon: '🌾',
    name: 'Agriculture',
    applications: [
      'Crop health analysis from images',
      'Soil quality assessment',
      'Weather prediction integration',
      'Farm management optimization'
    ],
    benefit: 'Works offline in remote locations',
    roi: '20% yield improvement',
  },
  {
    icon: '🚗',
    name: 'Autonomous Vehicles & Logistics',
    applications: [
      'Route optimization',
      'Real-time decision making',
      'Safety protocol verification',
      'Delivery status predictions'
    ],
    benefit: '45ms response time for real-time decisions',
    roi: '30% fuel cost savings',
  },
  {
    icon: '📱',
    name: 'Mobile & Consumer Apps',
    applications: [
      'On-device personal AI assistants',
      'Offline note-taking & organization',
      'Accessibility features (voice)',
      'Privacy-first coding assistance'
    ],
    benefit: 'Zero data transmission, instant response',
    roi: 'Premium tier 3x faster adoption',
  },
];

export default function IndustryApplications() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-cyan-900/5" />

      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Industry-Specific Applications
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            SLMs are transforming 8+ major industries with practical, deployable solutions
          </motion.p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -4 }}
              className="liquid-glass p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">
                {industry.name}
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-cyan-300 mb-2">USE CASES:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {industry.applications.slice(0, 2).map((app, i) => (
                      <li key={i}>✓ {app}</li>
                    ))}
                    {industry.applications.length > 2 && (
                      <li className="text-cyan-400 font-semibold">+{industry.applications.length - 2} more</li>
                    )}
                  </ul>
                </div>

                <div className="border-t border-cyan-500/20 pt-3">
                  <p className="text-xs font-semibold text-purple-300 mb-1">KEY BENEFIT:</p>
                  <p className="text-xs text-gray-300">{industry.benefit}</p>
                </div>

                <div className="glass p-2 rounded-lg">
                  <p className="text-xs text-green-400 font-semibold">{industry.roi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Details Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20"
        >
          {/* Healthcare Deep Dive */}
          <motion.div
            variants={staggerItem}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏥</span>
              <h3 className="text-2xl font-bold">Healthcare Revolution</h3>
            </div>
            <p className="text-gray-300 mb-4">
              SLMs enable HIPAA-compliant AI on hospital networks without cloud dependency.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-cyan-300 mb-2">Real-World Impact:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Medical coding automation (40% faster)</li>
                  <li>✓ Clinical note summarization (privacy-first)</li>
                  <li>✓ Drug interaction checking (real-time)</li>
                  <li>✓ Patient risk stratification</li>
                </ul>
              </div>
              <div className="glass-strong p-3 rounded-lg">
                <p className="text-sm"><span className="text-green-400 font-bold">ROI:</span> 40% reduction in admin overhead, 100% HIPAA compliant</p>
              </div>
            </div>
          </motion.div>

          {/* Financial Services Deep Dive */}
          <motion.div
            variants={staggerItem}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">💳</span>
              <h3 className="text-2xl font-bold">Financial Intelligence</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Real-time fraud detection and compliance monitoring with 45ms response times.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-purple-300 mb-2">Real-World Impact:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Fraud detection (no false negatives)</li>
                  <li>✓ Risk scoring (real-time)</li>
                  <li>✓ Compliance monitoring (instant alerts)</li>
                  <li>✓ AML screening (distributed processing)</li>
                </ul>
              </div>
              <div className="glass-strong p-3 rounded-lg">
                <p className="text-sm"><span className="text-green-400 font-bold">ROI:</span> 35% reduction in fraud losses, 99.9% compliance</p>
              </div>
            </div>
          </motion.div>

          {/* Manufacturing Deep Dive */}
          <motion.div
            variants={staggerItem}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🏭</span>
              <h3 className="text-2xl font-bold">Smart Manufacturing</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Edge-deployed SLMs enable offline AI on factory floors with zero cloud dependency.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-cyan-300 mb-2">Real-World Impact:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Predictive maintenance (detect issues early)</li>
                  <li>✓ Quality control automation</li>
                  <li>✓ Production optimization</li>
                  <li>✓ Safety protocol enforcement</li>
                </ul>
              </div>
              <div className="glass-strong p-3 rounded-lg">
                <p className="text-sm"><span className="text-green-400 font-bold">ROI:</span> 25% equipment uptime increase, 15% cost savings</p>
              </div>
            </div>
          </motion.div>

          {/* E-commerce Deep Dive */}
          <motion.div
            variants={staggerItem}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🛒</span>
              <h3 className="text-2xl font-bold">Retail Transformation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              On-device personalization and instant customer support without LLM costs.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-purple-300 mb-2">Real-World Impact:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Product descriptions (auto-generated)</li>
                  <li>✓ Customer support (instant responses)</li>
                  <li>✓ Recommendations (on-device, personalized)</li>
                  <li>✓ Inventory optimization</li>
                </ul>
              </div>
              <div className="glass-strong p-3 rounded-lg">
                <p className="text-sm"><span className="text-green-400 font-bold">ROI:</span> 45% better support metrics, 3x cheaper operations</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
