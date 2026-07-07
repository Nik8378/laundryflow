import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LaundryFlow — Premium On-Demand Laundry & Dry Cleaning",
    template: "%s | LaundryFlow",
  },
  description:
    "Premium on-demand laundry and dry cleaning platform. Schedule a pickup, track your order live, and get fresh clothes delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
