'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'API Docs', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};

const socialLinks = [
  { icon: '𝕏', label: 'Twitter', href: '#' },
  { icon: '💼', label: 'LinkedIn', href: '#' },
  { icon: '🐙', label: 'GitHub', href: '#' },
  { icon: '💬', label: 'Discord', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10" />

      <div className="container-padding relative z-10 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">AI SLM</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Build powerful AI models without the complexity. The future of machine learning is here.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass w-10 h-10 rounded-full flex items-center justify-center hover:glass-strong"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={staggerItem}>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} AI SLM. All rights reserved. Built with 💜 for developers.</p>
        </motion.div>
      </div>
    </footer>
  );
}
