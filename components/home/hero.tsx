"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden pt-28 sm:pt-32">
      <Image
        src="/hero-image.jpeg"
        alt="Bright laundry room with washing machine and freshly dried clothes"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
        >
          Fresh clothes. <span className="italic text-primary">Zero effort.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-lg font-medium text-foreground/70"
        >
          Free pickup &amp; delivery · 24h turnaround
        </motion.p>
      </div>
    </section>
  );
}
