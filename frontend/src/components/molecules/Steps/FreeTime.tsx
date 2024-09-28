import { ButtonSelect } from '@/components/atoms/ButtonSelect';
import { Step } from '@/components/shared/Step';
import StepContext, { OptionsType } from '@/context/StepContext';
import { useContext } from 'react';

export const FreeTime = () => {
  const { options, addFreeTime } = useContext(StepContext);

  console.log(options.freeTime);

  const timeOptions: OptionsType[] = [
    { label: '5 Minutos', value: '5m' },
    { label: '10 Minutos', value: '10m' },
    { label: '20 Minutos', value: '20m' },
    { label: '40 Minutos', value: '40m' },
    { label: '1 Hora+', value: '1h' },
  ];

  return (
    <Step className="w-full flex-shrink-0">
      <ul className="flex flex-col items-center justify-center">
        {timeOptions.map((option) => {
          return (
            <li
              key={option.value}
              className="flex w-min flex-col items-center justify-center"
            >
              <ButtonSelect
                onClick={() => addFreeTime(option.value)}
                selected={options.freeTime.includes(option.value)}
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
