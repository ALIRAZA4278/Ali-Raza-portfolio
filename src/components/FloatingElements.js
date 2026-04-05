'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollProgress(scrolled);
      setIsVisible(winScroll > 300);
    };

    handleScroll();

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
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'mailto:af912923@gmail.com';
    }
  };

  const buttonSize = isMobile ? '48px' : '56px';

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Floating Action Buttons */}
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
            <motion.a
              href="https://wa.me/+923212865058"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button flex items-center justify-center bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors"
              style={{ width: buttonSize, height: buttonSize }}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={isMobile ? 20 : 24} />
            </motion.a>

            {/* Email Button */}
            <motion.button
              onClick={handleEmail}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button flex items-center justify-center bg-red-500 text-white rounded-full shadow-2xl hover:bg-red-600 transition-colors"
              style={{ width: buttonSize, height: buttonSize }}
              aria-label="Send email"
            >
              <FaEnvelope size={isMobile ? 20 : 24} />
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="floating-button flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl transition-all"
              style={{ width: buttonSize, height: buttonSize }}
              aria-label={`Back to top - ${Math.round(scrollProgress)}% scrolled`}
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

              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10 flex items-center justify-center"
              >
                <FaArrowUp size={isMobile ? 12 : 14} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
