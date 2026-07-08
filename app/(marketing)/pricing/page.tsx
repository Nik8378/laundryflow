import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PricingPreview } from "@/components/home/pricing-preview";
import { PriceTable } from "@/components/pricing/price-table";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest laundry pricing with no hidden charges. See per-order rates, monthly plans and a full per-item price list for wash, iron and dry cleaning.",
};

const highlights = [
  "Free pickup & delivery",
  "No hidden charges",
  "Bulk & subscription discounts",
];

export default function PricingPage() {
  return (
    <>
      {/* Split hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)]">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:px-20 lg:py-24">
          {/* Left: copy */}
          <div>
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="size-3.5" />
              <span className="text-foreground">Pricing</span>
            </nav>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm">
              <Sparkles className="size-4 text-primary" />
              No hidden charges, ever
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Simple, <span className="italic text-primary">honest</span> pricing
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Pay per order or save with a monthly plan. Free pickup and
              delivery on every booking — the price you see is the price you pay.
            </p>

            <ul className="mt-7 flex flex-col gap-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="flex size-5 items-center justify-center rounded-full bg-success/15 text-success">
                    <Check className="size-3" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
                Book a Pickup
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<Link href="#price-list" />}>
                See Full Price List
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative aspect-[4/5] w-full max-w-md justify-self-center overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10 lg:justify-self-end">
            <Image
              src="/pricing-image.jpeg"
              alt="Neatly folded fresh laundry"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Plan cards (reused, header hidden) */}
      <PricingPreview hideHeader />

      {/* Per-item price table */}
      <PriceTable />

      {/* CTA */}
      <FinalCta />
    </>
  );
}
