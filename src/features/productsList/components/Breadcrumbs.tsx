import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string | undefined;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.to ? (
            <Link
              to={item.to}
              className={cn(
                index === 0
                  ? "text-foreground font-bold"
                  : "text-second-text hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <ChevronRight size={16} className="text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
