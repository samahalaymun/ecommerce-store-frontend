function CategoriesSkeleton() {
  return (
    <div className="flex gap-6 overflow-hidden snap-x snap-mandatory">
      {Array.from({ length: 10 }).map(() => (
        <div
          className="
        w-[40%]
        sm:w-[30%]
        md:w-[15%]
        lg:w-[10%]
        aspect-square h-10 bg-gray-200 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
}

export default CategoriesSkeleton;
