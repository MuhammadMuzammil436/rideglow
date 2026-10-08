"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DualBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-card to-card p-8 sm:p-12"
      >
        {/* Soft lime glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] tracking-widest text-primary">
              DUAL-CHANNEL SAFETY
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              See Ahead. <span className="text-primary">Be Seen Behind.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Ride the right lighting setup for your everyday commute and
              evening adventures. Synchronized optics keep both lanes aware of
              your presence.
            </p>
          </div>

          <Button size="lg" className="group w-fit rounded-full">
            Explore Light Sets
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
