"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* premium layered gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(115deg,oklch(0.32_0.14_285)_0%,oklch(0.45_0.24_277)_35%,oklch(0.511_0.262_276.97)_60%,oklch(0.55_0.2_255)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_20%,oklch(0.685_0.169_237.32_/_0.25),transparent_60%)]"
      />

      <div aria-hidden className="absolute inset-0 opacity-[0.22] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-12 text-center sm:py-14">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-semibold leading-[1.12] text-primary-foreground sm:text-4xl"
        >
          Ready to never think about{" "}
          <span className="italic">laundry again?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
          className="mt-3 max-w-xl text-primary-foreground/75"
        >
          Book your first pickup in 60 seconds — free pickup and delivery,
          fresh clothes back within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.24, duration: 0.6, ease: "easeOut" }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
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
          <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
            <Phone className="size-4" />
            {siteConfig.contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
