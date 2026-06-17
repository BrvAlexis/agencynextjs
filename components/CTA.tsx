'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="mt-32 w-full">
      <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden w-full shadow-sm">
        
        <h2 className="text-4xl lg:text-5xl font-space font-bold mb-6 text-slate-900">Prêt à propulser votre projet ?</h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-600">
          Faisons équipe pour construire l&apos;expérience digitale que vos utilisateurs méritent. Contactez-nous dès aujourd&apos;hui pour en discuter.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="button-primary px-8 py-4 flex items-center justify-center gap-2">
            Démarrer maintenant <ArrowRight className="w-5 h-5"/>
          </button>
          <button className="button-glass px-8 py-4">
            Voir nos réalisations
          </button>
        </div>
      </div>
    </div>
  );
}
