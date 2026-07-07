"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Eye,
    title: "Our Vision",
    text: "A world where laundry never steals your weekend — fresh clothes should be effortless, for everyone.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "Deliver spotless, perfectly-pressed clothes with radical convenience, honest pricing and care in every fold.",
  },
];

export function ExperienceShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-10">
        {/* Left: heading + copy + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Elevate your
            <br />
            laundry
            <br />
            <span className="italic text-primary">experience</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            We combine expert garment care, eco-friendly cleaning and
            door-to-door convenience — so laundry becomes one less thing on
            your mind.
          </p>
          <Button
            className="mt-7 rounded-full px-6"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            Learn More
            <ArrowRight className="ml-1 size-4" />
          </Button>
        </motion.div>

        {/* Center: looping video (16:9) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl shadow-xl shadow-primary/10"
        >
          {/*
            VIDEO GOES HERE: add your file at public/showcase-video.mp4
            (16:9, ideally 1280x720, under ~8MB, no audio needed)
            Then replace this placeholder div with:

            <video
              src="/showcase-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
            />
          */}
          <video src="/showcase-video.mp4" autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
        </motion.div>

        {/* Right: vision & mission cards */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-warning/15 text-warning">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
