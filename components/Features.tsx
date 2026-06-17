'use client';

import React from 'react';
import { Check, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  return (
    <div className="w-full">
      {/* Social Proof */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-20 mb-20">
        <div className="flex flex-col md:flex-row items-center border border-slate-200/80 rounded-3xl bg-white py-8 px-8 md:px-16">
          <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-6 md:mb-0 md:mr-12 whitespace-nowrap">Ils nous font confiance</span>
          <div className="flex-grow flex flex-wrap justify-between items-center opacity-35 grayscale gap-8 md:gap-4 w-full">
            <span className="text-base md:text-lg font-extrabold tracking-wider">CHARPENTE DUBOSC</span>
            <span className="text-base md:text-lg font-extrabold tracking-wider">BOULANGERIE DUPONT</span>
            <span className="text-base md:text-lg font-extrabold tracking-wider">GARAGE MOREL</span>
            <span className="text-base md:text-lg font-extrabold tracking-wider">TRANS-VAL DE LOIRE</span>
            <span className="hidden md:block text-base md:text-lg font-extrabold tracking-wider">OPTIQUE BLANCHARD</span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Features & Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 relative -top-10 md:-top-16 z-20">
          
          {/* Box 1: Features (Light theme) */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 md:p-14 hover:-translate-y-1 transition-transform duration-500 shadow-sm">
            <h2 className="text-3xl font-space font-bold mb-8 text-neutral-text">Notre Approche</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-700" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">Analyse Personnalisée</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Nous étudions vos processus actuels pour identifier les poches de croissance immédiates.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-700" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">Structure évolutive</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Une fondation technique pensée pour s&apos;adapter et évoluer avec votre marché.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-700" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-slate-900">Support Continu</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Notre équipe reste à vos côtés après le lancement pour mesurer et optimiser.</p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Box 2: Portfolio Details */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 md:p-14 overflow-hidden relative group hover:-translate-y-1 transition-transform duration-500 shadow-sm">
            <div className="relative z-10 w-2/3">
              <h2 className="text-3xl font-space font-bold text-slate-900 mb-4">Portfolio services</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Découvrez comment nous avons transformé les écosystèmes digitaux de nos meilleurs clients.
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer text-slate-700">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
 
            {/* Real Case Study Card */}
            <div className="absolute -bottom-6 -right-6 w-[80%] bg-slate-50 border border-slate-200 rounded-2xl shadow-md p-6 transition-transform duration-700 group-hover:-translate-y-2">
               <div className="border-b border-slate-200 pb-3 mb-4">
                 <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Étude de Cas : Maison Lemaire</span>
                 <h4 className="font-space font-bold text-slate-900 mt-1">Artisan Ébéniste</h4>
               </div>
               <div className="space-y-2 text-xs">
                 <p className="text-slate-600">
                   <strong className="text-slate-900 font-bold">Défi :</strong> Site internet obsolète et invisible sur Google.
                 </p>
                 <p className="text-slate-600">
                   <strong className="text-slate-900 font-bold">Solution :</strong> Refonte Next.js ultra-rapide et SEO local.
                 </p>
                 <p className="font-bold text-emerald-700 mt-2 flex items-center gap-1.5">
                   <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                   Résultat : +65% de devis en 3 mois
                 </p>
               </div>
            </div>
          </div>
        </div>
 
        {/* Section 2: Contact Form & Team Testimonial */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-8">
          
          {/* Box 3: Process Steps / Call Audit Guide */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between group shadow-sm">
             <div className="relative z-10">
               <h2 className="text-3xl font-space font-bold text-slate-900 mb-4">Votre Audit Gratuit</h2>
               <p className="text-slate-600 text-sm leading-relaxed mb-8">
                 Pas de jargon, pas d&apos;engagement. Voici comment nous définissons votre trajectoire digitale en 3 étapes claires.
               </p>
             </div>
             
             {/* Step List Container */}
             <div className="w-[110%] -ml-[5%] bg-slate-50 border border-slate-200 rounded-t-2xl shadow-md p-6 relative z-10 mt-6 transform group-hover:-translate-y-2 transition-transform duration-500 flex flex-col gap-4">
                <div className="flex gap-4 items-start bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-700 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Appel Découverte (15 min)</h4>
                    <p className="text-slate-500 text-xs leading-normal">Discussion simple et directe autour de vos objectifs et de vos blocages métiers.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-700 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Analyse & Audit Technique</h4>
                    <p className="text-slate-500 text-xs leading-normal">Nous passons au crible votre site existant (vitesse, SEO, conversion) et vos outils actuels.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-sm text-blue-700 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">Plan d&apos;Action Détaillé</h4>
                    <p className="text-slate-500 text-xs leading-normal">Vous recevez un rapport écrit avec des actions concrètes à fort impact, sans aucun engagement.</p>
                  </div>
                </div>
             </div>
          </div>
 
          {/* Box 4: Testimonial & Details */}
          <div className="flex flex-col justify-center p-4 lg:p-10">
             <h2 className="text-3xl font-space font-bold mb-6 text-slate-900">Implémentez notre expertise</h2>
             <p className="text-slate-600 mb-10 leading-relaxed max-w-md">
                Nous réunissent des talents créatifs et des ingénieurs rigoureux pour relever les défis complexes de la digitalisation B2B.
             </p>
 
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-900">Audit technique complet</h4>
                    <p className="text-sm text-slate-500">Cartographie de l&apos;existant</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 text-lg">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-slate-900">Feuille de route stratégique</h4>
                    <p className="text-sm text-slate-500">Plan d&apos;action sur 6 mois</p>
                  </div>
                </div>
              </div>

              {/* Testimonial snippet */}
              <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-2xl w-full shadow-sm">
                  <Image 
                    src="/gregory_lemaire.png" 
                    alt="Grégory Lemaire" 
                    width={56} 
                    height={56} 
                    className="rounded-full object-cover border border-slate-200 shadow-sm"
                  />
                  <div>
                     <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      Grégory Lemaire <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 italic">&quot;Le nouveau site conçu par Register charge instantanément et nos clients nous trouvent sur Google. Le flux de devis a changé notre carnet de commandes.&quot;</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
