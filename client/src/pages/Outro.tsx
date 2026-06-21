import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Design Philosophy: Animated Outro for "Der Debug Podcast"
 * - Full-screen outro animation with credits
 * - Thank you message with gradient
 * - Host and guest names
 * - Sound wave visualization
 * - Perfect for recording with OBS
 */

export default function Outro() {
  const [showThanks, setShowThanks] = useState(false);
  const [showHosts, setShowHosts] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  useEffect(() => {
    // Timeline for animations
    const timer1 = setTimeout(() => setShowThanks(true), 500);
    const timer2 = setTimeout(() => setShowHosts(true), 2000);
    const timer3 = setTimeout(() => setShowGuests(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const hosts = ['Manuel', 'Mursaleen'];
  const guests = ['Mahyar', 'Colin'];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,217,255,.05)_25%,rgba(0,217,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,217,255,.05)_75%,rgba(0,217,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Thank You Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showThanks ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Danke fürs </span>
          <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Zuhören!</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Bis zur nächsten Episode...
        </p>
      </motion.div>

      {/* Hosts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showHosts ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-cyan-400 text-2xl md:text-3xl font-bold mb-6">Moderatoren</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {hosts.map((host, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={showHosts ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="px-8 py-4 rounded-lg border border-cyan-400/30 bg-cyan-400/5 hover:bg-cyan-400/10 transition-colors"
            >
              <p className="text-white text-xl font-semibold">{host}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Guests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={showGuests ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h2 className="text-pink-400 text-2xl md:text-3xl font-bold mb-6">Gäste</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={showGuests ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="px-8 py-4 rounded-lg border border-pink-400/30 bg-pink-400/5 hover:bg-pink-400/10 transition-colors"
            >
              <p className="text-white text-xl font-semibold">{guest}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sound Wave Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showGuests ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 flex items-center gap-1"
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

      {/* Logo at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showGuests ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-4"
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/debug-podcast-logo-colored-iUrir77jNhDtnd3bSVD8xA.webp"
          alt="Der Debug Podcast Logo"
          className="w-16 h-16"
        />
        <p className="text-gray-400 text-sm">Der Debug Podcast</p>
      </motion.div>
    </div>
  );
}
