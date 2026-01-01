import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products.api";
import type {ProductsResponse, UseProductsArgs } from "../types";



export function useProducts({
  category,
  page,
  sort,
  filters,
  limit,
}: UseProductsArgs) {
  return useQuery<ProductsResponse>({
    queryKey: ["products", category, page, sort, filters, limit],
    queryFn: () =>
      fetchProducts({
        category,
        page,
        sort,
        filters,
        limit,
      }),
    placeholderData: keepPreviousData,
  });
}
