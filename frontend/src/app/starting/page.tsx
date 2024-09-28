'use client';

import { Button } from '@/components/ui/Button';
import StepContext from '@/context/StepContext';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

export default function Page() {
  const { steps, currentStep, nextStep, prevStep } = useContext(StepContext);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-around p-4">
      <h1 className="text-4xl">Qual o seu objetivo ao aprender esse idioma?</h1>
      <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
        <AnimatePresence mode="wait">
          {steps.map((s, idx) => idx === currentStep && s)}
        </AnimatePresence>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() =>
            currentStep === 0 ? console.log('Start') : prevStep()
          }
          disabled={currentStep === 0}
          className="group flex gap-2"
        >
          Back
          <IconArrowLeft className="h-4 w-4 transition-transform duration-100 group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            currentStep === steps.length - 1
              ? console.log('Finish')
              : nextStep()
          }
          className="group flex gap-2"
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          <IconArrowRight className="h-4 w-4 transition-transform duration-100 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
