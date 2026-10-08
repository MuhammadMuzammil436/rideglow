"use client";

import { motion, type Variants } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Tariq Ahmed",
    meta: "Verified Buyer • Front Beam HD",
    initials: "TA",
    text: "The Front Beam cuts right through the unlit stretches near Gau View. Huge difference when dodging surprise potholes on night rides. Battery lasts easily for three days of commuting.",
  },
  {
    name: "Zainab Malik",
    meta: "Verified Buyer • Night Rider Set",
    initials: "ZM",
    text: "Got the Night Rider Set delivered via Cash on Delivery in Lahore within 48 hours. The strobe mode on the rear light makes drivers notice me and give plenty of passing room on Canal Road.",
  },
  {
    name: "Hamza Khan",
    meta: "Verified Buyer • Ultra Beam",
    initials: "HK",
    text: "Ultra Beam is a beast for evening climbs up to Daman-e-Koh. The aluminum build dissipates heat properly and it survived a sudden monsoon downpour without any lugging inside the lens.",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-widest text-primary">
            REAL RIDERS, REAL ROADS
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Verified Rider Feedback
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          4.9 / 5.0 Average Rating Across Pakistan
        </div>
      </div>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {reviews.map((r) => (
          <motion.figure
            key={r.name}
            variants={item}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div>
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                “{r.text}”
              </blockquote>
            </div>

            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-muted font-mono text-xs text-primary">
                {r.initials}
              </span>
              <div>
                <p className="text-sm font-medium">{r.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {r.meta}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
