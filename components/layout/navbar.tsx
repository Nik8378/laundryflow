"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, WashingMachine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-border/40 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <WashingMachine className="size-5" />
          </span>
          <span className="font-heading text-lg font-bold">LaundryFlow</span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-foreground transition-colors hover:bg-accent/60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/login" />}
          >
            Log in
          </Button>
          <Button
            className="rounded-full"
            nativeButton={false}
            render={<Link href="/book" />}
          >
            Book Pickup
          </Button>
        </div>

        <div className="flex items-center lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/40 bg-background/95 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                nativeButton={false}
                render={<Link href="/login" onClick={() => setOpen(false)} />}
              >
                Log in
              </Button>
              <Button
                className="flex-1 rounded-full"
                nativeButton={false}
                render={<Link href="/book" onClick={() => setOpen(false)} />}
              >
                Book Pickup
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
