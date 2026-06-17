'use client';

import React from 'react';
import { BarChart2 } from 'lucide-react';

export default function AbstractMockup() {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end z-10 pointer-events-none">
      <div className="relative w-full max-w-[500px] aspect-square">
        {/* Background soft slate/blue ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-100/40 rounded-full blur-[100px]"></div>

        {/* Central Mobile Mockup */}
        <div className="absolute left-[30%] top-[10%] w-56 h-[400px] bg-white border border-slate-200/80 rounded-[32px] shadow-2xl overflow-hidden flex flex-col z-20">
          <div className="h-6 flex items-center justify-center mt-2 opacity-50">
            <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
          </div>
          <div className="p-4 flex-1 flex flex-col gap-4">
            <div className="w-full h-32 rounded-xl bg-slate-50 border border-slate-100 p-3 relative overflow-hidden">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                 <BarChart2 className="w-5 h-5 text-primary" />
               </div>
               <div className="w-20 h-4 bg-slate-200 rounded-md mb-2 opacity-70"></div>
               <div className="w-32 h-3 bg-slate-200 rounded-md opacity-40"></div>
            </div>
            <div className="flex gap-3">
              <div className="w-full h-24 rounded-xl bg-slate-50 border border-slate-100 p-2 flex flex-col gap-2">
                 <div className="w-8 h-8 rounded-lg bg-slate-200 opacity-50"></div>
                 <div className="w-12 h-2 bg-slate-200 rounded-full opacity-60"></div>
              </div>
              <div className="w-full h-24 rounded-xl bg-slate-50 border border-slate-100 p-2 flex flex-col gap-2">
                 <div className="w-8 h-8 rounded-lg bg-slate-200 opacity-50"></div>
                 <div className="w-12 h-2 bg-slate-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Top Right Card */}
        <div className="absolute right-0 top-[20%] w-48 h-32 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-4 z-30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">R</div>
            <div className="opacity-70">
              <div className="w-20 h-3 bg-slate-200 rounded-sm mb-1"></div>
              <div className="w-12 h-2 bg-slate-200 rounded-sm"></div>
            </div>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
             <div className="w-3/4 h-full bg-primary"></div>
          </div>
        </div>

        {/* Floating Bottom Left Graph */}
        <div className="absolute left-[10%] bottom-[15%] w-40 h-28 bg-white border border-slate-200/80 rounded-2xl shadow-xl p-3 z-30 flex flex-col justify-end gap-1.5">
           <div className="w-16 h-3 bg-slate-200 opacity-60 rounded-sm mb-2"></div>
           <div className="flex items-end gap-1.5 h-12 opacity-80">
             <div className="w-full bg-slate-100 h-[40%] rounded-t-sm"></div>
             <div className="w-full bg-slate-100 h-[60%] rounded-t-sm"></div>
             <div className="w-full bg-slate-100 h-[80%] rounded-t-sm"></div>
             <div className="w-full bg-primary h-[100%] rounded-t-sm"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
