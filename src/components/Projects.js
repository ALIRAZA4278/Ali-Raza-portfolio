'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Furniture E-commerce Website',
      description: 'A modern furniture e-commerce platform with product catalog, shopping cart, and responsive design for seamless furniture shopping experience.',
      image: '/Images/Ecommerce.png',
  technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  category: 'E-commerce',
      github: 'https://github.com/ALIRAZA4278/Milestone3-basic-e-commerce',
      live: 'https://furniture-ecommerce3.vercel.app/',
      featured: true
    },
     {
      id: 2,
      title: 'Work Oura - Job Portal',
      description: 'A comprehensive job portal platform connecting job seekers with employers, featuring job posting, application tracking, and career matching.',
      image: '/Images/job-app.png',
      technologies: ['Next.js', 'MongoDB', 'Clerk', 'Framer Motion', 'API Integration'],
      category: 'Full-Stack',
      github: 'https://github.com/ALIRAZA4278/work-oura',
      live: 'https://work-oura.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Blog Application',
      description: 'A full-featured blog platform with article publishing, commenting system, and user management for content creators.',
      image: '/Images/BLOGAPP.png',
  technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS'],
      category: 'Full-Stack',
      github: 'https://github.com/ALIRAZA4278/Milestone-3-blog-app',
      live: 'https://milestone-3-blog-app.vercel.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Resume Builder',
      description: 'An interactive resume builder application that allows users to create professional resumes with multiple templates and export functionality.',
      image: '/Images/resume-builder.png',
  technologies: ['HTML', 'CSS', 'TypeScript'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/Resume_builder',
      live: 'https://resume-builder--inky.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Pizza Ordering Chatbot',
      description: 'An AI-powered pizza ordering chatbot built using Dialogflow for intent handling and a React frontend for the interactive ordering experience.',
      image: '/Images/pizza chatbot.jpg',
      technologies: ['Dialogflow', 'JavaScript', 'React', 'Framer Motion'],
      category: 'Chatbot',
      github: 'https://github.com/ALIRAZA4278/PIZZA_CHATBOT',
      live: 'https://pizza-chatbot.vercel.app/',
      featured: true
    },
    {
      id: 6,
      title: 'Vote Hub',
      description: 'A lightweight voting platform built with plain HTML, CSS, and JavaScript for fast, accessible polling and vote tracking.',
      image: '/Images/votehub.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/Vote_Hub',
      live: 'https://vote-hub-6iqt.vercel.app/',
      featured: true
    },
    {
      id: 7,
      title: 'News Application',
      description: 'A news application that integrates external news APIs; implemented with plain HTML, CSS and JavaScript for a lightweight, static-feel frontend.',
      image: '/Images/news-app.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/News-App',
      live: 'https://news-app-flame-eta.vercel.app/',
      featured: true
    },
   
  ];

  const categories = ['All', 'E-commerce', 'Full-Stack', 'Web App', 'Chatbot'];

  const filteredProjects = filter === 'All' 
    ? projects.slice(0, 6)  // Show only first 6 projects on main page
    : projects.filter(project => project.category === filter).slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in 
            full-stack development, modern web technologies, and user experience design.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12 px-4"
        >
          <FaFilter className="text-gray-500 dark:text-gray-400 mb-2 sm:mb-0 sm:mr-2 order-first w-full sm:w-auto text-center sm:text-left" />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all text-xs sm:text-sm lg:text-base ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 shadow-md'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                      Featured
                    </div>
                  )}
                  
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to see more projects?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;ve built many more exciting projects! Check out my complete portfolio 
            to see all the applications and websites I&apos;ve developed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt size={16} />
              View All Projects
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all"
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}