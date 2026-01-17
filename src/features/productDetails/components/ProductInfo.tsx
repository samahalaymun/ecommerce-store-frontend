import type { Product } from "@/features/home/types";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { useWishlist } from "@/features/WishList/context/WishlistContext";
import { useCart } from "@/features/shoppingbag/context/CartContext";
import { Animated } from "@/components/ui/animated";

type Props = {
  product: Product;
};

function Rating({ value }: { value: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 text-amber-400">
        {stars.map((s, i) => (
          <Animated variant="slide" direction="left" delay={i * 80}>
            <Star
              key={s}
              className={s <= Math.round(value) ? "" : "opacity-30"}
            />
          </Animated>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">{value.toFixed(1)}</span>
    </div>
  );
}

export default function ProductInfo({ product }: Props) {
  const { isIn, toggle } = useWishlist();
  const { add } = useCart();
  const originPrice = product.price;
  const salePrice =
    product.price - (product.discountPercentage * product.price) / 100;
  return (
    <div className="space-y-4">
      <Animated variant="slide" direction="left">
        <h3 className=" font-bold">{product.title}</h3>
      </Animated>
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <Animated variant="slide" direction="left">
            <h5 className="text-muted-foreground line-through">
              ${originPrice?.toFixed(2)}
            </h5>
          </Animated>
          <Animated variant="slide" direction="left">
            <h5 className="font-bold text-foreground">
              ${salePrice?.toFixed(2)}
            </h5>
          </Animated>
        </div>
        <span className="py-1  px-4 text-xs rounded-xs bg-muted text-muted-foreground">
          {product.discountPercentage}% off
        </span>
      </div>
      <Rating value={product.rating} />
      <Animated variant="slide" direction="left">
        <p className="text-sm text-ted-foreground">
          <strong>Brand:</strong> {product.brand}
        </p>
      </Animated>
      <Animated variant="slide" direction="left">
        <div className="flex gap-3">
          <Button
            className="flex-1"
            onClick={() => add(product, 1)}
            disabled={product.stock === 0}
          >
            Add to cart
          </Button>
          <Button
            variant="outline"
            size="icon-xl"
            onClick={() => toggle(product)}
            aria-pressed={isIn(product.id)}
          >
            <Heart
              size={24}
              fill={isIn(product.id) ? "var(--color-primary)" : "none"}
            />
          </Button>
        </div>
      </Animated>

      <div className="flex flex-col gap-2 text-foreground">
        <Animated variant="slide" direction="left">
          <p className=" text-foreground">
            <strong>Stock:</strong> {product.stock}
          </p>
        </Animated>

        {product.sku && (
          <Animated variant="slide" direction="left">
            <p className=" text-foreground">
              <strong>SKU:</strong> {product.sku}
            </p>
          </Animated>
        )}
      </div>
    </div>
  );
}
