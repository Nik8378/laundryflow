import type { Metadata } from "next";
import Image from "next/image";
import { TrackClient } from "@/components/track/track-client";

export const metadata: Metadata = {
  title: "Track Your Order",
  description:
    "Track your LaundryFlow order live — see each stage from pickup to delivery, follow your rider on the map and get real-time status updates.",
};

export default function TrackPage() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)] pt-16 pb-8 text-center sm:pt-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-sm font-medium">
            <span className="text-primary">/</span> Track Order
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Follow your laundry, <span className="italic text-primary">live.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Here's a live demo of our order tracking — watch it move through each
            stage from pickup to your doorstep.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-6 pb-2 sm:px-10">
        <div className="relative aspect-[3/1] w-full overflow-hidden rounded-3xl">
          <Image src="/track-banner.png" alt="Your laundry on the way" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        </div>
      </div>

      <TrackClient />
    </>
  );
}
