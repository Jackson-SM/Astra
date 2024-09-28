import { cn } from '@/lib/utils';
import { IconCircleDashedCheck } from '@tabler/icons-react';
import { HTMLMotionProps, motion } from 'framer-motion';

type ButtonSelectProps = HTMLMotionProps<'button'> & {
  children: React.ReactNode;
  selected: boolean;
};

export const ButtonSelect = ({
  children,
  className,
  selected,
  ...props
}: ButtonSelectProps) => {
  return (
    <motion.button
      className={cn(
        'm-1 flex min-w-60 items-center justify-between rounded-md border border-border p-2 transition-colors duration-100 hover:bg-accent',
        className,
        selected && 'bg-accent',
      )}
      {...props}
    >
      <span className="flex-1 text-center">{children}</span>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconCircleDashedCheck className="ml-2 h-5 w-5 text-primary" />
        </motion.div>
      )}
    </motion.button>
  );
};
