'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Features() {
  return (
    <div className="w-full">
      {/* Social Proof */}
      <div className="relative max-w-7xl mx-auto px-6 w-full z-20 mb-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row items-center border-t border-white/5 rounded-3xl glass py-8 px-8 md:px-16"
        >
          <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-6 md:mb-0 md:mr-12 whitespace-nowrap">Ils nous font confiance</span>
          <div className="flex-grow flex flex-wrap justify-between items-center opacity-30 grayscale gap-8 md:gap-4 w-full">
            <span className="text-xl md:text-2xl font-bold">VELOCITY</span>
            <span className="text-xl md:text-2xl font-bold">QUANTUM</span>
            <span className="text-xl md:text-2xl font-bold">LUMOS</span>
            <span className="text-xl md:text-2xl font-bold">VERTEX</span>
            <span className="hidden md:block text-2xl font-bold">AETHER</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Features & Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8 relative -top-10 md:-top-16 z-20">
          
          {/* Box 1: Features (Light theme) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="glass rounded-[32px] p-10 md:p-14 hover:-translate-y-1 transition-transform duration-500"
          >
            <h2 className="text-3xl font-space font-bold mb-8">Contactez-nous</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Analyse Personnalisée</h3>
                  <p className="opacity-70 text-sm leading-relaxed">Nous étudions vos processus actuels pour identifier les poches de croissance immédiates.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Architecture Agile</h3>
                  <p className="opacity-70 text-sm leading-relaxed">Une fondation technique pensée pour s&apos;adapter et évoluer avec votre marché.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Support Continu</h3>
                  <p className="opacity-70 text-sm leading-relaxed">Notre équipe reste à vos côtés après le lancement pour mesurer et optimiser.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Portfolio Details (Dark theme) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            variants={fadeUpVariant}
            className="glass rounded-[32px] p-10 md:p-14 overflow-hidden relative group hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="relative z-10 w-2/3">
              <h2 className="text-3xl font-space font-bold text-white mb-4">Portfolio services</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-8">
                Découvrez comment nous avons transformé les écosystèmes digitaux de nos meilleurs clients.
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors cursor-pointer text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Decorative Browser Mockup Abstract */}
            <div className="absolute -bottom-16 -right-10 md:-right-4 w-[85%] h-64 glass rounded-t-xl shadow-2xl p-4 transition-transform duration-700 group-hover:-translate-y-4">
               <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                 <div className="flex gap-1.5 opacity-60">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="w-1/2 h-4 glass rounded-full mx-auto opacity-30"></div>
               </div>
               <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 h-32 glass rounded-lg opacity-40"></div>
                  <div className="col-span-2 flex flex-col gap-3">
                     <div className="w-3/4 h-4 glass rounded-sm opacity-50"></div>
                     <div className="w-full h-12 glass rounded-lg translate-y-2 opacity-60"></div>
                     <div className="w-5/6 h-6 glass rounded-sm mt-auto opacity-40"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Contact Form & Team Testimonial */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-8">
          
          {/* Box 3: Contact/Dashboard Visual */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px" }}
             variants={fadeUpVariant}
             className="glass rounded-[32px] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between group"
          >
             <h2 className="text-3xl font-space font-bold text-white z-10 mb-8">Contactez-nous</h2>
             
             {/* Abstract Dashboard Component inside soft background */}
             <div className="w-[110%] -ml-[5%] glass rounded-t-2xl shadow-xl p-6 relative z-10 mt-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white/50 rounded-sm"></div>
                    </div>
                    <div className="w-24 h-4 glass rounded-md opacity-70"></div>
                  </div>
                  <div className="flex gap-2 opacity-60">
                    <div className="w-16 h-6 glass rounded-full"></div>
                    <div className="w-6 h-6 rounded-full glass"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                   {[1,2,3,4].map((i) => (
                     <div key={i} className="h-16 glass rounded-lg p-2 flex flex-col justify-end">
                       <div className="w-1/2 h-2 glass rounded-sm mb-1 opacity-50"></div>
                       <div className="w-3/4 h-3 glass rounded-sm opacity-80"></div>
                     </div>
                   ))}
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1/3 opacity-60">
                    <div className="h-4 glass rounded-md mb-2"></div>
                    <div className="h-4 glass rounded-md mb-2"></div>
                    <div className="h-4 glass rounded-md"></div>
                  </div>
                  <div className="flex-1 h-32 glass rounded-xl relative overflow-hidden opacity-80">
                     <svg className="absolute bottom-0 w-full h-[80%]" preserveAspectRatio="none" viewBox="0 0 100 100" fill="none">
                       <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="rgba(255,255,255,0.05)" />
                       <path d="M0,50 Q25,20 50,60 T100,30" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
                     </svg>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Box 4: Testimonial & Details */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-50px", amount: 0.2 }}
             variants={{
               hidden: { opacity: 0, x: 30 },
               visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
             }}
             className="flex flex-col justify-center p-4 lg:p-10"
          >
             <h2 className="text-3xl font-space font-bold mb-6">Implémentez notre expertise</h2>
             <p className="opacity-70 mb-10 leading-relaxed max-w-md">
               Nous réunissent des talents créatifs et des ingénieurs rigoureux pour relever les défis complexes de la digitalisation B2B.
             </p>

             <div className="space-y-6 mb-12">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                   <span className="text-white font-bold text-lg">1</span>
                 </div>
                 <div>
                   <h4 className="font-bold mb-1">Audit technique complet</h4>
                   <p className="text-sm opacity-60">Cartographie de l&apos;existant</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full glass flex items-center justify-center flex-shrink-0">
                   <span className="text-white font-bold text-lg">2</span>
                 </div>
                 <div>
                   <h4 className="font-bold mb-1">Feuille de route stratégique</h4>
                   <p className="text-sm opacity-60">Plan d&apos;action sur 6 mois</p>
                 </div>
               </div>
             </div>

             {/* Testimonial snippet */}
             <div className="flex items-center gap-4 p-5 glass rounded-2xl w-full">
                <Image 
                  src="https://picsum.photos/seed/greg2/100/100" 
                  alt="Gregory Mac" 
                  width={56} 
                  height={56} 
                  className="rounded-full object-cover border border-white/20 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                   <h4 className="font-bold text-white flex items-center gap-2">
                    Gregory Mac <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </h4>
                  <p className="text-sm opacity-70 mt-1 italic">&quot;Un gain en efficacité opérationnelle exceptionnel grâce à Register.&quot;</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
