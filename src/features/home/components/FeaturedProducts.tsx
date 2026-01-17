import AnimatedCard from "@/components/animation/AnimatedCard";
import ProductCard from "@/components/ProductCard";
import { Animated } from "@/components/ui/animated";
import { PRODUCT_PRODUCTS_QUERY_KEY } from "@/data/constants";
import ProductCardSkeleton from "@/features/productsList/components/skeleton/ProductCardSkeleton";
import { useProductsFilters } from "@/features/productsList/hooks/useProductsFilters";
import { fetchProducts } from "@/features/productsList/services/products.api";
import type { ProductsResponse } from "@/features/productsList/types";
import { useQuery } from "@tanstack/react-query";

function FeaturedProducts() {
  const { filters, page, sort } = useProductsFilters();
  const { data, isFetching, isError } = useQuery<ProductsResponse>({
    queryKey: [PRODUCT_PRODUCTS_QUERY_KEY, page, sort, filters],
    queryFn: () =>
      fetchProducts({
        page,
        sort,
        filters,
      }),
  });
  return (
    <section className="flex flex-col gap-12 lg:gap-20 items-center bg-background py-20 px-4 lg:px-10">
      <Animated
        variant="enter"
        direction="bottom"
        delay={ 80}
      >
          <div className="gap-2.5 flex flex-col items-center">
        <h4 className="text-muted-foreground font-normal text-center">
          Featured Products
        </h4>
        <h3 className="font-bold text-center">BESTSELLER PRODUCTS</h3>
        <p className="text-muted-foreground font-normal text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
      </Animated>
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-12 lg:gap-x-7.5 lg:gap-y-20">
        {isFetching
          ? Array.from({ length: 12 }).map(() => <ProductCardSkeleton />)
          : data?.products.map((product, index) => (
              <Animated
                variant="enter"
                direction="bottom"
                key={product.sku}
                delay={(index+1) * 60}
              >
                <ProductCard product={product} />
              </Animated>
            ))}
      </div>

      {isError && <p className="text-destructive">Something is wrong!</p>}
    </section>
  );
}

export default FeaturedProducts;
