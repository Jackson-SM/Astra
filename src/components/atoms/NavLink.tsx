import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/Tooltip';

type NavLinkProps = React.ComponentProps<typeof Link> & {
  icon: JSX.Element;
};

export const NavLink = ({
  children,
  className,
  icon,
  ...props
}: NavLinkProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100} disableHoverableContent>
        <TooltipTrigger asChild>
          <Link
            className={cn(
              'flex items-center gap-2 rounded-full p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-accent hover:text-primary-foreground',
              className,
            )}
            {...props}
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-popover">{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
