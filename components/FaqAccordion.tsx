'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Combien de temps prend la création d'un site web sur mesure ?",
    answer: "Le délai dépend de la complexité du projet. En général, un site vitrine prend entre 4 et 6 semaines, tandis qu'une plateforme e-commerce ou une application web peut nécessiter 2 à 4 mois."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer: "Oui, nous offrons des forfaits de maintenance et de support pour assurer la sécurité, les mises à jour et l'évolution continue de votre produit digital."
  },
  {
    question: "Quelle est votre méthode de gestion de projet ?",
    answer: "Nous utilisons des méthodologies agiles (Scrum/Kanban) avec des sprints réguliers. Cela nous permet d'être flexibles et de vous impliquer à chaque étape."
  },
  {
    question: "Refaites-vous également le design de sites existants ?",
    answer: "Absolument. Nous réalisons des audits de l'existant et proposons des refontes complètes (UX/UI et technique) pour améliorer les performances et l'expérience utilisateur."
  }
];

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function FaqAccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass rounded-2xl overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className="mt-20 max-w-3xl mx-auto w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
        className="text-center mb-10"
      >
        <h2 className="text-3xl lg:text-4xl font-space font-bold text-white mb-6">Questions Fréquentes</h2>
        <p className="opacity-70 max-w-xl mx-auto">
          Retrouvez les réponses aux questions les plus posées par nos clients concernant notre méthode de travail.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={fadeUpVariant}>
            <FaqAccordionItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
