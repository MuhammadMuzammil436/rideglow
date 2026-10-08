"use client";

import { motion, type Variants } from "motion/react";
import { SectionHeading } from "./section-heading";
import { ProductCard, type Product } from "./product-card";

const products: Product[] = [
  {
    id: "front-beam",
    name: "RideGlow Front Beam",
    desc: "High-lumen optical lens with wide road illumination and rechargeable battery.",
    price: 3499,
    oldPrice: 4299,
    rating: 4.8,
    reviews: 128,
    badge: { label: "FLASH SALE", tone: "accent" },
    spec: "800 LM",
    image: "/products/front-beam.jpg",
  },
  {
    id: "rear-signal",
    name: "RideGlow Rear Signal",
    desc: "Compact aerodynamic taillight with outstanding visible safety modes.",
    price: 1999,
    rating: 4.6,
    reviews: 94,
    badge: { label: "BEAM AUDIO", tone: "muted" },
    spec: "120 LM",
    image: "/products/rear-signal.jpg",
  },
  {
    id: "night-rider-set",
    name: "RideGlow Night Rider Set",
    desc: "Front & rear synchronized dual combo pack with verified USB-C cables.",
    price: 4999,
    oldPrice: 5999,
    rating: 4.9,
    reviews: 210,
    badge: { label: "BEST VALUE", tone: "primary" },
    spec: "COMBO",
    image: "/products/night-rider-set.jpg",
  },
  {
    id: "ultra-beam",
    name: "RideGlow Ultra Beam",
    desc: "Premium CNC aluminum housing, 1800 lumens heavy-duty trail performance.",
    price: 6299,
    rating: 4.7,
    reviews: 76,
    badge: { label: "PRO SERIES", tone: "muted" },
    spec: "1800 LM",
    image: "/products/ultra-beam.jpg",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function BestSellers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionHeading
        eyebrow="SHOP TESTED. PAKISTAN VERIFIED."
        title="Best Sellers"
        description="Engineered for maximum road clarity and battery reliability."
      />

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {products.map((p) => (
          <motion.div key={p.id} variants={item}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
