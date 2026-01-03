import type { Product } from "../home/types";

export type FilterState = {
  search?: string;
  brands?: string[];
  colors?: string[];
  priceRange?: [number, number];
  tags?: string[];
};

export type CategoryCard = {
  slug?: string | number;
  name: string;
  itemCount?: number;
  image?: string;
};
export type Category = {
  slug: string;
  name: string;
  image?: string;
};

export type ViewMode = "grid" | "list";
export type SortOption =
  | "popularity"
  | "price-low"
  | "price-high"
  | "newest"
  | "oldest";

 export type CategoryLink = {
   label: string;
   count?: number;
   to?: string;
 };
export type FetchProductsArgs = {
  category?: string;
  page: number;
  sort: string;
  filters: FilterState;
  limit?: number;
  signal?: AbortSignal;
};
export type UseProductsArgs = FetchProductsArgs;
  export type FilterCategoryLinksProps = {
    title: string;
    links: CategoryLink[];
    onSelect?: (label: string) => void;
  };
  export type FilterPriceRangeProps = {
    min: number;
    max: number;
    value: [number, number];
    onChange: (range: [number, number]) => void;
    onApply: () => void;
  };
export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};