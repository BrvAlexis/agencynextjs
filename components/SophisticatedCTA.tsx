'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function SophisticatedCTA() {
  return (
    <section className="py-40 px-6 text-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto rose-glow p-12 lg:p-24 rounded-[4rem] bg-white border border-rose-accent/10 diffuse-shadow"
      >
        <h2 className="font-heading text-5xl lg:text-7xl font-extrabold tracking-tighter mb-8 leading-none text-zinc-900">
          Prêt à sculpter votre <span className="text-rose-accent">succès ?</span>
        </h2>
        <p className="text-lg text-zinc-900/60 mb-12 leading-relaxed font-sans">
          Rejoignez le cercle restreint des entreprises qui maîtrisent leur image numérique.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="button-secondary px-10 py-5 text-lg diffuse-shadow font-sans">
            Réserver mon audit
          </button>
          <button className="bg-white text-zinc-900 border border-zinc-900/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-zinc-50 transition-colors active:scale-95 font-sans">
            Découvrir nos œuvres
          </button>
        </div>
      </motion.div>
    </section>
  );
}
