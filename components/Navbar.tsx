'use client';

import React from 'react';
import GooeyNav from './GooeyNav';

const navItems = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Équipe', href: '#team' }
];

export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-3xl mt-4 w-[calc(100%-2rem)] shadow-ambient">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-space font-bold text-lg text-white group-hover:scale-110 transition-transform">
          R
        </div>
        <span className="font-space font-bold text-xl tracking-tight text-neutral-text">Register</span>
      </div>

      <div className="hidden md:block bg-neutral-950 p-1.5 rounded-full shadow-lg border border-neutral-800/50">
        <GooeyNav items={navItems} />
      </div>

      <div>
        <button className="hidden md:block button-primary text-sm px-6 py-2.5 shadow-sm">
          Contactez-nous
        </button>
      </div>
    </nav>
  );
}
