import type { ViewMode } from "../../types";
import ProductCardListSkeleton from "./ProductCardListSkeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

type ProductsSkeletonProps = {
  viewMode: ViewMode;
  limit:number;
};

function ProductsSkeleton({ viewMode,limit=12 }: ProductsSkeletonProps) {
   if (viewMode === "list") {
     return (
       <div className="flex flex-col gap-6">
         {Array.from({ length: limit }).map(() => (
           <ProductCardListSkeleton />
         ))}
       </div>
     );
   }

   return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-7.5">
       {Array.from({ length: limit }).map(() => (
         <ProductCardSkeleton />
       ))}
     </div>
   );
}

export default ProductsSkeleton