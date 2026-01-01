import { Link } from "react-router-dom";
import type { FilterCategoryLinksProps } from "../types";



function FilterCategoryLinks({
  title,
  links,
  onSelect,
}: FilterCategoryLinksProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-bold text-foreground">{title}</h6>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link
            to={`/products/category/${link.to}`}
            key={index}
            onClick={() => onSelect?.(link.label)}
            className="text-second-text text-left hover:text-primary transition-colors"
          >
            {link.label} {link.count !== undefined && `(${link.count})`}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FilterCategoryLinks;
