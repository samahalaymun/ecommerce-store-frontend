import type { Category } from "@/features/productsList/types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileShopNavItem({
  categories,
  onClick,
}: {
  categories?: Category[];
  onClick?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isShopActive = pathname.startsWith("/products");
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className={cn(
          "flex w-full items-center text-sm transform ease-in duration-100  transition-colors  hover:scale-110  justify-between px-2 py-1.5  text-left font-bold",
          isShopActive ? "text-foreground" : "text-muted-foreground"
        )}
        aria-expanded={open}
      >
        <span>Shop</span>
        <ChevronDown className={open ? "rotate-180" : "rotate-0"} size={20} />
      </button>

      <div
        className={cn(
          "overflow-hidden overflow-y-scroll transition-[max-height] duration-200",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="flex flex-col w-full">
          {categories?.map((cat) => (
            <li key={cat.name}>
              <Link
                onClick={onClick}
                to={`/products/category/${cat?.slug}`}
                className={cn(
                  "block w-full px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary",
                  pathname === `/products/category/${cat.slug}` &&
                    "font-bold text-foreground bg-muted"
                )}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileShopNavItem;
