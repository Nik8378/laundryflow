"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { steps } from "@/constants/steps";

const chips = ["Takes 60 sec", "Slot of your choice", "48-point check", "Within 24 hours"];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  const scrollToStep = (i: number) => {
    document.getElementById(`step-visual-${i}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="relative overflow-hidden" id="how-it-works">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-transparent to-secondary/[0.05]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgb(79 70 229 / 0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 lg:gap-16">
          {/* Left: sticky step timeline */}
          <div className="pt-16 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:pt-0">
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Four steps to <span className="italic text-primary">fresh</span>
            </h2>

            <div className="mt-10 flex flex-col">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <button
                    key={s.number}
                    onClick={() => scrollToStep(i)}
                    className="group relative flex gap-5 text-left"
                  >
                    {/* Timeline rail */}
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                            : isDone
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-border bg-card text-muted-foreground group-hover:border-primary/40"
                        }`}
                      >
                        {isDone ? <Check className="size-5" /> : <Icon className="size-5" />}
                      </span>
                      {i < steps.length - 1 && (
                        <span className="relative my-1 w-px flex-1 bg-border">
                          <motion.span
                            className="absolute left-0 top-0 w-px bg-primary"
                            animate={{ height: isDone ? "100%" : "0%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </span>
                      )}
                    </div>

                    {/* Step text */}
                    <div className={i < steps.length - 1 ? "pb-8" : ""}>
                      <p
                        className={`pt-3 font-semibold transition-colors duration-300 ${
                          isActive ? "text-lg text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        <span className="mr-2 font-heading text-sm text-primary">{s.number}</span>
                        {s.title}
                      </p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="max-w-sm overflow-hidden text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="block pt-2">{s.description}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: scrolling step visuals */}
          <div className="flex flex-col gap-24 py-16 lg:gap-0 lg:py-0 lg:pb-[20vh]">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                id={`step-visual-${i}`}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.5 }}
                className="flex items-center lg:min-h-dvh"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full"
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="scale-[1.03] object-cover"
                    />
                  </div>
                  {/* Floating chip */}
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute -bottom-4 left-8 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-lg"
                  >
                    {chips[i]}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
