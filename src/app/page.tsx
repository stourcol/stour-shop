import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { ProductGrid } from "@/components/home/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <Hero />

      <Categories />
      <ProductGrid />
    </main>
  );
}
