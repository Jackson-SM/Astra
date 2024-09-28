import { cn } from '@/lib/utils';

type SpanColorProps = React.ComponentProps<'span'>;

export const SpanColor = ({
  children,
  className,
  ...props
}: SpanColorProps) => {
  return (
    <span className={cn('text-primary-foreground', className)} {...props}>
      {children}
    </span>
  );
};
