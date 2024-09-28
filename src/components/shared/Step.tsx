import { HTMLMotionProps, motion } from 'framer-motion';

type StepProps = HTMLMotionProps<'div'>;

export const Step = ({ children, ...props }: StepProps) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
      exit={{ x: -200, opacity: 0, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
