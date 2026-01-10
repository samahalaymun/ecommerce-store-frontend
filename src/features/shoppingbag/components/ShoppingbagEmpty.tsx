import { ShoppingCart } from 'lucide-react';

function ShoppingbagEmpty() {
  return (
    <div className="py-20 flex min-h-100 w-full items-center justify-center">
      <div className="w-full flex text-center flex-col gap-4 items-center justify-center">
        <ShoppingCart size={32} />
        <h3 className="font-bold">Your Shopping bag is empty</h3>
        <p className="text-muted-foreground">
          You currently don't have any items in your shopping bag
        </p>
      </div>
    </div>
  );
}

export default ShoppingbagEmpty;
