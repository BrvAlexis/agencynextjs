'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export default function SophisticatedStatsBento() {
  return (
    <div className="relative grid grid-cols-2 gap-4 h-[500px]">
      {/* Box 1: Growth */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="col-span-1 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between diffuse-shadow group cursor-default"
      >
        <div className="w-12 h-12 rounded-2xl bg-rose-accent/10 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-rose-accent" />
        </div>
        <div>
          <div className="text-5xl font-heading font-extrabold mb-1 tracking-tighter text-zinc-900 group-hover:text-rose-accent transition-colors">+38.4%</div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-40 text-zinc-900">Croissance moyenne du CA</p>
          <div className="mt-6 h-20 w-full flex items-end gap-1">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '40%' }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex-grow bg-rose-accent/20 rounded-t-sm"
            ></motion.div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '60%' }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex-grow bg-rose-accent/30 rounded-t-sm"
            ></motion.div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '45%' }}
              transition={{ delay: 1.0, duration: 1 }}
              className="flex-grow bg-rose-accent/50 rounded-t-sm"
            ></motion.div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex-grow bg-rose-accent rounded-t-sm"
            ></motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Box 2: Speed */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="glass-card rounded-3xl p-8 diffuse-shadow flex flex-col justify-center cursor-default group"
      >
        <div className="text-4xl font-heading font-extrabold mb-1 tracking-tighter text-zinc-900 group-hover:text-rose-accent transition-colors">0.74s</div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-zinc-900">Temps de chargement LCP</p>
        <div className="mt-4 flex items-center gap-1">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-1 bg-emerald-500 rounded-full"
          ></motion.div>
          <div className="text-[10px] font-bold text-emerald-600">OPTIMAL</div>
        </div>
      </motion.div>
      
      {/* Box 3: Time Savings */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="glass-card rounded-3xl p-8 diffuse-shadow flex flex-col justify-center cursor-default group"
      >
        <div className="text-4xl font-heading font-extrabold mb-1 tracking-tighter text-zinc-900 group-hover:text-rose-accent transition-colors">-12.5h</div>
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-zinc-900">Gestion administrative / semaine</p>
        <div className="mt-4 flex items-center -space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-300"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-400"></div>
          <div className="pl-4 text-[10px] font-bold opacity-40 text-zinc-900">+Automatisé</div>
        </div>
      </motion.div>
    </div>
  );
}
