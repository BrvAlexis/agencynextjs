'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Rocket } from 'lucide-react';

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Process() {
  const steps = [
    { icon: Target, title: "1. Stratégie & Design", desc: "Nous définissons les objectifs et créons des maquettes interactives pour valider l'expérience." },
    { icon: Zap, title: "2. Développement", desc: "Intégration et développement sur-mesure avec les technologies web les plus performantes." },
    { icon: Rocket, title: "3. Lancement", desc: "Tests rigoureux, optimisation SEO et mise en production fluide de votre nouveau site." }
  ];

  return (
    <div className="mt-32 w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="text-center mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-space font-bold text-white mb-4">Notre Processus</h2>
        <p className="opacity-70 max-w-xl mx-auto text-base">
          Une méthode éprouvée pour transformer votre vision en un produit digital performant.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="glass rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-6">
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
            <p className="opacity-70 text-sm leading-relaxed text-slate-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
