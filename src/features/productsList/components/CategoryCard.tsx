import {  NavLink } from "react-router-dom";
import type { CategoryCard as CategoryCardType } from "../types";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: CategoryCardType;
};

function CategoryCardComponent({ category }: CategoryCardProps) {
  const isAll = category.slug === "all";

  return (
    <NavLink
      to={isAll ? "/products" : `/products/category/${category.slug}`}
      end={isAll}
      key={category.slug}
      className={({ isActive }) =>
        cn(
          "shrink-0 snap-start overflow-hidden group py-4 text-muted-foreground cursor-pointer hover:text-foreground",
          isActive && "text-forground"
        )
      }
    >
      {category.name}
    </NavLink>
  );
}

export default CategoryCardComponent;
