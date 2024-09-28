'use client';

import { FreeTime } from '@/components/molecules/Steps/FreeTime';
import { LearningObjective } from '@/components/molecules/Steps/LearningObjective';
import { PersonalInterests } from '@/components/molecules/Steps/PersonalInterests';
import { createContext, useState } from 'react';

export type OptionsType = {
  label: string;
  value: string;
};

type AllOptionsType = {
  objectives: string[];
  freeTime: string;
  personalInterests: string[];
};

type StepContextType = {
  currentStep: number;
  options: AllOptionsType;
  addObjectives: (value: string) => void;
  addFreeTime: (value: string) => void;
  addPersonalInterests: (value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  steps: JSX.Element[];
};

const StepContext = createContext<StepContextType>({} as StepContextType);

type StepContextProvider = {
  children: React.ReactNode;
};

const StepContextProvider = ({ children, ...props }: StepContextProvider) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [options, setOptions] = useState<AllOptionsType>({
    objectives: [],
    freeTime: '',
    personalInterests: [],
  });
  const steps: JSX.Element[] = [
    <LearningObjective key="learning-objective" />,
    <PersonalInterests key="personal-interests" />,
    <FreeTime key="free-time" />,
  ];
  const stepsAmount = steps.length;

  const nextStep = () =>
    setCurrentStep((prev) => (prev == stepsAmount - 1 ? prev : prev + 1));
  const prevStep = () =>
    setCurrentStep((prev) => (prev == 0 ? prev : prev - 1));

  const toggleOption = (category: keyof AllOptionsType, value: string) => {
    console.log(currentStep, options);
    setOptions((prev) => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? prev[category].includes(value)
          ? (prev[category] as string[]).filter(
              (item: string) => item !== value,
            )
          : [...(prev[category] as string[]), value]
        : value,
    }));
  };

  const addObjectives = (value: string) => toggleOption('objectives', value);
  const addFreeTime = (value: string) => toggleOption('freeTime', value);
  const addPersonalInterests = (value: string) =>
    toggleOption('personalInterests', value);

  return (
    <StepContext.Provider
      {...props}
      value={{
        currentStep,
        options,
        addObjectives,
        addFreeTime,
        addPersonalInterests,
        nextStep,
        steps,
        prevStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export { StepContextProvider };
export default StepContext;
