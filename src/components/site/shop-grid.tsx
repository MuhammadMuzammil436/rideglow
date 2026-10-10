"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PackageSearch } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, products } from "@/data/products";
import { ProductCard } from "./product-card";

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopGrid() {
  const [category, setCategory] =
    useState<(typeof categories)[number]["key"]>("all");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const list =
      category === "all"
        ? [...products]
        : products.filter((p) => p.category === category);

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      {/* Heading */}
      <p className="font-mono text-[10px] tracking-widest text-primary">
        THE FULL RANGE
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
        Shop All Lights
      </h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Front lights, rear lights and complete sets, all tested on Pakistani
        roads.
      </p>

      {/* Controls */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className="relative rounded-full border border-border px-4 py-2 font-mono text-xs transition-colors hover:text-foreground data-[active=true]:border-transparent data-[active=true]:text-primary-foreground"
              data-active={category === c.key}
            >
              {category === c.key && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{c.label}</span>
            </button>
          ))}
        </div>

        <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
          <SelectTrigger className="w-full bg-card sm:w-52">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Top Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="mt-6 font-mono text-xs text-muted-foreground">
        {visible.length} {visible.length === 1 ? "product" : "products"}
      </p>

      {/* Grid */}
      {visible.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-muted-foreground">
          <PackageSearch className="size-10" />
          <p className="text-sm">No products found in this category.</p>
        </div>
      ) : (
        <motion.div
          layout
          className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
