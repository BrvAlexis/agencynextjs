'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BookingFormData {
  sector: string;
  challenge: string;
  hasWebsite: 'Oui' | 'Non' | '';
  websiteUrl: string;
  name: string;
  email: string;
  phone: string;
}

interface BookingContextType {
  isOpen: boolean;
  step: number;
  formData: BookingFormData;
  isBooked: boolean;
  openModal: (initialEmail?: string) => void;
  closeModal: () => void;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<BookingFormData>) => void;
  completeBooking: () => void;
  resetBooking: () => void;
}

const defaultFormData: BookingFormData = {
  sector: '',
  challenge: '',
  hasWebsite: '',
  websiteUrl: '',
  name: '',
  email: '',
  phone: '',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>(defaultFormData);
  const [isBooked, setIsBooked] = useState(false);

  // Check localStorage for existing booking on load
  useEffect(() => {
    const savedBooking = localStorage.getItem('register_agency_booking');
    if (savedBooking) {
      try {
        const parsed = JSON.parse(savedBooking);
        setFormData(parsed.formData || defaultFormData);
        setIsBooked(true);
      } catch (e) {
        console.error('Failed to parse saved booking', e);
      }
    }
  }, []);

  const openModal = (initialEmail?: string) => {
    if (isBooked) {
      // If already booked, open modal directly to success step (or show success screen)
      setStep(6);
    } else {
      setStep(1);
      if (initialEmail) {
        setFormData((prev) => ({ ...prev, email: initialEmail }));
      }
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const updateFormData = (data: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const completeBooking = () => {
    setIsBooked(true);
    setStep(6);
    localStorage.setItem(
      'register_agency_booking',
      JSON.stringify({
        bookedAt: new Date().toISOString(),
        formData,
      })
    );
  };

  const resetBooking = () => {
    setFormData(defaultFormData);
    setIsBooked(false);
    setStep(1);
    localStorage.removeItem('register_agency_booking');
  };

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        step,
        formData,
        isBooked,
        openModal,
        closeModal,
        nextStep,
        prevStep,
        updateFormData,
        completeBooking,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
