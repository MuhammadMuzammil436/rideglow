import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";

const columns = [
  {
    title: "SHOP",
    links: [
      "All Products",
      "Front Lights",
      "Rear Lights",
      "Light Combos",
      "Rechargeable LEDs",
    ],
  },
  {
    title: "CUSTOMER SUPPORT",
    links: [
      "Contact Us",
      "Track Order",
      "FAQs",
      "Shipping Policy",
      "Returns & Refunds Policy",
    ],
  },
  {
    title: "COMPANY",
    links: [
      "About Us",
      "Privacy Policy",
      "Terms & Conditions",
      "Cycling Community",
    ],
  },
];

const payments = ["Cash on Delivery", "Bank Transfer", "EasyPaisa", "JazzCash"];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary font-bold text-primary-foreground">
              R
            </span>
            <span className="text-lg font-bold tracking-tight">
              Ride<span className="text-primary">Glow</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Own the Night. Ride with Confidence. Engineered optical bicycle
            light systems built for Karachi coastal breezes, Lahore city
            thoroughfares, and Margalla night trails.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-primary" />
              WhatsApp Direct: +92 (300) 000-0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              Dispatch Centers: Lahore, Islamabad
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-mono text-xs tracking-widest text-primary">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
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
            © {new Date().getFullYear()} RideGlow Pakistan. All rights reserved.
          </p>
          <p>Region / Currency: Pakistan (PKR Rs.)</p>
        </div>
      </div>
    </footer>
  );
}
