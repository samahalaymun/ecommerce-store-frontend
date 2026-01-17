import ProductCard from "@/components/ProductCard";
import type { Product } from "@/features/home/types";
import type { ViewMode } from "../types";
import ProductCardList from "./ProductCardList";
import { Animated } from "@/components/ui/animated";

type ProductsGridProps = {
  products: Product[];
  viewMode: ViewMode;
  page?: string;
};

function ProductsGrid({ products, viewMode, page }: ProductsGridProps) {
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
      {products.map((product, index) => (
        <Animated
          key={product.id}
          variant="enter"
        direction="bottom"
          delay={index * 80}
        >
          <ProductCard page={page} product={product} />
        </Animated>
      ))}
    </div>
  );
}

export default ProductsGrid;
