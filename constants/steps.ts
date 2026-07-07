import { CalendarClock, Truck, WashingMachine, PackageCheck } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: CalendarClock,
    title: "Book in 60 seconds",
    description:
      "Pick a service, choose a pickup slot that suits you, and you're done. No calls, no waiting.",
    imageLabel: "Booking screen / person using phone",
  },
  {
    number: "02",
    icon: Truck,
    title: "We pick up at your door",
    description:
      "Our rider arrives in your chosen slot, collects your clothes and logs every item — contactless if you prefer.",
    imageLabel: "Rider collecting laundry bag at a door",
  },
  {
    number: "03",
    icon: WashingMachine,
    title: "Expert cleaning & care",
    description:
      "Washed, dry-cleaned or pressed by professionals, then passed through our 48-point quality check.",
    imageLabel: "Facility / garments being cleaned",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Fresh at your doorstep",
    description:
      "Neatly packed and delivered back within 24 hours. Track your order live the whole way.",
    imageLabel: "Neatly packed clothes handed over",
  },
];
