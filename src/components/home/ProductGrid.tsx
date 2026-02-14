"use client";

import { ProductCard } from "@/components/products/ProductCard";

import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#074a2c] mb-4 text-center">
          Nuevos Lanzamientos
        </h2>
        <p className="text-gray-600 font-sans text-center max-w-2xl">
          Descubre nuestra última colección de productos diseñados para inspirar
          y organizar tu espacio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#074a2c] text-white px-8 py-3 rounded-full font-display font-bold hover:bg-[#063d24] transition-colors shadow-lg shadow-[#074a2c]/20">
          Ver Todo el Catálogo
        </button>
      </div>
    </section>
  );
}
