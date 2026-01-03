import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { FilterPriceRangeProps } from "../types";



function FilterPriceRange({
  min,
  max,
  value,
  onChange,
  onApply,
}: FilterPriceRangeProps) {
  
  const [localValue, setLocalValue] = useState<[number, number]>(value);
  const minPercent = ((localValue[0] - min) / (max - min)) * 100;
  const maxPercent = ((localValue[1] - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-5 overflow-hidden mb-4">
      <h6 className="font-bold text-foreground">Price</h6>

      {/* Slider */}
      <div className="relative h-6">
        {/* Track */}
        <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full rounded bg-border" />

        {/* Active track */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 rounded bg-primary"
          style={{
            insetInlineStart: `${minPercent}%`,
            insetInlineEnd: `${100 - maxPercent}%`,
          }}
        />

        {/* Min range */}
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[0]}
          onChange={(e) =>
            setLocalValue([
              Math.min(Number(e.target.value), localValue[1] - 1),
              localValue[1],
            ])
          }
          className="range-input z-20"
        />

        {/* Max range */}
        <input
          type="range"
          min={min}
          max={max}
          value={localValue[1]}
          onChange={(e) =>
            setLocalValue([
              localValue[0],
              Math.max(Number(e.target.value), localValue[0] + 1),
            ])
          }
          className="range-input z-30"
        />
      </div>
      {/* Inputs */}
      <div className="flex gap-4 ">
        <div className="relative flex-1">
          <Input value={localValue[0]} readOnly />
          <span className="absolute right-3 top-1/2 -translate-y-1/2">$</span>
        </div>
        <div className="relative flex-1">
          <Input value={localValue[1]} readOnly />
          <span className="absolute right-3 top-1/2 -translate-y-1/2">$</span>
        </div>
      </div>
      <Button
        onClick={() => {
          onChange(localValue);
          onApply();
        }}
        className="w-full"
      >
        Filter
      </Button>
    </div>
  );
}

export default FilterPriceRange;
