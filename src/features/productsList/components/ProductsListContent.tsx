import type {  ViewMode } from "../types";
import {  useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import CategoryCards from "./CategoryCards";
import ViewControls from "./ViewControls";
import SortDropdown from "./SortDropdown";
import { Button } from "@/components/ui/button";
import FilterCard from "./FilterCard";
import ProductsGrid from "./ProductsGrid";
import Pagination from "./Pagination";
import { useProductsQuery } from "../context/ProductsQueryContext";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import {  formatCategory } from "../utils";
import { FilterXIcon } from "lucide-react";
import ProductsSkeleton from "./skeleton/ProductsSkeleton";

function ProductsListContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const { category } = useParams<{ category?: string }>();
  const { filters, page, sort } = useProductsQuery();

  const { data, isLoading, isError } = useProducts({
    category,
    page,
    sort,
    filters,
  });

  const products = data?.products ?? [];
  const totalResults = data?.total ?? 0;
  const totalPages = Math.ceil(totalResults / 12);
  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/products" },
    ...(category
      ? [
          {
            label: formatCategory(category),
          },
        ]
      : []),
  ];  
  return (
    <div className="flex flex-col min-h-screen bg-background px-4 lg:px-10">
      {/* Header Section */}
      <div className="">
        <div className="py-6  flex flex-col md:flex-row justify-between md:items-start items-center gap-7.5">
          <h3 className="font-bold text-foreground">
            {category ? formatCategory(category) : "Shop"}
          </h3>
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Category Cards */}
        <CategoryCards />
      </div>

      {/* Products Section */}
      <div className=" pb-12">
        {/* Controls Bar */}
        <div className="flex  flex-col lg:flex-row lg:justify-between lg:items-center gap-4 my-6">
          <div className="flex flex-row items-center  lg:justify-center gap-4 w-full lg:w-auto">
            <SortDropdown />
            <Button
              variant="secondary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FilterXIcon />
              Filter
            </Button>
          </div>
          <ViewControls viewMode={viewMode} onViewChange={setViewMode} />

          <h6 className="text-second-text font-medium">
            Showing all {totalResults} results
          </h6>
        </div>

        {/* Main Content */}
        {/* Filter Card - Modal overlay */}
        <FilterCard
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        {/* Products Grid - Takes full width */}
        {isLoading ? (
          <ProductsSkeleton />
        ) : (
          <div className="w-full">
            <ProductsGrid products={products} viewMode={viewMode} />
            {/* Pagination */}
            <div className="mt-12">
              <Pagination totalPages={totalPages} />
            </div>
          </div>
        )}
        {isError &&<p className="text-destructive">something went wrong</p>}
      </div>
    </div>
  );
}

export default ProductsListContent;
