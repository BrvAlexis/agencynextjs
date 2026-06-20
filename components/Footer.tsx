import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border border-slate-200 rounded-xl mx-6 md:mx-auto max-w-7xl py-12 px-6 lg:px-12 mb-6 mt-10 w-[calc(100%-3rem)] md:w-full shadow-sm text-neutral-text">
      <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center font-space font-bold text-xs text-white">R</div>
            <span className="font-space font-bold text-slate-900 tracking-tight">Register</span>
         </div>
         <div className="flex gap-6">
           <a href="#" className="hover:text-slate-900 transition-colors text-slate-600 text-sm">Mentions légales</a>
           <a href="#" className="hover:text-slate-900 transition-colors text-slate-600 text-sm">Confidentialité</a>
           <a href="#" className="hover:text-slate-900 transition-colors text-slate-600 text-sm">Cookies</a>
         </div>
         <div className="mt-4 md:mt-0 text-xs text-slate-500">
           © 2026 Register Agency. All rights reserved.
         </div>
      </div>
    </footer>
  );
}
