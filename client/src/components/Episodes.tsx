import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Glasmorphic cards with neon borders
 * - Staggered entrance animations
 * - Hover effects with glow enhancement
 * - Neon accents on interactive elements
 */

interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  guests: string;
  image: string;
}

const episodes: Episode[] = [
  {
    id: 1,
    title: 'AI Revolution: The Future of Machine Learning',
    description: 'Exploring how artificial intelligence is transforming industries and what it means for the future of work.',
    date: 'May 20, 2024',
    duration: '1h 15m',
    guests: 'Dr. Sarah Chen, AI Researcher',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-microphone-glow-ULEsPTqGosqMfbtaLoJ6Y6.png',
  },
  {
    id: 2,
    title: 'Quantum Computing: Breaking the Limits',
    description: 'Deep dive into quantum computing technology and how it will revolutionize data processing.',
    date: 'May 15, 2024',
    duration: '58m',
    guests: 'Prof. James Mitchell, Quantum Physicist',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-abstract-tech-aL6boSd3HmeCF37jxw2vah.webp',
  },
  {
    id: 3,
    title: 'Web3 & Blockchain: Decentralized Future',
    description: 'Understanding blockchain technology and its impact on the future of the internet.',
    date: 'May 10, 2024',
    duration: '1h 22m',
    guests: 'Alex Rodriguez, Blockchain Developer',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-hero-neon-eXEWyQBojw39ANZR6MadtK.webp',
  },
  {
    id: 4,
    title: 'Cybersecurity in 2024: Threats & Solutions',
    description: 'Latest cybersecurity threats and how organizations can protect themselves in the digital age.',
    date: 'May 5, 2024',
    duration: '1h 05m',
    guests: 'Emily Watson, Security Expert',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-microphone-glow-ULEsPTqGosqMfbtaLoJ6Y6.png',
  },
  {
    id: 5,
    title: 'Cloud Native Architecture Patterns',
    description: 'Exploring modern cloud-native development patterns and microservices architecture.',
    date: 'April 30, 2024',
    duration: '1h 10m',
    guests: 'David Lee, Cloud Architect',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-abstract-tech-aL6boSd3HmeCF37jxw2vah.webp',
  },
  {
    id: 6,
    title: 'DevOps Revolution: Automation at Scale',
    description: 'How DevOps practices are transforming software development and deployment.',
    date: 'April 25, 2024',
    duration: '55m',
    guests: 'Maria Garcia, DevOps Lead',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/podcast-hero-neon-eXEWyQBojw39ANZR6MadtK.webp',
  },
];

export default function Episodes() {
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
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="py-20 relative">
      {/* Section background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Episodes
          </h2>
          <p className="text-gray-400 font-body max-w-2xl mx-auto">
            Tune in to our latest episodes featuring industry leaders and cutting-edge insights
          </p>
        </motion.div>

        {/* Episodes grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {episodes.map((episode) => (
            <motion.div
              key={episode.id}
              variants={itemVariants}
              className="group glass-effect overflow-hidden hover:border-cyan-300 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            >
              {/* Episode image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Play button */}
                <motion.button
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-400/80 neon-glow flex items-center justify-center hover:bg-cyan-400 transition-colors">
                    <Play size={24} className="text-black fill-black" />
                  </div>
                </motion.button>
              </div>

              {/* Episode content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2 line-clamp-2">
                  {episode.title}
                </h3>
                <p className="text-gray-400 font-body text-sm mb-4 line-clamp-2">
                  {episode.description}
                </p>

                {/* Episode metadata */}
                <div className="space-y-2 mb-4 text-sm text-gray-500 font-body">
                  <div className="flex items-center justify-between">
                    <span>{episode.date}</span>
                    <span>{episode.duration}</span>
                  </div>
                  <div className="text-cyan-400 text-xs">
                    {episode.guests}
                  </div>
                </div>

                {/* Footer actions */}
                <div className="flex gap-2 pt-4 border-t border-cyan-400/10">
                  <motion.button
                    className="flex-1 py-2 rounded-md bg-cyan-400/10 text-cyan-400 font-body font-semibold hover:bg-cyan-400/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Listen
                  </motion.button>
                  <motion.button
                    className="px-4 py-2 rounded-md border border-cyan-400/20 text-gray-400 hover:text-pink-400 hover:border-pink-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="glass-effect neon-glow px-8 py-3 rounded-lg font-display text-white font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Episodes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
