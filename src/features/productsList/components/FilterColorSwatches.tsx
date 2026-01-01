import { Input } from "@/components/ui/input";

type ColorOption = {
  name: string;
  value: string;
};

type FilterColorSwatchesProps = {
  colors: ColorOption[];
  selectedColors: string[];
  onChange: (color: string) => void;
};

function FilterColorSwatches({
  colors,
  selectedColors,
  onChange,
}: FilterColorSwatchesProps) {
  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-bold text-foreground">Color</h6>
      <div className="flex flex-col gap-3">
        {colors.map((color, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer group"
            htmlFor={color.name}
          >
            <Input
              id={color.name}
              type="checkbox"
              checked={selectedColors.includes(color.value)}
              onChange={() => onChange(color.value)}
              className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-2"
              style={{ accentColor: color.value, backgroundColor: color.value }}
              aria-label={color.name}
            />
            <h6 className="text-second-text font-bold group-hover:text-foreground transition-colors">
              {color.name}
            </h6>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterColorSwatches;
