"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perOrderPlans, monthlyPlans } from "@/constants/pricing";

export function PricingPreview() {
  const [monthly, setMonthly] = useState(false);
  const plans = monthly ? monthlyPlans : perOrderPlans;

  return (
    <section className="py-16" id="pricing">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-20">
        <p className="text-sm font-medium">
          <span className="text-primary">/</span> Pricing
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Honest pricing,
            <br />
            <span className="italic text-primary">no surprises.</span>
          </h2>

          {/* Billing toggle */}
          <div className="flex items-center rounded-full border border-border bg-card p-1 shadow-sm">
            {["Per Order", "Monthly Plans"].map((label, i) => {
              const isActive = monthly === (i === 1);
              return (
                <button
                  key={label}
                  onClick={() => setMonthly(i === 1)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, rotateY: -12 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 12 }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
                className={`relative flex flex-col rounded-3xl border bg-card p-8 ${
                  plan.featured
                    ? "border-transparent shadow-xl shadow-primary/15 [background:linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(135deg,var(--primary),var(--secondary))_border-box] lg:-translate-y-3"
                    : "border-border shadow-sm"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                )}

                <p className="text-sm font-medium text-muted-foreground">
                  {plan.tagline}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{plan.name}</h3>

                <p className="mt-5">
                  <span className="font-body text-5xl font-bold tracking-tight tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="size-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-8 w-full rounded-full ${plan.featured ? "" : "bg-foreground hover:bg-foreground/85"}`}
                  nativeButton={false}
                  render={<Link href={monthly ? "/pricing" : "/book"} />}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            View full price list <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
