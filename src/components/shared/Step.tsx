import React from 'react';

type StepProps = React.ComponentProps<'div'>;

export const Step = ({ children, ...props }: StepProps) => {
  return <div {...props}>{children}</div>;
};
