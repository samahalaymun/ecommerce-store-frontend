import ProductCard from "@/components/ProductCard";
import ProductsSkeleton from "@/features/productsList/components/skeleton/ProductsSkeleton";
import { useProductsQuery } from "@/features/productsList/context/ProductsQueryContext";
import { useProducts } from "@/features/productsList/hooks/useProducts";


function FeaturedProducts() {
  const { filters, page, sort } = useProductsQuery();

   const { data, isLoading, isError } = useProducts({
     limit: 12,
     page,
     filters,
     sort: sort,
   });
  return (
    <section className="flex flex-col gap-12 lg:gap-20 items-center bg-background py-20 px-4 lg:px-10">
      <div className="gap-2.5 flex flex-col items-center">
        <h4 className="text-second-text font-normal text-center">
          Featured Products
        </h4>
        <h3 className="font-bold text-center">BESTSELLER PRODUCTS</h3>
        <p className="text-second-text font-normal text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
     {data?.products&& <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-12 lg:gap-x-7.5 lg:gap-y-20">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>}
      {isLoading&&<ProductsSkeleton />}
    </section>
  );
}

export default FeaturedProducts;
