'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto glass rounded-3xl mt-4 w-[calc(100%-2rem)]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-space font-bold text-lg text-white group-hover:scale-110 transition-transform">
          T
        </div>
        <span className="font-space font-bold text-xl tracking-tight">Register</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300"
      >
        <a href="#" className="hover:text-white transition-colors opacity-80">Accueil</a>
        <a href="#" className="hover:text-white transition-colors opacity-80">Services</a>
        <a href="#" className="hover:text-white transition-colors opacity-80">Portfolio</a>
        <a href="#" className="hover:text-white transition-colors opacity-80">Expertise</a>
        <a href="#" className="hover:text-white transition-colors opacity-80">Équipe</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="hidden md:block glass hover:bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors">
          Contactez-nous
        </button>
      </motion.div>
    </nav>
  );
}
