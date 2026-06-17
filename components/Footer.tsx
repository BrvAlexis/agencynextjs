import React from 'react';

export default function Footer() {
  return (
    <footer className="glass rounded-[2rem] mx-6 md:mx-auto max-w-7xl py-12 px-6 lg:px-12 mb-6 mt-10 w-[calc(100%-3rem)] md:w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-space font-bold text-xs text-white">T</div>
            <span className="font-space font-bold text-white tracking-tight">Register</span>
         </div>
         <div className="flex gap-6 opacity-60">
           <a href="#" className="hover:text-white transition-colors text-slate-300">Mentions légales</a>
           <a href="#" className="hover:text-white transition-colors text-slate-300">Confidentialité</a>
           <a href="#" className="hover:text-white transition-colors text-slate-300">Cookies</a>
         </div>
         <div className="mt-4 md:mt-0 opacity-40 text-sm text-slate-400">
           © 2026 Register Agency. All rights reserved.
         </div>
      </div>
    </footer>
  );
}
