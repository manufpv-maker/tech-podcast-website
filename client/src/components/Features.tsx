import { motion } from 'framer-motion';
import { Zap, Users, Radio, TrendingUp } from 'lucide-react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Diagonale Schnitte zwischen Abschnitten
 * - Glasmorphe Feature-Cards
 * - Neon-Akzente und Glow-Effekte
 * - Animierte Icons mit Hover-Effekten
 */

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Zap size={32} />,
    title: 'Cutting Edge',
    description: 'Stay ahead with the latest tech trends and innovations discussed by industry experts.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: <Users size={32} />,
    title: 'Expert Guests',
    description: 'Learn from leading technologists, entrepreneurs, and innovators from around the world.',
    color: 'from-pink-400 to-red-500',
  },
  {
    icon: <Radio size={32} />,
    title: 'Weekly Episodes',
    description: 'New episodes every week covering AI, Web3, Cloud, DevOps, and emerging technologies.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Career Growth',
    description: 'Gain insights and knowledge to advance your career in the tech industry.',
    color: 'from-green-400 to-emerald-500',
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Diagonal cut SVG divider */}
      <svg
        className="absolute top-0 left-0 w-full h-20 text-background"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 1200,0 1200,120 0,60" fill="currentColor" />
      </svg>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative pt-20">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Our Podcast
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Experience the future of tech discussions with our unique format and expert insights
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group glass-effect p-8 hover:border-cyan-300 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
              }}
            >
              {/* Icon container */}
              <motion.div
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-6 flex items-center justify-center text-white neon-glow-pink group-hover:neon-glow transition-all`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 font-body leading-relaxed">
                {feature.description}
              </p>

              {/* Accent line */}
              <motion.div
                className="h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mt-6 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom diagonal cut SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-background"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <polygon points="0,60 1200,0 1200,120 0,120" fill="currentColor" />
      </svg>
    </section>
  );
}
