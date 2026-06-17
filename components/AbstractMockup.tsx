'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart2 } from 'lucide-react';

export default function AbstractMockup() {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end z-10 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-[500px] aspect-square"
      >
        {/* Background glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-30"></div>

        {/* Central Mobile Mockup */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[30%] top-[10%] w-56 h-[400px] glass rounded-[32px] shadow-2xl overflow-hidden flex flex-col z-20"
        >
          <div className="h-6 flex items-center justify-center mt-2 opacity-50">
            <div className="w-16 h-1.5 glass rounded-full"></div>
          </div>
          <div className="p-4 flex-1 flex flex-col gap-4">
            <div className="w-full h-32 rounded-xl glass p-3 relative overflow-hidden">
               <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-2">
                 <BarChart2 className="w-5 h-5 text-white" />
               </div>
               <div className="w-20 h-4 glass rounded-md mb-2 opacity-70"></div>
               <div className="w-32 h-3 glass rounded-md opacity-40"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-full h-24 rounded-xl glass p-2 flex flex-col gap-2">
                 <div className="w-8 h-8 rounded-lg glass opacity-50"></div>
                 <div className="w-12 h-2 glass rounded-full opacity-60"></div>
              </div>
              <div className="w-full h-24 rounded-xl glass p-2 flex flex-col gap-2">
                 <div className="w-8 h-8 rounded-lg glass opacity-50"></div>
                 <div className="w-12 h-2 glass rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Top Right Card */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-[20%] w-48 h-32 glass rounded-2xl shadow-xl p-4 z-30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">R</div>
            <div className="opacity-70">
              <div className="w-20 h-3 glass rounded-sm mb-1"></div>
              <div className="w-12 h-2 glass rounded-sm"></div>
            </div>
          </div>
          <div className="w-full h-2 glass rounded-full overflow-hidden">
             <div className="w-3/4 h-full bg-white opacity-40"></div>
          </div>
        </motion.div>

        {/* Floating Bottom Left Graph */}
        <motion.div 
           animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute left-[10%] bottom-[15%] w-40 h-28 glass rounded-2xl shadow-xl p-3 z-30 flex flex-col justify-end gap-1.5"
        >
           <div className="w-16 h-3 glass opacity-60 rounded-sm mb-2"></div>
           <div className="flex items-end gap-1.5 h-12 opacity-80">
             <div className="w-full glass h-[40%] rounded-t-sm"></div>
             <div className="w-full glass h-[60%] rounded-t-sm"></div>
             <div className="w-full glass h-[80%] rounded-t-sm"></div>
             <div className="w-full bg-white opacity-40 h-[100%] rounded-t-sm"></div>
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
