'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon, FaCheck } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function ThemeChangeNotification() {
  const { theme } = useTheme();
  const [showNotification, setShowNotification] = useState(false);
  const [prevTheme, setPrevTheme] = useState(theme);

  useEffect(() => {
    if (prevTheme !== theme && prevTheme !== null) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    setPrevTheme(theme);
  }, [theme, prevTheme]);

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-2">
            {theme === 'dark' ? (
              <FaMoon className="text-blue-500" size={20} />
            ) : (
              <FaSun className="text-yellow-500" size={20} />
            )}
            <span className="font-medium">
              Switched to {theme === 'dark' ? 'Dark' : 'Light'} Mode
            </span>
          </div>
          <FaCheck className="text-green-500" size={16} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
