"use client";

import { motion } from "motion/react";
import { Truck, Banknote, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const trust = [
  { icon: Truck, title: "Delivery Across Pakistan", sub: "With tracking" },
  { icon: Banknote, title: "Cash on Delivery", sub: "Where available" },
  {
    icon: ShoppingCart,
    title: "Easy Online Ordering",
    sub: "WhatsApp support",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image (put your photo at /public/hero.jpg) */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-40"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-[10px] tracking-widest text-primary"
        >
          ENGINEERED SPORT OPTICS
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Own the Night.
          <br />
          <span className="text-primary">Ride with Confidence.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Powerful bike lights designed to help you see more, stay visible, and
          enjoy every ride after dark. Engineered for Karachi coastal breezes,
          Lahore city thoroughfares, and Margalla night trails.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="group rounded-full">
            Shop Bike Lights
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full">
            Explore Best Sellers
          </Button>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
        >
          {trust.map(({ icon: Icon, title, sub }) => (
            <li key={title} className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg border border-border bg-card text-primary">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="text-xs font-medium">{title}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
