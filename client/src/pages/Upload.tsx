import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Design Philosophy: Upload Page for Der Debug Podcast
 * - Simple, clean interface for uploading video and audio
 * - Drag and drop support
 * - File preview and validation
 * - Success/error messages
 */

export default function Upload() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState('');
  const [audioPreview, setAudioPreview] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setVideoFile(file);
        setVideoPreview(URL.createObjectURL(file));
      } else {
        setStatusMessage('Bitte wähle eine Videodatei!');
        setUploadStatus('error');
      }
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('audio/')) {
        setAudioFile(file);
        setAudioPreview(URL.createObjectURL(file));
      } else {
        setStatusMessage('Bitte wähle eine Audiodatei!');
        setUploadStatus('error');
      }
    }
  };

  const handleUpload = async () => {
    if (!videoFile || !audioFile) {
      setStatusMessage('Bitte wähle sowohl Video als auch Audio!');
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    setStatusMessage('Dateien werden hochgeladen...');

    try {
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setUploadStatus('success');
      setStatusMessage(`✅ Upload erfolgreich! Video: ${videoFile.name}, Audio: ${audioFile.name}`);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setVideoFile(null);
        setAudioFile(null);
        setVideoPreview('');
        setAudioPreview('');
        setUploadStatus('idle');
      }, 3000);
    } catch (error) {
      setUploadStatus('error');
      setStatusMessage('❌ Upload fehlgeschlagen. Bitte versuche es erneut.');
    }
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
            <span className="text-white">Upload </span>
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Deine Episode</span>
          </h1>
          <p className="text-gray-300 text-lg">Lade Video und Audio für deine nächste Episode hoch</p>
        </motion.div>

        {/* Upload Area */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Video Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <label className="block">
              <div className="relative border-2 border-dashed border-cyan-400/50 rounded-lg p-8 hover:border-cyan-400 transition-colors cursor-pointer bg-cyan-400/5 hover:bg-cyan-400/10">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-3">
                  <UploadIcon className="w-12 h-12 text-cyan-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold">Video hochladen</p>
                    <p className="text-gray-400 text-sm">MP4, WebM, etc.</p>
                  </div>
                </div>
              </div>
            </label>
            {videoPreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4"
              >
                <video
                  src={videoPreview}
                  className="w-full h-40 rounded-lg object-cover border border-cyan-400/30"
                  controls
                />
                <p className="text-cyan-400 text-sm mt-2 truncate">{videoFile?.name}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Audio Upload */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <label className="block">
              <div className="relative border-2 border-dashed border-pink-400/50 rounded-lg p-8 hover:border-pink-400 transition-colors cursor-pointer bg-pink-400/5 hover:bg-pink-400/10">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-3">
                  <UploadIcon className="w-12 h-12 text-pink-400" />
                  <div className="text-center">
                    <p className="text-white font-semibold">Audio hochladen</p>
                    <p className="text-gray-400 text-sm">MP3, WAV, etc.</p>
                  </div>
                </div>
              </div>
            </label>
            {audioPreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4"
              >
                <audio
                  src={audioPreview}
                  className="w-full rounded-lg border border-pink-400/30"
                  controls
                />
                <p className="text-pink-400 text-sm mt-2 truncate">{audioFile?.name}</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Status Message */}
        {uploadStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg mb-8 flex items-center gap-3 ${
              uploadStatus === 'success'
                ? 'bg-green-400/10 border border-green-400/50 text-green-400'
                : uploadStatus === 'error'
                ? 'bg-red-400/10 border border-red-400/50 text-red-400'
                : 'bg-cyan-400/10 border border-cyan-400/50 text-cyan-400'
            }`}
          >
            {uploadStatus === 'success' && <CheckCircle className="w-5 h-5" />}
            {uploadStatus === 'error' && <AlertCircle className="w-5 h-5" />}
            <span>{statusMessage}</span>
          </motion.div>
        )}

        {/* Upload Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={handleUpload}
            disabled={!videoFile || !audioFile || uploadStatus === 'uploading'}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              videoFile && audioFile && uploadStatus !== 'uploading'
                ? 'bg-gradient-to-r from-cyan-400 to-pink-400 text-black hover:shadow-lg hover:shadow-cyan-400/50 cursor-pointer'
                : 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-50'
            }`}
          >
            {uploadStatus === 'uploading' ? 'Wird hochgeladen...' : 'Hochladen'}
          </button>
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
            <li>✅ Stelle sicher, dass dein Video und Audio die gleiche Länge haben</li>
            <li>✅ Empfohlenes Video-Format: MP4 (H.264)</li>
            <li>✅ Empfohlenes Audio-Format: MP3 (128-320 kbps)</li>
            <li>✅ Maximale Dateigröße: 500 MB pro Datei</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
