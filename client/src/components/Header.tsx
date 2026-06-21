import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Design Philosophy: Clean & Simple
 * - Minimalistischer Header für Schüler
 * - Einfache Navigation
 * - Keine Subscribe Buttons
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-display text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-cyan-400">Der Debug</span>
          <span className="text-pink-400"> Podcast</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <motion.a
                key={item}
                href={path}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background border-t border-gray-800"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <a
                  key={item}
                  href={path}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
