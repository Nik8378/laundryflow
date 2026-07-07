"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/constants/services";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="services">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Services
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Everything your wardrobe needs
        </h2>
        <p className="mt-4 text-muted-foreground">
          From everyday laundry to delicate dry cleaning — one pickup covers it
          all.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={"/services/" + service.slug}
              className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <ImagePlaceholder
                size={service.imageSize}
                label={service.title + " — service photo"}
                className="aspect-[3/2] w-full rounded-none border-0 border-b border-dashed border-border"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <span className="text-sm font-semibold text-primary">
                    {service.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
