'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EmailSubscription() {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail('');
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubscribe} className="relative flex-1 max-w-md w-full">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input 
          type="email" 
          required
          placeholder="Votre adresse email" 
          className="w-full glass rounded-full py-4 pl-12 pr-36 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-slate-400 transition-all font-medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          type="submit" 
          className="absolute right-2 top-2 bottom-2 bg-white hover:bg-gray-100 text-black px-6 rounded-full font-bold transition-colors flex items-center gap-2 group"
        >
          Démarrer
        </button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] glass px-6 py-4 rounded-2xl flex items-center gap-3 shadow-2xl"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
            </div>
            <div>
              <p className="font-bold text-sm text-white">Action confirmée</p>
              <p className="text-xs text-white/70">Merci ! Nous vous recontacterons bientôt.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
