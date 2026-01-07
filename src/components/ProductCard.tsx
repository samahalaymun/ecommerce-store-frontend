import type { Product } from "@/features/home/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

type ProductCardProps = {
  product: Product;
  className?: string;
};

function ProductCard({ product, className }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const originPrice = product.price;
  const salePrice =
    product.price - (product.discountPercentage * product.price) / 100;
  const fav = false;

  const onFavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Link
      to={`/products/${product.id}`}
      className={`flex flex-col gap-4  ${className || ""}`}
    >
      <div className="relative bg-muted border border-border  w-full aspect-square overflow-hidden rounded-xs">
        {/* Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-muted-foreground/20" />
        )}

        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        {product.stock === 0 && (
          <p className="absolute start-2.5 top-2.5 p-1 rounded-xs bg-secondary-1 text-light-gray-1">
            Sold Out
          </p>
        )}
        <Button
          onClick={onFavClick}
          className="absolute top-0 end-0"
          size="icon-lg"
          variant="ghost"
          aria-pressed={fav}
        >
          <Heart
            size={20}
            fill={fav ? "var(--color-foreground)" : "transparent"}
          />
        </Button>
      </div>
      <div className="flex flex-col gap-2.5  ">
        <h5 className="font-bold text-foreground   w-full truncate">
          {product.title}
        </h5>
        <p className="text-muted-foreground min-h-8 overflow-hidden">
          {product.brand} •{" "}
          <span className="capitalize">{product.category}</span>
        </p>
        <div className="flex items-center gap-2">
          <h5 className="text-muted-foreground line-through">
            ${originPrice?.toFixed(2)}
          </h5>
          <h5 className="font-bold text-secondary-1">
            ${salePrice?.toFixed(2)}
          </h5>
        </div>
        <div className="flex items-center gap-2 mt-1"></div>
      </div>
    </Link>
  );
}

export default ProductCard;
