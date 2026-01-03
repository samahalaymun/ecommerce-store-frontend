import FilterSearch from "./FilterSearch";
import FilterBrandCheckboxes from "./FilterBrandCheckboxes";
import FilterColorSwatches from "./FilterColorSwatches";
import FilterPopularTags from "./FilterPopularTags";
import FilterPriceRange from "./FilterPriceRange";
import type { FilterState } from "../types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterXIcon } from "lucide-react";
import { useProductsFilters } from "../hooks/useProductsFilters";

function FilterCard() {
  
  const {  filters, setFilters } =
    useProductsFilters();

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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="cursor-pointer">
          <FilterXIcon />
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h5 className="font-bold text-foreground">Filter:</h5>
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1  pt-1 auto-rows-min gap-6 px-4 overflow-y-auto">
          <FilterSearch
            value={filters.search}
            onChange={(value) => updateFilter({ search: value })}
          />
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
            value={filters.priceRange ?? [0, 1000]}
            onChange={(range) => updateFilter({ priceRange: range })}
            onApply={() => {}}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FilterCard;
