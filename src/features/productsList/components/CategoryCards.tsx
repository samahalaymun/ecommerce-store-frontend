import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProductCategories } from "../hooks/useProductCategories";
import CategoryCardComponent from "./CategoryCard";
import CategoriesSkeleton from "./skeleton/CategoriesSkeleton";
import { Suspense, useRef } from "react";
import { Button } from "@/components/ui/button";

function CategoryCards() {
  const { data: categories, isLoading, isError } = useProductCategories();
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
    <Suspense fallback={<CategoriesSkeleton />}>
      <div className="relative flex items-center border-b border-border">
        {/* Prev */}
        <Button
          size="icon-sm"
          onClick={() => scroll("left")}
          variant="ghost"
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Categories */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-hidden snap-x snap-mandatory px-10"
        >
          <CategoryCardComponent category={{ name: "View all", slug: "all" }} />

          {categories?.map((category) => (
            <CategoryCardComponent key={category.slug} category={category} />
          ))}
        </div>

        {/* Next */}
        <Button
          size="icon-sm"
          onClick={() => scroll("right")}
          variant="ghost"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </Suspense>
  );
}

export default CategoryCards;
