'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Project Manager',
      company: 'TechStart Solutions',
      image: '/testimonials/sarah.jpg',
      content: 'Ali delivered exceptional work on our e-commerce platform. His attention to detail and modern design approach exceeded our expectations. The site performance improved by 60% after his optimizations.',
      rating: 5,
      project: 'E-commerce Platform',
      socialLink: 'https://linkedin.com/in/sarah-johnson',
      platform: 'linkedin'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Startup Founder',
      company: 'InnovateLab',
      image: '/testimonials/michael.jpg',
      content: 'Working with Ali was a fantastic experience. He not only built our MVP but also provided valuable insights on user experience. His code quality is top-notch and well-documented.',
      rating: 5,
      project: 'SaaS Dashboard',
      socialLink: 'https://twitter.com/michael_chen',
      platform: 'twitter'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Creative Agency',
      image: '/testimonials/emily.jpg',
      content: 'Ali transformed our vision into a stunning portfolio website. His skills in React and Next.js are impressive for someone so young. Highly recommend for any web development project.',
      rating: 5,
      project: 'Portfolio Website',
      socialLink: 'https://linkedin.com/in/emily-rodriguez',
      platform: 'linkedin'
    },
    {
      id: 4,
      name: 'David Kumar',
      position: 'Tech Lead',
      company: 'Digital Solutions Inc',
      image: '/testimonials/david.jpg',
      content: 'Ali&apos;s expertise in the MERN stack helped us deliver our project ahead of schedule. His problem-solving skills and communication throughout the development process were excellent.',
      rating: 5,
      project: 'Web Application',
      socialLink: 'https://linkedin.com/in/david-kumar',
      platform: 'linkedin'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Don&apos;t just take my word for it. Here&apos;s what clients and collaborators say about working with me.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-6 left-6 text-blue-500 dark:text-blue-400 opacity-20"
              >
                <FaQuoteLeft size={40} />
              </motion.div>

              <div className="relative z-10">
                {/* Star Rating */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-1 mb-6"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <FaStar className="text-yellow-400 text-lg" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic"
                >
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Client Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Project & Social */}
                  <div className="text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Project: {testimonials[currentIndex].project}
                    </p>
                    <motion.a
                      href={testimonials[currentIndex].socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {testimonials[currentIndex].platform === 'linkedin' ? (
                        <FaLinkedin size={16} />
                      ) : (
                        <FaXTwitter size={16} />
                      )}
                      <span className="text-sm">Connect</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaChevronLeft size={16} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-all hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaChevronRight size={16} />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Modern Tech Stack</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
