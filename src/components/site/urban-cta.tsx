"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function UrbanCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="relative isolate overflow-hidden rounded-2xl border border-border">
        {/* Background photo: save it as /public/urban.jpg */}
        <Image
          src="/urban.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/20" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl px-6 py-20 sm:px-12 sm:py-28"
        >
          <p className="font-mono text-[10px] tracking-widest text-primary">
            URBAN COMMUTER EDITION
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Every Ride Deserves Better Light.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            From daily commutes to weekend adventures, find lighting that fits
            your bike, your routine, and your budget. No dim reflections, no
            fragile brackets.
          </p>
          <Button size="lg" className="mt-7 rounded-full">
            Find Your Light
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
