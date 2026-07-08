"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { areas } from "@/constants/areas";

export function CoverageAreas() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16" id="coverage">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: copy + chips */}
          <div>
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> Coverage
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
              We're probably
              <br />
              <span className="italic text-primary">in your area.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Serving homes across Delhi NCR — with new areas added every
              month. Hover an area to spot it on the map.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {areas.map((area, i) => (
                <button
                  key={area.name}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "border-border bg-card text-foreground hover:border-primary/50"
                  }`}
                >
                  {area.name}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Don't see your area?{" "}
              <a href="/contact" className="font-semibold text-primary hover:opacity-70">
                Tell us where to come next →
              </a>
            </p>
          </div>

          {/* Right: stylized map panel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            {/* dot grid = abstract map */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgb(79 70 229 / 0.18) 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />
            {/* abstract roads */}
            <svg
              aria-hidden
              className="absolute inset-0 size-full text-primary/15"
              viewBox="0 0 100 75"
              preserveAspectRatio="none"
            >
              <path d="M0,45 Q30,38 55,46 T100,42" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M25,0 Q35,30 30,75" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path d="M60,0 Q55,40 70,75" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </svg>

            {/* area pins */}
            {areas.map((area, i) => (
              <motion.span
                key={area.name}
                animate={{
                  scale: active === i ? 1.35 : 1,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="absolute"
                style={{ left: `${area.x}%`, top: `${area.y}%` }}
              >
                <span
                  className={`relative flex size-3.5 items-center justify-center rounded-full transition-colors duration-200 ${
                    active === i ? "bg-primary" : "bg-primary/40"
                  }`}
                >
                  {active === i && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                  )}
                </span>
              </motion.span>
            ))}

            {/* active area label */}
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-lg"
                >
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm font-semibold">
                    {areas[active].name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {areas[active].zone}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* corner badge */}
            <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-md">
              <Navigation className="size-3.5" />
              12+ areas served
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
