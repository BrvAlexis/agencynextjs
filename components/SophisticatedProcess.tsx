'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Layers, ShieldCheck, Play } from 'lucide-react';
import Image from 'next/image';

export default function SophisticatedProcess() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16"
      >
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 text-zinc-900">
            Un processus sculpté <br /> pour votre réussite.
          </h2>
          <p className="text-zinc-900/60 text-lg font-sans">Nous ne construisons pas seulement des sites. Nous bâtissons des infrastructures de croissance pérennes.</p>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="text-sm font-bold uppercase tracking-widest opacity-30 text-zinc-900">Artisans du pixel</div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Analyse de Trajectoire */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="md:col-span-2 glass-card rounded-[3rem] p-12 diffuse-shadow relative overflow-hidden group"
        >
          <div className="relative z-10 max-w-md">
            <h3 className="font-heading text-3xl font-bold mb-4 text-zinc-900">Analyse de Trajectoire</h3>
            <p className="text-zinc-900/60 leading-relaxed mb-8 font-sans">Nous auditons vos flux actuels pour identifier les goulots d&apos;étranglement qui freinent votre transformation digitale.</p>
            <ul className="space-y-3 font-sans">
              <li className="flex items-center gap-3 text-sm font-bold text-zinc-900">
                <Check className="w-4 h-4 text-rose-accent" /> Audit technique approfondi
              </li>
              <li className="flex items-center gap-3 text-sm font-bold text-zinc-900">
                <Check className="w-4 h-4 text-rose-accent" /> Cartographie des opportunités
              </li>
            </ul>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-rose-accent/5 blur-3xl group-hover:bg-rose-accent/10 transition-colors duration-700"></div>
        </motion.div>

        {/* Fondations Évolutives */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-[3rem] p-12 diffuse-shadow flex flex-col justify-between group hover:-translate-y-1 transition-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-zinc-900">Fondations Évolutives</h3>
            <p className="text-sm text-zinc-900/60 leading-relaxed font-sans">Une architecture Next.js pensée pour tenir 10 ans, pas 10 mois.</p>
          </div>
        </motion.div>

        {/* Sécurité & Support */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card rounded-[3rem] p-12 diffuse-shadow flex flex-col justify-between group hover:-translate-y-1 transition-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-rose-accent flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3 text-zinc-900">Sécurité & Support</h3>
            <p className="text-sm text-zinc-900/60 leading-relaxed font-sans">Accompagnement VIP post-lancement pour garantir votre sérénité totale.</p>
          </div>
        </motion.div>

        {/* Étude de Cas: Maison Lemaire */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="md:col-span-2 glass-card rounded-[3rem] p-12 diffuse-shadow flex flex-col md:flex-row gap-12 items-center group"
        >
          <div className="flex-grow">
            <h3 className="font-heading text-3xl font-bold mb-4 text-zinc-900">Étude de Cas : Maison Lemaire</h3>
            <p className="text-zinc-900/60 leading-relaxed mb-6 italic font-sans">&quot;Le carnet de commandes a triplé en 3 mois grâce au nouveau référencement local.&quot;</p>
            <div className="flex items-center gap-4">
              <Image 
                src="/gregory_lemaire.png" 
                alt="Grégory Lemaire" 
                width={40} 
                height={40} 
                className="rounded-full bg-zinc-200"
              />
              <div>
                <div className="text-sm font-bold text-zinc-900">Grégory Lemaire</div>
                <div className="text-[10px] uppercase font-bold opacity-40 text-zinc-900">Maître Ébéniste</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 aspect-video bg-zinc-900/5 rounded-2xl border border-zinc-900/10 flex items-center justify-center relative overflow-hidden group/play cursor-pointer">
            <div className="absolute inset-0 bg-zinc-900/0 group-hover/play:bg-zinc-900/5 transition-colors"></div>
            <Play className="w-10 h-10 text-rose-accent relative z-10 transition-transform group-hover/play:scale-110" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
