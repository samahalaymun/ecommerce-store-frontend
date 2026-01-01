import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Tag = {
  id: string | number;
  label: string;
  count?: number;
};

type FilterPopularTagsProps = {
  tags: Tag[];
  onRemove: (id: string | number) => void;
};

function FilterPopularTags({ tags, onRemove }: FilterPopularTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <h6 className="font-bold text-foreground">Popular Tags</h6>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Button
            key={tag.id}
            onClick={() => onRemove(tag.id)}
            size="sm"
            variant="outline"
          >
            {tag.label} {tag.count !== undefined && `(${tag.count})`}
            <X size={14} />
          </Button>
        ))}
      </div>
    </div>
  );
}

export default FilterPopularTags;
