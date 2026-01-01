import { Grid3x3, List } from "lucide-react";
import type { ViewMode } from "../types";
import { Button } from "@/components/ui/button";

type ViewControlsProps = {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
};

function ViewControls({ viewMode, onViewChange }: ViewControlsProps) {
  return (
    <div className="flex items-center gap-3.75">
      <h6 className="text-second-text font-bold">Views:</h6>
      <Button
        onClick={() => onViewChange("grid")}
        className={` transition-colors ${
          viewMode === "grid"
            ? "border-primary text-primary"
            : "border-light-gray-2 text-foreground"
        }`}
        aria-label="Grid view"
        variant="outline"
        size="icon-lg"
      >
        <Grid3x3 size={18} />
      </Button>
      <Button
        onClick={() => onViewChange("list")}
        className={` transition-colors ${
          viewMode === "list"
            ? "border-primary text-primary"
            : "border-light-gray-2 text-foreground"
        }`}
        variant="outline"
        size="icon-lg"
        aria-label="List view"
      >
        <List size={18} />
      </Button>
    </div>
  );
}

export default ViewControls;
