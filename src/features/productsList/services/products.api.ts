// products.api.ts
import api from "@/lib/axios";
import type { Category, FetchProductsArgs } from "../types";

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await api.get("/products/categories",{skipAuth:true});
  return res.data;
};
export async function fetchProducts({
  category,
  page,
  sort,
  filters,
  limit = 12,
  signal,
}: FetchProductsArgs) {
  const skip = (page - 1) * limit;

  let url = "/products";

  // 🔹 category endpoint
  if (category) {
    url = `/products/category/${category}`;
  }

  const params: Record<string, any> = {
    limit,
    skip,
  };

  // 🔹 search
  if (filters.search) {
    url = "/products/search";
    params.q = filters.search;
  }

  // 🔹 sort
  if (sort && sort !== "popularity") {
    params.sortBy = sort;
    params.order = "asc";
  }
  if (sort && sort === "price-low") {
    params.sortBy = "price";
    params.order = "asc";
  }
  if (sort && sort === "price-high") {
    params.sortBy = "price";
    params.order = "desc";
  }
  if (sort && sort === "newest") {
    params.sortBy = "date";
    params.order = "desc";
  }
  if (sort && sort === "oldest") {
    params.sortBy = "date";
    params.order = "asc";
  }
 
  
  const { data } = await api.get(url, {
    params,
    signal,
    skipAuth: true,
  });

  return data;
}
