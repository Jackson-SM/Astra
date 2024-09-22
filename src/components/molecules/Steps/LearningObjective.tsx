import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import { useState } from 'react';

export type OptionsType = {
  label: string;
  value: string;
};

export const LearningObjective = () => {
  const [objectives, setObjectives] = useState<string[]>([]);

  const options: OptionsType[] = [
    { label: 'Viagens', value: 'viagens' },
    { label: 'Trabalho', value: 'trabalho' },
    { label: 'Estudos', value: 'estudos' },
    { label: 'Intercâmbio', value: 'intercambio' },
    { label: 'Hobbies', value: 'hobbies' },
    { label: 'Outro', value: 'outro' },
  ];

  return (
    <Step className="w-full flex-shrink-0">
      <ul>
        {options.map((option) => {
          return (
            <li key={option.value}>
              <ButtonSelect
                onClick={() => {
                  setObjectives((prev) =>
                    prev.includes(option.value)
                      ? prev.filter((item) => item !== option.value)
                      : [...prev, option.value],
                  );
                }}
                selected={objectives.includes(option.value)}
              >
                {option.label}
              </ButtonSelect>
            </li>
          );
        })}
      </ul>
    </Step>
  );
};
