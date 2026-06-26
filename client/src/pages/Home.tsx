import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useAuth } from '@/_core/hooks/useAuth';
import { Play, Download, Loader2 } from 'lucide-react';

/**
 * Design Philosophy: Clean & Simple
 * - Minimalistisches Design für Schüler
 * - Video und Audio Player mit Covern
 * - Keine unnötigen Elemente
 * - Optimiert für alle Geräte
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  // Lade die erste Episode von der Upload-Seite
  const [videoUrl, setVideoUrl] = useState('https://files.manuscdn.com/user_upload_by_module/session_file/310519663350287427/ADqNmMMrpLczRXgm.mp4');
  const [audioUrl, setAudioUrl] = useState('https://files.manuscdn.com/user_upload_by_module/session_file/310519663350287427/JZJtJyRbTbfSykJQ.mp3');
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [downloadingVideo, setDownloadingVideo] = useState(false);
  const [downloadingAudio, setDownloadingAudio] = useState(false);

  const handleDownload = async (url: string, filename: string, isVideo: boolean) => {
    try {
      if (isVideo) setDownloadingVideo(true);
      else setDownloadingAudio(true);

      // Verwende einen einfachen Fetch mit no-cors fallback
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': '*/*',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      
      // Erstelle einen Download-Link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = downloadUrl;
      link.download = filename;
      
      // Füge zum DOM hinzu, klicke und entferne
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      }, 100);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download fehlgeschlagen. Bitte versuchen Sie es später erneut.');
    } finally {
      if (isVideo) setDownloadingVideo(false);
      else setDownloadingAudio(false);
    }
  };

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
            {showVideoPlayer ? (
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video">
                {videoUrl ? (
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <p className="text-gray-400">Video wird hier angezeigt</p>
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video cursor-pointer group"
                onClick={() => setShowVideoPlayer(true)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/video-cover-niWXTJMdsgkaDUjaKGoPy6.webp"
                  alt="Video Cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50"
                  >
                    <Play size={32} className="text-white fill-white ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            )}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-400">
                {showVideoPlayer ? 'Video wird abgespielt' : 'Klick zum Abspielen'}
              </p>
              {videoUrl && (
                <button
                  onClick={() => handleDownload(videoUrl, 'podcast-video.mp4', true)}
                  disabled={downloadingVideo}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white rounded-lg transition-colors"
                >
                  {downloadingVideo ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Download size={18} />
                  )}
                  <span>{downloadingVideo ? 'Wird heruntergeladen...' : 'Herunterladen'}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Audio Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Audio</h2>
            {showAudioPlayer ? (
              <div className="bg-gray-900 rounded-lg p-6">
                {audioUrl ? (
                  <audio
                    src={audioUrl}
                    controls
                    autoPlay
                    className="w-full"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-800 rounded p-8">
                    <p className="text-gray-400">Audio wird hier angezeigt</p>
                  </div>
                )}
              </div>
            ) : (
              <motion.div
                className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video cursor-pointer group"
                onClick={() => setShowAudioPlayer(true)}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663350287427/enmAwgtoyiDevNipdYAUmq/audio-cover-5ie3nuXjcLkRFw59rRbDhc.webp"
                  alt="Audio Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
                  >
                    <Play size={32} className="text-white fill-white ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            )}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-400">
                {showAudioPlayer ? 'Audio wird abgespielt' : 'Klick zum Abspielen'}
              </p>
              {audioUrl && (
                <button
                  onClick={() => handleDownload(audioUrl, 'podcast-audio.mp3', false)}
                  disabled={downloadingAudio}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-700 text-white rounded-lg transition-colors"
                >
                  {downloadingAudio ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Download size={18} />
                  )}
                  <span>{downloadingAudio ? 'Wird heruntergeladen...' : 'Herunterladen'}</span>
                </button>
              )}
            </div>
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
