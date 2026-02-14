import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#074a2c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">
              Stour
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed mb-6">
              Transformando espacios con diseño y tecnología. Piezas únicas para
              tu hogar y oficina.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/col.stour/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbba16] hover:text-[#074a2c] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/col.stour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbba16] hover:text-[#074a2c] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@colstour"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fbba16] hover:text-[#074a2c] transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-[#fbba16]">
              Explorar
            </h3>
            <ul className="space-y-3 font-sans">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-[#fbba16]">
              Categorías
            </h3>
            <ul className="space-y-3 font-sans">
              <li>
                <Link
                  href="/category/decoracion"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Decoración
                </Link>
              </li>
              <li>
                <Link
                  href="/category/oficina"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Oficina
                </Link>
              </li>
              <li>
                <Link
                  href="/category/regalos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Regalos
                </Link>
              </li>
              <li>
                <Link
                  href="/category/impresion-3d"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impresión 3D
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-[#fbba16]">
              Contacto
            </h3>
            <ul className="space-y-4 font-sans text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#fbba16] shrink-0" />
                <span>Av. Principal 123, Ciudad Diseño, CD 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#fbba16] shrink-0" />
                <span>
                  +57 3104752440</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#fbba16] shrink-0" />
                <span>stouroficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-sans">
          <p>
            &copy; {new Date().getFullYear()} Stour. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacidad
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
