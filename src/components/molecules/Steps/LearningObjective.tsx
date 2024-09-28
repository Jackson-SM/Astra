import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import StepContext, { OptionsType } from '@/context/StepContext';
import { useContext } from 'react';

export const LearningObjective = () => {
  const { options, addObjectives } = useContext(StepContext);

  console.log(options.objectives);

  const objectivesOptions: OptionsType[] = [
    { label: 'Viagens', value: 'viagens' },
    { label: 'Trabalho', value: 'trabalho' },
    { label: 'Estudos', value: 'estudos' },
    { label: 'Intercâmbio', value: 'intercambio' },
    { label: 'Hobbies', value: 'hobbies' },
    { label: 'Outro', value: 'outro' },
  ];

  return (
    <Step className="w-full flex-shrink-0">
      <ul className="itmes-center flex list-none flex-col justify-center gap-3">
        {objectivesOptions.map((option) => {
          return (
            <li key={option.value} className="flex items-center justify-center">
              <ButtonSelect
                onClick={() => addObjectives(option.value)}
                selected={options.objectives.includes(option.value)}
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
