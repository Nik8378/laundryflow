import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LaundryFlow — questions, feedback or business enquiries. Reach us by phone, email or the contact form and we'll respond within a few hours.",
};

export default function ContactPage() {
  return <ContactContent />;
}
