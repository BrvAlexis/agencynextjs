'use client';

import React from 'react';
import { motion } from 'motion/react';
import EmailSubscription from './EmailSubscription';
import AbstractMockup from './AbstractMockup';

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Hero() {
  return (
    <section className="relative pt-20 pb-40 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 w-full">
      {/* Left: Text Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-2xl relative z-20"
      >
        <motion.h1 
          variants={fadeUpVariant}
          className="text-5xl lg:text-7xl font-space font-bold leading-[1.05] tracking-tight mb-6 text-gradient"
        >
          Création de sites <br/> 
          web sur <span className="text-white">mesure</span>
        </motion.h1>
        <motion.p 
          variants={fadeUpVariant}
          className="opacity-70 text-lg leading-relaxed mb-10 max-w-lg"
        >
          L&apos;agence Register vous accompagne dans votre transformation digitale. Conception sur-mesure, développement performant, et stratégie ciblée pour asseoir votre autorité.
        </motion.p>
        
        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-3 w-full">
          <EmailSubscription />
        </motion.div>
      </motion.div>

      {/* Right: Abstract UI Illustration */}
      <AbstractMockup />
    </section>
  );
}
