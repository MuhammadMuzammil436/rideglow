"use client";

import { motion, type Variants } from "motion/react";
import { Eye, BatteryCharging, PackageCheck, Headset } from "lucide-react";
import { SectionHeading } from "./section-heading";

const features = [
  {
    icon: Eye,
    title: "Visibility First",
    desc: "Lighting designed to help you see the road and be seen by approaching traffic from all angles.",
  },
  {
    icon: BatteryCharging,
    title: "Rechargeable Options",
    desc: "Discover rechargeable lighting for everyday cycling with universal USB-C fast charge support.",
  },
  {
    icon: PackageCheck,
    title: "Convenient Shopping",
    desc: "Order online with a straightforward checkout, real-time SMS alerts, and verified Cash on Delivery.",
  },
  {
    icon: Headset,
    title: "Customer Support",
    desc: "Get help choosing products and tracking your order via dedicated WhatsApp agents based in Pakistan.",
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

export function WhyRideGlow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center">
        <p className="font-mono text-[10px] tracking-widest text-primary">
          DESIGNED FOR NIGHTRIDERS
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Why RideGlow?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Engineered components curated specifically for real-road conditions
          and everyday commuter peace of mind.
        </p>
      </div>

      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={item}
            whileHover={{ y: -4 }}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <span className="grid size-11 place-items-center rounded-lg border border-border bg-background text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
