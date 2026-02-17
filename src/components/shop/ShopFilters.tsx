"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface ShopFiltersProps {
    files?: any;
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    priceRange: [number, number];
    onPriceChange: (range: [number, number]) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    isMobileOpen: boolean;
    onMobileClose: () => void;
}

export function ShopFilters({
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceChange,
    searchQuery,
    onSearchChange,
    isMobileOpen,
    onMobileClose,
}: ShopFiltersProps) {
    const { language } = useLanguage();
    const t = translations[language].shopPage;
    const tCats = translations[language].categories.items;

    const categories = Object.keys(tCats);

    const pricePercentage = (priceRange[1] / 200000) * 100;

    return (
        <>
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onMobileClose}
                />
            )}

            <aside
                className={`fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-[calc(100vh-120px)] w-[280px] bg-white lg:bg-transparent z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto lg:overflow-visible p-6 lg:p-0 border-r lg:border-none border-gray-100 shadow-xl lg:shadow-none
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between lg:hidden mb-6">
                    <h2 className="font-display font-bold text-xl text-[#074a2c]">
                        {t.filter}
                    </h2>
                    <button onClick={onMobileClose} className="cursor-pointer">
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                {/* Search */}
                <div className="mb-8">
                    <label className="block text-sm font-bold text-[#074a2c] mb-2 font-display">
                        {t.search}
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder={t.search}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#fbba16] focus:ring-1 focus:ring-[#fbba16] outline-none transition-all text-sm font-sans"
                        />
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-[#074a2c] mb-3 font-display uppercase tracking-wider">
                        {t.filters.category}
                    </h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => onCategoryChange(null)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
                ${selectedCategory === null
                                    ? "bg-[#074a2c] text-white"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            Start All
                        </button>
                        {categories.map((catKey) => {
                            const catName = tCats[catKey as keyof typeof tCats].name;
                            // Map key to data category name logic would happen in parent or here. 
                            // Assuming exact match or simple mapping. For simplified demo:
                            const isSelected = selectedCategory === catName;

                            return (
                                <button
                                    key={catKey}
                                    onClick={() => onCategoryChange(catName)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
                    ${isSelected
                                            ? "bg-[#074a2c] text-white"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {catName}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold text-[#074a2c] mb-3 font-display uppercase tracking-wider">
                        {t.filters.price}
                    </h3>
                    <div className="px-2">
                        <input
                            type="range"
                            min="0"
                            max="200000"
                            step="5000"
                            value={priceRange[1]}
                            onChange={(e) => onPriceChange([priceRange[0], parseInt(e.target.value)])}
                            className="w-full h-2 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#fbba16] [&::-webkit-slider-thumb]:shadow-md [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-[#fbba16] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
                            style={{
                                background: `linear-gradient(to right, #074a2c ${pricePercentage}%, #e5e7eb ${pricePercentage}%)`
                            }}
                        />
                        <div className="flex justify-between mt-2 text-xs font-medium text-gray-500 font-sans">
                            <span>$0</span>
                            <span>${(priceRange[1] / 1000).toFixed(0)}.000</span>
                        </div>

                        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
                            <span className="text-sm font-medium text-[#074a2c]">
                                Hasta: ${(priceRange[1]).toLocaleString('es-CO')}
                            </span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
