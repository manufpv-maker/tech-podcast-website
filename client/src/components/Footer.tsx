import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

/**
 * Design Philosophy: Clean & Simple
 * - Minimalistischer Footer für Schüler
 * - Kontaktinformationen
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              <span className="text-cyan-400">Der Debug</span>
              <span className="text-pink-400"> Podcast</span>
            </h3>
            <p className="text-gray-400">
              Ein Podcast von Schülern für Schüler
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <div className="flex gap-4">
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                title="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Der Debug Podcast. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  );
}
