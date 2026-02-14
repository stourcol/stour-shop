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
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

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
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-3 transition-colors duration-300
                ${selectedCategory === category.name
                  ? "bg-[#fbbf24] text-[#074a2c]"
                  : "bg-[#f8f5f2] group-hover:bg-[#fbbf24]"
                }`}
            >
              <category.icon
                className={`w-8 h-8 md:w-10 md:h-10 stroke-[1.5] transition-colors duration-300
                  ${selectedCategory === category.name
                    ? "text-[#074a2c]"
                    : "text-[#074a2c]"
                  }`}
              />
            </div>
            <span className={`font-medium text-sm md:text-base uppercase tracking-wide transition-colors duration-300
              ${selectedCategory === category.name
                ? "text-[#fbbf24]"
                : "text-[#074a2c] group-hover:text-[#fbbf24]"
              }`}
            >
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
