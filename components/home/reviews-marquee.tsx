"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { reviews, type Review } from "@/constants/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.figure
      whileHover={{ y: -8, rotate: -0.6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative w-[340px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10 sm:w-[360px]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <Quote
        aria-hidden
        className="absolute -right-2 -top-2 size-20 rotate-12 text-primary/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110"
      />

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-4 transition-transform duration-300 group-hover:scale-110 ${
              i < review.rating
                ? "fill-warning text-warning"
                : "fill-muted text-muted"
            }`}
            style={{ transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
      <blockquote className="relative mt-3 text-sm leading-relaxed text-foreground/80">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-primary-foreground">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{review.name}</span>
          <span className="block text-xs text-muted-foreground">
            {review.area}
          </span>
        </span>
      </figcaption>
    </motion.figure>
  );
}

export function ReviewsMarquee() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanPrev(rail.scrollLeft > 8);
    setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 8);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    updateArrows();
    rail.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      rail.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const page = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * (rail.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="overflow-x-clip py-16" id="reviews">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-medium">
              <span className="text-primary">/</span> Reviews
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Loved across
              <br />
              <span className="italic text-primary">the city.</span>
            </h2>
          </div>

          <div className="flex items-end gap-5">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
              <span className="font-body text-4xl font-bold tabular-nums">
                4.9
              </span>
              <span>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-warning text-warning"
                    />
                  ))}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  from 2,000+ customers
                </span>
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => page(-1)}
                disabled={!canPrev}
                aria-label="Previous reviews"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft className="size-5" />
              </button>
              <button
                onClick={() => page(1)}
                disabled={!canNext}
                aria-label="Next reviews"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable review rail */}
      <div
        ref={railRef}
        className="mt-12 flex snap-x gap-5 overflow-x-auto px-6 pb-4 scroll-pl-6 sm:px-10 sm:scroll-pl-10 lg:px-20 lg:scroll-pl-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
}
