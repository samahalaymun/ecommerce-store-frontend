import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/products.api";
import { PRODUCT_CATEGORIES_QUERY_KEY } from "@/data/constants";


export function useProductCategories() {
  return useQuery({
    queryKey: PRODUCT_CATEGORIES_QUERY_KEY,
    queryFn: fetchCategories,
  });
}
