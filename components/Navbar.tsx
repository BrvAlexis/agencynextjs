'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto glass rounded-3xl mt-4 w-[calc(100%-2rem)] shadow-ambient">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-space font-bold text-lg text-white group-hover:scale-110 transition-transform">
          R
        </div>
        <span className="font-space font-bold text-xl tracking-tight text-neutral-text">Register</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a href="#" className="hover:text-primary transition-colors">Accueil</a>
        <a href="#" className="hover:text-primary transition-colors">Services</a>
        <a href="#" className="hover:text-primary transition-colors">Portfolio</a>
        <a href="#" className="hover:text-primary transition-colors">Expertise</a>
        <a href="#" className="hover:text-primary transition-colors">Équipe</a>
      </div>

      <div>
        <button className="hidden md:block button-primary text-sm px-6 py-2.5 shadow-sm">
          Contactez-nous
        </button>
      </div>
    </nav>
  );
}
