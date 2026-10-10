"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "motion/react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  ready: boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "rideglow-cart";

const CartContext = createContext<CartCtx | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <Providers>");
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // Load saved cart once, after mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch {
      /* ignore corrupted or blocked storage */
    }
    setReady(true);
  }, []);

  // Save on every change (only after the first load)
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full or blocked */
    }
  }, [items, ready]);

  const add: CartCtx["add"] = (item, qty = 1) => {
    setItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + qty } : i))
        : [...prev, { ...item, qty }],
    );
    setOpen(true);
  };

  const remove: CartCtx["remove"] = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const setQty: CartCtx["setQty"] = (id, qty) =>
    qty < 1
      ? remove(id)
      : setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));

  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        ready,
        open,
        setOpen,
        add,
        setQty,
        remove,
        clear,
      }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </CartContext.Provider>
  );
}
