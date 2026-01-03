import { DEFAULT_SORT } from "@/data/constants";
import {
  parseAsInteger,
  parseAsString,
  parseAsArrayOf,
} from "nuqs";

export const productsQueryConfig = {
  page: parseAsInteger.withDefault(1),

  sort: parseAsString.withDefault(DEFAULT_SORT),

  search: parseAsString.withDefault(""),

  brands: parseAsArrayOf(parseAsString).withDefault([]),

  colors: parseAsArrayOf(parseAsString).withDefault([]),

  tags: parseAsArrayOf(parseAsString).withDefault([]),

  // price=10,200
  price: parseAsArrayOf(parseAsInteger),
};
