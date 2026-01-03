import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

type FilterSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function FilterSearch({ value, onChange }: FilterSearchProps) {
  
  return (
    <div className="w-full">
      <InputGroup>
        <InputGroupInput
          type="search"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          data-align="inline-start"
        />
        <InputGroupAddon align="inline-end">
          <Search size={18} className="text-second-text" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default FilterSearch;
