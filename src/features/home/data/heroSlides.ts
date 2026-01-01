import hero1 from "@/assets/hero/hero-1.png";
import hero2 from "@/assets/hero/hero-2.png";
import image1 from "@/assets/hero/man.png";
import type { HeroSlide } from "../types";

export const heroSlides: HeroSlide[] = [
  {
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    background: hero1,
    buttonLabel: " SHOP NOW",
  },
  {
    subtitle: "WINTER 2020",
    title: "FALL COLLECTION",
    description: "Everything you need for the new season, all in one place.",
    background: hero2,
    buttonLabel: " SHOP NOW",
  },
];

export const hero2Slides: HeroSlide[] = [
  {
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    buttonLabel: " ADD TO CART",
    backgroundColor: "var(--color-secondary-1)",
    price: 14.5,
    image: image1,
  },
  {
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    description:
      "We know how large objects will act, We know how are objects will act, We know",
    buttonLabel: " ADD TO CART",
    backgroundColor: "var(--color-secondary-1)",
    price: 14.5,
    image: image1,
  },
];