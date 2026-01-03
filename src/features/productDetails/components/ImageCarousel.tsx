import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Props = {
  images?: string[];
  alt?: string;
};

export default function ImageCarousel({
  images = [],
  alt = "product image",
}: Props) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-4/3 bg-muted rounded-md flex items-center justify-center">
        <span className="text-muted-foreground">No image</span>
      </div>
    );
  }

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={i}>
            <div className="w-full aspect-4/3 rounded-md overflow-hidden bg-background">
              <img
                src={src}
                alt={`${alt} ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:start-10 start-4" />
      <CarouselNext className="lg:end-10 end-4" />
    </Carousel>
  );
}
