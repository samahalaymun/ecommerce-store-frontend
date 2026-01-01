import { cn } from '@/lib/utils';
import NavItem from './NavItem';
import { ChevronDown } from 'lucide-react';

function NavItems({ className }: { className:string }) {
  return (
    <ul className={cn("flex gap-3.75", className)}>
      <li>
        <NavItem to="/" label="Home" />
      </li>
      <li>
        <NavItem to="/products" label="Shop" icon={<ChevronDown size={20} />} />
      </li>
      <li>
        <NavItem to="/about" label="About" />
      </li>
      <li>
        <NavItem to="/blog" label="Blog" />
      </li>
      <li>
        <NavItem to="/contact" label="Contact" />
      </li>
      <li>
        <NavItem to="/pages" label="Pages" />
      </li>
    </ul>
  );
}

export default NavItems
