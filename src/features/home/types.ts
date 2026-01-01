export type HeroSlide = {
  subtitle: string;
  title: string;
  description: string;
  background?: string;
  price?: number;
  buttonLabel?: string;
  image?: string;
  backgroundColor?: string;
};
export type CarouselIndicatorProps = {
  index: number;
  selectedIndex: number;
  onClick: () => void;
};

export type ShopCardProps = {
  category: string;
  image: string;
};

export type Product = {
  id: string | number;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  department: string;
  price: number;
  discountPercentage: number;
  colors: string[];
  brand: string;
  rating:number;
  stock:number;
};
export type NeuralUniverseHeroProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  buyNowLabel?: string;
  readMoreLabel?: string;
  mainImage?: string;
};

export type Post = {
  id: string | number;
  image: string;
  isNew?: boolean;
  tags: string[];
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  learnMoreLink?: string;
};