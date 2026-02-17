"use client";

import { products } from "@/data/products";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  // Update selected image if product changes (though this component remounts on nav)
  if (product && selectedImage === "") {
    setSelectedImage(product.image);
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-display font-bold text-[#074a2c] mb-4">
          Producto no encontrado
        </h1>
        <p className="text-gray-600 mb-8">El producto que buscas no existe.</p>
        <Link
          href="/"
          className="bg-[#074a2c] text-white px-8 py-3 rounded-full font-bold hover:bg-[#063d24] transition-colors"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <main className="min-h-screen bg-white pb-24 pt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb / Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-500 hover:text-[#074a2c] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            {(product.images && product.images.length > 0) && (
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:w-24 flex-shrink-0 scrollbar-hide">
                {[product.image, ...product.images].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${selectedImage === img
                      ? "border-[#074a2c]"
                      : "border-transparent hover:border-gray-200"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="relative aspect-square flex-1 rounded-3xl overflow-hidden bg-[#f8f5f2] shadow-sm">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="text-[#fbba16] font-display font-bold tracking-wider uppercase mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#074a2c] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex text-[#fbba16]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-400 ml-2 text-sm">(128 reviews)</span>
            </div>

            <p className="text-3xl font-sans font-bold text-[#074a2c] mb-6">
              ${product.price}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            {product.features && (
              <div className="mb-8">
                <h3 className="font-display font-bold text-[#074a2c] mb-4">
                  Características:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <Check className="w-5 h-5 text-[#fbba16] mr-3 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto border-t border-gray-100 pt-8">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between bg-[#f8f5f2] rounded-full px-4 py-3 min-w-[140px]">
                <button
                  onClick={decreaseQuantity}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-[#074a2c] transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-bold text-[#074a2c] text-lg w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQuantity}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-[#074a2c] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="flex-1 bg-[#074a2c] text-white px-8 py-4 rounded-full font-display font-bold hover:bg-[#063d24] transition-colors flex items-center justify-center gap-3 shadow-lg shadow-[#074a2c]/20 cursor-pointer">
                <ShoppingCart className="w-5 h-5" />
                Agregar al Carrito • ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
