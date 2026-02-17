"use client";

import { useState, useMemo } from "react";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { ProductList } from "@/components/shop/ProductList";
import { products as initialProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
    const { language } = useLanguage();
    const t = translations[language].shopPage;

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    // Filter States
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);

    // Derived filtered products
    const filteredProducts = useMemo(() => {
        return initialProducts.filter((product) => {
            // Search
            const matchesSearch = product.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            // Category
            const matchesCategory = selectedCategory
                ? product.category === selectedCategory
                : true;

            // Price
            const matchesPrice =
                product.price >= priceRange[0] && product.price <= priceRange[1];

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [searchQuery, selectedCategory, priceRange]);

    return (
        <div className="min-h-screen bg-[#fcfaf8]">
            {/* Header / Title Section */}
            <div className="bg-[#074a2c] text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        {t.title}
                    </h1>
                    <p className="text-[#fbba16] text-lg font-medium tracking-wide font-display">
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <div className="lg:w-[280px] flex-shrink-0">
                        <ShopFilters
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                            priceRange={priceRange}
                            onPriceChange={setPriceRange}
                            searchQuery={searchQuery}
                            onSearchChange={setSearchQuery}
                            isMobileOpen={isMobileFiltersOpen}
                            onMobileClose={() => setIsMobileFiltersOpen(false)}
                        />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMobileFiltersOpen(true)}
                                    className="lg:hidden flex items-center gap-2 text-[#074a2c] font-bold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                    {t.filter}
                                </button>
                                <span className="text-gray-500 font-sans text-sm">
                                    {filteredProducts.length} {t.results}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 ml-auto">
                                <div className="bg-gray-100 p-1 rounded-lg flex items-center">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-md transition-all cursor-pointer ${viewMode === "grid"
                                            ? "bg-white text-[#074a2c] shadow-sm"
                                            : "text-gray-400 hover:text-gray-600"
                                            }`}
                                    >
                                        <LayoutGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-md transition-all cursor-pointer ${viewMode === "list"
                                            ? "bg-white text-[#074a2c] shadow-sm"
                                            : "text-gray-400 hover:text-gray-600"
                                            }`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product List */}
                        <ProductList products={filteredProducts} viewMode={viewMode} />
                    </div>
                </div>
            </div>
        </div>
    );
}
