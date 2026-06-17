'use client';

import React from 'react';
import EmailSubscription from './EmailSubscription';
import AgencyStats from './AgencyStats';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-40 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full">
      {/* Left: Text Content */}
      <div className="max-w-2xl relative z-20">
        <h1 className="text-5xl lg:text-7xl font-space font-bold leading-[1.05] tracking-tight mb-6 text-slate-900">
          Création de sites <br/> 
          web sur <span className="text-blue-700">mesure</span>
        </h1>
        <p className="text-slate-700 text-lg leading-relaxed mb-10 max-w-lg">
          L&apos;agence Register vous accompagne dans votre transformation digitale. Conception sur-mesure, développement performant, et stratégie ciblée pour asseoir votre autorité.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <EmailSubscription />
        </div>
      </div>

      {/* Right: Typography-driven metrics */}
      <AgencyStats />
    </section>
  );
}
