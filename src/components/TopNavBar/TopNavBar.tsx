import React, { useState, useEffect } from 'react';
import { TopNavBarProps } from './types';
import { FiSearch, FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const TopNavBar: React.FC<TopNavBarProps> = ({
  items,
  selectedIndex,
  onSelect,
  size = 'md',
  className = '',
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav
      className={`bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 ${className} sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90`}
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-xl font-bold tracking-tight cursor-pointer select-none"
          onClick={() => onSelect?.(0)} // Optional: logo click selects first item or home
          tabIndex={0}
          role="link"
          aria-label="Eduford Home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onSelect?.(0);
          }}
        >
          <FaGraduationCap className="text-2xl text-blue-600 dark:text-yellow-400 transition-colors duration-300" />
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-400 dark:to-yellow-300 bg-clip-text text-transparent">
            Eduford
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => !item.disabled && onSelect?.(index)}
                disabled={item.disabled}
                className={`relative px-3 py-2 transition-all duration-300 ease-in-out rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  item.disabled
                    ? 'text-gray-400 cursor-not-allowed'
                    : selectedIndex === index
                    ? 'text-blue-600 dark:text-yellow-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400'
                }`}
              >
                {item.label}
                {selectedIndex === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-yellow-400 rounded"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                {selectedIndex !== index && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 dark:bg-yellow-300 rounded scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100 pointer-events-none" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative hidden sm:block"
          >
            <input
              type="text"
              placeholder="Search courses..."
              className="rounded-full py-2 px-4 pr-10 bg-gray-100 dark:bg-gray-800 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-all duration-200"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-yellow-400" />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: 360 }}
            className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>

          {/* Mobile menu toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="md:hidden ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="px-4 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              {items.map((item, index) => (
                <li key={index} className="w-full">
                  <button
                    onClick={() => {
                      if (!item.disabled) {
                        onSelect?.(index);
                        setMobileOpen(false);
                      }
                    }}
                    disabled={item.disabled}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-300 ease-in-out ${
                      item.disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : selectedIndex === index
                        ? 'bg-blue-100 dark:bg-yellow-900 text-blue-600 dark:text-yellow-400 shadow-inner'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    {item.label}
                  </button>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
