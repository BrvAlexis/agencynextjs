'use client';

import React from 'react';
import { Check, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  return (
    <div className="w-full">
      {/* Social Proof */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-20 mb-20">
        <div className="flex flex-col md:flex-row items-center border border-slate-200/80 rounded-3xl glass py-8 px-8 md:px-16">
          <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-6 md:mb-0 md:mr-12 whitespace-nowrap">Ils nous font confiance</span>
          <div className="flex-grow flex flex-wrap justify-between items-center opacity-30 grayscale gap-8 md:gap-4 w-full">
            <span className="text-xl md:text-2xl font-bold">VELOCITY</span>
            <span className="text-xl md:text-2xl font-bold">QUANTUM</span>
            <span className="text-xl md:text-2xl font-bold">LUMOS</span>
            <span className="text-xl md:text-2xl font-bold">VERTEX</span>
            <span className="hidden md:block text-2xl font-bold">AETHER</span>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Features & Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 relative -top-10 md:-top-16 z-20">
          
          {/* Box 1: Features (Light theme) */}
          <div className="glass rounded-[32px] p-10 md:p-14 hover:-translate-y-1 transition-transform duration-500 shadow-sm">
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
          <div className="glass rounded-[32px] p-10 md:p-14 overflow-hidden relative group hover:-translate-y-1 transition-transform duration-500 shadow-sm">
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
 
            {/* Decorative Browser Mockup Abstract */}
            <div className="absolute -bottom-16 -right-10 md:-right-4 w-[85%] h-64 bg-slate-50 border border-slate-200 rounded-t-xl shadow-md p-4 transition-transform duration-700 group-hover:-translate-y-4">
               <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
                 <div className="flex gap-1.5 opacity-60">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="w-1/2 h-4 bg-slate-200 rounded-full mx-auto opacity-70"></div>
               </div>
               <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 h-32 bg-slate-200/50 border border-slate-200/20 rounded-lg"></div>
                  <div className="col-span-2 flex flex-col gap-3">
                     <div className="w-3/4 h-4 bg-slate-200 rounded-sm"></div>
                     <div className="w-full h-12 bg-white border border-slate-200 rounded-lg translate-y-2"></div>
                     <div className="w-5/6 h-6 bg-slate-200 rounded-sm mt-auto"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
 
        {/* Section 2: Contact Form & Team Testimonial */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-8">
          
          {/* Box 3: Contact/Dashboard Visual */}
          <div className="glass rounded-[32px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between group shadow-sm">
             <h2 className="text-3xl font-space font-bold text-slate-900 z-10 mb-8">Contactez-nous</h2>
             
             {/* Abstract Dashboard Component inside soft background */}
             <div className="w-[110%] -ml-[5%] bg-slate-50 border border-slate-200 rounded-t-2xl shadow-md p-6 relative z-10 mt-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white/50 rounded-sm"></div>
                    </div>
                    <div className="w-24 h-4 bg-slate-200 rounded-md"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-16 h-6 bg-slate-200 rounded-full"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                   {[1,2,3,4].map((i) => (
                     <div key={i} className="h-16 bg-white border border-slate-200/80 rounded-lg p-2 flex flex-col justify-end">
                       <div className="w-1/2 h-2 bg-slate-200 mb-1"></div>
                       <div className="w-3/4 h-3 bg-slate-300 rounded-sm"></div>
                     </div>
                   ))}
                </div>
 
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1/3 space-y-2">
                    <div className="h-4 bg-slate-200 rounded-md"></div>
                    <div className="h-4 bg-slate-200 rounded-md"></div>
                    <div className="h-4 bg-slate-200 rounded-md"></div>
                  </div>
                  <div className="flex-1 h-32 bg-white border border-slate-200 rounded-xl relative overflow-hidden">
                     <svg className="absolute bottom-0 w-full h-[80%]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
                       <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="rgba(29,78,216,0.05)" />
                       <path d="M0,50 Q25,20 50,60 T100,30" stroke="#1D4ED8" strokeWidth="2" fill="none" />
                     </svg>
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
                    src="https://picsum.photos/seed/greg2/100/100" 
                    alt="Gregory Mac" 
                    width={56} 
                    height={56} 
                    className="rounded-full object-cover border border-slate-200 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                     <h4 className="font-bold text-slate-900 flex items-center gap-2">
                      Gregory Mac <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 italic">&quot;Un gain en efficacité opérationnelle exceptionnel grâce à Register.&quot;</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
