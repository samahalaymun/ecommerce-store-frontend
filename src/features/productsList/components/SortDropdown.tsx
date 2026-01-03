import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { SortOption } from "../types";
import { useProductsFilters } from "../hooks/useProductsFilters";
import { Button } from "@/components/ui/button";

type SortDropdownProps = {
  value: SortOption;
  onChange: (option: SortOption) => void;
};

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity", label: "Popularity" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

function SortDropdown() {
  const { sort, setSort } = useProductsFilters();
  const selectedOption = sortOptions.find((opt) => opt.value === sort);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <span className="text-sm">{selectedOption?.label}</span>
          <ChevronDown size={16} className="text-second-text" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSort(option.value)}
            className={`cursor-pointer ${
              sort === option.value
                ? "bg-primary text-white focus:bg-primary focus:text-white"
                : ""
            }`}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortDropdown;
