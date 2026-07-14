"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { services } from "@/constants/services";

export function ServicesGrid() {
  const railRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const pct = max > 0 ? rail.scrollLeft / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = "translateX(" + pct * 150 + "%)";
      }
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      rail.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12" id="services">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <p className="text-sm font-medium text-center lg:text-left">
          <span className="text-primary">/</span> Services We Offer
        </p>

        <div className="mt-6 grid items-end gap-10 text-center lg:grid-cols-[1.2fr_1fr] lg:text-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
          >
            Premium care,
            <br />
            <span className="italic text-primary">every fabric.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="lg:pb-2"
          >
            <p className="max-w-md text-muted-foreground">
              From everyday laundry to delicate dry cleaning — one pickup
              covers it all. Expertly cleaned, quality checked, delivered
              fresh.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <Link
                href="/services"
                className="flex items-center gap-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
              >
                View All Services <ChevronRight className="size-4" />
              </Link>
              <Link
                href="/book"
                className="flex items-center gap-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
              >
                Book a Pickup <ChevronRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal card rail */}
      <div
        ref={railRef}
        className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scroll-pl-6 sm:px-10 sm:scroll-pl-10 lg:px-20 lg:scroll-pl-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 4) * 0.08, duration: 0.6, ease: "easeOut" }}
            className="snap-start"
          >
            <Link
              href="/book"
              className="group relative block h-[420px] w-[280px] shrink-0 overflow-hidden rounded-3xl sm:w-[300px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 280px, 300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

              <p className="absolute bottom-6 left-6 max-w-[60%] text-lg font-semibold leading-snug text-background">
                {service.title}
              </p>

              <span className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-tl-3xl bg-background p-2">
                <span
                  className={`flex size-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Scroll progress bar */}
      <div className="mx-auto mt-6 max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="relative mx-auto h-[3px] w-full max-w-xl overflow-hidden rounded-full bg-border">
          <div
            ref={barRef}
            className="absolute left-0 top-0 h-full w-[40%] rounded-full bg-foreground will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
