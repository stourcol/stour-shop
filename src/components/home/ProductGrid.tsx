"use client";

import { ProductCard } from "@/components/products/ProductCard";
import { products as initialProducts } from "@/data/products";
import { useState, useMemo, useEffect, useRef } from "react";
import { Filter, ArrowUpDown, Flame, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

type SortOption = "relevance" | "price" | "sales";

export function ProductGrid() {
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].productGrid;

  const sortedProducts = useMemo(() => {
    return [...initialProducts].sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      }
      if (sortBy === "sales") {
        return b.sales - a.sales;
      }
      return b.relevance - a.relevance;
    });
  }, [sortBy, initialProducts]); // Added initialProducts to dependency array

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (isPaused || window.innerWidth >= 768) return;

        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const currentScroll = scrollContainer.scrollLeft;
        const scrollStep = 300;

        if (currentScroll >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollTo({
            left: currentScroll + scrollStep,
            behavior: "smooth",
          });
        }
      }, 3000);
    };

    startAutoScroll();

    return () => clearInterval(intervalId);
  }, [isPaused, sortedProducts]);

  const filterOptions = [
    { id: "relevance", label: t.filters.relevance, icon: Star },
    { id: "price", label: t.filters.price, icon: ArrowUpDown },
    { id: "sales", label: t.filters.sales, icon: Flame },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-green mb-4 text-center">
          {t.title}
        </h2>
        <p className="text-gray-600 font-sans text-center max-w-2xl text-lg">
          {t.desc}
        </p>
      </div>

      {/* Filters UI */}
      <div className="flex flex-wrap items-center justify-between mb-10 gap-6 border-y border-gray-100 py-6">
        <div className="flex items-center gap-2 text-brand-green">
          <Filter className="w-5 h-5" />
          <span className="font-display font-bold uppercase tracking-wider text-sm">
            {t.filter}
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSortBy(option.id as SortOption)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-display font-bold text-sm transition-all duration-300 shadow-sm
                ${sortBy === option.id
                  ? "bg-brand-green text-white shadow-brand-green/20"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                }`}
            >
              <option.icon className={`w-4 h-4 ${sortBy === option.id ? "text-brand-yellow" : "text-gray-400"}`} />
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 scrollbar-hide"
      >
        {sortedProducts.map((product) => (
          <div key={product.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="flex justify-center mt-16">
        <Link href="/shop">
          <button className="bg-brand-green text-white px-10 py-4 rounded-full font-display font-bold text-lg hover:bg-brand-green/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-green/20">
            {t.viewAll}
          </button>
        </Link>
      </div>
    </section>
  );
}
