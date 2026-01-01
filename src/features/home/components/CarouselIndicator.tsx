import type { CarouselIndicatorProps } from "../types";

function CarouselIndicator({
  index,
  selectedIndex,
  onClick,
}: CarouselIndicatorProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
              h-2.5 w-15.5 transition-all
              ${
                selectedIndex === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }
            `}
        aria-label={`Go to slide ${index + 1}`}
      />
    </>
  );
}

export default CarouselIndicator;
