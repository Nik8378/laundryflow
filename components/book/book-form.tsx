"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, CheckCircle2, Calendar, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { services } from "@/constants/services";
import { timeSlots, areas } from "@/constants/booking";

const schema = z.object({
  service: z.string().min(1, "Select a service"),
  name: z.string().min(2, "Enter your name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(5, "Enter your full address"),
  area: z.string().min(1, "Select your area"),
  date: z.string().min(1, "Pick a date"),
  slot: z.string().min(1, "Pick a time slot"),
  weight: z.string().optional(),
  notes: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export function BookForm() {
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const weight = watch("weight");
  const svc = services.find((s) => s.slug === selected);
  const estimate =
    svc && weight ? `≈ ₹${Math.round(parseFloat(weight) * 99) || 0}` : null;

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Booking:", data);
    setDone(true);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-sm"
      >
        <CheckCircle2 className="mx-auto size-16 text-success" />
        <h2 className="mt-5 text-2xl font-semibold">Pickup booked!</h2>
        <p className="mt-2 text-muted-foreground">
          We've sent a confirmation to your email. Our rider will arrive in your
          chosen slot.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button className="rounded-full px-6" nativeButton={false} render={<Link href="/track" />}>
            Track Your Order
          </Button>
          <Button variant="outline" className="rounded-full px-6" onClick={() => setDone(false)}>
            Book Another
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl">
      {/* Service selection */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2.5">
          <Package className="size-5 text-primary" />
          <h2 className="text-lg font-semibold">Choose a service</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {services.map((s) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => {
                setSelected(s.slug);
                setValue("service", s.slug, { shouldValidate: true });
              }}
              className={`relative rounded-2xl border p-4 text-left transition-all ${
                selected === s.slug
                  ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {selected === s.slug && (
                <span className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
              )}
              <p className="text-sm font-semibold">{s.title}</p>
              <p className="mt-0.5 text-xs text-primary">from {s.priceFrom}</p>
            </button>
          ))}
        </div>
        <input type="hidden" {...register("service")} />
        {errors.service && <p className="mt-2 text-xs text-destructive">{errors.service.message}</p>}
      </div>

      {/* Contact + address */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2.5">
          <MapPin className="size-5 text-primary" />
          <h2 className="text-lg font-semibold">Pickup details</h2>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Your name" className="mt-1.5" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="+91 98765 43210" className="mt-1.5" {...register("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="mt-5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div className="mt-5">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Flat / house, street, landmark" className="mt-1.5" {...register("address")} />
          {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address.message}</p>}
        </div>
        <div className="mt-5">
          <Label htmlFor="area">Area</Label>
          <select
            id="area"
            className="mt-1.5 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            {...register("area")}
          >
            <option value="">Select your area</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors.area && <p className="mt-1 text-xs text-destructive">{errors.area.message}</p>}
        </div>
      </div>

      {/* Schedule */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-2.5">
          <Calendar className="size-5 text-primary" />
          <h2 className="text-lg font-semibold">Pick a slot</h2>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="date">Pickup date</Label>
            <Input id="date" type="date" className="mt-1.5" {...register("date")} />
            {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date.message}</p>}
          </div>
          <div>
            <Label htmlFor="slot">Time slot</Label>
            <select
              id="slot"
              className="mt-1.5 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              {...register("slot")}
            >
              <option value="">Select a slot</option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            {errors.slot && <p className="mt-1 text-xs text-destructive">{errors.slot.message}</p>}
          </div>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="weight">Approx. weight (kg)</Label>
            <Input id="weight" type="number" step="0.5" placeholder="6" className="mt-1.5" {...register("weight")} />
            {estimate && (
              <p className="mt-1.5 text-xs font-semibold text-primary">
                Estimated total: {estimate}
              </p>
            )}
          </div>
        </div>
        <div className="mt-5">
          <Label htmlFor="notes">Special instructions (optional)</Label>
          <Textarea id="notes" rows={3} placeholder="Any stains, delicate items or delivery notes…" className="mt-1.5" {...register("notes")} />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full rounded-full" disabled={isSubmitting}>
        {isSubmitting ? "Booking…" : "Confirm Pickup"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free pickup & delivery · Pay after weighing · Cancel anytime
      </p>
    </form>
  );
}
