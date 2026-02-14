import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { NavItem } from "@/types";
import { LanguageProvider } from "@/context/LanguageContext";

const navItems: NavItem[] = [
  { title: "home", href: "/" },
  { title: "shop", href: "/shop" },
  { title: "categories", href: "/categories" },
  { title: "about", href: "/about" },
  { title: "contact", href: "/contact" },
  { title: "blog", href: "/blog" },
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
        </LanguageProvider>
      </body>
    </html>
  );
}
