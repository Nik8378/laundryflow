import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From everyday wash & fold to expert dry cleaning, shoe care and more — explore LaundryFlow's full range of premium laundry services with free pickup and delivery.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Full-screen centered hero */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
        {/* blue & white gradient background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF2FF_45%,#DBEAFE_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(79,70,229,0.12),transparent_70%)]"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Services</span>
          </nav>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Everything your <span className="italic text-primary">wardrobe</span> needs
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            One pickup covers it all — from everyday laundry to delicate dry
            cleaning, shoes, curtains and bedding. Expertly cleaned, quality
            checked and delivered fresh.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="rounded-full px-8"
              nativeButton={false}
              render={<Link href="/book" />}
            >
              Book a Pickup
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8"
              nativeButton={false}
              render={<Link href="/pricing" />}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-20">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="scale-[1.03] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <span className="text-sm font-semibold text-primary">
                    from {service.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="size-2.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full rounded-full"
                  nativeButton={false}
                  render={<Link href="/book" />}
                >
                  Book Now
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
      <FinalCta />
    </>
  );
}
