import { Button } from "@/components/ui/button";
import type { ShopCardProps } from "../types";

function ShopCard({ category, image }: ShopCardProps) {
  return (
    <div className="w-full h-full relative overflow-hidden">
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
