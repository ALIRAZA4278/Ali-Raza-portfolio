'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

export default function Experience() {
  const currentWork = [
    {
      title: 'Full Stack Developer',
      company: 'Software House',
      period: 'Current',
      description: 'Working as a Full Stack Developer at a software house, developing and maintaining multiple production-level platforms and applications. Responsible for feature development, bug fixes, code reviews, and collaborating with cross-functional teams.',
      type: 'Full-time',
      icon: FaBriefcase,
      projects: [
        {
          name: 'Adspoke',
          website: 'https://adspoke.ai/',
          role: 'Developing features for AI-powered video advertisement platform'
        },
        {
          name: 'ActiveCalculator',
          website: 'https://activecalculator.com/',
          role: 'Working on interactive calculator builder platform serving 1000+ businesses'
        },
        {
          name: 'Mohit Computers',
          website: 'https://mohit-computers-vg8s.vercel.app/',
          role: 'Developing e-commerce platform for used/refurbished laptops and accessories'
        },
        {
          name: 'The Social Hawks',
          website: 'https://thesocialhawks.com/',
          role: 'Building and maintaining website for digital marketing agency'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building innovative solutions and contributing to impactful projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Current Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Current Position
          </h3>
          {currentWork.map((work, index) => (
            <motion.div
              key={work.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg border border-blue-100 dark:border-gray-600"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-white">
                    <work.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {work.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {work.company}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                  {work.period}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {work.description}
              </p>

              {/* Projects List */}
              <div className="space-y-4">
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                  Contributing to:
                </h5>
                {work.projects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 group mb-2"
                    >
                      {project.name}
                      <FaExternalLinkAlt size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
