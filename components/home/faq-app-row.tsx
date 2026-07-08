"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import { faqs } from "@/constants/faqs";


function FaqColumn() {
  // fixed-height column, internal scroll if answers overflow
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="lg:h-full lg:overflow-y-auto lg:pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
    <div className="relative h-full overflow-hidden rounded-[2.5rem]">
      <Image
        src="/app-mockup.jpeg"
        alt="LaundryFlow app - coming soon"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export function FaqAppRow() {
  return (
    <section className="py-16" id="faq">
      <div className="mx-auto grid max-w-[1600px] items-stretch gap-8 px-6 sm:px-10 lg:h-[620px] lg:grid-cols-2 lg:px-20">
        <FaqColumn />
        <AppColumn />
      </div>
    </section>
  );
}
