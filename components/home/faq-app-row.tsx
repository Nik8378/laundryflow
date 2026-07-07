"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Bell, MapPin, Zap } from "lucide-react";
import { faqs } from "@/constants/faqs";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

const perks = [
  { icon: Zap, text: "Book in 3 taps" },
  { icon: MapPin, text: "Live rider tracking" },
  { icon: Bell, text: "Order status alerts" },
];

function FaqColumn() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <p className="text-sm font-medium">
        <span className="text-primary">/</span> FAQ
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-[1.12] sm:text-4xl">
        Questions? <span className="italic text-primary">Answered.</span>
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={faq.q}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen ? "border-primary/40 bg-card shadow-sm" : "border-border bg-card"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold sm:text-base">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <Plus className="size-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AppColumn() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-[linear-gradient(160deg,oklch(0.62_0.19_35)_0%,oklch(0.72_0.17_45)_50%,oklch(0.78_0.15_65)_100%)] px-8 pt-10 sm:px-10">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.9_0.08_85_/_0.4),transparent_60%)]"
      />
      <div className="relative">
        <p className="text-sm font-medium text-background/80">
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
                <span className="text-sm font-medium text-background/90">
                  {perk.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <span className="flex h-11 w-32 items-center justify-center rounded-xl border border-dashed border-background/40 text-xs text-background/70">
            App Store badge
          </span>
          <span className="flex h-11 w-32 items-center justify-center rounded-xl border border-dashed border-background/40 text-xs text-background/70">
            Play Store badge
          </span>
        </div>
      </div>

      {/* Phone mockup anchored to bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto mt-8 flex-1"
      >
        <ImagePlaceholder
          size="420×760"
          label="Phone mockup — app screen"
          className="aspect-[9/16] w-48 rounded-t-[2.5rem] border-b-0 border-background/40 bg-background/10 text-background/70 sm:w-56"
        />
      </motion.div>
    </div>
  );
}

export function FaqAppRow() {
  return (
    <section className="py-16" id="faq">
      <div className="mx-auto grid max-w-[1600px] items-stretch gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:px-20">
        <FaqColumn />
        <AppColumn />
      </div>
    </section>
  );
}
