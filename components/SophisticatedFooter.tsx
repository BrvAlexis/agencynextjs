'use client';

import React from 'react';
import Link from 'next/link';

export default function SophisticatedFooter() {
  return (
    <footer className="py-20 px-6 border-t border-zinc-900/5 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center font-heading font-bold text-sm text-white">R</div>
          <span className="font-heading font-bold text-lg tracking-tight text-zinc-900">Register</span>
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-40 text-zinc-900 font-sans">
          <Link href="#" className="hover:opacity-100 transition-opacity">Légal</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Confidentialité</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Presse</Link>
        </div>
        <div className="text-[10px] font-bold opacity-30 text-zinc-900 uppercase font-sans">
          © 2026 REGISTER AGENCY. ARTISANAT NUMÉRIQUE.
        </div>
      </div>
    </footer>
  );
}
