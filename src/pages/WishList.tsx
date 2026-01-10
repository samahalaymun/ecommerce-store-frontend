import { Button } from "@/components/ui/button";
import { WISHLIST_KEY } from "@/data/constants";
import ProductsGrid from "@/features/productsList/components/ProductsGrid";
import WishListEmpty from "@/features/WishList/components/WishListEmpty";
import { useWishlist } from "@/features/WishList/context/WishlistContext";

export default function WishList() {
  const { items ,clear} = useWishlist();
  if (items.length === 0) return <WishListEmpty />;
  return (
    <div className="py-8">
      <div className="mb-4 flex justify-between items-center">
        <h4 className="font-bold uppercase">WishList</h4>
        <Button variant="ghost" className="underline" onClick={clear}>
          Clear All
        </Button>
      </div>
      <ProductsGrid page={WISHLIST_KEY} products={items} viewMode="grid" />
    </div>
  );
}
