import { Input } from "@/components/ui/input";

type FilterBrandCheckboxesProps = {
  brands: string[];
  selectedBrands: string[];
  onToggle: (brand: string) => void;
};

function FilterBrandCheckboxes({
  brands,
  selectedBrands,
  onToggle,
}: FilterBrandCheckboxesProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-bold text-foreground">Brands</h6>
      <div className="flex flex-col gap-2">
        {brands.map((brand, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Input
            id={brand}
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onToggle(brand)}
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-2"
            />
            <h6 className="text-second-text font-bold group-hover:text-foreground transition-colors">
              {brand}
            </h6>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterBrandCheckboxes;
