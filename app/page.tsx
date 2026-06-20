import React from 'react';
import SophisticatedNavbar from '@/components/SophisticatedNavbar';
import SophisticatedHero from '@/components/SophisticatedHero';
import SophisticatedProcess from '@/components/SophisticatedProcess';
import SophisticatedPricing from '@/components/SophisticatedPricing';
import SophisticatedCTA from '@/components/SophisticatedCTA';
import SophisticatedFooter from '@/components/SophisticatedFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-bg text-zinc-900 selection:bg-rose-accent selection:text-white">
      <SophisticatedNavbar />
      
      <main>
        <SophisticatedHero />
        <SophisticatedProcess />
        <SophisticatedPricing />
        <SophisticatedCTA />
      </main>

      <SophisticatedFooter />
    </div>
  );
}
