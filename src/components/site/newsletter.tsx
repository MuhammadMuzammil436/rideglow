"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: send to your email provider (Mailchimp, Resend, etc.)
    setDone(true);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-border bg-card p-8 text-center sm:p-10"
      >
        <span className="mx-auto grid size-10 place-items-center rounded-lg border border-border bg-background text-primary">
          <Mail className="size-5" />
        </span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Stay in the Loop.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Get product updates, night cycling tips, group ride announcements, and
          exclusive seasonal discount codes.
        </p>

        <div className="mt-6 min-h-12">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.p
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm text-primary"
              >
                <Check className="size-4" /> You're in! Check your inbox.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={onSubmit}
                className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-11 bg-background"
                />
                <Button type="submit" className="h-11">
                  Subscribe
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-3 font-mono text-[10px] text-muted-foreground">
          No spam ever. Unsubscribe in seconds whenever you like.
        </p>
      </motion.div>
    </section>
  );
}
