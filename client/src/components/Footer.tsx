import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Glasmorphe Footer mit Neon-Akzenten
 * - Social Links mit Hover-Effekten
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Episodes', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ];

  return (
    <footer className="relative border-t border-cyan-400/20 glass-effect">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container py-12 md:py-16">
        {/* Top section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-cyan-400/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              <span className="text-cyan-400">Tech</span>
              <span className="text-pink-400">Cast</span>
            </h3>
            <p className="text-gray-400 font-body">
              Exploring the future of technology with industry experts and innovators.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="block text-gray-400 font-body hover:text-cyan-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Stay Updated</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-background/50 border border-cyan-400/30 text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <motion.button
                className="px-4 py-2 rounded-lg bg-cyan-400/20 text-cyan-400 font-body font-semibold hover:bg-cyan-400/30 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Copyright */}
          <p className="text-gray-500 font-body text-sm">
            © {currentYear} TechCast. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
