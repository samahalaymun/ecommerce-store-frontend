import { Button } from "@/components/ui/button";
import type { ShopCardProps } from "../types";
import { cn } from "@/lib/utils";

function ShopCard({ category, image, className }: ShopCardProps) {
  return (
    <div
      className={cn("w-full h-full relative overflow-hidden", className)}
    >
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Button
        variant="secondary"
        className="absolute left-4 bottom-4 uppercase font-bold"
      >
        <h5>{category}</h5>
      </Button>
    </div>
  );
}

export default ShopCard;
