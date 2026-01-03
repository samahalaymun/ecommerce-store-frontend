
function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-xs ">
        <div className="absolute inset-0 animate-pulse bg-muted-foreground/20" />
      </div>
      <div className="flex flex-col gap-2.5 ">
        <h5 className="animate-pulse h-2 bg-muted-foreground/20 aspect-square  w-[70%] "></h5>
        <p className="animate-pulse aspect-square bg-muted-foreground/20  h-2 overflow-hidden">
          •{" "}
          <span className="animate-pulse h-2 bg-muted-foreground/20  aspect-square"></span>
        </p>
        <div className="flex items-center gap-2">
          <h5 className=" bg-muted-foreground/20 w-[50%] h-2 animate-pulse aspect-square"></h5>
          <h5 className="bg-muted-foreground/20 w-[50%] h-2 animate-pulse aspect-square"></h5>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton