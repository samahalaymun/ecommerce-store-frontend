import { Button } from "@/components/ui/button";
import type { NeuralUniverseHeroProps } from "../types";
import { Animated } from "@/components/ui/animated";

function NeuralUniverseHero({
  subtitle = "SUMMER 2020",
  title = "Part of the Neural Universe",
  description = "We know how large objects will act, but things on a small scale.",
  buyNowLabel = "BUY NOW",
  readMoreLabel = "READ MORE",
  mainImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
}: NeuralUniverseHeroProps) {
  return (
    <section className="w-full bg-background relative px-4 lg:px-10">
      {/* Decorative jagged line on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-20 hidden lg:block" />

      <div className="grid lg:grid-cols-2 gap-7.5 min-h-150 lg:min-h-170.5">
        {/* Left Side - Main Image */}
        <div className="order-2 lg:order-1 w-full h-full min-h-100 lg:min-h-170.5 bg-muted overflow-hidden relative">
          <Animated variant="scale" direction="top" delay={60}>
            <img
              src={mainImage}
              alt="Neural Universe"
              className="w-full h-full object-cover"
            />
          </Animated>
        </div>

        {/* Right Side - Content */}
        <div className="w-full order-1 lg:order-2 bg-background flex flex-col justify-center items-center lg:items-start px-6 lg:px-12 py-12 lg:py-0">
          <div className="max-w-lg w-full flex flex-col gap-6 lg:gap-7.5  items-center lg:items-start">
            {/* Subtitle */}
            <Animated variant="enter" direction="bottom" delay={120}>
              <h5 className="text-muted-foreground font-bold uppercase text-center lg:text-start">
                {subtitle}
              </h5>
            </Animated>

            {/* Title */}
            <Animated variant="enter" direction="bottom" delay={180}>
              <h2 className=" font-bold text-foreground text-center lg:text-start">
                {title}
              </h2>
            </Animated>

            {/* Description */}
            <Animated variant="enter" direction="bottom" delay={240}>
              <h4 className="text-muted-foreground/70 text-center lg:text-start">
                {description}
              </h4>
            </Animated>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-6">
              <Animated variant="enter" direction="bottom" delay={300}>
                <Button
                  variant="default"
                  size="default">
                  {buyNowLabel}
                </Button>
              </Animated>
              <Animated variant="enter" direction="bottom" delay={360}>
                <Button
                  variant="outline"
                  size="default"
                >
                  {readMoreLabel}
                </Button>
              </Animated>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NeuralUniverseHero;
