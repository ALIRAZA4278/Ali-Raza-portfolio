'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  // Debug: Check if component is mounting
  useEffect(() => {
    console.log('FloatingElements component mounted, isMobile:', isMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      
      // Get hero section height to determine when to show floating elements
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
      
      // Show elements after scrolling past hero section
      const shouldShow = winScroll > heroHeight;
      console.log('Scroll check - winScroll:', winScroll, 'heroHeight:', heroHeight, 'shouldShow:', shouldShow, 'isMobile:', isMobile);
      setIsVisible(shouldShow);
    };

    // Set initial visibility
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+923212865058', '_blank');
  };

  const handleEmail = () => {
    // Scroll to contact section instead of opening mailto
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to mailto if contact section not found
      window.location.href = 'mailto:af912923@gmail.com';
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating Action Buttons - Mobile Optimized */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="floating-elements-container"
            data-floating-elements="true"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 999999,
              pointerEvents: 'auto'
            }}
          >
            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button p-3 sm:p-4 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-2xl transition-all relative overflow-hidden"
              style={{
                width: isMobile ? '48px' : '56px',
                height: isMobile ? '48px' : '56px',
                minWidth: isMobile ? '48px' : '56px',
                minHeight: isMobile ? '48px' : '56px'
              }}
              title="WhatsApp"
            >
              <motion.div
                className="absolute inset-0 bg-green-600"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <FaWhatsapp size={isMobile ? 20 : 24} className="relative z-10" />
            </motion.button>

            {/* Email Button */}
            <motion.button
              onClick={handleEmail}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button p-3 sm:p-4 bg-red-500 text-white rounded-full shadow-2xl hover:shadow-2xl transition-all relative overflow-hidden"
              style={{
                width: isMobile ? '48px' : '56px',
                height: isMobile ? '48px' : '56px',
                minWidth: isMobile ? '48px' : '56px',
                minHeight: isMobile ? '48px' : '56px'
              }}
              title="Email"
            >
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <FaEnvelope size={isMobile ? 20 : 24} className="relative z-10" />
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-2xl transition-all relative overflow-hidden"
              style={{
                width: isMobile ? '48px' : '56px',
                height: isMobile ? '48px' : '56px',
                minWidth: isMobile ? '48px' : '56px',
                minHeight: isMobile ? '48px' : '56px'
              }}
              title={`Back to Top (${Math.round(scrollProgress)}%)`}
            >
              {/* Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scrollProgress / 100 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    strokeDasharray: 283,
                    strokeDashoffset: 283 - (283 * scrollProgress) / 100,
                  }}
                />
              </svg>
              
              {/* Arrow Icon */}
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 flex items-center justify-center"
                style={{ transform: 'translateZ(0)' }}
              >
                <FaArrowUp size={isMobile ? 12 : 14} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
