import { useQueryStates } from "nuqs";
import { productsQueryConfig } from "../services/products.query";

export function useProductsFilters() {
  const [query, setQuery] = useQueryStates(productsQueryConfig);

  const priceRange = query.price
    ? ([query.price[0], query.price[1]] as [number, number])
    : undefined;

  return {
    page: query.page,
    sort: query.sort,

    filters: {
      search: query.search,
      brands: query.brands,
      colors: query.colors,
      tags: query.tags,
      priceRange,
    },

    // 🔹 setters
    setPage: (page: number) =>
      setQuery({
        page: page > 1 ? page : null,
      }),

    setSort: (sort: string) =>
      setQuery({
        sort,
        page: null, // reset page
      }),

    setFilters: (filters: {
      search?: string;
      brands?: string[];
      colors?: string[];
      tags?: string[];
      priceRange?: [number, number];
    }) =>
      setQuery({
        search: filters.search ?? null,
        brands: filters.brands?.length ? filters.brands : null,
        colors: filters.colors?.length ? filters.colors : null,
        tags: filters.tags?.length ? filters.tags : null,
        price: filters.priceRange
          ? [filters.priceRange[0], filters.priceRange[1]]
          : null,
        page: null, // reset page
      }),
  };
}
