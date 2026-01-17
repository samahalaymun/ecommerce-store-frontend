import { Animated } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import type { HeroSlide as HeroSlideType } from "@/features/home/types";

type Props = {
  slide: HeroSlideType;
  isActive: boolean;
};

function HeroSlide({ slide, isActive }: Props) {
  return (
    <div
      className="relative text-primary-foreground min-h-130 flex items-center"
      style={{
        backgroundColor: slide.backgroundColor,
        backgroundImage: slide.background
          ? `url(${slide.background})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 w-full px-6 lg:px-50">
        <div className="grid lg:grid-cols-2 items-center pt-28">
          <div
            className={`
            max-w-2xl space-y-8.75 pb-28 text-center lg:text-left
            transition-all duration-700 ease-in-out
            ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }
          `}
          >
            <Animated variant="slide" direction="left" delay={80}>
              <h5 className="font-bold">{slide.subtitle}</h5>
            </Animated>
            <Animated variant="slide" direction="left" delay={160}>
              <h1 className="font-bold">{slide.title}</h1>
            </Animated>
            <Animated variant="slide" direction="left" delay={240}>
              <h4 className="text-light-gray-1 max-w-md mx-auto lg:mx-0">
                {slide.description}
              </h4>
            </Animated>
            <Animated variant="slide" direction="left" delay={320}>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {slide.price && <h3 className="font-bold">${slide.price}</h3>}

                <Button variant="secondary">{slide.buttonLabel}</Button>
              </div>
            </Animated>
          </div>

          {slide.image && (
            <div className="flex justify-center max-h-135">
              <img
                src={slide.image}
                alt={slide.title}
                className=" object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
