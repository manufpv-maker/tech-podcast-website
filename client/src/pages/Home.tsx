import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useAuth } from '@/_core/hooks/useAuth';

/**
 * Design Philosophy: Clean & Simple
 * - Minimalistisches Design für Schüler
 * - Video und Audio Player
 * - Keine unnötigen Elemente
 * - Optimiert für alle Geräte
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  // Lade die erste Episode von der Upload-Seite
  const [videoUrl, setVideoUrl] = useState('p4IK0mFbaNI');
  const [audioUrl, setAudioUrl] = useState('https://files.manuscdn.com/user_upload_by_module/session_file/310519663350287427/fGeYlWGafWQoHJly.mp3');

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
        ease: 'easeOut',
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/debug-podcast-logo-colored-iUrir77jNhDtnd3bSVD8xA.webp"
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
                <iframe
                  src={`https://www.youtube.com/embed/${videoUrl}`}
                  title="Podcast Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
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
