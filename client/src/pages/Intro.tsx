import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Design Philosophy: Animated Intro for "Der Debug Podcast"
 * - Full-screen intro animation
 * - Logo animation with glitch effects
 * - Code typing sequence
 * - Sound wave visualization
 * - Perfect for recording with OBS
 */

export default function Intro() {
  const [showCode, setShowCode] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Timeline for animations
    const timer1 = setTimeout(() => setShowCode(true), 500);
    const timer2 = setTimeout(() => setShowLogo(true), 3000);
    const timer3 = setTimeout(() => setShowTitle(true), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const codeLines = [
    '// AI is the future',
    '// Let\'s build it',
    '// Together',
    '</>',
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,217,255,.05)_25%,rgba(0,217,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,217,255,.05)_75%,rgba(0,217,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showCode ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mb-12 font-mono text-left"
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={showCode ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.4, duration: 0.6 }}
            className="text-cyan-400 text-lg md:text-2xl mb-2"
          >
            {line}
          </motion.div>
        ))}
      </motion.div>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={showLogo ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="mb-8 relative"
      >
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(0,217,255,0.5)', '0 0 40px rgba(255,0,110,0.5)', '0 0 20px rgba(0,217,255,0.5)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/debug-podcast-logo-colored-iUrir77jNhDtnd3bSVD8xA.webp"
            alt="Der Debug Podcast Logo"
            className="w-32 h-32 md:w-48 md:h-48"
          />
        </motion.div>
      </motion.div>

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Der </span>
          <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Debug</span>
          <span className="text-white"> Podcast</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl">
          <span className="text-cyan-400">AI</span>
          <span className="text-white"> • </span>
          <span className="text-pink-400">Technologie</span>
          <span className="text-white"> • </span>
          <span className="text-cyan-400">Schüler</span>
        </p>
      </motion.div>

      {/* Sound Wave Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showTitle ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex items-center gap-1"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: ['20px', '60px', '20px'] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.05,
            }}
            className="w-1 bg-gradient-to-t from-cyan-400 to-pink-400 rounded-full"
          />
        ))}
      </motion.div>

      {/* Fade out text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={showTitle ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 text-gray-400 text-sm"
      >
        Viel Spaß beim Podcast! 🎙️
      </motion.p>
    </div>
  );
}
