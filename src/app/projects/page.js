'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaArrowLeft, FaStar, FaCode, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { personalProjects, clientProjects, allProjects, filterCategories } from '../../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [expandedTech, setExpandedTech] = useState(null);

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(project => project.categories.includes(filter));

  const totalProjects = allProjects.length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              From AI-powered platforms to full-stack apps &mdash; here&apos;s everything I&apos;ve built
              across personal projects, client work, and hackathons.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{personalProjects.length}</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Personal Projects</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">{clientProjects.length}</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Client Projects</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">4+</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Years Experience</span>
              </div>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <FaFilter className="text-gray-500 dark:text-gray-400 mt-2 mr-2" />
            {filterCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {category}
                <span className="ml-2 text-sm">
                  ({category === 'All' ? totalProjects : allProjects.filter(p => p.categories.includes(category)).length})
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                  className={`bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${
                    project.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-44 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      {project.achievement && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <FaStar size={10} />
                          {project.achievement}
                        </div>
                      )}
                      {project.highlight && (
                        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {project.highlight}
                        </div>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.type === 'Client' ? 'bg-green-500 text-white'
                          : project.type === 'Company' ? 'bg-orange-500 text-white'
                          : 'bg-blue-500 text-white'
                      }`}>
                        {project.type === 'Client' ? 'Freelance' : project.type === 'Company' ? 'Company' : 'Personal'}
                      </span>
                    </div>

                    {/* Overlay with Links */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                      {project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                        >
                          <FaGithub size={18} />
                        </motion.a>
                      )}
                      {project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {project.categories[0]}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {(expandedTech === project.id ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && expandedTech !== project.id && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setExpandedTech(project.id); }}
                          className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-2 py-1 cursor-pointer transition-colors"
                        >
                          +{project.technologies.length - 4} more
                        </button>
                      )}
                      {expandedTech === project.id && project.technologies.length > 4 && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setExpandedTech(null); }}
                          className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 px-2 py-1 cursor-pointer transition-colors"
                        >
                          show less
                        </button>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.github !== '#' && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                        >
                          <FaCode size={12} />
                          Code
                        </motion.a>
                      )}
                      {project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm"
                        >
                          <FaEye size={12} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center pb-8">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          Back to Top
        </motion.button>
      </div>
    </div>
  );
}
