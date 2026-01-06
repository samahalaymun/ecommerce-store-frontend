import { PRODUCT_PRODUCT_DETAILS_QUERY_KEY } from "@/data/constants";
import type { Product } from "@/features/home/types";
import { fetchProductById } from "@/features/productDetails/services/product.api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ImageCarousel from "@/features/productDetails/components/ImageCarousel";
import ProductInfo from "@/features/productDetails/components/ProductInfo";
import ProductDescription from "@/features/productDetails/components/ProductDescription";
import ProductReviews from "@/features/productDetails/components/ProductReviews";
import ProductDetailsSkeleton from "@/features/productDetails/components/skeleton/ProductDetailsSkeleton";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? Number(id) : undefined;

  const {
    data: product,
    isFetching,
    isError,
  } = useQuery<Product>({
    queryKey: [PRODUCT_PRODUCT_DETAILS_QUERY_KEY, productId],
    queryFn: ({ signal }) => fetchProductById({ id: productId!, signal }),
    enabled: !!productId,
  });

  if (isFetching) return <ProductDetailsSkeleton />;
  if (isError)
    return <div className="text-destructive">Something went wrong</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="space-y-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ImageCarousel images={product.images ?? []} alt={product.title} />
        </div>
        <div className="space-y-4 py-4">
          <ProductInfo product={product} />
          <ProductDescription product={product} />
        </div>
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  );
}

export default ProductDetails;
