export const siteConfig = {
  name: "LaundryFlow",
  description:
    "Premium on-demand laundry and dry cleaning platform. Schedule a pickup, track your order live, and get fresh clothes delivered to your door.",
  contact: {
    phone: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    hours: "Mon – Sun · 8:00 AM – 9:00 PM",
    location: "Serving all of Delhi NCR",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Track Order", href: "/track" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
