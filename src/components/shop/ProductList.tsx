"use client";

import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/utils/format";

interface ProductListProps {
    products: Product[];
    viewMode: "grid" | "list";
}

export function ProductList({ products, viewMode }: ProductListProps) {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <SearchIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#074a2c] mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query.</p>
            </div>
        );
    }

    if (viewMode === "grid") {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {products.map((product) => (
                <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                    <div className="relative w-full sm:w-48 aspect-square sm:aspect-auto bg-[#f8f5f2]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-gray-500 font-sans mb-1 block">
                                    {product.category}
                                </span>
                                <h3 className="font-display text-xl font-bold text-[#074a2c] mb-2">
                                    {product.name}
                                </h3>
                            </div>
                            {product.originalPrice && product.originalPrice > product.price && (
                                <div className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full font-sans shadow-sm">
                                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                </div>
                            )}
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {product.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-3">
                                <span className="font-display text-2xl font-bold text-[#fbba16]">
                                    {formatPrice(product.price)}
                                </span>
                                {product.originalPrice && product.originalPrice > product.price && (
                                    <span className="text-sm text-gray-400 line-through font-sans decoration-gray-400/50">
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>

                            <button
                                className="bg-[#fbba16] text-[#074a2c] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#074a2c] hover:text-[#fbba16] transition-colors flex items-center gap-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Add to cart logic here
                                }}
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Add
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

function SearchIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    )
}
