'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaArrowLeft, FaStar, FaCode, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  // Your real completed projects
  const allProjects = [
    // Featured Projects
    {
      id: 1,
      title: 'Furniture E-commerce Website',
      description: 'A modern furniture e-commerce platform with product catalog, shopping cart, responsive design, and seamless furniture shopping experience with modern UI/UX.',
      image: '/Images/Ecommerce.png',
  technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  category: 'E-commerce',
      github: 'https://github.com/ALIRAZA4278/Milestone3-basic-e-commerce',
      live: 'https://furniture-ecommerce3.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Resume Builder',
      description: 'An interactive resume builder application that allows users to create professional resumes with multiple templates, real-time preview, and PDF export functionality.',
      image: '/Images/resume-builder.png',
  technologies: ['HTML', 'CSS', 'TypeScript'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/Resume_builder',
      live: 'https://resume-builder--inky.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Blog Application',
      description: 'A full-featured blog platform with article publishing, commenting system, user management, content creation tools, and SEO optimization for content creators.',
      image: '/Images/BLOGAPP.png',
  technologies: ['Next.js', 'Sanity', 'TypeScript', 'Tailwind CSS'],
      category: 'Full-Stack',
      github: 'https://github.com/ALIRAZA4278/Milestone-3-blog-app',
      live: 'https://milestone-3-blog-app.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 4,
      title: 'Pizza Ordering Chatbot',
      description: 'An AI-powered pizza ordering chatbot built using Dialogflow for intent handling and a React frontend for the interactive ordering experience.',
      image: '/Images/pizza chatbot.jpg',
      technologies: ['Dialogflow', 'JavaScript', 'React', 'Framer Motion'],
      category: 'Chatbot',
      github: 'https://github.com/ALIRAZA4278/PIZZA_CHATBOT',
      live: 'https://pizza-chatbot.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 5,
      title: 'Vote Hub',
      description: 'A lightweight voting platform built with plain HTML, CSS, and JavaScript for fast, accessible polling and vote tracking.',
      image: '/Images/votehub.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/Vote_Hub',
      live: 'https://vote-hub-6iqt.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 6,
      title: 'News Application',
      description: 'A news application that integrates external news APIs; implemented with plain HTML, CSS and JavaScript for a lightweight, static-feel frontend.',
      image: '/Images/news-app.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      category: 'Web App',
      github: 'https://github.com/ALIRAZA4278/News-App',
      live: 'https://news-app-flame-eta.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    },
    {
      id: 7,
      title: 'Work Oura - Job Portal',
      description: 'A comprehensive job portal platform connecting job seekers with employers, featuring job posting, application tracking, and career matching with modern authentication.',
      image: '/Images/job-app.png',
      technologies: ['Next.js', 'MongoDB', 'Clerk', 'Framer Motion', 'API Integration'],
      category: 'Full-Stack',
      github: 'https://github.com/ALIRAZA4278/work-oura',
      live: 'https://work-oura.vercel.app/',
      featured: true,
      status: 'Completed',
      year: '2024'
    }
  ];

  const categories = ['All', 'E-commerce', 'Full-Stack', 'Web App', 'Chatbot'];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const featuredCount = allProjects.filter(p => p.featured).length;
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
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Here&apos;s a comprehensive collection of all the projects I&apos;ve built, showcasing my journey
              in web development and the diverse range of technologies I work with.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalProjects}</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Total Projects</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{featuredCount}</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Featured</span>
              </div>
              <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2024</span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Latest Year</span>
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
            {categories.map((category) => (
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
                  ({category === 'All' ? totalProjects : allProjects.filter(p => p.category === category).length})
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
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      {project.featured && (
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <FaStar size={10} />
                          Featured
                        </div>
                      )}
                      <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {project.status}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 text-white text-sm z-10 bg-black bg-opacity-50 px-2 py-1 rounded">
                      {project.year}
                    </div>
                    
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
                        <FaGithub size={18} />
                      </motion.a>
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
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1">
                          +{project.technologies.length - 4} more
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
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                      >
                        <FaCode size={12} />
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
                        <FaEye size={12} />
                        Demo
                      </motion.a>
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
              <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">📂</div>
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
