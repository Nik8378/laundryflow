"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const rows = [
  {
    icon: Sparkles,
    title: "Our Vision",
    text: "A world where laundry never steals your weekend — fresh clothes should be effortless, for everyone.",
  },
  {
    icon: HeartHandshake,
    title: "Our Mission",
    text: "Deliver spotless, perfectly-pressed clothes with radical convenience, honest pricing and care in every fold.",
  },
];

const blurIn = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export function ExperienceShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const videoRadius = useTransform(scrollYProgress, [0, 1], [48, 24]);

  return (
    <section ref={sectionRef} className="w-full px-6 py-16 sm:px-10 lg:px-20">
      <div className="grid items-center gap-10 text-center lg:grid-cols-[1fr_1.2fr_1fr] lg:text-left">
        {/* Left: heading + copy + CTA */}
        <div className="flex flex-col items-center lg:items-start">
          <motion.h2
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl"
          >
            Elevate your laundry{" "}
            <span className="italic text-primary">experience</span>
          </motion.h2>
          <motion.p
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
            className="mt-6 max-w-md text-muted-foreground"
          >
            We combine expert garment care, eco-friendly cleaning and
            door-to-door convenience — so laundry becomes one less thing on
            your mind.
          </motion.p>
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
          >
            <Button className="mt-7 rounded-full px-6" nativeButton={false} render={<Link href="/about" />}>
              Learn More
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </motion.div>
        </div>

        {/* Center: looping video */}
        <motion.div style={{ scale: videoScale, borderRadius: videoRadius }} className="relative overflow-hidden shadow-xl shadow-primary/10">
          <video src="/showcase-video.mp4" autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
        </motion.div>

        {/* Right: single combined vision + mission card */}
        <motion.div
          variants={blurIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={3}
          className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm"
        >
          {rows.map((row, i) => {
            const Icon = row.icon;
            return (
              <div key={row.title} className={i === 1 ? "mt-5 border-t border-border pt-5" : ""}>
                <div className="flex items-center gap-2.5">
                  <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${i === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-semibold">{row.title}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {row.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
