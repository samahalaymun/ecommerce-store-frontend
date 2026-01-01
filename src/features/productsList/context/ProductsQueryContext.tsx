import { createContext, useContext } from "react";
import { useProductsQueryState } from "../hooks/useProductsQueryState";

const ProductsQueryContext = createContext<ReturnType<
  typeof useProductsQueryState
> | null>(null);

export function ProductsQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useProductsQueryState();
  return (
    <ProductsQueryContext.Provider value={value}>
      {children}
    </ProductsQueryContext.Provider>
  );
}

export function useProductsQuery() {
  const ctx = useContext(ProductsQueryContext);
  if (!ctx) {
    throw new Error(
      "useProductsQuery must be used inside ProductsQueryProvider"
    );
  }
  return ctx;
}
