import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import { useState } from 'react';
import { OptionsType } from './LearningObjective';

export const PersonalInterests = () => {
  const [interests, setInterests] = useState<string[]>([]);

  const personalInterestOptions: OptionsType[] = [
    { label: 'Esportes', value: 'esportes' },
    { label: 'Tecnologia', value: 'tecnologia' },
    { label: 'Arte/Cultura', value: 'arte_cultura' },
    { label: 'Música', value: 'musica' },
    { label: 'Política', value: 'politica' },
    { label: 'Filmes e Séries', value: 'filmes_series' },
    { label: 'Viagens', value: 'viagens' },
    { label: 'Outros (com campo aberto)', value: 'outros' },
  ];

  return (
    <Step className="w-full flex-shrink-0">
      <ul>
        {personalInterestOptions.map((option) => {
          return (
            <li key={option.value}>
              <ButtonSelect
                onClick={() => {
                  setInterests((prev) =>
                    prev.includes(option.value)
                      ? prev.filter((item) => item !== option.value)
                      : [...prev, option.value],
                  );
                }}
                selected={interests.includes(option.value)}
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
