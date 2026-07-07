"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { steps } from "@/constants/steps";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;
  const progress = (active + 1) / steps.length;

  return (
    <section className="bg-primary/[0.04] text-foreground" id="how-it-works">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 lg:gap-16">
          {/* Left: sticky panel */}
          <div className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:pt-0">
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> How It Works
            </p>

            <div className="relative mt-6 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none block font-heading text-[7.5rem] font-bold leading-[0.9] sm:text-[9rem]"
                    style={{
                      WebkitTextStroke: "2px rgb(79 70 229 / 0.55)",
                      color: "rgb(79 70 229 / 0.06)",
                    }}
                  >
                    {step.number}
                  </span>

                  <div className="mt-4 flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                      {step.title}
                    </h2>
                  </div>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress track */}
            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-primary"
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <span className="text-sm tabular-nums text-muted-foreground">
                {step.number} / 0{steps.length}
              </span>
            </div>
          </div>

          {/* Right: scrolling step visuals */}
          <div className="flex flex-col gap-24 py-16 lg:gap-0 lg:py-0 lg:pb-[20vh]">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.5 }}
                className="flex items-center lg:min-h-dvh"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem]"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="scale-[1.03] object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
