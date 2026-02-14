import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <Hero />

      {/* Placeholder for future sections */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-display font-bold text-[#074a2c] mb-4">
          Nuestras Categorías
        </h3>
        <p className="text-gray-600 font-sans">
          Muy pronto podrás explorar todo nuestro catálogo.
        </p>
      </section>
    </main>
  );
}
