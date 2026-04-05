'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const roles = useMemo(() => ['Full-Stack Developer', 'AI Integration Specialist', 'MERN Stack Developer', 'Chatbot Developer', 'Frontend Engineer'], []);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentRole.substring(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, currentRoleIndex, roles]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/ALIRAZA4278', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-raza-4a5762282/', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/AliFaro45370063', label: 'X (Twitter)' },
    { icon: FaInstagram, href: 'https://instagram.com/ali._.razax', label: 'Instagram' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-20">
          {isClient && [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: `${(i * 12) % 100}%`,
                y: `${(i * 9) % 100}%`,
                opacity: 0
              }}
              animate={{
                x: `${((i * 12) + 20) % 100}%`,
                y: `${((i * 9) + 15) % 100}%`,
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + i % 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <div className={`w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-cyan-400'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          {isClient && [...Array(3)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${15 + i * 25}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 12 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className={`w-16 h-16 border-2 ${
                i % 2 === 0 ? 'border-blue-400 rounded-full' : 'border-purple-400'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <div className="relative mx-auto w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44">
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"></div>
              </motion.div>

              {/* Pulsing Background */}
              <motion.div
                className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Profile Content */}
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/Images/ali final 3.png"
                  alt="Ali Raza - Full Stack Developer & AI Integration Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5 lg:mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Hi, I&apos;m{' '}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
            >
              Ali Raza
            </motion.span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 lg:mb-8 h-10 sm:h-12 flex items-center justify-center"
          >
            <span>I&apos;m a{' '}</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 font-semibold min-w-fit">
              {typewriterText}
              <motion.span
                className="text-blue-600 dark:text-blue-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              I build things that live on the internet. With 4 years of hands-on experience,
              I craft high-performance web applications and integrate AI-powered solutions
              that help businesses grow and engage their users smarter.
            </p>

            {/* Professional Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>4+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>18+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>5+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span>AI Integration</span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 lg:mb-12 px-4"
          >
            <a
              href="/Images/ali%20raza.pdf"
              download="ali-raza-resume.pdf"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl"
              aria-label="Download Resume"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </a>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all text-sm sm:text-base"
            >
              Let&apos;s Work Together
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className="group p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                aria-label={label}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <Icon size={20} className="sm:w-6 sm:h-6 relative z-10 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex flex-col items-center"
          >
            <motion.p
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.p>
            <motion.button
              onClick={scrollToAbout}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.2 }}
              aria-label="Scroll to About section"
            >
              <FaArrowDown size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
