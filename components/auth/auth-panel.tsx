import Image from "next/image";
import Link from "next/link";
import { WashingMachine } from "lucide-react";

export function AuthPanel() {
  return (
    <div className="relative hidden lg:block">
      <Image
        src="/hero-image.jpeg"
        alt="Fresh laundry"
        fill
        priority
        sizes="50vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />

      <Link href="/" className="absolute left-10 top-10 flex items-center gap-2 text-primary-foreground">
        <span className="flex size-9 items-center justify-center rounded-xl bg-primary-foreground/20 backdrop-blur">
          <WashingMachine className="size-5" />
        </span>
        <span className="font-heading text-lg font-bold">LaundryFlow</span>
      </Link>

      <div className="absolute bottom-12 left-10 right-10">
        <h2 className="font-heading text-3xl font-semibold leading-tight text-primary-foreground">
          Laundry day,
          <br />
          <span className="italic">off your plate.</span>
        </h2>
        <p className="mt-3 text-sm text-primary-foreground/80">
          Trusted by 2,000+ happy customers across Delhi NCR.
        </p>
      </div>
    </div>
  );
}
