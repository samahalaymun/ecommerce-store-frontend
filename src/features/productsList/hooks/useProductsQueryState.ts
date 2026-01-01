import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";
import type { FilterState, SortOption } from "../types";
import { DEFAULT_FILTERS, DEFAULT_PAGE, DEFAULT_SORT } from "@/data/constants";

export function useProductsQueryState() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 🔹 READ FROM URL
  const state = useMemo(() => {
    return {
      page: Number(searchParams.get("page")) || DEFAULT_PAGE,
      sort: (searchParams.get("sort") as SortOption) || DEFAULT_SORT,
      filters: {
        ...DEFAULT_FILTERS,
        search: searchParams.get("search") ?? "",
        brands: searchParams.get("brands")?.split(",") ?? [],
        colors: searchParams.get("colors")?.split(",") ?? [],
        priceRange: searchParams.get("price")
          ? (searchParams.get("price")!.split(",").map(Number) as [
              number,
              number
            ])
          : DEFAULT_FILTERS.priceRange,
        tags: searchParams.get("tags")?.split(",") ?? [],
      },
    };
  }, [searchParams]);

  // 🔹 WRITE TO URL
  const updateParams = useCallback(
    (updates: {
      page?: number;
      sort?: SortOption;
      filters?: Partial<FilterState>;
    }) => {
      const params = new URLSearchParams(searchParams);

      if (updates.page !== undefined) {
        params.set("page", String(updates.page));
      }

      if (updates.sort) {
        params.set("sort", updates.sort);
      }

      if (updates.filters) {
        Object.entries(updates.filters).forEach(([key, value]) => {
          if (
            value === undefined ||
            value === "" ||
            (Array.isArray(value) && value.length === 0)
          ) {
            params.delete(key);
            return;
          }
          if (key === "priceRange") {
            const range = value as [number, number];
            params.set("price", `${range[0]},${range[1]}`);
            return;
          }

          if (Array.isArray(value)) {
            params.set(key, value.join(","));
            return;
          }

          if (typeof value === "string") {
            params.set(key, value);
            return;
          }
        });

        // 🔥 reset page when filters change
        params.set("page", "1");
      }

      setSearchParams(params);
    },
    [searchParams, setSearchParams]
  );

  return {
    page: state.page,
    sort: state.sort,
    filters: state.filters,
    setPage: (page: number) => updateParams({ page }),
    setSort: (sort: SortOption) => updateParams({ sort }),
    setFilters: (filters: Partial<FilterState>) => updateParams({ filters }),
  };
}
