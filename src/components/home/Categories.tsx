"use client";

import { Briefcase, Dumbbell, Gift, Sofa } from "lucide-react";
import React from "react";

const categories = [
  { name: "Deportiva", icon: Dumbbell },
  { name: "Decoracion", icon: Sofa },
  { name: "Oficina", icon: Briefcase },
  { name: "Regalos", icon: Gift },
];

export function Categories() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl font-display font-bold text-[#074a2c] mb-8 text-center">
        Nuestras Categorías
      </h3>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => setSelectedCategory(category.name)}
          >
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 border-2 bg-[#f8f5f2]
                ${
                  selectedCategory === category.name
                    ? "border-[#fcd34d]"
                    : "border-transparent group-hover:border-[#fcd34d]"
                }`}
            >
              <category.icon className="w-8 h-8 md:w-10 md:h-10 text-[#074a2c] stroke-[1.5]" />
            </div>
            <span className="font-display font-medium text-sm md:text-base uppercase tracking-wide text-[#074a2c] transition-colors duration-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
