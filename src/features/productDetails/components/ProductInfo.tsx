import type { Product } from "@/features/home/types";
import { Button } from "@/components/ui/button";
import { Heart, Star, Truck, Undo2 } from "lucide-react";

type Props = {
  product: Product;
};

function Rating({ value }: { value: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-amber-400">
        {stars.map((s) => (
          <Star
            key={s}
            className={s <= Math.round(value) ? "" : "opacity-30"}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductInfo({ product }: Props) {
  const originPrice = product.price;
  const salePrice =
    product.price - (product.discountPercentage * product.price) / 100;
  return (
    <div className="space-y-4">
      <h3 className=" font-bold">{product.title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="text-muted-foreground line-through">
            ${originPrice?.toFixed(2)}
          </h5>
          <h5 className="font-bold text-foreground">
            ${salePrice?.toFixed(2)}
          </h5>
        </div>
        <span className="py-1 px-4 text-xs rounded-xs bg-muted text-muted-foreground">
          {product.discountPercentage}% off
        </span>
      </div>
      <Rating value={product.rating} />
      <p className="text-sm text-ted-foreground">
        <strong>Brand:</strong> {product.brand}
      </p>
      <div className="flex gap-3">
        <Button className="flex-1">Add to cart</Button>
        <Button variant="outline" size="icon-xl">
          <Heart size={24} />
        </Button>
      </div>

      <div className="flex flex-col gap-2 text-foreground">
        <p className=" text-foreground">
          <strong>Stock:</strong> {product.stock}
        </p>

        {product.sku && (
          <p className=" text-foreground">
            <strong>SKU:</strong> {product.sku}
          </p>
        )}

      </div>
    </div>
  );
}
