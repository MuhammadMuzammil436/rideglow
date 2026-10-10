"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Check, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/components/providers";
import { WHATSAPP_NUMBER } from "@/lib/config";

const pkr = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

type Form = {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};
type Errors = Partial<Record<keyof Form, string>>;

// Accepts 03XXXXXXXXX or +923XXXXXXXXX (spaces and dashes allowed)
const phoneOk = (v: string) => /^(\+92|0)3\d{9}$/.test(v.replace(/[\s-]/g, ""));

function validate(f: Form): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!phoneOk(f.phone))
    e.phone = "Enter a valid mobile number, e.g. 0300 1234567.";
  if (f.city.trim().length < 2) e.city = "Please enter your city.";
  if (f.address.trim().length < 8)
    e.address = "Please enter your complete address.";
  return e;
}

export function CheckoutForm() {
  const { items, total, ready, clear } = useCart();
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const set =
    (k: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    const lines = items.map(
      (i) => `• ${i.name} x${i.qty} = ${pkr(i.qty * i.price)}`,
    );
    const text = [
      "Hi RideGlow, I'd like to place an order (Cash on Delivery):",
      "",
      ...lines,
      "",
      `Subtotal: ${pkr(total)}`,
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `City: ${form.city.trim()}`,
      `Address: ${form.address.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
    ]
      .filter((l, i, arr) => !(l === "" && arr[i - 1] === ""))
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setWaUrl(url);
    clear();
  }

  // Waiting for localStorage to load
  if (!ready) {
    return <div className="mx-auto h-96 max-w-6xl animate-pulse px-4 py-14" />;
  }

  // Success view
  if (waUrl) {
    return (
      <section className="mx-auto max-w-lg px-4 py-24 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"
        >
          <Check className="size-8" />
        </motion.div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">Almost done!</h1>
        <p className="mt-3 text-muted-foreground">
          We opened WhatsApp with your order. Just press <b>Send</b> in the chat
          and we'll confirm delivery charges and timing.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button className="rounded-full">
            <a href={waUrl} target="_blank" rel="noreferrer">
              Open WhatsApp again
            </a>
          </Button>
          <Button variant="outline" className="rounded-full">
            <Link href="/shop">Keep shopping</Link>
          </Button>
        </div>
      </section>
    );
  }

  // Empty cart
  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-lg px-4 py-24 text-center text-muted-foreground">
        <ShoppingBag className="mx-auto size-12" />
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          Your cart is empty
        </h1>
        <Button className="mt-6 rounded-full">
          <Link href="/shop">Browse lights</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <p className="font-mono text-[10px] tracking-widest text-primary">
        ALMOST THERE
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <Field label="Full name" error={errors.name}>
            <Input
              id="name"
              value={form.name}
              onChange={set("name")}
              autoComplete="name"
              className="h-11 bg-card"
            />
          </Field>
          <Field label="Mobile number" error={errors.phone}>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="0300 1234567"
              autoComplete="tel"
              className="h-11 bg-card"
            />
          </Field>
          <Field label="City" error={errors.city}>
            <Input
              id="city"
              value={form.city}
              onChange={set("city")}
              placeholder="Karachi, Lahore, Islamabad..."
              autoComplete="address-level2"
              className="bg-card h-11"
            />
          </Field>
          <Field label="Complete address" error={errors.address}>
            <Textarea
              id="address"
              value={form.address}
              onChange={set("address")}
              rows={3}
              placeholder="House / street / area"
              autoComplete="street-address"
              className="bg-card"
            />
          </Field>
          <Field label="Order notes (optional)">
            <Textarea
              id="notes"
              value={form.notes}
              onChange={set("notes")}
              rows={2}
              className="bg-card"
            />
          </Field>

          <Button type="submit" size="lg" className="w-full rounded-full">
            Place order on WhatsApp
          </Button>
          <p className="text-center font-mono text-[10px] text-muted-foreground">
            Payment: Cash on Delivery. Delivery charges are confirmed on
            WhatsApp.
          </p>
        </form>

        {/* Summary */}
        <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
          <h2 className="font-semibold">Order summary</h2>
          <ul className="mt-4 space-y-4">
            {items.map((i) => (
              <li key={i.id} className="flex items-center gap-3">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-background">
                  <Image
                    src={i.image}
                    alt={i.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">{i.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Qty {i.qty}
                  </p>
                </div>
                <span className="text-sm font-bold">
                  {pkr(i.price * i.qty)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-xl font-bold">{pkr(total)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
