'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, Activity } from 'lucide-react';

export default function SophisticatedPricing() {
  return (
    <section className="relative py-32 px-6 bg-zinc-950 text-white rounded-[4rem] mx-6 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 2: The Mesh Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-rose-accent/20 blur-[120px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-15%] left-[-10%] w-[50%] h-[60%] bg-rose-accent/15 blur-[100px] rounded-full"
        ></motion.div>
        
        {/* Layer 3: The Digital Blueprint (Grid) */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        {/* Layer 4: The Artisan Texture (Grain) */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-20">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-5xl lg:text-7xl font-extrabold tracking-tighter mb-6">
            Investissement <span className="text-rose-accent">clair.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-sans">Pas d&apos;abonnement caché. Un prix fixe pour une excellence durable.</p>
        </motion.div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Essentiel */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="p-12 rounded-[3rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-rose-accent/30 transition-all duration-500 group cursor-default"
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-rose-accent opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="font-heading text-3xl font-bold">Essentiel</h3>
          </div>
          <p className="text-white/40 text-sm mb-8 font-sans">Idéal pour les artisans et PME</p>
          <div className="text-5xl font-heading font-extrabold mb-10 tracking-tighter group-hover:text-rose-accent transition-colors">Sur mesure</div>
          <ul className="space-y-4 mb-12 font-sans">
            <li className="flex items-center gap-3 text-sm opacity-80"><Check className="w-4 h-4 text-emerald-400" /> Design sur-mesure</li>
            <li className="flex items-center gap-3 text-sm opacity-80"><Check className="w-4 h-4 text-emerald-400" /> Optimisation SEO local</li>
            <li className="flex items-center gap-3 text-sm opacity-80"><Check className="w-4 h-4 text-emerald-400" /> Hébergement ultra-rapide</li>
          </ul>
          <button className="w-full py-4 button-secondary border border-white/10 hover:bg-white hover:text-zinc-900">
            Nous contacter
          </button>
        </motion.div>

        {/* Signature */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="p-12 rounded-[3rem] bg-rose-accent text-white diffuse-shadow relative overflow-hidden group rose-glow cursor-default"
        >
          <div className="absolute top-8 right-8 text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Elite</div>
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            <h3 className="font-heading text-3xl font-bold">Signature</h3>
          </div>
          <p className="text-white/70 text-sm mb-8 font-sans">Pour les projets complexes</p>
          <div className="text-5xl font-heading font-extrabold mb-10 tracking-tighter">Sur mesure</div>
          <ul className="space-y-4 mb-12 font-sans">
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-white" /> Architecture applicative</li>
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-white" /> Espace client dédié</li>
            <li className="flex items-center gap-3 text-sm"><Check className="w-4 h-4 text-white" /> Maintenance préventive 24/7</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-white text-rose-accent font-bold active:scale-95 transition-transform shadow-lg hover:bg-zinc-50">
            Lancer le projet
          </button>
        </motion.div>
      </div>
    </section>
  );
}
