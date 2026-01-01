import type { Product } from "@/features/home/types";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
  className?: string;
};

function ProductCard({ product, className }: ProductCardProps) {
  const originPrice = product.price;
  const salePrice =
    product.price - (product.discountPercentage * product.price) / 100;
  return (
    <Link
      to={`/products/${product.id}`}
      className={`flex flex-col gap-4 ${className || ""}`}
    >
      <div className="w-full relative border rounded-xs  overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.category}
          className="w-full h-full "
        />
       {product.stock === 0&&<p className="absolute start-2.5 top-2.5 p-1 rounded-xs bg-secondary-1 text-light-gray-1">Sold Out</p>}
      </div>
      <div className="flex flex-col gap-2.5  ">
        <h5 className="font-bold text-foreground  w-full truncate">
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
        <div className="flex items-center gap-2 mt-1">
          {/* {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color }}
              aria-label={`Color option: ${color}`}
            />
          ))} */}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
