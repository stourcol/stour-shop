import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { NavItem } from "@/types";
import { LanguageProvider } from "@/context/LanguageContext";

const navItems: NavItem[] = [
  { title: "home", href: "/" },
  { title: "shop", href: "/shop" },
  { title: "services", href: "/services" },
  { title: "about", href: "/about" },
  { title: "contact", href: "/contact" },
];

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stour",
  description: "Tienda de Impresión 3D, Decoración y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans`}
      >
        <LanguageProvider>
          <Header items={navItems} />
          {children}
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
