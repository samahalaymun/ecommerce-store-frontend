import FeaturedPosts from "@/features/home/components/FeaturedPosts";
import FeaturedProducts from "@/features/home/components/FeaturedProducts";
import Hero from "@/features/home/components/Hero";
import NeuralUniverseHero from "@/features/home/components/NeuralUniverseHero";
import ShopCards from "@/features/home/components/ShopCards";
import { hero2Slides, heroSlides } from "@/features/home/data/heroSlides";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero slides={heroSlides} />
      <ShopCards />
      <FeaturedProducts />
      <Hero slides={hero2Slides} />
      <NeuralUniverseHero />
      <FeaturedPosts />
    </div>
  );
}

export default Home;
