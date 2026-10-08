"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const categories = [
  {
    tag: "01 / FRONT",
    title: "Front Bike Lights",
    desc: "Light up the road ahead.",
    href: "/front-lights",
    image: "/categories/front.jpg",
  },
  {
    tag: "02 / REAR",
    title: "Rear Bike Lights",
    desc: "Help others spot you.",
    href: "/rear-lights",
    image: "/categories/rear.jpg",
  },
  {
    tag: "03 / COMBO",
    title: "Light Combos",
    desc: "Front and rear visibility.",
    href: "/combos",
    image: "/categories/combo.jpg",
  },
  {
    tag: "04 / USB-C",
    title: "Rechargeable Lights",
    desc: "Convenient lighting for every-day rides.",
    href: "/rechargeable",
    image: "/categories/rechargeable.jpg",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <SectionHeading
        eyebrow="OPTICS SPECTRUM"
        title="Shop by Category"
        description="Precision-calibrated lumens and specialized beam diffusers built for high-speed night riding."
      />

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((c) => (
          <motion.div
            key={c.title}
            variants={card}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href={c.href}
              className="group relative flex h-72 flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              {/* Image: add files to /public/categories/ */}
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover opacity-40 transition-all duration-500 group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-card via-card/60 to-transparent" />

              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {c.tag}
                </span>
                <span className="grid size-8 place-items-center rounded-full border border-border bg-background/60 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-3 inline-block font-mono text-xs text-primary">
                  Shop Now →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
