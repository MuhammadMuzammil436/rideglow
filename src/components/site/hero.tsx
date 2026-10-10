"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Truck, Banknote, ShoppingCart, ArrowRight } from "lucide-react";
import { CITY } from "@/lib/config";
import { LinkButton } from "./link-button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const trust = [
  { icon: Truck, title: `Delivery in ${CITY}`, sub: "Fast local dispatch" },
  { icon: Banknote, title: "Cash on Delivery", sub: "Pay when it arrives" },
  { icon: ShoppingCart, title: "Easy Ordering", sub: "WhatsApp support" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background photo: save it as /public/hero.jpg */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      {/* Readability overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
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
          enjoy every ride after dark. Built for Sea View evenings, Clifton
          roads, and late rides home across {CITY}.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/shop" size="lg" className="group rounded-full">
            Shop Bike Lights
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </LinkButton>
          <LinkButton
            href="/shop"
            size="lg"
            variant="secondary"
            className="rounded-full"
          >
            Explore Best Sellers
          </LinkButton>
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
