'use client';

import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaRocket, FaHeart, FaBriefcase, FaUsers, FaRobot } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      icon: FaBriefcase,
      title: '4+ Years',
      description: 'Development Experience'
    },
    {
      icon: FaCode,
      title: 'Full-Stack',
      description: 'MERN + AI Integration'
    },
    {
      icon: FaUsers,
      title: '5+ Clients',
      description: 'Freelance & Agency Work'
    },
    {
      icon: FaRobot,
      title: 'AI Powered',
      description: 'OpenAI & Chatbot Solutions'
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
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
                  <Image
                    src="/Images/ali final 2.png"
                    alt="Ali Raza - About Me"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Building digital products that people actually love using
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hey! I&apos;m <strong className="text-blue-600 dark:text-blue-400">Ali Raza</strong> &mdash;
                a 20-year-old full-stack developer from Karachi with 4+ years of hands-on experience
                turning ideas into real, working products. What started as curiosity about how websites
                work has grown into a career where I build solutions for real businesses every day.
              </p>

              <p>
                I work at <strong className="text-purple-600 dark:text-purple-400">MS Capital Soft</strong> as
                a Full-Stack Developer, where I contribute to production platforms
                like <strong>Adspoke</strong>, <strong>ActiveCalculator</strong>, and <strong>Selvo</strong>.
                On the side, I&apos;ve delivered projects for 5+ freelance clients &mdash; from e-commerce
                stores and agency websites to AI-powered chatbots.
              </p>

              <p>
                What makes me different? I don&apos;t just build frontends or backends &mdash; I integrate
                <strong className="text-green-600 dark:text-green-400"> AI into real products</strong>.
                From OpenAI-powered chatbots to Gemini AI health analyzers, I love combining
                web development with artificial intelligence to create solutions that are genuinely useful.
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

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-5 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-xl" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Education & Certifications</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>BSCS</strong> &mdash; Ziauddin University (3rd Semester)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>Web Development</strong> &mdash; Saylani Mass IT Training (Certified)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span><strong>AI Chatbot Development</strong> &mdash; Saylani Mass IT Training (Certified)</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Got an idea you want to bring to life? Whether it&apos;s a web app, an AI-powered tool,
                or something completely out of the box &mdash; I&apos;d love to hear about it.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Let&apos;s Talk About Your Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
