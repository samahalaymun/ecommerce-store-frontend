import React, { createContext, useContext, useState } from "react";
import type { Product } from "@/features/home/types";
import { STORAGE_KEY_WISHLIST } from "@/data/constants";

type WishlistContextType = {
  items: Product[];
  add: (p: Product) => void;
  remove: (id: number) => void;
  toggle: (p: Product) => void;
  isIn: (id: number) => boolean;
  clear: () => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    try {
      if (typeof window === "undefined") return [];
      const raw = localStorage.getItem(STORAGE_KEY_WISHLIST);
      return raw ? (JSON.parse(raw) as Product[]) : [];
    } catch (e) {
      return [];
    }
  });

  function save(next: Product[]) {
    try {
      if (typeof window === "undefined") return;
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(next));
    } catch (e) {
      // ignore
    }
  }

  function add(p: Product) {
    setItems((prev) => {
      if (prev.find((it) => it.id === p.id)) return prev;
      const next = [...prev, p];
      save(next);
      return next;
    });
  }

  function remove(id: number) {
    setItems((prev) => {
      const next = prev.filter((it) => it.id !== id);
      save(next);
      return next;
    });
  }

  function toggle(p: Product) {
    setItems((prev) => {
      const exists = prev.find((it) => it.id === p.id);
      const next = exists ? prev.filter((it) => it.id !== p.id) : [...prev, p];
      save(next);
      return next;
    });
  }

  function isIn(id: number) {
    return items.some((it) => it.id === id);
  }

  function clear() {
    setItems(() => {
      const next: Product[] = [];
      save(next);
      return next;
    });
  }

  return (
    <WishlistContext.Provider
      value={{ items, add, remove, toggle, isIn, clear }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}

export default WishlistProvider;
