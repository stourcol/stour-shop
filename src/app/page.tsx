import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-24 text-center">
      <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full shadow-xl">
        <Image
          src="/images/stour_logo.png"
          alt="Stour Logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="mb-4 text-5xl font-display font-bold text-[#074a2c]">
        Stour
      </h1>
      <p className="mb-8 max-w-lg text-lg text-gray-600 font-display font-medium">
        Tienda de Impresión 3D, Decoración y más.
      </p>

      <div className="flex gap-4">
        <Link
          href="/shop"
          className="rounded-full bg-[#074a2c] px-8 py-3 text-white transition-colors hover:bg-[#063d24] font-display font-medium"
        >
          Ir a la Tienda
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[#074a2c] px-8 py-3 text-[#074a2c] transition-colors hover:bg-[#f0fdf4] font-display font-medium"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}
