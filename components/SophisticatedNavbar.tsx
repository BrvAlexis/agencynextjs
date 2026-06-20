'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useBooking } from '@/context/BookingContext';

export default function SophisticatedNavbar() {
  const { openModal, isBooked } = useBooking();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="glass-card rounded-full px-8 py-3 flex items-center justify-between diffuse-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center font-heading font-bold text-sm text-white">R</div>
          <span className="font-heading font-bold text-lg tracking-tight">Register</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
          <Link href="#" className="hover:opacity-100 transition-opacity">Expertise</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Portfolio</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Processus</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>
        <button 
          onClick={() => openModal()} 
          className="button-primary px-5 py-2 text-sm cursor-pointer"
        >
          {isBooked ? 'Mon rdv' : 'Audit gratuit'}
        </button>
      </div>
    </motion.nav>
  );
}
