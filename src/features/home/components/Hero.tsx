import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSlide from "./HeroSlide";
import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import CarouselIndicator from "./CarouselIndicator";
import type { HeroSlide as HeroSlideProps } from "../types";
import { AUTOPLAY_DELAY } from "../data/constants";

function Hero({ slides }: { slides: HeroSlideProps[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);

    setSelectedIndex(api.selectedScrollSnap());
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => {
      api.off("select", onSelect);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [api]);

  return (
    <section className="relative">
      <Carousel
        opts={{
          loop: true,
          duration: 30,
          dragFree: false,
          containScroll: "trimSnaps",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className="basis-full" key={slide.title}>
              <HeroSlide isActive={index === selectedIndex} slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="lg:start-10 start-4 bg-white/80 hover:bg-white text-black" />
        <CarouselNext className="lg:end-10 end-4 bg-white/80 hover:bg-white text-black" />
      </Carousel>
      <div className="absolute bottom-6 start-1/2 -translate-x-1/2 hidden lg:flex">
        {Array.from({ length: snapCount }).map((_, index) => (
          <CarouselIndicator
            index={index}
            selectedIndex={selectedIndex}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
