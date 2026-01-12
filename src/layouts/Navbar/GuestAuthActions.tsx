import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

function GuestAuthActions({className}: {className?: string}) {
  return (
    <div className={cn("flex gap-1.25 text-primary items-center", className)}>
      <User size={16} />
      <Link to="/auth?tab=login" className="hover:underline font-bold">
        Login
      </Link>
      <span>/</span>
      <Link to="/auth?tab=register" className="hover:underline font-bold">
        Register
      </Link>
    </div>
  );
}

export default GuestAuthActions
