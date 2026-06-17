'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const essentialFeatures = [
    'Design sur-mesure ergonomique',
    'Code optimisé pour la vitesse',
    'Interface de mise à jour simple (CMS)',
    'Préparation au référencement Google'
  ];

  const advancedFeatures = [
    'Technologie moderne et ultra-rapide (Next.js)',
    'Base de données & fonctions dynamiques',
    'Animations et interactions soignées',
    'Espace d\'administration sur-mesure'
  ];

  return (
    <div className="mt-32 w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-space font-bold text-white mb-4">Tarification Transparente</h2>
        <p className="opacity-70 max-w-xl mx-auto text-base">
          Des solutions adaptées à la taille et aux ambitions de votre projet.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {/* Essentiel Card */}
        <div className="glass rounded-[2rem] p-10 flex flex-col w-full">
          <div className="mb-8">
            <h3 className="text-2xl font-space font-bold mb-2 text-white">Essentiel</h3>
            <p className="opacity-70 text-sm text-slate-300">Parfait pour les sites vitrines et le lancement de l&apos;activité</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">Sur devis</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {essentialFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm opacity-80 text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full glass hover:bg-white/10 text-white py-4 rounded-xl font-bold transition-colors">
            Demander une estimation
          </button>
        </div>

        {/* Avancé Card */}
        <div className="glass rounded-[2rem] p-10 flex flex-col relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-500 to-pink-500 text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-lg text-white">
            Populaire
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-space font-bold mb-2 text-white">Avancé</h3>
            <p className="opacity-70 text-sm text-slate-300">Pour les plateformes complexes et web apps</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">Sur devis</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {advancedFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#c178f7] flex-shrink-0" />
                <span className="text-sm opacity-80 text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-white hover:bg-gray-100 text-black py-4 rounded-xl font-bold transition-colors">
            Démarrer le projet
          </button>
        </div>
      </div>
    </div>
  );
}
