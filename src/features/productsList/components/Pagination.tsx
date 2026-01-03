import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPaginationPages } from "../utils/pagination";
import { useProductsFilters } from "../hooks/useProductsFilters";

type PaginationProps = {
  totalPages: number;
};

function Pagination({ totalPages }: PaginationProps) {
  const { page, setPage } = useProductsFilters();

  const pages = getPaginationPages(page, totalPages);
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
        size="icon"
        variant="outline"
      >
        <ChevronLeft size={18} />
      </Button>

      {pages.map((pageItem, index) =>
        pageItem === "..." ? (
          <span key={`dots-${index}`} className="px-2 text-muted-foreground">
            ...
          </span>
        ) : (
          <Button
            key={pageItem}
            onClick={() => setPage(pageItem)}
            size="icon"
            variant={page === pageItem ? "default" : "outline"}
          >
            {pageItem}
          </Button>
        )
      )}

      <Button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        size="icon"
        variant="outline"
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
}

export default Pagination;
