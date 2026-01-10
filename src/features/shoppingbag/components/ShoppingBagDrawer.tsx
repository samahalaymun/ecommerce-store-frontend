import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/shoppingbag/context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import ShoppingbagEmpty from "./ShoppingbagEmpty";
import { Separator } from "@/components/ui/separator";
import BagDrawerItem from "./BagDrawerItem";

export default function ShoppingBagDrawer({
  className,
}: {
  className?: string;
}) {
  const { items, count, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn(
            "transition-colors text-primary",
            "hover:bg-muted hover:text-primary",
            className
          )}
        >
          <ShoppingCart size={18} />
          <small className="ml-1.25">{count()}</small>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <SheetHeader>
          <SheetTitle>
            <h5 className="font-bold text-foreground">View shopping bag</h5>
          </SheetTitle>
        </SheetHeader>
        <Separator className="w-full" />
        <div className="px-4">
          {items.length === 0 ? (
            <ShoppingbagEmpty />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="space-y-3 max-h-64 md:max-h-80 overflow-x-hidden overflow-y-auto">
                {items.map((it, index) => (
                  <div
                    className={index !== 0 ? "border-t pt-3" : ""}
                    key={it.id}
                  >
                    <BagDrawerItem key={it.id} cartItem={it} />
                  </div>
                ))}
              </div>
              <Separator className="w-full" />

              <div className=" pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Items</span>
                  <span className="font-medium">{count()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">
                    Sub total
                  </span>
                  <span className="font-bold">{formatCurrency(total())}</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <SheetFooter className="flex gap-2">
          <SheetClose asChild>
            <Link to="/shoppingbag" className="w-full">
              <Button className="w-full">Shopping bag ( {count()} )</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">Continue shopping</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
