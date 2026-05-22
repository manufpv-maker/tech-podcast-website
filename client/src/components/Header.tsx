import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Glasmorphe Navigation Bar
 * - Neon-Akzente
 * - Mobile-responsive mit Hamburger-Menü
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'Episodes', 'About', 'Contact'];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-cyan-400/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          className="font-display text-2xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-cyan-400">Der Debug</span>
          <span className="text-pink-400">Podcast</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="font-body text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
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
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-4 p-4 border-t border-cyan-400/20">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="font-body text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
              whileHover={{ x: 10 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            className="glass-effect neon-glow px-4 py-2 rounded-lg font-display text-white font-bold mt-4 w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Subscribe
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
