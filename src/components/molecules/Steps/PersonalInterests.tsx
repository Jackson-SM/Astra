import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import StepContext, { OptionsType } from '@/context/StepContext';
import { useContext } from 'react';

export const PersonalInterests = () => {
  const { options, addPersonalInterests } = useContext(StepContext);

  console.log(options.personalInterests);

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
      <ul className="flex flex-col items-center justify-center">
        {personalInterestOptions.map((option) => {
          return (
            <li key={option.value}>
              <ButtonSelect
                onClick={() => addPersonalInterests(option.value)}
                selected={options.personalInterests.includes(option.value)}
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
