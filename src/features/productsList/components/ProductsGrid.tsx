import ProductCard from "@/components/ProductCard";
import type { Product } from "@/features/home/types";
import type { ViewMode } from "../types";
import ProductCardList from "./ProductCardList";

type ProductsGridProps = {
  products: Product[];
  viewMode: ViewMode;
};

function ProductsGrid({ products, viewMode }: ProductsGridProps) {
  if (viewMode === "list") {
    return (
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <ProductCardList key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-7.5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;


