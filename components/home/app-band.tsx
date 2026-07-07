"use client";

import { motion } from "framer-motion";
import { Bell, MapPin, Zap } from "lucide-react";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

const perks = [
  { icon: Zap, text: "Book in 3 taps" },
  { icon: MapPin, text: "Live rider tracking" },
  { icon: Bell, text: "Order status alerts" },
];

export function AppBand() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(115deg,oklch(0.62_0.19_35)_0%,oklch(0.72_0.17_45)_45%,oklch(0.78_0.15_65)_100%)]">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,oklch(0.9_0.08_85_/_0.4),transparent_65%)]"
          />
          <div className="relative grid items-center gap-10 px-8 py-12 sm:px-12 lg:grid-cols-2 lg:py-0">
            {/* Left: copy */}
            <div className="lg:py-14">
              <p className="text-sm font-medium text-background/60">
                <span className="text-background">/</span> Get the App
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-[1.12] text-background sm:text-4xl">
                Laundry in your pocket,
                <br />
                <span className="italic">coming soon.</span>
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.text} className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-background/15 text-background">
                        <Icon className="size-4.5" />
                      </span>
                      <span className="text-sm font-medium text-background/80">
                        {perk.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Store badge placeholders */}
              <div className="mt-8 flex gap-3">
                <span className="flex h-12 w-36 items-center justify-center rounded-xl border border-dashed border-background/30 text-xs text-background/50">
                  App Store badge
                </span>
                <span className="flex h-12 w-36 items-center justify-center rounded-xl border border-dashed border-background/30 text-xs text-background/50">
                  Play Store badge
                </span>
              </div>
            </div>

            {/* Right: phone mockup placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto lg:mb-[-3rem]"
            >
              <ImagePlaceholder
                size="420×760"
                label="Phone mockup — app booking screen"
                className="aspect-[9/16] w-56 rounded-[2.5rem] border-background/25 bg-background/5 text-background/50 sm:w-64"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
