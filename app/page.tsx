import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FaqAccordion from '@/components/FaqAccordion';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="relative w-full h-full min-h-screen font-sans text-white overflow-x-hidden selection:bg-indigo-500 selection:text-white flex flex-col">
      <div className="mesh-blob blob-1"></div>
      <div className="mesh-blob blob-2"></div>
      <div className="mesh-blob blob-3"></div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="text-white pb-32 relative z-10 w-full flex-grow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Features and Testimonials Grid */}
          <Features />

          {/* FAQ Section */}
          <FaqAccordion />

          {/* Process Section */}
          <Process />

          {/* Pricing Section */}
          <Pricing />

          {/* CTA Section */}
          <CTA />
        </div>
      </main>

      {/* Mini Footer */}
      <Footer />
    </div>
  );
}
