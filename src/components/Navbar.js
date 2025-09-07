'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'About', href: '#about', path: '/' },
    { name: 'Skills', href: '#skills', path: '/' },
    { name: 'Projects', href: '#projects', path: '/' },
    { name: 'All Projects', href: '/projects', path: '/projects' },
    { name: 'Contact', href: '#contact', path: '/' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height to determine when to show navbar background
      const heroSection = document.getElementById('home') || document.querySelector('.hero-section');
      let heroHeight = 400; // Default fallback
      
      if (heroSection) {
        heroHeight = heroSection.offsetHeight;
        // Adjust for mobile vs desktop
        const offset = isMobile ? 50 : 100;
        heroHeight = heroHeight - offset;
      } else {
        // Fallback based on device type
        heroHeight = isMobile ? 300 : 500;
      }
      
      const shouldShowBg = window.scrollY > heroHeight;
      console.log('Navbar scroll check - scrollY:', window.scrollY, 'heroHeight:', heroHeight, 'shouldShowBg:', shouldShowBg, 'isMobile:', isMobile);
      setIsScrolled(shouldShowBg);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, isMobile]);

  const scrollToSection = (href, path) => {
    if (path === '/projects') {
      // Navigate to projects page
      window.location.href = '/projects';
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
            }}
          >
            Ali Raza
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href, link.path)}
                className={`relative px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-lg border border-gray-200/20 dark:border-gray-700/30' 
                  : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-md border border-gray-200/20 dark:border-gray-700/30'
              } text-gray-700 dark:text-gray-300 hover:bg-white/100 dark:hover:bg-gray-800/100`}
              style={{
                width: '48px',
                height: '48px',
                minWidth: '48px',
                minHeight: '48px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className={`p-4 m-4 rounded-2xl space-y-3 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30' 
              : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30'
          }`}>
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href, link.path)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}