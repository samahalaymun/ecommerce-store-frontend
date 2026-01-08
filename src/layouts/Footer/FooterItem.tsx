import { NavLink } from 'react-router-dom';
import type { NavItemProps } from '../types';
import { cn } from '@/lib/utils';

function FooterItem({ label, to,icon }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center text-muted-foreground  py-1.5 rounded-md font-bold transition-colors",
          "hover:text-primary",
          isActive && "text-forground"
        )
      }
    >
      {label}
      {icon}
    </NavLink>
  );
}

export default FooterItem
