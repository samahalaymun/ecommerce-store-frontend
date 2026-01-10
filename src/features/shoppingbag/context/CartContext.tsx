import React, { createContext, useContext, useState } from "react";
import type { Product } from "@/features/home/types";
import { STORAGE_KEY_CART } from "@/data/constants";

export type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: number) => void;
  update: (id: number, qty: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function readStorage(): CartItem[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY_CART);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch (e) {
    return [];
  }
}

function saveStorage(next: CartItem[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(next));
  } catch (e) {
    // ignore
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStorage());

  function add(p: Product, qty = 1) {
    const prev = items;
    const idx = prev.findIndex((it) => it.id === p.id);
    let next: CartItem[];
    if (idx >= 0) {
      next = prev.map((it, i) =>
        i === idx ? { ...it, quantity: it.quantity + qty } : it
      );
    } else {
      next = [...prev, { ...p, quantity: qty }];
    }
    saveStorage(next);
    setItems(next);
  }

  function remove(id: number) {
    const prev = items;
    const next = prev.filter((it) => it.id !== id);
    saveStorage(next);
    setItems(next);
  }

  function update(id: number, qty: number) {
    const prev = items;
    const next = prev
      .map((it) => (it.id === id ? { ...it, quantity: Math.max(0, qty) } : it))
      .filter((it) => it.quantity > 0);
    saveStorage(next);
    setItems(next);
  }

  function clear() {
    const next: CartItem[] = [];
    saveStorage(next);
    setItems(next);
  }

  function count() {
    return items.reduce((s, it) => s + it.quantity, 0);
  }

  function total() {
    return items.reduce((s, it) => {
      const sale = it.price - ((it.discountPercentage || 0) * it.price) / 100;
      return s + it.quantity * (sale || 0);
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, add, remove, update, clear, count, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartProvider;
