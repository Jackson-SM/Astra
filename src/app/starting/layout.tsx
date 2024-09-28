import { StepContextProvider } from '@/context/StepContext';

type StartingLayoutProps = {
  children: React.ReactNode;
};

export default function StartingLayout({ children }: StartingLayoutProps) {
  return <StepContextProvider>{children}</StepContextProvider>;
}
