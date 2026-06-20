'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useBooking } from '@/context/BookingContext';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Store, 
  Briefcase, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  ExternalLink, 
  Laptop, 
  Globe, 
  User, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Calendar,
  AlertCircle,
  Activity
} from 'lucide-react';

const CALENDLY_FALLBACK_URL = 'https://calendly.com/acme-agency/15min';

export default function BookingModal() {
  const { 
    isOpen, 
    step, 
    formData, 
    isBooked, 
    closeModal, 
    nextStep, 
    prevStep, 
    updateFormData, 
    completeBooking, 
    resetBooking 
  } = useBooking();

  const [validationError, setValidationError] = useState('');
  const [localWebsiteUrl, setLocalWebsiteUrl] = useState(formData.websiteUrl);
  const [localName, setLocalName] = useState(formData.name);
  const [localEmail, setLocalEmail] = useState(formData.email);
  const [localPhone, setLocalPhone] = useState(formData.phone);

  // Sync state with context when context loads/updates (e.g. from Hero)
  useEffect(() => {
    setLocalWebsiteUrl(formData.websiteUrl);
    setLocalName(formData.name);
    setLocalEmail(formData.email);
    setLocalPhone(formData.phone);
  }, [formData]);

  // Calendly Event Listener for Auto-Advance
  useEffect(() => {
    const handleCalendlyMessage = (e: MessageEvent) => {
      // Check if message is from Calendly and contains event_scheduled
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        completeBooking();
      }
    };

    window.addEventListener('message', handleCalendlyMessage);
    return () => {
      window.removeEventListener('message', handleCalendlyMessage);
    };
  }, [completeBooking]);

  if (!isOpen) return null;

  // Build prefilled Calendly URL
  const getCalendlyUrl = () => {
    const baseUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || CALENDLY_FALLBACK_URL;
    const url = new URL(baseUrl);
    
    if (localName) url.searchParams.append('name', localName);
    if (localEmail) url.searchParams.append('email', localEmail);
    
    // Pass custom answers using Calendly prefill queries if supported by Calendly mapping
    // e.g. a1 is typically sector, a2 is challenge, a3 is website
    if (formData.sector) url.searchParams.append('a1', formData.sector);
    if (formData.challenge) url.searchParams.append('a2', formData.challenge);
    if (formData.websiteUrl) url.searchParams.append('a3', formData.websiteUrl);
    
    return url.toString();
  };

  // Step 3 Validation
  const handleStep3Submit = () => {
    if (formData.hasWebsite === '') {
      setValidationError('Veuillez sélectionner une option.');
      return;
    }
    if (formData.hasWebsite === 'Oui' && !localWebsiteUrl) {
      setValidationError('Veuillez renseigner votre site internet.');
      return;
    }
    setValidationError('');
    updateFormData({ websiteUrl: localWebsiteUrl });
    nextStep();
  };

  // Step 4 Validation
  const handleStep4Submit = () => {
    if (!localName || !localEmail || !localPhone) {
      setValidationError('Veuillez remplir tous les champs.');
      return;
    }
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localEmail)) {
      setValidationError('Veuillez saisir une adresse email valide.');
      return;
    }
    setValidationError('');
    updateFormData({
      name: localName,
      email: localEmail,
      phone: localPhone
    });
    nextStep();
  };

  // Generate .ics calendar file for user download
  const generateIcsFile = () => {
    const now = new Date();
    // Simulate booking for tomorrow at 14:00 if not specified
    const eventDate = new Date(now.setDate(now.getDate() + 1));
    eventDate.setHours(14, 0, 0, 0);
    
    const formatIcsDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const start = formatIcsDate(eventDate);
    const end = formatIcsDate(new Date(eventDate.getTime() + 15 * 60000)); // 15 mins

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Register Agency//Digital Audit//FR',
      'BEGIN:VEVENT',
      `UID:${now.getTime()}@registeragency.fr`,
      `DTSTAMP:${formatIcsDate(now)}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      'SUMMARY:Appel Stratégique & Audit Digital - Register Agency',
      'DESCRIPTION:Diagnostic digital personnalisé de 15 minutes.\\nSecteur d\'activité: ' + formData.sector + '\\nObjectif principal: ' + formData.challenge + '\\nSite actuel: ' + (formData.websiteUrl || 'Aucun'),
      'LOCATION:Visioconférence Google Meet / Téléphone',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative z-10 w-full max-w-2xl bg-white/95 rounded-[2.5rem] shadow-2xl overflow-hidden border border-zinc-900/5 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-900/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-accent animate-pulse" />
              <span className="font-heading font-extrabold text-sm uppercase tracking-widest text-zinc-900/60">
                {step <= 5 ? `Étape ${step} sur 5 • Diagnostic` : 'Félicitations'}
              </span>
            </div>
            <button 
              onClick={closeModal} 
              className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-900/50 hover:text-zinc-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          {step <= 5 && (
            <div className="w-full h-1 bg-zinc-100">
              <motion.div 
                className="h-full bg-rose-accent"
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Content Area */}
          <div className="flex-grow p-8 overflow-y-auto min-h-[350px] flex flex-col">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Secteur */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div>
                    <h3 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
                      Quel est votre secteur d&apos;activité ?
                    </h3>
                    <p className="text-sm text-zinc-900/60 font-sans">
                      Cela nous aide à préparer des exemples de cas concrets pour votre secteur.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'Artisanat / Bâtiment', icon: Building2 },
                      { id: 'Commerce / Restauration', icon: Store },
                      { id: 'Services / Conseil', icon: Briefcase },
                      { id: 'Santé / Libéral', icon: Activity },
                      { id: 'Autre', icon: Sparkles }
                    ].map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            updateFormData({ sector: opt.id });
                            setTimeout(nextStep, 250); // Auto-advance
                          }}
                          className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all ${
                            formData.sector === opt.id
                              ? 'bg-rose-accent/5 border-rose-accent text-zinc-900 font-bold shadow-sm'
                              : 'border-zinc-900/5 hover:border-zinc-900/10 bg-white/50 text-zinc-900/70 hover:text-zinc-900'
                          }`}
                        >
                          <div className={`p-3 rounded-xl ${
                            formData.sector === opt.id ? 'bg-rose-accent/10 text-rose-accent' : 'bg-zinc-100 text-zinc-900/50'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-sans text-sm">{opt.id}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Défi */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3">
                    <button onClick={prevStep} className="p-2 rounded-full hover:bg-zinc-100 text-zinc-900/50 hover:text-zinc-900">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h3 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
                        Votre priorité actuelle ?
                      </h3>
                      <p className="text-sm text-zinc-900/60 font-sans">
                        Quel est le principal levier de croissance ou de gain de temps souhaité ?
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'Gagner du temps (Automatisation & BPA)', icon: Clock, desc: 'Supprimer les tâches répétitives, gérer la facturation électronique.' },
                      { id: 'Trouver de nouveaux clients (SEO & Visibilité)', icon: TrendingUp, desc: 'Capter des leads qualifiés au niveau local ou national.' },
                      { id: 'Créer / Refondre mon site internet', icon: Laptop, desc: 'Un site moderne, fluide, sécurisé et rapide (Core Web Vitals au vert).' },
                      { id: 'Autre besoin technique / Conseil', icon: Sparkles, desc: 'Intégration d\'outils, audit de sécurité, architecture.' }
                    ].map((opt) => {
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            updateFormData({ challenge: opt.id });
                            setTimeout(nextStep, 250); // Auto-advance
                          }}
                          className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
                            formData.challenge === opt.id
                              ? 'bg-rose-accent/5 border-rose-accent text-zinc-900 font-bold shadow-sm'
                              : 'border-zinc-900/5 hover:border-zinc-900/10 bg-white/50 text-zinc-900/70 hover:text-zinc-900'
                          }`}
                        >
                          <div className={`p-3 rounded-xl mt-0.5 ${
                            formData.challenge === opt.id ? 'bg-rose-accent/10 text-rose-accent' : 'bg-zinc-100 text-zinc-900/50'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-sans text-sm">{opt.id}</div>
                            <div className="font-sans text-xs opacity-60 font-normal mt-0.5">{opt.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Site internet */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3">
                    <button onClick={prevStep} className="p-2 rounded-full hover:bg-zinc-100 text-zinc-900/50 hover:text-zinc-900">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h3 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
                        Avez-vous un site internet existant ?
                      </h3>
                      <p className="text-sm text-zinc-900/60 font-sans">
                        Indiquez votre URL pour que nous puissions réaliser un pré-audit de performance.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 font-sans">
                    <div className="flex gap-4">
                      {['Non', 'Oui'].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            updateFormData({ hasWebsite: opt as 'Oui' | 'Non' });
                            setValidationError('');
                          }}
                          className={`flex-grow py-4 rounded-xl border text-center transition-all ${
                            formData.hasWebsite === opt
                              ? 'bg-rose-accent/5 border-rose-accent text-rose-accent font-bold'
                              : 'border-zinc-900/5 hover:border-zinc-900/10 bg-white text-zinc-900/70'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {formData.hasWebsite === 'Oui' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden space-y-2"
                        >
                          <label className="text-xs font-bold uppercase tracking-widest text-zinc-900/50">Adresse URL de votre site</label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-900/30" />
                            <input 
                              type="text" 
                              placeholder="https://mon-entreprise.fr"
                              value={localWebsiteUrl}
                              onChange={(e) => {
                                setLocalWebsiteUrl(e.target.value);
                                setValidationError('');
                              }}
                              className="w-full h-12 rounded-xl pl-12 pr-4 bg-zinc-50 border border-zinc-900/5 focus:outline-none focus:border-rose-accent font-sans text-sm text-zinc-900"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {validationError && (
                      <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 p-3 rounded-xl">
                        <AlertCircle className="w-4 h-4" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="pt-4 flex justify-end">
                      <button 
                        onClick={handleStep3Submit}
                        className="button-primary px-8 py-3.5 text-sm inline-flex items-center gap-2"
                      >
                        Suivant <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Coordonnées */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3">
                    <button onClick={prevStep} className="p-2 rounded-full hover:bg-zinc-100 text-zinc-900/50 hover:text-zinc-900">
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h3 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
                        Où devrions-nous envoyer l&apos;audit ?
                      </h3>
                      <p className="text-sm text-zinc-900/60 font-sans">
                        Renseignez vos coordonnées de contact professionnelles.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 font-sans text-zinc-900">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-900/50">Votre Nom Complet</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-900/30" />
                        <input 
                          type="text" 
                          placeholder="Jean Dupont"
                          value={localName}
                          onChange={(e) => {
                            setLocalName(e.target.value);
                            setValidationError('');
                          }}
                          className="w-full h-12 rounded-xl pl-12 pr-4 bg-zinc-50 border border-zinc-900/5 focus:outline-none focus:border-rose-accent text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-900/50">Adresse Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-900/30" />
                          <input 
                            type="email" 
                            placeholder="jean@dupont.fr"
                            value={localEmail}
                            onChange={(e) => {
                              setLocalEmail(e.target.value);
                              setValidationError('');
                            }}
                            className="w-full h-12 rounded-xl pl-12 pr-4 bg-zinc-50 border border-zinc-900/5 focus:outline-none focus:border-rose-accent text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-900/50">Téléphone</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-900/30" />
                          <input 
                            type="tel" 
                            placeholder="06 12 34 56 78"
                            value={localPhone}
                            onChange={(e) => {
                              setLocalPhone(e.target.value);
                              setValidationError('');
                            }}
                            className="w-full h-12 rounded-xl pl-12 pr-4 bg-zinc-50 border border-zinc-900/5 focus:outline-none focus:border-rose-accent text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {validationError && (
                      <div className="flex items-center gap-2 text-sm text-rose-600 bg-rose-50 p-3 rounded-xl">
                        <AlertCircle className="w-4 h-4" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="pt-4 flex justify-end">
                      <button 
                        onClick={handleStep4Submit}
                        className="button-primary px-8 py-3.5 text-sm inline-flex items-center gap-2"
                      >
                        Planifier sur Calendly <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Calendly Embed */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="space-y-4 flex-grow flex flex-col h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button onClick={prevStep} className="p-2 rounded-full hover:bg-zinc-100 text-zinc-900/50 hover:text-zinc-900">
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div>
                        <h3 className="font-heading text-xl font-extrabold text-zinc-900 tracking-tight">
                          Choisissez votre créneau
                        </h3>
                        <p className="text-xs text-zinc-900/60 font-sans">
                          Sélectionnez le moment idéal pour votre diagnostic de 15 minutes.
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={completeBooking}
                      className="text-xs font-bold text-rose-accent hover:underline flex items-center gap-1 font-sans"
                    >
                      Passer cette étape <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Calendly Iframe Container */}
                  <div className="flex-grow w-full border border-zinc-900/5 rounded-2xl overflow-hidden bg-zinc-50 min-h-[350px] relative">
                    <iframe
                      src={getCalendlyUrl()}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="w-full h-full min-h-[380px]"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2 font-sans text-xs text-zinc-900/40">
                    <span>* L&apos;étape se validera automatiquement une fois le créneau choisi.</span>
                    <button 
                      onClick={completeBooking}
                      className="font-bold text-zinc-900/80 hover:text-rose-accent transition-colors border border-zinc-950/10 hover:border-rose-accent px-4 py-2 rounded-full"
                    >
                      J&apos;ai terminé mon inscription
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 6 / Success Screen */}
              {step === 6 && (
                <motion.div
                  key="success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="space-y-6 text-center py-6 flex-grow flex flex-col justify-center items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>

                  <div>
                    <h3 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
                      Rendez-vous programmé !
                    </h3>
                    <p className="text-base text-zinc-900/60 font-sans max-w-md mx-auto">
                      Merci <span className="font-bold text-zinc-900">{formData.name}</span>. Votre appel diagnostic de 15 minutes est officiellement enregistré.
                    </p>
                  </div>

                  {/* Summary Details */}
                  <div className="w-full max-w-md bg-zinc-50 border border-zinc-900/5 rounded-3xl p-6 text-left font-sans text-sm space-y-4 shadow-sm">
                    <div className="flex items-center gap-3 border-b border-zinc-900/5 pb-3">
                      <Calendar className="w-5 h-5 text-rose-accent" />
                      <div>
                        <div className="font-bold text-zinc-900">Appel Stratégique de 15 min</div>
                        <div className="text-xs text-zinc-900/60">Confirmé via Calendly</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block uppercase tracking-wider font-bold text-zinc-900/40 mb-1">Secteur</span>
                        <span className="font-bold text-zinc-900">{formData.sector || 'Non renseigné'}</span>
                      </div>
                      <div>
                        <span className="block uppercase tracking-wider font-bold text-zinc-900/40 mb-1">Objectif principal</span>
                        <span className="font-bold text-zinc-900">{formData.challenge ? formData.challenge.split(' (')[0] : 'Non renseigné'}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="block uppercase tracking-wider font-bold text-zinc-900/40 mb-1">Site internet</span>
                        <span className="font-bold text-zinc-900 truncate block">
                          {formData.websiteUrl ? (
                            <a href={formData.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-rose-accent hover:underline inline-flex items-center gap-1">
                              {formData.websiteUrl} <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : 'Aucun site existant'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center pt-4 font-sans">
                    <a
                      href={`https://calendar.google.com/calendar/r/eventedit?text=Appel+Stratégique+%26+Audit+Digital+-+Register+Agency&details=Secteur+d%27activité:+${encodeURIComponent(formData.sector)}%0ADéfi+principal:+${encodeURIComponent(formData.challenge)}%0ASite+actuel:+${encodeURIComponent(formData.websiteUrl || 'Aucun')}&location=Visioconférence+Google+Meet`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold text-xs inline-flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
                    >
                      Ajouter à Google Calendar
                    </a>
                    
                    <a
                      href={generateIcsFile()}
                      download="appel-register-agency.ics"
                      className="px-6 py-3 border border-zinc-900/10 hover:border-rose-accent text-zinc-900 rounded-full font-bold text-xs inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 transition-colors shadow-sm cursor-pointer"
                    >
                      Télécharger .ics
                    </a>
                  </div>

                  <div className="pt-6 font-sans">
                    <button 
                      onClick={resetBooking}
                      className="text-xs text-zinc-900/40 hover:text-rose-accent transition-colors font-medium border-b border-dashed border-zinc-900/20 hover:border-rose-accent"
                    >
                      Annuler / Modifier mon rendez-vous
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
