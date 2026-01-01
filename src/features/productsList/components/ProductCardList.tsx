import type { Product } from "@/features/home/types";
import { Link } from "react-router-dom";

type ProductCardListProps = {
  product: Product;
};
function ProductCardList({ product }: ProductCardListProps) {
   const originPrice = product.price;
   const salePrice =
     product.price - (product.discountPercentage * product.price) / 100;
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg"
    >
      <div className="w-full sm:w-48 aspect-square overflow-hidden rounded-lg">
        <img
          src={product.thumbnail}
          alt={product.category}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h5 className="font-bold text-foreground">{product.title}</h5>
          {product.stock === 0 && (
            <p className="text-center p-1 rounded-xs bg-secondary-1 text-light-gray-1">
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
        {/* <div className="flex items-center gap-2 mt-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-border"
              style={{ backgroundColor: color }}
              aria-label={`Color option: ${color}`}
            />
          ))}
        </div> */}
      </div>
    </Link>
  );
}

export default ProductCardList;
