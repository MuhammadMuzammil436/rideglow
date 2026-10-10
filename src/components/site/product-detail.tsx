"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Banknote,
  BatteryCharging,
  Check,
  Minus,
  Plus,
  RotateCcw,
  Star,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers";
import type { Product } from "@/data/products";

const pkr = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

const highlights = [
  { icon: BatteryCharging, text: "USB-C rechargeable" },
  { icon: Truck, text: "Delivery in Karachi" },
  { icon: Banknote, text: "Cash on Delivery" },
  { icon: RotateCcw, text: "Replacement for faulty items" },
];

export function ProductDetail({ product: p }: { product: Product }) {
  const { add } = useCart();
  const images = p.gallery?.length ? p.gallery : [p.image];
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const discount = p.oldPrice
    ? Math.round((1 - p.price / p.oldPrice) * 100)
    : 0;

  function handleAdd() {
    add({ id: p.id, name: p.name, price: p.price, image: p.image }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="font-mono text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-foreground">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{p.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[active]}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt={p.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            {p.badge && (
              <span className="absolute left-4 top-4 rounded-md bg-primary px-2 py-1 font-mono text-[10px] tracking-wider text-primary-foreground">
                {p.badge.label}
              </span>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative aspect-square overflow-hidden rounded-lg border bg-card transition-colors ${
                    i === active
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] tracking-widest text-primary">
            {p.spec}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {p.name}
          </h1>

          <div className="mt-3 flex items-center gap-1.5 text-sm">
            <Star className="size-4 fill-accent text-accent" />
            <span className="font-medium">{p.rating.toFixed(1)}</span>
            <span className="text-muted-foreground">({p.reviews} reviews)</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-bold">{pkr(p.price)}</span>
            {p.oldPrice && (
              <>
                <span className="text-muted-foreground line-through">
                  {pkr(p.oldPrice)}
                </span>
                <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-accent-foreground">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-5 text-muted-foreground">{p.desc}</p>

          {/* Quantity + add */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="size-4" />
              </Button>
              <span className="w-8 text-center font-mono text-sm">{qty}</span>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
              >
                <Plus className="size-4" />
              </Button>
            </div>

            <Button
              size="lg"
              className="flex-1 rounded-full sm:flex-none sm:px-10"
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <Check className="size-4" /> Added
                </>
              ) : (
                `Add to Cart • ${pkr(p.price * qty)}`
              )}
            </Button>
          </div>

          {/* Highlights */}
          <ul className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <span className="grid size-9 place-items-center rounded-lg border border-border bg-card text-primary">
                  <Icon className="size-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
