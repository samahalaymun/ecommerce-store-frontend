
function ProductCardListSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg">
      <div className="w-full sm:w-48 aspect-square bg-muted-foreground/20  animate-pulse overflow-hidden rounded-lg"></div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="aspect-square bg-muted-foreground/20 animate-pulse w-[80%] h-2"></div>
        <div className="aspect-square bg-muted-foreground/20 animate-pulse w-[70%] h-2"></div>
        <div className="flex items-center gap-2">
          <div className="aspect-square w-[50%] bg-gray-200 animate-pulse h-2"></div>
          <div className="aspect-square w-[50%] bg-gray-200 animate-pulse h-2"></div>
        </div>
        <div className="aspect-square w-[40%]bg-muted-foreground/20 animate-pulse h-2"></div>
      </div>
    </div>
  );
}

export default ProductCardListSkeleton;