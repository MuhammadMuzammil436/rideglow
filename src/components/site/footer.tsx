import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import { CurrentYear } from "./current-year";
import { Logo } from "./logo";
import {
  BRAND,
  CITY,
  PAYMENTS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/config";

const wa = `https://wa.me/${WHATSAPP_NUMBER}`;

const columns = [
  {
    title: "SHOP",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Front Lights", href: "/shop" },
      { label: "Rear Lights", href: "/shop" },
      { label: "Light Combos", href: "/shop" },
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    links: [
      { label: "WhatsApp Us", href: wa },
      { label: "Track Order (WhatsApp)", href: wa },
      { label: "Checkout", href: "/checkout" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Own the Night. Ride with Confidence. Bright, rechargeable bike
            lights for {CITY} riders, from Sea View to Clifton to Defence.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-primary" />
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              Delivering in {CITY}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs tracking-widest text-primary">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 font-mono text-[11px] text-muted-foreground sm:flex-row">
          <p>
            © <CurrentYear /> {BRAND}. All rights reserved.
          </p>
          <p>Currency: PKR (Rs.)</p>
        </div>
      </div>
    </footer>
  );
}
