import { IconAnalyzeFilled } from '@tabler/icons-react';
import { Exo } from 'next/font/google';

const exo = Exo({ subsets: ['latin'], weight: '400' });

export const Logo = () => {
  return (
    <h1
      className={`text-3xl ${exo.className} flex items-center justify-center`}
    >
      <IconAnalyzeFilled className="h-8 w-8 fill-primary" />{' '}
      <span className="text-primary-foreground">A</span>stra
    </h1>
  );
};
