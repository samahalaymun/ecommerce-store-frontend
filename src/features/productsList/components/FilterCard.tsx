import FilterSearch from "./FilterSearch";
import FilterCategoryLinks from "./FilterCategoryLinks";
import FilterBrandCheckboxes from "./FilterBrandCheckboxes";
import FilterColorSwatches from "./FilterColorSwatches";
import FilterCategoryRadio from "./FilterCategoryRadio";
import FilterPopularTags from "./FilterPopularTags";
import FilterPriceRange from "./FilterPriceRange";
import type { FilterState } from "../types";
import { Button } from "@/components/ui/button";
import { useProductsQuery } from "../context/ProductsQueryContext";

type FilterCardProps = {
  isOpen: boolean;
  onClose: () => void;
 
};

function FilterCard({ isOpen, onClose }: FilterCardProps) {
  const { filters, setFilters } = useProductsQuery();

  const updateFilter = (updates: Partial<FilterState>) => {
    setFilters({
      ...filters,
      ...updates,
    });
  };

  const brands = [
    "Essence",
    "Glamour Beauty",
    "Velvet Touch",
    "Chic Cosmetics",
    "Nail Couture",
    "Calvin Klein",
    "Chanel",
    "Dior",
    "Gucci",
    "Annibale Colombo",
  ];

  const colors = [
    { name: "Blue", value: "#17A2B8" },
    { name: "Green", value: "#28A745" },
    { name: "Orange", value: "#FF6B6B" },
    { name: "Dark Blue", value: "#343A40" },
  ];

  const popularTags = [
    { id: 1, label: "Agada", count: 35 },
    { id: 2, label: "Porellum", count: 35 },
    { id: 3, label: "Tag", variant: "outline" as const },
    { id: 4, label: "Tag", variant: "outline" as const },
  ];

  if (!isOpen) return null;
  ///
  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Filter Card - Slides from left */}
      <div className="fixed left-0 top-0 h-full w-full max-w-sm bg-background shadow-lg overflow-y-auto animate-in slide-in-from-left duration-300">
        <div className="p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-foreground">Filter:</h5>
            <Button onClick={onClose} variant="ghost" size="icon-sm">
              ✕
            </Button>
          </div>

          {/* Search */}
          <FilterSearch
            value={filters.search}
            onChange={(value) => updateFilter({ search: value })}
          />

          {/* Category Links */}
          {/* <FilterCategoryLinks
            title="Accessories"
            links={categoryLinks}
            onSelect={(label) => updateFilter({ categories: [label] })}
          />

          <FilterCategoryLinks
            title="Bags"
            links={[
              { label: "View All", to: "/" },
              { label: "Product", to: "" },
            ]}
          />

          <FilterCategoryLinks
            title="Clothing"
            links={[
              { label: "View All", to: "/" },
              { label: "Features", to: "" },
            ]}
          /> */}

          {/* Brands */}
          <FilterBrandCheckboxes
            brands={brands}
            selectedBrands={filters.brands}
            onToggle={(brand) => {
              const newBrands = filters.brands.includes(brand)
                ? filters.brands.filter((b) => b !== brand)
                : [...filters.brands, brand];
              updateFilter({ brands: newBrands });
            }}
          />

          {/* Colors */}
          <FilterColorSwatches
            colors={colors}
            selectedColors={filters.colors}
            onChange={(color) => {
              const newColors = filters.colors.includes(color)
                ? filters.colors.filter((c) => c !== color)
                : [...filters.colors, color];
              updateFilter({ colors: newColors });
            }}
          />

          {/* Category Radio */}
          {/* <FilterCategoryRadio
            categories={categories}
            selectedCategory={filters.selectedCategory}
            onSelect={(category) =>
              updateFilter({ selectedCategory: category })
            }
          /> */}

          {/* Popular Tags */}
          <FilterPopularTags
            tags={popularTags}
            onRemove={(id) => {
              const newTags = filters.tags.filter((t) => t !== id.toString());
              updateFilter({ tags: newTags });
            }}
          />

          {/* Price Range */}
          <FilterPriceRange
            min={0}
            max={1000}
            value={filters.priceRange}
            onChange={(range) => updateFilter({ priceRange: range })}
            onApply={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
