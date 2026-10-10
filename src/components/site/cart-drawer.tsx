"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/providers";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/config";

const pkr = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

export function CartDrawer() {
  const { items, total, count, open, setOpen, setQty, remove } = useCart();

  function checkout() {
    const lines = items.map(
      (i) => `• ${i.name} x${i.qty} = ${pkr(i.qty * i.price)}`,
    );
    const text = `Hi RideGlow, I'd like to order:\n${lines.join("\n")}\n\nTotal: ${pkr(total)}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="flex w-full flex-col bg-background sm:max-w-md"
      >
        <SheetHeader className="border-b border-border">
          <SheetTitle>Your Cart ({count})</SheetTitle>
          <SheetDescription className="font-mono text-xs">
            Cash on Delivery available
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center text-muted-foreground">
            <ShoppingBag className="size-10" />
            <p className="text-sm">Your cart is empty.</p>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Keep Shopping
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-2">
              <AnimatePresence initial={false}>
                {items.map((i) => (
                  <motion.li
                    key={i.id}
                    layout
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-background">
                      <Image
                        src={i.image}
                        alt={i.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium">{i.name}</p>
                        <button
                          onClick={() => remove(i.id)}
                          aria-label={`Remove ${i.name}`}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-lg border border-border">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(i.id, i.qty - 1)}
                          >
                            <Minus className="size-3" />
                          </Button>
                          <span className="w-5 text-center font-mono text-xs">
                            {i.qty}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7"
                            aria-label="Increase quantity"
                            onClick={() => setQty(i.id, i.qty + 1)}
                          >
                            <Plus className="size-3" />
                          </Button>
                        </div>
                        <span className="text-sm font-bold">
                          {pkr(i.price * i.qty)}
                        </span>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="space-y-3 border-t border-border p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold">{pkr(total)}</span>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full"
                onClick={() => setOpen(false)}
              >
                <Link href="/checkout">Checkout</Link>
              </Button>
              <p className="text-center font-mono text-[10px] text-muted-foreground">
                Delivery charges confirmed on WhatsApp.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
