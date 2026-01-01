import { Input } from "@/components/ui/input";

type FilterCategoryRadioProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

function FilterCategoryRadio({
  categories,
  selectedCategory,
  onSelect,
}: FilterCategoryRadioProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-bold text-foreground">Category</h6>
      <div className="flex flex-col gap-2">
        {categories.map((category, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => onSelect(category)}
              className="w-4 h-4 text-primary focus:ring-primary focus:ring-2"
            />
            <h6 className="text-second-text font-bold group-hover:text-foreground transition-colors">
              {category}
            </h6>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterCategoryRadio;
