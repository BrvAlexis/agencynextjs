'use client';

import React from 'react';
import { TrendingUp, Clock, FileCheck, ShieldCheck } from 'lucide-react';

export default function AgencyStats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "+42%",
      label: "Croissance du CA",
      desc: "Augmentation moyenne constatée du chiffre d'affaires après refonte.",
    },
    {
      icon: Clock,
      value: "-15h",
      label: "Gestion administrative",
      desc: "Temps économisé par semaine grâce à l'automatisation des tâches.",
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Facturation Électronique",
      desc: "Conformité totale avec les nouvelles réglementations obligatoires.",
    },
    {
      icon: ShieldCheck,
      value: "0.8s",
      label: "Temps de chargement",
      desc: "Moyenne mesurée (Core Web Vitals) pour retenir 99% des visiteurs mobiles.",
    },
  ];

  return (
    <div className="w-full grid sm:grid-cols-2 gap-6 relative z-20">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
              <stat.icon className="w-5 h-5 text-blue-700" />
            </div>
            <div className="font-space font-bold text-4xl text-slate-900 mb-2 leading-none">
              {stat.value}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              {stat.label}
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-sans">
            {stat.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
