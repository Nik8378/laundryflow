import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BookForm } from "@/components/book/book-form";

export const metadata: Metadata = {
  title: "Book a Pickup",
  description:
    "Book your laundry pickup in 60 seconds. Choose a service, pick a slot, and we'll collect, clean and deliver your clothes fresh — free pickup and delivery.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)] pb-10 pt-16 text-center sm:pt-24">
        <div className="mx-auto max-w-2xl px-6">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Book Pickup</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Book in <span className="italic text-primary">60 seconds.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Choose a service, pick a slot — we'll handle the rest.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <BookForm />
      </section>
    </>
  );
}
