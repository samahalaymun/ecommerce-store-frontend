import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

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
        <div className="px-3 flex items-center" data-align="inline-start">
          <Search size={18} className="text-second-text" />
        </div>
      </InputGroup>
    </div>
  );
}

export default FilterSearch;
