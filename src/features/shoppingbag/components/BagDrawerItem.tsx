import { Button } from "@/components/ui/button";
import { useCart, type CartItem } from "../context/CartContext";
import { X } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import UpdateQuantity from "./UpdateQuantity";

function BagDrawerItem({ cartItem }: { cartItem: CartItem }) {
  const { remove } = useCart();
 
  return (
    <div key={cartItem.id} className="flex items-center gap-3">
      <img
        src={cartItem.thumbnail}
        alt={cartItem.title}
        className="w-16 h-16 object-cover bg-muted rounded-sm"
      />
      <div className="flex-1 flex flex-col gap-2">
        <div className=" flex justify-between  ">
          <p className=" font-medium text-wrap truncate">
            {cartItem.title} 
          </p>
          <Button
            className="text-muted-foreground cursor-pointer"
            onClick={() => remove(cartItem.id)}
            variant="ghost"
            size="icon-sm"
          >
            <X />
          </Button>
        </div>

        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center ">
          <UpdateQuantity id={cartItem.id} quantity={cartItem.quantity} />
          <div className="flex items-baseline gap-2">
            <span className="font-medium">
              {formatCurrency(
                (cartItem.price -
                  ((cartItem.discountPercentage || 0) * cartItem.price) / 100) *
                  cartItem.quantity
              )}
            </span>
            {cartItem.discountPercentage ? (
              <span className="text-sm text-muted-foreground line-through">
                {formatCurrency(cartItem.price * cartItem.quantity)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagDrawerItem;
