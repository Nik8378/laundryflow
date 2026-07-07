"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Sparkles,
    title: "Our Vision",
    text: "A world where laundry never steals your weekend — fresh clothes should be effortless, for everyone.",
    accent: "primary" as const,
  },
  {
    icon: HeartHandshake,
    title: "Our Mission",
    text: "Deliver spotless, perfectly-pressed clothes with radical convenience, honest pricing and care in every fold.",
    accent: "secondary" as const,
  },
];

const accentStyles = {
  primary: {
    iconBox:
      "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
    border: "hover:border-primary/40",
    glow: "from-primary/[0.07]",
  },
  secondary: {
    iconBox:
      "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
    border: "hover:border-secondary/40",
    glow: "from-secondary/[0.07]",
  },
};

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
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-10">
        {/* Left: heading + copy + CTA */}
        <div>
          <h2 className="text-4xl font-semibold leading-[1.18] tracking-tight sm:text-[2.75rem]">
            <motion.span
              variants={blurIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="block"
            >
              Elevate your
            </motion.span>
            <motion.span
              variants={blurIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={1}
              className="block"
            >
              laundry
            </motion.span>
            <motion.span
              variants={blurIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
              className="block italic text-primary"
            >
              experience
            </motion.span>
          </h2>
          <motion.p
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={3}
            className="mt-6 text-muted-foreground"
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
            custom={4}
          >
            <Button
              className="mt-7 rounded-full px-6"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              Learn More
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </motion.div>
        </div>

        {/* Center: looping video, zooms out on scroll */}
        <motion.div
          style={{ scale: videoScale, borderRadius: videoRadius }}
          className="relative overflow-hidden shadow-xl shadow-primary/10"
        >
          <video
            src="/showcase-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full object-cover"
          />
        </motion.div>

        {/* Right: vision & mission cards */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accent];
            return (
              <motion.div
                key={card.title}
                variants={blurIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={i + 2}
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${styles.border}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${styles.glow}`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <motion.span
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${styles.iconBox}`}
                    >
                      <Icon className="size-5" />
                    </motion.span>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Read our story <ArrowRight className="size-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
