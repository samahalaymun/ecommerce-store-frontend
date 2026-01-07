import type { Product } from "@/features/home/types";
import ProductsGrid from "@/features/productsList/components/ProductsGrid";
import WishListEmpty from "@/features/WishList/components/WishListEmpty";
export default function WishList() {
  const favorites :Product[]= []
  if (favorites.length === 0) return <WishListEmpty />;
  return (
    <div className="py-8">
      <h4 className="font-bold mb-4">Your WishList</h4>
      {/* {isFetching && <ProductsSkeleton limit={12} viewMode="grid" />} */}

      <ProductsGrid products={favorites} viewMode="grid" />
    </div>
  );
}
