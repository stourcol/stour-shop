"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";

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
        <span className="font-sans text-lg font-medium text-[#fbba16]">
          ${product.price}
        </span>
      </div>
    </Link>
  );
}
