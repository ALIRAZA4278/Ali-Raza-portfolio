'use client';

import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaRocket, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Bachelor\'s in Computer Science'
    },
    {
      icon: FaCode,
      title: 'Specialization',
      description: 'MERN Stack Development'
    },
    {
      icon: FaRocket,
      title: 'Focus',
      description: 'Modern Web Applications'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Clean, Efficient Code'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                    AR
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Let me share a bit about my journey
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello, I&apos;m <strong className="text-blue-600 dark:text-blue-400">Ali Raza</strong>, 
                a 19-year-old web developer with a great interest in technology and coding. 
                My curiosity about how websites are constructed led me to pursue web development, 
                and I&apos;ve subsequently honed a diverse set of abilities to transform ideas into 
                effective, user-centric solutions.
              </p>
              
              <p>
                I specialize in developing high-performance web applications with the 
                <strong className="text-purple-600 dark:text-purple-400"> MERN stack</strong>, 
                ensuring a consistent and engaging user experience across all devices. 
                I&apos;m passionate about producing clean, efficient code and always learning 
                new technologies to stay on the cutting edge of web development.
              </p>
              
              <p>
                Currently, I&apos;m expanding my expertise by learning 
                <strong className="text-green-600 dark:text-green-400"> Agentic AI</strong>, 
                combining my web development skills with artificial intelligence to create 
                even more innovative solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon className="text-2xl text-blue-600 dark:text-blue-400 mb-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Let&apos;s Connect!
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you&apos;re looking for a passionate web developer to collaborate with, 
                or if you have any exciting projects in mind, feel free to reach out. 
                I&apos;m always excited about working on new challenges and creating impactful digital experiences!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}