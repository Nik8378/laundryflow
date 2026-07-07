"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/constants/faqs";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16" id="faq">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-sm font-medium">
            <span className="text-primary">/</span> FAQ
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Questions? <span className="italic text-primary">Answered.</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
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
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors ${
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
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
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
    </section>
  );
}
