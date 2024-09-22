import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import { useState } from 'react';
import { OptionsType } from './LearningObjective';

export const FreeTime = () => {
  const [freeTime, setFreeTime] = useState<string[]>([]);

  const timeOptions: OptionsType[] = [
    { label: 'Menos de 15 minutos', value: 'menos_15_min' },
    { label: '15 a 30 minutos', value: '15_30_min' },
    { label: '30 minutos a 1 hora', value: '30_min_1_hora' },
    { label: '1 a 2 horas', value: '1_2_horas' },
    { label: 'Mais de 2 horas', value: 'mais_2_horas' },
  ];

  return (
    <Step className="w-full flex-shrink-0">
      <ul>
        {timeOptions.map((option) => {
          return (
            <li key={option.value}>
              <ButtonSelect
                onClick={() => {
                  setFreeTime((prev) =>
                    prev.includes(option.value)
                      ? prev.filter((item) => item !== option.value)
                      : [...prev, option.value],
                  );
                }}
                selected={freeTime.includes(option.value)}
              >
                Menos de 15 minutos
              </ButtonSelect>
            </li>
          );
        })}
      </ul>
    </Step>
  );
};
