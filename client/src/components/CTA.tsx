import { motion } from 'framer-motion';
import { Mail, Music, Headphones, Video } from 'lucide-react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Call-to-Action mit Glaseffekt
 * - Animierte Buttons mit Neon-Glow
 * - Social Media Links mit Hover-Effekten
 */

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: Music, label: 'Spotify', color: 'hover:text-green-400' },
    { icon: Headphones, label: 'Apple Podcasts', color: 'hover:text-gray-300' },
    { icon: Video, label: 'YouTube', color: 'hover:text-red-400' },
  ];

  return (
    <section className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          className="glass-effect p-12 md:p-16 rounded-2xl border-2 border-cyan-400/30 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Ready to Dive In?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 font-body text-lg max-w-2xl mx-auto mb-8"
          >
            Subscribe to our podcast and never miss an episode. Join thousands of tech enthusiasts 
            exploring the future of technology.
          </motion.p>

          {/* Email subscription */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-cyan-400/30 text-white placeholder-gray-500 font-body focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all"
            />
            <motion.button
              className="glass-effect neon-glow px-6 py-3 rounded-lg font-display text-white font-bold whitespace-nowrap flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} />
              Subscribe
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8"
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href="#"
                  className={`text-gray-400 transition-colors duration-200 ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <Icon size={28} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="my-8 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <span className="text-gray-500 font-body text-sm">Or listen on your favorite platform</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </motion.div>

          {/* Platform buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Spotify', 'Apple Podcasts', 'YouTube', 'Google Podcasts'].map((platform, idx) => (
              <motion.button
                key={idx}
                className="px-6 py-2 rounded-full border border-cyan-400/30 text-gray-300 font-body hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                {platform}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
