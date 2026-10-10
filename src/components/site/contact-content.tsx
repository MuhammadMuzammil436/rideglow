"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AREAS,
  CITY,
  HOURS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/config";

export function ContactContent() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const text = `Hi, I'm ${name.trim() || "a customer"}.\n\n${message.trim()}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  }

  const info = [
    { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_DISPLAY },
    { icon: Clock, label: "Support hours", value: HOURS },
    { icon: MapPin, label: "We deliver", value: AREAS },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="font-mono text-[10px] tracking-widest text-primary">
          CONTACT
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Questions? Ask us on WhatsApp.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Not sure which light fits your bike or your route in {CITY}? Send a
          message and we will help you choose.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ul className="space-y-4">
          {info.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {label.toUpperCase()}
                </p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            </li>
          ))}
        </ul>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-border bg-card p-6"
        >
          <div className="space-y-2">
            <Label htmlFor="c-name">Your name</Label>
            <Input
              id="c-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="c-msg">Message</Label>
            <Textarea
              id="c-msg"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Which light is best for night rides on Sea View?"
              className="bg-background"
            />
          </div>
          <Button type="submit" size="lg" className="w-full rounded-full">
            Send on WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
