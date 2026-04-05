'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'MS Capital Soft',
      period: 'Current',
      location: 'Karachi, Pakistan',
      description: 'Working as a Full Stack Developer, contributing to the company\'s own SaaS products. Responsible for feature development, bug fixes, code reviews, and collaborating with cross-functional teams to ship production-ready features.',
      type: 'Full-time',
      isCurrent: true,
      projects: [
        {
          name: 'Adspoke',
          website: 'https://adspoke.ai/',
          role: 'Developing features for AI-powered video advertisement platform'
        },
        {
          name: 'ActiveCalculator',
          website: 'https://activecalculator.com/',
          role: 'Working on interactive calculator builder serving 1000+ businesses'
        },
        {
          name: 'Selvo',
          website: 'https://selvo.co/',
          role: 'Building and developing features for the Selvo platform'
        }
      ]
    },
    {
      title: 'Web Developer',
      company: 'The Social Hawks',
      period: 'Current',
      location: 'Karachi, Pakistan',
      description: 'Working as a Web Developer at a digital marketing agency, building websites for the company and its clients. Handling frontend development, Figma to code conversion, performance optimization, and responsive design.',
      type: 'Full-time',
      isCurrent: true,
      projects: [
        {
          name: 'The Social Hawks',
          website: 'https://thesocialhawks-kep1.vercel.app/',
          role: 'Built and maintained the agency\'s own website from scratch'
        },
        {
          name: 'Mohit Computers',
          website: 'https://mohitcomputers.pk/',
          role: 'Developed full-stack e-commerce platform for client with Supabase & PostgreSQL'
        }
      ]
    }
  ];

  const freelanceHighlights = [
    'Healthcare staffing agency website (GracePoint Medical Staffing)',
    'Senior living facility website with HIPAA compliance (Quality Care)',
    'NDIS mobile beauty service platform for disability sector (Australia)',
    'AI-powered chatbots using OpenAI & Dialogflow',
    'Figma to pixel-perfect responsive code conversion',
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
            From SaaS products to agency client work &mdash; here&apos;s where I&apos;ve been building things that matter
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((work, index) => (
            <motion.div
              key={work.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 shadow-lg border ${
                work.isCurrent
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-blue-100 dark:border-gray-600'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg text-white ${
                    work.isCurrent
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                      : 'bg-gray-600 dark:bg-gray-500'
                  }`}>
                    <FaBriefcase size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {work.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                      {work.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={12} />
                        {work.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={12} />
                        {work.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {work.isCurrent && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Current
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                    {work.type}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {work.description}
              </p>

              {/* Projects List */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider">
                  {work.isCurrent ? 'Company Products:' : 'Key Projects:'}
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
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 group mb-1"
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
        </div>

        {/* Freelance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Freelance Work
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delivered 5+ projects for clients across different industries
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {freelanceHighlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
