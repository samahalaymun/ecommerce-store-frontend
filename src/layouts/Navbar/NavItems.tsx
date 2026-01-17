import { cn } from "@/lib/utils";
import NavItem from "./NavItem";
import NavDropDownItem from "./NavDropDownItem";
import type { NavItemsProps } from "../types";
import { useQuery } from "@tanstack/react-query";
import { PRODUCT_CATEGORIES_QUERY_KEY } from "@/data/constants";
import { fetchCategories } from "@/features/productsList/services/products.api";
import MobileShopNavItem from "./MobileShopNavItem";

function NavItems({ className, onClick, stacked }: NavItemsProps) {
    const { data: categories } = useQuery({
      queryKey: [PRODUCT_CATEGORIES_QUERY_KEY],
      queryFn: fetchCategories,
    });
  return (
    <ul
      className={cn(
        stacked ? "flex flex-col gap-3 w-full" : "flex gap-3.75",
        className
      )}
    >
      <li>
        <NavItem onClick={onClick} to="/" label="Home" />
      </li>
      <li>
        {stacked && (
          <MobileShopNavItem   categories={categories} onClick={onClick} />
        )}
        {!stacked && <NavDropDownItem  onClick={onClick} items={categories} />}
      </li>
      <li>
        <NavItem onClick={onClick} to="/about" label="About" />
      </li>
      <li>
        <NavItem onClick={onClick} to="/blog" label="Blog" />
      </li>
      <li>
        <NavItem onClick={onClick} to="/contact" label="Contact" />
      </li>
      <li>
        <NavItem onClick={onClick} to="/pages" label="Pages" />
      </li>
    </ul>
  );
}

export default NavItems;
