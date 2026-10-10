"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { AnimatePresence } from "motion/react"; // extend your existing motion import
import { useCart } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");
  const { count, setOpen } = useCart();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.4 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-primary"
                data-active={isActive}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <span className="mr-2 hidden rounded-md border border-border px-2 py-1 font-mono text-xs sm:inline">
            PKR Rs
          </span>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="relative"
            onClick={() => setOpen(true)}
          >
            <Search className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Account"
            className="hidden sm:inline-flex"
          >
            <User className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cart"
            className="relative"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-primary font-mono text-[10px] text-primary-foreground">
              0
            </span>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-10 flex flex-col gap-1 px-4">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="rounded-lg px-3 py-3 text-lg hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
