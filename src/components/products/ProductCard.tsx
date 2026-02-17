"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

import { formatPrice } from "@/utils/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100 block"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#f8f5f2]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10 font-sans shadow-sm">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}

        {/* Quick Add Button - Appears on hover */}
        <button
          className="absolute bottom-4 right-4 translate-y-12 rounded-full bg-[#fbba16] p-3 text-[#074a2c] shadow-lg transition-all duration-300 hover:bg-[#074a2c] hover:text-[#fbba16] group-hover:translate-y-0"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col p-4">
        <span className="text-xs uppercase tracking-wider text-gray-500 font-sans mb-1">
          {product.category}
        </span>
        <h3 className="font-display text-lg font-bold text-[#074a2c] mb-1 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display text-xl font-bold text-[#fbba16]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through font-sans decoration-gray-400/50">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
