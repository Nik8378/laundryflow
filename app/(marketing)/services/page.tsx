import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  ChevronRight,
  Truck,
  Clock,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { HowItWorks } from "@/components/home/how-it-works";
import { FinalCta } from "@/components/home/final-cta";
import { ServiceSearch } from "@/components/services/service-search";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From everyday wash & fold to expert dry cleaning, shoe care and more — explore LaundryFlow's full range of premium laundry services with free pickup and delivery.",
};

const heroPerks = [
  { icon: Truck, text: "Free pickup & delivery" },
  { icon: Clock, text: "24-hour turnaround" },
  { icon: Leaf, text: "Eco-friendly cleaning" },
  { icon: ShieldCheck, text: "48-point quality check" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Full-screen centered hero */}
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF2FF_45%,#DBEAFE_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(79,70,229,0.12),transparent_70%)]"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Services</span>
          </nav>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
            <Sparkles className="size-4 text-primary" />
            Six services, one simple pickup
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Everything your <span className="italic text-primary">wardrobe</span> needs,
            <br className="hidden sm:block" /> handled with care
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            From everyday laundry to delicate dry cleaning, shoes, curtains and
            bedding — expertly cleaned, quality checked and delivered fresh to
            your door.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
              Book a Pickup
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" nativeButton={false} render={<Link href="/pricing" />}>
              View Pricing
            </Button>
          </div>

          <ServiceSearch />

          {/* perk chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {heroPerks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.text} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Icon className="size-4 text-primary" />
                  {perk.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid — modern interactive cards */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Pick a service, we handle the rest
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href="/book"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* number badge */}
                <span className="absolute left-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 text-xs font-bold text-primary shadow-sm backdrop-blur">
                  0{i + 1}
                </span>
                {/* price badge */}
                <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                  from {service.priceFrom}
                </span>

                {/* image — fully visible, natural ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="scale-[1.03] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                          <Check className="size-2.5" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Book this service
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FinalCta />
    </>
  );
}
