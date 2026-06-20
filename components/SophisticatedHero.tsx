'use client';

import React from 'react';
import { motion } from 'motion/react';
import SophisticatedStatsBento from './SophisticatedStatsBento';

export default function SophisticatedHero() {
  const partners = ['MAISON LEMAIRE', 'ATELIER BROUSSARD', 'TRANS-VAL'];

  return (
    <section className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-accent/10 text-rose-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-accent"></span>
            </span>
            Artisanat Numérique
          </div>
          <h1 className="font-heading text-6xl lg:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-8 text-zinc-900">
            Design web <br /> 
            <span className="text-rose-accent">haute-couture.</span>
          </h1>
          <p className="text-lg lg:text-xl text-zinc-900/70 leading-relaxed mb-10 max-w-lg font-sans">
            Nous transformons votre vision artisanale en une expérience digitale d&apos;élite. Conception sur-mesure pour les bâtisseurs de demain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow max-w-md">
              <input 
                type="email" 
                placeholder="votre@email.fr" 
                className="w-full h-14 rounded-full px-8 bg-white/50 border border-zinc-900/10 focus:outline-none focus:border-rose-accent transition-colors diffuse-shadow font-sans text-zinc-900" 
              />
              <button className="absolute right-1.5 top-1.5 h-11 px-8 button-secondary text-sm">
                Démarrer
              </button>
            </div>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delayChildren: 1,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="mt-12 flex items-center gap-4 transition-all duration-500"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-zinc-900 opacity-40">Ils nous font confiance :</span>
            <div className="flex gap-6 font-heading font-extrabold text-sm text-zinc-900">
              {partners.map((partner) => (
                <motion.span 
                  key={partner}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 0.5, x: 0 }
                  }}
                  whileHover={{ scale: 1.05, opacity: 1, color: "var(--color-rose-accent)" }}
                  className="cursor-default"
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <SophisticatedStatsBento />
      </div>
    </section>
  );
}
