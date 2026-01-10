import { useCart } from "@/features/shoppingbag/context/CartContext";
import BagItemRow from "./BagItemRow";
import ShoppingbagEmpty from "./ShoppingbagEmpty";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";

export default function ShoppingBagPage() {
  const { items, total, count, clear } = useCart();
  const shipping=15;
  if (items.length === 0) return <ShoppingbagEmpty />;

  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        {items.map((it, index) => (
          <div key={it.id} className={index !== 0 ? "border-t pt-4" : ""}>
            <BagItemRow item={it} />
          </div>
        ))}
      </div>

      <aside className="p-4 border rounded-xs h-fit lg:sticky top-8">
        <h4 className="font-bold mb-4 uppercase">summary</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-muted-foreground">Items ({count()})</span>
          <span className="font-medium">{formatCurrency(total())}</span>
        </div>

        {/* Discount code */}
        <div className="mt-4">
          <Field>
            <FieldLabel>Discount code</FieldLabel>
            <InputGroup>
              <InputGroupInput placeholder="Enter code" />
              <InputGroupButton variant="default" size="sm">
                Apply
              </InputGroupButton>
            </InputGroup>
          </Field>
        </div>

        <div className="border-t mt-6 pt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Sub Total</span>
              <small className="font-medium">{formatCurrency(total())}</small>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <small className="font-medium">{formatCurrency(shipping)}</small>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold text-lg">
                {formatCurrency(total() + shipping)}
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <Button>Proceed to Checkout</Button>
            <Button variant="outline" onClick={clear}>
              Clear bag
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
