import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Glasmorphic hero section with neon glow
 * - Animated gradient background
 * - Dynamic entrance animations with staggered timing
 * - Neon accents and glow effects
 */

export default function Hero() {
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
        duration: 0.8,
        ease: "easeOut", // Custom ease-out
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden gradient-animate flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container relative z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Tech Podcast
            <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="font-body text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Dive deep into the latest technology trends, innovations, and insights from industry experts. 
            Where cutting-edge conversations meet cyberpunk aesthetics.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <motion.button
            className="glass-effect neon-glow px-8 py-3 rounded-lg font-display text-white font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play size={20} />
            Listen Now
          </motion.button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mt-16 pt-12 border-t border-cyan-400/20"
        >
          {[
            { label: 'Episodes', value: '150+' },
            { label: 'Listeners', value: '50K+' },
            { label: 'Countries', value: '25+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-display text-cyan-400 font-bold">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
