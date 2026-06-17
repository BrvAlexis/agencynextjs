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
        <h2 className="text-3xl lg:text-4xl font-space font-bold text-slate-900 mb-4">Tarification Transparente</h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base">
          Des solutions adaptées à la taille et aux ambitions de votre projet.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {/* Essentiel Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col w-full shadow-sm">
          <div className="mb-8">
            <h3 className="text-2xl font-space font-bold mb-2 text-slate-900">Essentiel</h3>
            <p className="text-slate-600 text-sm">Parfait pour les sites vitrines et le lancement de l&apos;activité</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-slate-900">Sur devis</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {essentialFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full button-glass py-4 font-bold">
            Demander une estimation
          </button>
        </div>

        {/* Avancé Card */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col relative overflow-hidden w-full shadow-sm">
          <div className="absolute top-0 right-0 bg-blue-700 text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-lg text-white">
            Populaire
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-space font-bold mb-2 text-slate-900">Avancé</h3>
            <p className="text-slate-600 text-sm">Pour les plateformes complexes et web apps</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold text-slate-900">Sur devis</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {advancedFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full button-primary py-4 font-bold">
            Démarrer le projet
          </button>
        </div>
      </div>
    </div>
  );
}
