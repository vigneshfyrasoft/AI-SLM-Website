'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'forever',
    description: 'Perfect for learning and small projects',
    features: [
      '5 models per month',
      '100 MB dataset size',
      'Community support',
      'Basic analytics',
      'Public deployments',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For professional developers and small teams',
    features: [
      'Unlimited models',
      '10 GB dataset size',
      'Priority support',
      'Advanced analytics',
      'Private deployments',
      'API access',
      'Custom domains',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with custom needs',
    features: [
      'Everything in Pro',
      'Unlimited dataset size',
      'Dedicated support',
      'SLA guarantee',
      'On-premise deployment',
      'Custom integrations',
      'Advanced security',
      'Training & consulting',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Choose the plan that's right for you. No hidden fees, ever.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`relative liquid-glass p-8 rounded-3xl ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="btn-gradient px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold mb-8 ${
                  plan.popular ? 'btn-gradient' : 'glass hover:glass-strong'
                }`}
              >
                {plan.cta}
              </motion.button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-4">
            Have questions? Check out our{' '}
            <a href="#" className="text-cyan-400 hover:underline">
              FAQ
            </a>{' '}
            or{' '}
            <a href="#" className="text-cyan-400 hover:underline">
              contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
