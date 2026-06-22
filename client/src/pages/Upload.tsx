import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, CheckCircle, AlertCircle, Plus, Trash2 } from 'lucide-react';

/**
 * Design Philosophy: Upload Page for Der Debug Podcast
 * - Simple interface for adding episodes with external URLs
 * - Display cover automatically
 * - Manage episodes list
 */

interface Episode {
  id: string;
  title: string;
  videoUrl: string;
  audioUrl: string;
}

export default function Upload() {
  const [episodes, setEpisodes] = useState<Episode[]>([
    {
      id: '1',
      title: 'Episode 1: KI Basics',
      videoUrl: '',
      audioUrl: '',
    }
  ]);
  
  const [formData, setFormData] = useState({
    title: '',
    videoUrl: '',
    audioUrl: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddEpisode = () => {
    if (!formData.title || !formData.videoUrl || !formData.audioUrl) {
      setStatus('error');
      setStatusMessage('Bitte fülle alle Felder aus!');
      return;
    }

    const newEpisode: Episode = {
      id: Date.now().toString(),
      title: formData.title,
      videoUrl: formData.videoUrl,
      audioUrl: formData.audioUrl,
    };

    setEpisodes([...episodes, newEpisode]);
    setFormData({ title: '', videoUrl: '', audioUrl: '' });
    setStatus('success');
    setStatusMessage('✅ Episode hinzugefügt!');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleDeleteEpisode = (id: string) => {
    setEpisodes(episodes.filter(ep => ep.id !== id));
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
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] pt-24 pb-12">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,217,255,.05)_25%,rgba(0,217,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,217,255,.05)_75%,rgba(0,217,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Neue </span>
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Episode</span>
          </h1>
          <p className="text-gray-300 text-lg">Füge Video und Audio URLs hinzu</p>
        </motion.div>

        {/* Add Episode Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Episode hinzufügen</h2>
          
          <div className="space-y-4 mb-6">
            {/* Title Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">Episode Titel</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="z.B. Episode 1: KI Basics"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </motion.div>

            {/* Video URL Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">Video URL</label>
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleInputChange}
                placeholder="https://youtube.com/watch?v=... oder https://drive.google.com/..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <p className="text-sm text-gray-400 mt-1">YouTube, Google Drive, Vimeo, etc.</p>
            </motion.div>

            {/* Audio URL Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2">Audio URL</label>
              <input
                type="url"
                name="audioUrl"
                value={formData.audioUrl}
                onChange={handleInputChange}
                placeholder="https://soundcloud.com/... oder https://drive.google.com/..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <p className="text-sm text-gray-400 mt-1">SoundCloud, Google Drive, Anchor, etc.</p>
            </motion.div>
          </div>

          {/* Status Message */}
          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${
                status === 'success'
                  ? 'bg-green-400/10 border border-green-400/50 text-green-400'
                  : 'bg-red-400/10 border border-red-400/50 text-red-400'
              }`}
            >
              {status === 'success' && <CheckCircle className="w-5 h-5" />}
              {status === 'error' && <AlertCircle className="w-5 h-5" />}
              <span>{statusMessage}</span>
            </motion.div>
          )}

          {/* Add Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleAddEpisode}
            className="w-full px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Episode hinzufügen
          </motion.button>
        </motion.div>

        {/* Episodes List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Deine Episoden ({episodes.length})</h2>
          
          <div className="space-y-4">
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.id}
                variants={itemVariants}
                className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{episode.title}</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>
                        <span className="text-cyan-400">Video:</span> {episode.videoUrl.substring(0, 50)}...
                      </p>
                      <p>
                        <span className="text-pink-400">Audio:</span> {episode.audioUrl.substring(0, 50)}...
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteEpisode(episode.id)}
                    className="p-2 rounded-lg hover:bg-red-400/10 text-red-400 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Preview */}
                <div className="grid md:grid-cols-2 gap-4">
                  {episode.videoUrl && (
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <iframe
                        src={episode.videoUrl.includes('youtube.com') ? episode.videoUrl.replace('watch?v=', 'embed/') : episode.videoUrl}
                        className="w-full h-40"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {episode.audioUrl && (
                    <div className="bg-gray-800 rounded-lg p-4">
                      <audio
                        src={episode.audioUrl}
                        controls
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-lg border border-gray-400/20 bg-gray-400/5"
        >
          <h3 className="text-white font-semibold mb-3">💡 Tipps:</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✅ Lade dein Video auf YouTube, Vimeo oder Google Drive hoch</li>
            <li>✅ Lade dein Audio auf SoundCloud, Anchor oder Google Drive hoch</li>
            <li>✅ Kopiere die URLs und füge sie hier ein</li>
            <li>✅ Das Cover wird automatisch angezeigt</li>
            <li>✅ Speichere die Episoden-URLs für später</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
