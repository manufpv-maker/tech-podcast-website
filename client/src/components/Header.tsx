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
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/debug-podcast-logo-colored-iUrir77jNhDtnd3bSVD8xA.webp"
            alt="Der Debug Podcast Logo"
            className="w-8 h-8"
          />
          <span className="font-display text-lg font-bold hidden sm:inline">
            <span className="text-white">Der </span>
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Debug</span>
            <span className="text-white"> Podcast</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <motion.a
                key={item}
                href={path}
                className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, className: "glitch-animation" }}
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
