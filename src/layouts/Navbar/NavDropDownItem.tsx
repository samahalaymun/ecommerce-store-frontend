import { PRODUCT_CATEGORIES_QUERY_KEY } from "@/data/constants";
import { fetchCategories } from "@/features/productsList/services/products.api";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
function NavDropDownItem() {
  const { pathname } = useLocation();
  const isShopActive = pathname.startsWith("/products");

  const { data: categories } = useQuery({
    queryKey: [PRODUCT_CATEGORIES_QUERY_KEY],
    queryFn: fetchCategories,
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span
          className={cn(
            "cursor-pointer hover:text-primary hover:bg-muted flex items-center gap-1.25 px-2 py-1.5 rounded-md font-bold transition-colors",
            isShopActive && "text-foreground"
          )}
        >
          Shop
          <ChevronDown size={20} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {categories?.map((cat) => (
          <DropdownMenuItem key={cat.name} asChild>
            <Link
              className={cn(
                "cursor-pointer",
                pathname === `/products/category/${cat.slug}` &&
                  "font-bold text-foreground bg-muted"
              )}
              to={`/products/category/${cat?.slug}`}
            >
              {cat.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDropDownItem;
