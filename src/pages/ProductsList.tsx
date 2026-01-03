import { PRODUCT_PRODUCTS_QUERY_KEY } from "@/data/constants";
import FilterCard from "@/features/productsList/components/FilterCard";
import Pagination from "@/features/productsList/components/Pagination";
import ProductsGrid from "@/features/productsList/components/ProductsGrid";
import ProductsSkeleton from "@/features/productsList/components/skeleton/ProductsSkeleton";
import SortDropdown from "@/features/productsList/components/SortDropdown";
import ViewControls from "@/features/productsList/components/ViewControls";
import { useProductsFilters } from "@/features/productsList/hooks/useProductsFilters";
import { fetchProducts } from "@/features/productsList/services/products.api";
import type { ProductsResponse, ViewMode } from "@/features/productsList/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import EmptyResult from "./EmptyResult";

function ProductsList() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const { category } = useParams<{ category?: string }>();
  const { page, sort, filters } = useProductsFilters();
  const [debouncedSearch] = useDebounce(filters.search, 600);
  const debouncedFilters = {
    ...filters,
    search: debouncedSearch,
  };
  const queryKey = [
    PRODUCT_PRODUCTS_QUERY_KEY,
    category ?? "all",
    page,
    sort,
    debouncedSearch,
    filters.brands.join(","),
    filters.colors.join(","),
    filters.tags.join(","),
    filters.priceRange
      ? `${filters.priceRange[0]}-${filters.priceRange[1]}`
      : "all",
  ];
  const { data, isFetching, isError } = useQuery<ProductsResponse>({
    queryKey,
    queryFn: ({ signal }) =>
      fetchProducts({
        category,
        page,
        sort,
        filters: debouncedFilters,
        signal,
      }),
  });

  const products = data?.products ?? [];
  const totalResults = data?.total ?? 0;
  const totalPages = Math.ceil(totalResults / 12);

  return (
    <div>
      {/* Controls Bar */}
      <div className="flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-4 my-6">
        <div className="flex flex-row items-center  lg:justify-center gap-4 w-full lg:w-auto">
          <SortDropdown />
          <FilterCard />
        </div>
        <ViewControls viewMode={viewMode} onViewChange={setViewMode} />

        <h6 className="text-second-text font-medium">
          Showing all {totalResults} results
        </h6>
      </div>

      {/* Main Content */}

      {/* Products Grid - Takes full width */}
      {isFetching && <ProductsSkeleton limit={12} viewMode={viewMode} />}
      {products.length > 0 && (
        <div className="w-full">
          <ProductsGrid products={products} viewMode={viewMode} />
          {/* Pagination */}
          <div className="mt-12">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}
      {products.length === 0 && !isFetching && (
        <EmptyResult result={debouncedSearch} />
      )}
      {isError && <p className="text-destructive">something went wrong</p>}
    </div>
  );
}

export default ProductsList;
