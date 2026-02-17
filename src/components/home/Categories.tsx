"use client";

import { Briefcase, Dumbbell, Gift, Sofa, ChevronRight } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export function Categories() {
  const { language } = useLanguage();
  const t = translations[language].categories;

  const categories = [
    {
      name: t.items.deportiva.name,
      icon: Dumbbell,
      description: t.items.deportiva.desc,
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: t.items.decoracion.name,
      icon: Sofa,
      description: t.items.decoracion.desc,
      color: "from-green-500/10 to-green-600/10"
    },
    {
      name: t.items.oficina.name,
      icon: Briefcase,
      description: t.items.oficina.desc,
      color: "from-amber-500/10 to-amber-600/10"
    },
    {
      name: t.items.regalos.name,
      icon: Gift,
      description: t.items.regalos.desc,
      color: "from-rose-500/10 to-rose-600/10"
    },
  ];

  return (
    <section className="py-24 bg-[#fcfaf8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-green mb-4">
              {t.title}
            </h2>
            <p className="text-gray-600 font-sans text-lg">
              {t.desc}
            </p>
          </div>
          <button className="group flex items-center gap-2 text-brand-green font-display font-bold hover:text-brand-yellow transition-colors">
            {t.viewAll} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-yellow/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-green/5 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-green/5 flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-green transition-all duration-500 transform group-hover:rotate-6">
                  <category.icon className="w-8 h-8 text-brand-green transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-display font-bold text-brand-green mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-500 font-sans mb-6 group-hover:text-gray-700 transition-colors">
                  {category.description}
                </p>

                <div className="flex items-center text-sm font-display font-bold text-brand-green opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {t.explore} <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>

              {/* Decorative dynamic element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-brand-yellow/10 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
