"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which bike light should I choose?",
    a: "For city commuting, a 400 to 800 lumen front light plus a rear light is enough. For dark roads, go for 1000+ lumens. If you are unsure, message us on WhatsApp and we will help you pick.",
  },
  {
    q: "Do your lights support USB-C charging?",
    a: "Yes. Our rechargeable lights charge over USB-C, so one cable works for your light, phone, and power bank.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes. You pay in cash when your order arrives at your door in Karachi.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We deliver across Karachi. Delivery charges depend on your area and are confirmed on WhatsApp before dispatch.",
  },
  {
    q: "How long does delivery take?",
    a: "Replace this with your real delivery time, for example 1 to 2 working days.",
  },
  {
    q: "What is your return policy?",
    a: "Replace this with your real policy, for example: if your light arrives damaged or faulty, contact us within 7 days for a replacement.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <div className="text-center">
        <p className="font-mono text-[10px] tracking-widest text-primary">
          SUPPORT & EXPERIENCE BASE
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Clear answers regarding compatibility, power supply, courier
          timelines, and returns.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-10"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
