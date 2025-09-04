'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      setIsVisible(winScroll > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
          >
            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="group p-3 sm:p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
              title="WhatsApp"
            >
              <motion.div
                className="absolute inset-0 bg-green-600"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <FaWhatsapp size={18} className="sm:w-6 sm:h-6 relative z-10" />
            </motion.button>

            {/* Email Button */}
            <motion.button
              onClick={handleEmail}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group p-3 sm:p-4 bg-red-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
              title="Email"
            >
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <FaEnvelope size={18} className="sm:w-6 sm:h-6 relative z-10" />
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="group relative p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all overflow-hidden flex items-center justify-center"
              title="Back to Top"
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
                <FaArrowUp size={14} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
