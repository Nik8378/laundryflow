"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Package, Phone, MapPin, Clock, RotateCcw, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackProgress } from "@/components/track/track-progress";
import { trackingStages, demoOrder } from "@/constants/tracking";

const TrackMap = dynamic(() => import("@/components/track/track-map"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center bg-muted/40 text-sm text-muted-foreground">Loading map…</div>,
});

export function TrackClient() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= trackingStages.length - 1) return;
    const t = setTimeout(() => setCurrent((c) => c + 1), 2600);
    return () => clearTimeout(t);
  }, [current]);

  const progress = current / (trackingStages.length - 1);
  const isDelivered = current >= trackingStages.length - 1;

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
      {/* Status headline card */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b border-border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Package className="size-6" />
            </span>
            <div>
              <p className="text-lg font-semibold">Order #{demoOrder.id}</p>
              <p className="text-sm text-muted-foreground">{demoOrder.service}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Current status</p>
              <p className="font-semibold text-primary">{trackingStages[current].label}</p>
            </div>
            <span className={`flex size-3 items-center justify-center`}>
              <span className="absolute size-3 animate-ping rounded-full bg-primary/60" />
              <span className="size-2.5 rounded-full bg-primary" />
            </span>
          </div>
        </div>

        {/* Progress with truck — inside the same card */}
        <div className="p-6 sm:p-8">
          <TrackProgress current={current} />
        </div>
      </div>

      {/* Map (big, left) + info (right) */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Live map — taller & prominent */}
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm">
          <div className="h-[420px] w-full lg:h-full lg:min-h-[480px]">
            <TrackMap progress={progress} />
          </div>
          <span className="pointer-events-none absolute left-5 top-5 z-[1000] flex items-center gap-1.5 rounded-full bg-card/95 px-3.5 py-1.5 text-xs font-semibold shadow-md backdrop-blur">
            <Navigation className="size-3.5 text-primary" />
            Live location
          </span>
        </div>

        {/* Right info column */}
        <div className="flex flex-col gap-5">
          {/* Video card */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <video src="/tracking.mp4" autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
          </div>

          {/* Rider card */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Your Rider</p>
              <a href={"tel:" + demoOrder.rider.phone.replace(/\s/g, "")} className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90">
                <Phone className="size-4" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-base font-semibold text-primary-foreground">
                {demoOrder.rider.name.charAt(0)}
              </span>
              <div>
                <p className="font-medium">{demoOrder.rider.name}</p>
                <p className="text-xs text-muted-foreground">{demoOrder.rider.vehicle}</p>
              </div>
            </div>
          </div>

          {/* Delivery + items */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{demoOrder.address}</span>
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-sm">
              <Clock className="size-4 shrink-0 text-primary" />
              <span>Delivery {demoOrder.delivery}</span>
            </div>
            <div className="mt-4 space-y-1.5 border-t border-border pt-4">
              {demoOrder.items.map((it) => (
                <div key={it.name} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{it.name}</span>
                  <span className="font-medium">×{it.qty}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-border pt-2 text-sm font-semibold">
                <span>Total</span>
                <span>{demoOrder.total}</span>
              </div>
            </div>
          </div>

          {isDelivered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Button variant="outline" className="w-full rounded-full" onClick={() => setCurrent(0)}>
                <RotateCcw className="mr-1 size-4" /> Replay tracking
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button className="rounded-full px-8" nativeButton={false} render={<Link href="/book" />}>
          Book Another Pickup
        </Button>
      </div>
    </div>
  );
}
