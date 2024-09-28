import {
  IconBookFilled,
  IconBrain,
  IconHomeFilled,
  IconLayoutDashboardFilled,
} from '@tabler/icons-react';
import { Logo } from '../atoms/Logo';
import { NavLink } from '../atoms/NavLink';
import { Profile } from '../atoms/Profile';

export const Header = () => {
  return (
    <header className="flex justify-around gap-2 bg-muted p-2">
      <Logo />
      <nav className="flex gap-2 rounded-lg bg-muted p-2">
        <NavLink href="/" icon={<IconHomeFilled />}>
          Home
        </NavLink>
        <NavLink href="/dashboard" icon={<IconLayoutDashboardFilled />}>
          Dashboard
        </NavLink>
        <NavLink href="/words" icon={<IconBrain />}>
          Study
        </NavLink>
        <NavLink href="/" icon={<IconBookFilled />}>
          Reading
        </NavLink>
      </nav>
      <div>
        <Profile />
      </div>
    </header>
  );
};
