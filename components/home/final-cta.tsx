"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const bubbles = [
  { size: 120, left: "8%", top: "15%", duration: 7 },
  { size: 60, left: "18%", top: "65%", duration: 9 },
  { size: 90, left: "78%", top: "20%", duration: 8 },
  { size: 50, left: "88%", top: "60%", duration: 6 },
  { size: 70, left: "60%", top: "75%", duration: 10 },
];

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      {/* depth gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/60"
      />
      {/* floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
          className="absolute rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.06]"
          style={{ width: b.size, height: b.size, left: b.left, top: b.top }}
        />
      ))}

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
        >
          Ready to never think about
          <br />
          <span className="italic">laundry again?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          className="mt-5 max-w-xl text-lg text-primary-foreground/75"
        >
          Book your first pickup in 60 seconds — free pickup and delivery,
          fresh clothes back within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="group rounded-full bg-background px-8 text-base text-foreground shadow-xl hover:bg-background/90"
            nativeButton={false}
            render={<Link href="/book" />}
          >
            Book a Pickup
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="size-4" />
            {siteConfig.contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
