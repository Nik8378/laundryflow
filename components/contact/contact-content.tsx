"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  subject: z.string().min(3, "What's this about?"),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { icon: Mail, label: "Email", value: "hello@laundryflow.in", href: "mailto:hello@laundryflow.in" },
  { icon: MapPin, label: "Address", value: siteConfig.contact.location },
  { icon: Clock, label: "Hours", value: siteConfig.contact.hours },
];

export function ContactContent() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact form:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F7FF_100%)] pb-10 pt-16 text-center sm:pt-24">
        <div className="mx-auto max-w-2xl px-6">
          <nav className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Contact</span>
          </nav>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Let's <span className="italic text-primary">talk.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Questions, feedback or a business enquiry? We usually reply within a
            few hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="size-14 text-success" />
                <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out — we'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1.5" {...register("name")} />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="mt-1.5" {...register("phone")} />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...register("email")} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-1.5" {...register("subject")} />
                  {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell us more…" className="mt-1.5" {...register("message")} />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : <>Send Message <Send className="ml-1 size-4" /></>}
                </Button>
              </form>
            )}
          </motion.div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{info.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              );
              return info.href ? (
                <a key={info.label} href={info.href}>{inner}</a>
              ) : (
                <div key={info.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
