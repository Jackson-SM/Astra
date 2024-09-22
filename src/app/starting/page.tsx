'use client';

import { FreeTime } from '@/components/molecules/Steps/FreeTime';
import { LearningObjective } from '@/components/molecules/Steps/LearningObjective';
import { PersonalInterests } from '@/components/molecules/Steps/PersonalInterests';
import { useEffect, useState } from 'react';

export default function Page() {
  const [step, setStep] = useState(0);

  const steps: JSX.Element[] = [
    <LearningObjective key="learning-objective" />,
    <PersonalInterests key="personal-interests" />,
    <FreeTime key="free-time" />,
  ];
  const stepsAmount = steps.length;

  useEffect(() => {
    console.log('Step:', step);
  }, [step]);

  return (
    <>
      <div className="flex overflow-hidden">
        {steps.map((s, idx) => idx === step && s)}
      </div>
      <button
        className="bg-primary px-4 py-2 text-white"
        onClick={() => setStep((c) => (c == stepsAmount - 1 ? 0 : c + 1))}
      >
        Next
      </button>
    </>
  );
}
