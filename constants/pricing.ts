export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const perOrderPlans: PricingPlan[] = [
  {
    name: "Wash & Fold",
    tagline: "Everyday essentials",
    price: "₹99",
    unit: "/kg",
    features: [
      "Free pickup & delivery",
      "48-hour turnaround",
      "Eco-friendly detergents",
      "Live order tracking",
    ],
    cta: "Book Now",
  },
  {
    name: "Wash & Iron",
    tagline: "Ready to wear",
    price: "₹149",
    unit: "/kg",
    features: [
      "Everything in Wash & Fold",
      "Professional steam ironing",
      "24-hour express available",
      "Folded & packed neatly",
    ],
    cta: "Book Now",
    featured: true,
  },
  {
    name: "Dry Cleaning",
    tagline: "Delicate care",
    price: "₹199",
    unit: "/item",
    features: [
      "Suits, sarees & delicates",
      "Expert stain treatment",
      "Premium garment covers",
      "48-point quality check",
    ],
    cta: "Book Now",
  },
];

export const monthlyPlans: PricingPlan[] = [
  {
    name: "Solo",
    tagline: "For one, sorted",
    price: "₹1,499",
    unit: "/month",
    features: [
      "Up to 20 kg laundry",
      "4 scheduled pickups",
      "Free pickup & delivery",
      "Pause anytime",
    ],
    cta: "Start Plan",
  },
  {
    name: "Family",
    tagline: "The whole household",
    price: "₹2,999",
    unit: "/month",
    features: [
      "Up to 45 kg laundry",
      "8 scheduled pickups",
      "Priority 24h turnaround",
      "Dedicated support",
    ],
    cta: "Start Plan",
    featured: true,
  },
  {
    name: "Family+",
    tagline: "Laundry, forgotten",
    price: "₹4,499",
    unit: "/month",
    features: [
      "Unlimited laundry",
      "Unlimited pickups",
      "Includes dry cleaning credits",
      "Express always free",
    ],
    cta: "Start Plan",
  },
];
