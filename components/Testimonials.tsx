'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'ML Engineer at TechCorp',
    avatar: '👩‍💻',
    content: 'This platform cut our model development time from weeks to days. The automated optimization is incredible!',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO at StartupXYZ',
    avatar: '👨‍💼',
    content: 'We deployed our first production model in under 24 hours. The developer experience is unmatched.',
    rating: 5,
  },
  {
    name: 'Aisha Patel',
    role: 'Data Scientist at FinTech Inc',
    avatar: '👩‍🔬',
    content: 'Finally, a platform that makes AI accessible without sacrificing power. Our team loves it!',
    rating: 5,
  },
  {
    name: 'James Kim',
    role: 'AI Lead at Enterprise Co',
    avatar: '👨‍🎓',
    content: 'The security features and compliance tools are enterprise-grade. Perfect for our regulated industry.',
    rating: 5,
  },
  {
    name: 'Elena Volkov',
    role: 'Founder at AI Startup',
    avatar: '👩‍💼',
    content: 'Best ROI we&apos;ve seen. Reduced costs by 70% while improving model performance. Game changer!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Senior Developer',
    avatar: '👨‍💻',
    content: 'The API is clean, documentation is excellent, and support is responsive. A developer&apos;s dream.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-purple-900/10" />

      <div className="container-padding relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="section-title">
            Loved by Developers
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle">
            Join thousands of developers building the future of AI
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                variants={staggerItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="liquid-glass p-8 rounded-2xl"
              >
                {/* Avatar and Info */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="glass w-12 h-12 rounded-full flex items-center justify-center hover:glass-strong"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="glass w-12 h-12 rounded-full flex items-center justify-center hover:glass-strong"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
