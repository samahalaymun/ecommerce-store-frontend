import type { FilterState, SortOption } from "@/features/productsList/types";

export const CompanyInfo = [
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Carrier",
    to: "/carrier",
  },
  {
    label: "We are hiring",
    to: "/hiring",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

export const Features = [
  {
    label: "Business Marketing",
    to: "business-marketing",
  },
  {
    label: "User Analytic",
    to: "user-analytic",
  },

  {
    label: "Live Chat",
    to: "live-chat",
  },
  {
    label: "Unlimited Support",
    to: "unlimited-support",
  },
];

export const Resources = [
  {
    label: "IOS & Android",
    to: "ios-android",
  },
  {
    label: "Watch a Demo",
    to: "watch-demo",
  },

  {
    label: "Customers",
    to: "customers",
  },
  {
    label: "API",
    to: "api",
  },
];
export const PRODUCT_CATEGORIES_QUERY_KEY = "product-categories";
export const PRODUCT_PRODUCTS_QUERY_KEY = "products";
export const PRODUCT_PRODUCT_DETAILS_QUERY_KEY = "product-details";
export const DEFAULT_FILTERS: FilterState = {
  search: "",
  brands: [],
  colors: [],
  priceRange: [0, 1000],
  tags: [],
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_SORT: SortOption = "popularity";
export const themes = [
  { id: "default", label: "Default" },
  { id: "claymorphism", label: "Claymorphism" },
  { id: "bold-tech", label: "Bold" },
  { id: "amethyst", label: "Amethyst Haze" },
  { id: "bubblegum", label: "Bubblegum" },
];