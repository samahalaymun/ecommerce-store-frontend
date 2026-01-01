
function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-7.5">
      {Array.from({ length: 12 }).map(() => (
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-square  h-80 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-[70%] aspect-square  h-4 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-[60%] aspect-square h-4 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

export default ProductsSkeleton