import type { Product } from "@/features/home/types";
import api from "@/lib/axios";

export const fetchProductById = async ({
  id,
  signal,
}: {
  id: string | number;
  signal?: AbortSignal;
}): Promise<Product> => {
  const res = await api.get(`/products/${id}`, { signal });
  return res.data as Product;
};
