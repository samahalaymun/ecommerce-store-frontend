import type { Product } from "@/features/home/types";

export function extractBrands(products: Product[]) {
  const map = new Map<string, Product["brand"]>();

  products.forEach((product) => {
    if (product.brand && !map.has(product.brand)) {
      map.set(product.brand, product.brand);
    }
  });

  return Array.from(map.values());
}

export const formatCategory = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());