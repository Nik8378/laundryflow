export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  priceFrom: string;
  imageSize: string;
};

export const services: ServiceItem[] = [
  {
    slug: "laundry",
    title: "Wash & Fold",
    description: "Everyday laundry washed, dried and folded with care.",
    priceFrom: "₹99/kg",
    imageSize: "600×400",
  },
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Suits, sarees and delicates treated by experts.",
    priceFrom: "₹199/item",
    imageSize: "600×400",
  },
  {
    slug: "ironing",
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free clothes ready to wear.",
    priceFrom: "₹15/item",
    imageSize: "600×400",
  },
  {
    slug: "shoe-cleaning",
    title: "Shoe Cleaning",
    description: "Sneakers and leather restored to like-new.",
    priceFrom: "₹349/pair",
    imageSize: "600×400",
  },
  {
    slug: "curtain-cleaning",
    title: "Curtains & Drapes",
    description: "Deep cleaning for curtains, sofa covers and drapes.",
    priceFrom: "₹499",
    imageSize: "600×400",
  },
  {
    slug: "blanket-cleaning",
    title: "Blankets & Bedding",
    description: "Quilts, blankets and bedsheets, fresh and sanitized.",
    priceFrom: "₹299",
    imageSize: "600×400",
  },
];

export const stats = [
  { value: "12,000+", label: "Orders Delivered" },
  { value: "2,000+", label: "Happy Customers" },
  { value: "24h", label: "Average Turnaround" },
  { value: "4.9★", label: "Customer Rating" },
];
