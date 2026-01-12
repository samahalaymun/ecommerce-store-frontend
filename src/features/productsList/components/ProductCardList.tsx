import { Button } from "@/components/ui/button";
import type { Product } from "@/features/home/types";
import { useWishlist } from "@/features/WishList/context/WishlistContext";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardListProps = {
  product: Product;
};
function ProductCardList({ product }: ProductCardListProps) {
  const originPrice = product.price;
  const salePrice =
    product.price - (product.discountPercentage * product.price) / 100;
  const { isIn, toggle } = useWishlist();
  const fav = isIn(product.id);
    const onFavClick = (e: React.MouseEvent) => {
   e.preventDefault();
   e.stopPropagation();
   toggle(product);
  };
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg"
    >
      <div className="w-full relative bg-muted sm:w-48 aspect-square overflow-hidden rounded-lg">
        <img
          src={product.thumbnail}
          alt={product.category}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <Button
          onClick={onFavClick}
          className="absolute top-0 end-0"
          size="icon-lg"
          variant="ghost"
        >
          <Heart
            size={20}
            fill={fav ? "var(--color-foreground)" : "transparent"}
          />
        </Button>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h5 className="font-bold text-foreground">{product.title}</h5>
          {product.stock === 0 && (
            <p className="text-center p-1 rounded-xs bg-secondary text-light-gray-1">
              Sold Out
            </p>
          )}
        </div>
        <p className="text-muted-foreground min-h-8 overflow-hidden">
          {product.brand} •{" "}
          <span className="capitalize">{product.category}</span>
        </p>{" "}
        <div className="flex items-center gap-2">
          <h5 className="text-muted-foreground line-through">
            ${originPrice?.toFixed(2)}
          </h5>
          <h5 className="font-bold text-secondary-1">
            ${salePrice?.toFixed(2)}
          </h5>
        </div>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCardList;
