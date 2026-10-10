"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { BatteryCharging, Banknote, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND, CITY } from "@/lib/config";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const values = [
  {
    icon: BatteryCharging,
    title: "Built for daily rides",
    desc: "Rechargeable lights you can charge with the same USB-C cable as your phone.",
  },
  {
    icon: Banknote,
    title: "Pay on delivery",
    desc: `Order in minutes and pay cash when it reaches your door in ${CITY}.`,
  },
  {
    icon: Headset,
    title: "Real human support",
    desc: "Message us on WhatsApp and a real person replies, before and after you buy.",
  },
];

export function AboutContent() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={item}
          className="font-mono text-[10px] tracking-widest text-primary"
        >
          ABOUT US
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-2 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Lights for {CITY} riders,{" "}
          <span className="text-primary">after dark.</span>
        </motion.h1>

        {/* REPLACE this with your real story, 2 or 3 short paragraphs */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-muted-foreground"
        >
          {BRAND} sells bright, rechargeable bike lights to riders in {CITY}.
          Tell your story here: why you started, what you ride, and why you
          chose these lights. Real and specific beats polished and generic.
        </motion.p>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-4 md:grid-cols-3"
      >
        {values.map(({ icon: Icon, title, desc }) => (
          <motion.li
            key={title}
            variants={item}
            className="rounded-xl border border-border bg-card p-6"
          >
            <span className="grid size-11 place-items-center rounded-lg border border-border bg-background text-primary">
              <Icon className="size-5" />
            </span>
            <h2 className="mt-5 font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild className="rounded-full">
          <Link href="/shop">Shop lights</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </section>
  );
}
