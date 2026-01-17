import { ChevronLeft, ChevronRight } from "lucide-react";
import CategoryCardComponent from "./CategoryCard";
import {  useRef } from "react";
import { Button } from "@/components/ui/button";
import { fetchCategories } from "../services/products.api";
import { PRODUCT_CATEGORIES_QUERY_KEY } from "@/data/constants";
import { useQuery } from "@tanstack/react-query";

function CategoryCards() {
  const {
    data: categories,
    isFetching,
    isError,
  } = useQuery({
    queryKey: [PRODUCT_CATEGORIES_QUERY_KEY],
    queryFn: fetchCategories,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  if (isError) return <div>Error loading categories</div>;
  return (
    <div className="relative flex items-center border-b border-border">
      {/* Prev */}
      <Button size="icon-sm" onClick={() => scroll("left")} variant="ghost">
        <ChevronLeft size={20} />
      </Button>

      {/* Categories */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-hidden snap-x snap-mandatory px-10"
      >
        {isFetching ? (
          Array.from({ length: 12 }).map(() => (
            <div  className="animate-pulse shrink-0 snap-start overflow-hidden group w-20 bg-muted-foreground/20 aspect-square h-4" />
          ))
        ) : (
          <>
            <CategoryCardComponent
              category={{ name: "View all", slug: "all" }}
            />
            {categories?.map((category) => (
              <CategoryCardComponent key={category.slug} category={category} />
            ))}
          </>
        )}
      </div>

      {/* Next */}
      <Button size="icon-sm" onClick={() => scroll("right")} variant="ghost">
        <ChevronRight size={20} />
      </Button>
    </div>
  );
}

export default CategoryCards;
