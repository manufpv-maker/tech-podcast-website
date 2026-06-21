import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

/**
 * Design Philosophy: Clean & Simple
 * - Minimalistisches Design für Schüler
 * - Video und Audio Player
 * - Keine unnötigen Elemente
 */

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      <main className="pt-20 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container max-w-4xl mx-auto px-4"
        >
          {/* Logo & Title */}
          <motion.div variants={itemVariants} className="mb-12 flex items-center gap-6">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/debug-podcast-watermark-logo-N72vFsraQN7FmvsYpQ4GZR.webp"
              alt="Der Debug Podcast Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Der Debug Podcast
              </h1>
              <p className="text-lg text-gray-300">
                Dein Podcast über Technologie und Programmierung
              </p>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Video</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <p className="text-gray-400">Video wird hier angezeigt</p>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Video-URL: {videoUrl || 'Noch nicht hochgeladen'}
            </p>
          </motion.div>

          {/* Audio Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Audio</h2>
            <div className="bg-gray-900 rounded-lg p-6">
              {audioUrl ? (
                <audio
                  src={audioUrl}
                  controls
                  className="w-full"
                />
              ) : (
                <div className="flex items-center justify-center bg-gray-800 rounded p-8">
                  <p className="text-gray-400">Audio wird hier angezeigt</p>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Audio-URL: {audioUrl || 'Noch nicht hochgeladen'}
            </p>
          </motion.div>

          {/* Info Section */}
          <motion.div variants={itemVariants} className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">Über diesen Podcast</h2>
            <p className="text-gray-300 mb-4">
              Willkommen zu unserem Podcast! Hier teilen wir unsere Gedanken und Erfahrungen über Technologie, Programmierung und alles was uns interessiert.
            </p>
            <p className="text-gray-300">
              Viel Spaß beim Zuhören!
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
