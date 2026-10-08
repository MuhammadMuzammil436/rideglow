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
    a: "For city commuting, a 400 to 800 lumen front light plus a rear light is enough. For unlit roads and trails, go for 1000+ lumens like the Ultra Beam. If you are unsure, the Night Rider Set covers both ends at a better price.",
  },
  {
    q: "Do your lights support USB-C charging?",
    a: "Yes. Our rechargeable lights charge over USB-C, so one cable works for your light, phone, and power bank.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes, Cash on Delivery is available in most cities across Pakistan. You can confirm availability for your area at checkout.",
  },
  {
    q: "Which cities do you deliver to?",
    a: "We deliver nationwide, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and Peshawar. Remote areas may take a little longer.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships you will get an SMS and WhatsApp message with a tracking number from the courier.",
  },
  {
    q: "What is your return policy?",
    a: "If your light arrives damaged or faulty, contact us within 7 days for a replacement or refund. Items should be unused and in original packaging.",
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
