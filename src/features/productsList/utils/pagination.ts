type PageItem = number | "...";

export function getPaginationPages(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): PageItem[] {
  const pages: PageItem[] = [];

  const leftSibling = Math.max(currentPage - siblingCount, 1);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  // First page
  pages.push(1);

  if (showLeftDots) {
    pages.push("...");
  }

  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i);
    }
  }

  if (showRightDots) {
    pages.push("...");
  }

  // Last page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}
