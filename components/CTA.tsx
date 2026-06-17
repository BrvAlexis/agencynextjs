'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="mt-32 w-full">
      <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6 text-gradient">Prêt à propulser votre projet ?</h2>
        <p className="opacity-70 max-w-2xl mx-auto mb-10 text-lg text-slate-300">
          Faisons équipe pour construire l&apos;expérience digitale que vos utilisateurs méritent. Contactez-nous dès aujourd&apos;hui pour en discuter.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            Démarrer maintenant <ArrowRight className="w-5 h-5"/>
          </button>
          <button className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-white">
            Voir nos réalisations
          </button>
        </div>
      </div>
    </div>
  );
}
