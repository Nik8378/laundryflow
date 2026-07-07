import { Sparkles } from "lucide-react";

const items = [
  "Free pickup & delivery",
  "24-hour turnaround",
  "Eco-friendly cleaning",
  "Live order tracking",
  "48-point quality check",
  "Trusted by 2,000+ customers",
];

export function TickerBanner() {
  return (
    <div className="group flex overflow-hidden bg-foreground py-3 text-background">
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
        >
          {items.map((item) => (
            <span key={item} className="flex items-center">
              <span className="whitespace-nowrap px-6 text-sm font-medium tracking-wide">
                {item}
              </span>
              <Sparkles className="size-3.5 shrink-0 text-primary" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
