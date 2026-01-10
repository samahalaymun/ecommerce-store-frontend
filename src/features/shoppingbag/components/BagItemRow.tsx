import { Button } from "@/components/ui/button";
import type { Product } from "@/features/home/types";
import { useCart } from "@/features/shoppingbag/context/CartContext";
import { formatCurrency } from "@/lib/utils";
import { X } from "lucide-react";
import UpdateQuantity from "./UpdateQuantity";

export default function BagItemRow({
  item,
}: {
  item: Product & { quantity: number };
}) {
  const { remove } = useCart();
  const sale = item.price - ((item.discountPercentage || 0) * item.price) / 100;

  return (
    <div className="flex items-center gap-3 relative">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 bg-muted object-cover rounded-sm"
      />
      <div className="flex-1 flex gap-2 md:flex-row flex-col items-sart md:items-center justify-between">
        <div>
          <p className="font-medium text-wrap truncate">{item.title}</p>
          <UpdateQuantity id={item.id} quantity={item.quantity} />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-medium">
            {formatCurrency(sale * item.quantity)}
          </span>
          {item.discountPercentage ? (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(item.price * item.quantity)}
            </span>
          ) : null}
        </div>
      </div>

      <Button
        className="sm:static absolute top-0 right-0 text-muted-foreground cursor-pointer"
        variant="ghost"
        size="icon-sm"
        onClick={() => remove(item.id)}
      >
        <X />
      </Button>
    </div>
  );
}
