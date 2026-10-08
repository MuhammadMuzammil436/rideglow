"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Star, Check } from "lucide-react";
import { useCart } from "@/components/providers";

export type Product = {
  id: string;
  name: string;
  desc: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: { label: string; tone: "primary" | "accent" | "muted" };
  spec: string; // e.g. "800 LM"
  image: string;
};

const toneClass = {
  primary: "bg-primary text-primary-foreground",
  accent: "bg-accent text-accent-foreground",
  muted: "bg-muted text-muted-foreground",
};

const pkr = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

export function ProductCard({ product }: { product: Product }) {
  const p = product;
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ id: p.id, name: p.name, price: p.price, image: p.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <Badge
            className={`absolute left-3 top-3 rounded-md font-mono text-[10px] tracking-wider ${toneClass[p.badge.tone]}`}
          >
            {p.badge.label}
          </Badge>
        )}
        <span className="absolute right-3 top-3 rounded-md border border-border bg-background/70 px-2 py-0.5 font-mono text-[10px] backdrop-blur">
          {p.spec}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-1.5 text-xs">
          <Star className="size-3.5 fill-accent text-accent" />
          <span className="font-medium">{p.rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({p.reviews} reviews)</span>
        </div>

        <div>
          <h3 className="font-semibold">{p.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {p.desc}
          </p>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-lg font-bold">{pkr(p.price)}</span>
          {p.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {pkr(p.oldPrice)}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button size="sm" onClick={handleAdd}>
            {added ? (
              <>
                <Check className="size-4" /> Added
              </>
            ) : (
              "Add to Cart"
            )}
          </Button>
          <Button size="sm" variant="outline">
            Quick View
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
