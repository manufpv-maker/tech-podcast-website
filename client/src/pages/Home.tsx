import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Cyberpunk Bold Gradient
 * - Dark mode base with neon accents (cyan, pink, purple)
 * - Glasmorphic cards with blur effects
 * - Animated gradients and glow effects
 * - Staggered entrance animations
 * - Responsive design optimized for all devices
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Main content with top padding for fixed header */}
      <main className="pt-16">
        <Hero />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
