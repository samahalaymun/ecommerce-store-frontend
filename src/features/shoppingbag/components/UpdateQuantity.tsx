import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";

function UpdateQuantity({ id, quantity }: { id: number; quantity: number }) {
  const { update } = useCart();

  return (
    <div className="flex w-30 items-center rounded-sm bg-muted/10 border border-border mt-2 overflow-hidden">
      <div className="flex-1">
        <Button
          variant="ghost"
          size="icon-sm"
          rounded="none"
          className="w-full h-8 flex items-center justify-center"
          onClick={() => update(id, quantity - 1)}
        >
          -
        </Button>
      </div>

      <div className="flex-1 flex items-center  border-x justify-center h-8">
        {quantity}
      </div>

      <div className="flex-1">
        <Button
          variant="ghost"
          size="icon-sm"
          rounded="none"
          className="w-full h-8 flex items-center justify-center"
          onClick={() => update(id,quantity + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default UpdateQuantity;
