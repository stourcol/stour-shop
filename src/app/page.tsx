import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ProductGrid } from "@/components/home/ProductGrid";
import { Categories } from "@/components/home/Categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductGrid />
      <Categories />
    </main>
  );
}
