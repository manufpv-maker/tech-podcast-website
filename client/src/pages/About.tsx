import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Users, Mic, BookOpen, ArrowLeft } from 'lucide-react';

/**
 * Design Philosophy: Clean & Simple
 * - About-Seite mit Team und Podcast-Informationen
 */

export default function About() {
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

  const hosts = [
    {
      name: 'Manuel',
      role: 'Host',
      description: 'Co-Moderator und Podcast-Produzent',
    },
    {
      name: 'Mursaleen',
      role: 'Host',
      description: 'Co-Moderator und Technologie-Enthusiast',
    },
  ];

  const guests = [
    {
      name: 'Mahyar',
      role: 'Gast',
      description: 'KI-Experte und Innovator',
    },
    {
      name: 'Colin',
      role: 'Gast',
      description: 'Technologie-Spezialist',
    },
  ];

  const topics = [
    {
      icon: <BookOpen size={32} />,
      title: 'Erste Gedanken',
      description: 'Unsere initialen Überlegungen und Perspektiven zu Künstlicher Intelligenz',
    },
    {
      icon: <Mic size={32} />,
      title: 'Funktionsweise',
      description: 'Wie funktioniert KI? Ein tieferer Blick in die Technologie',
    },
    {
      icon: <Users size={32} />,
      title: 'Probleme & Herausforderungen',
      description: 'Welche Probleme entstehen durch KI und wie können wir sie lösen?',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Interview',
      description: 'Gespräche mit Experten über ihre Erfahrungen mit KI',
    },
    {
      icon: <Mic size={32} />,
      title: 'Einsatzgebiete',
      description: 'Praktische Anwendungen von KI in der realen Welt',
    },
  ];

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
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft size={20} />
              Zurück zur Startseite
            </a>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Über uns
            </h1>
            <p className="text-lg text-gray-300">
              Willkommen zu Der Debug Podcast - Ein Podcast von Schülern über Künstliche Intelligenz
            </p>
          </motion.div>

          {/* Podcast Description */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Der Podcast</h2>
            <p className="text-gray-300 mb-4">
              Der Debug Podcast ist ein Projekt von Schülern, die sich intensiv mit dem Thema Künstliche Intelligenz auseinandersetzen. Wir erforschen KI von verschiedenen Perspektiven und teilen unsere Erkenntnisse mit euch.
            </p>
            <p className="text-gray-300">
              In diesem Podcast behandeln wir die Grundlagen von KI, ihre praktischen Anwendungen, Herausforderungen und die Zukunft dieser transformativen Technologie.
            </p>
          </motion.div>

          {/* Hosts Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Moderatoren</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hosts.map((host, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{host.name}</h3>
                  <p className="text-pink-400 font-semibold mb-2">{host.role}</p>
                  <p className="text-gray-300">{host.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guests Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Gäste</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guests.map((guest, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{guest.name}</h3>
                  <p className="text-pink-400 font-semibold mb-2">{guest.role}</p>
                  <p className="text-gray-300">{guest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Topics Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-white mb-6">Themen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/50 rounded-lg p-6 border border-gray-800"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-cyan-400 mb-4">{topic.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-gray-300 text-sm">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
