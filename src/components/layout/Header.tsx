'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavItem } from '@/types';
import { Search, Heart, ShoppingCart, User, Facebook, Instagram, Youtube, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/utils/translations';

interface HeaderProps {
  items: NavItem[];
}

export function Header({ items }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguage = (lang: 'ES' | 'EN') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const t = translations[language];

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="w-full bg-[#074a2c] text-white">
        <div className="container mx-auto flex h-10 items-center justify-between px-4">

          {/* Left: Spacer (was Contact) */}
          <div className="hidden md:block"></div>

          {/* Center: Promotion */}
          <div className="hidden md:block text-xs font-display font-medium tracking-wide">
            {t.promo}
          </div>

          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-xs font-medium hover:text-gray-200 transition-colors cursor-pointer"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <span>{language === 'ES' ? 'ES 🇪🇸' : 'EN 🇺🇸'}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded shadow-lg py-1 z-50 text-black">
                  <button
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-100 ${language === 'ES' ? 'font-bold text-[#074a2c]' : ''}`}
                    onClick={() => toggleLanguage('ES')}
                  >
                    ES 🇪🇸
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-100 ${language === 'EN' ? 'font-bold text-[#074a2c]' : ''}`}
                    onClick={() => toggleLanguage('EN')}
                  >
                    EN 🇺🇸
                  </button>
                </div>
              )}
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center space-x-3 bg-[#074a2c] rounded-bl-lg pl-4">
              <SocialIcon icon={Facebook} href="https://www.facebook.com/col.stour" />
              <SocialIcon icon={Instagram} href="https://www.instagram.com/col.stour/?hl=es-la" />
              <SocialIcon icon={Youtube} href="https://www.youtube.com/@colstour" />
              <SocialIcon icon={WhatsAppIcon} href="https://wa.me/573104752440" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/stour_logo.png"
                alt="Stour Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-black tracking-tight"></span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-display font-medium tracking-wide transition-colors hover:text-[#fbba16] 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#fbba16] 
                  after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100
                  ${item.disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-700'}`}
              >
                {t.nav[item.title as keyof typeof t.nav] || item.title}
              </Link>
            ))}
          </nav>


          {/* Utilities & Mobile Toggle */}
          <div className="flex items-center space-x-6 text-black">
            <button className="hover:text-[#074a2c] transition-colors hidden md:block cursor-pointer">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-[#074a2c] transition-colors hidden md:block cursor-pointer">
              <Heart className="h-5 w-5" />
            </button>
            <button className="hover:text-[#074a2c] transition-colors relative cursor-pointer">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#074a2c] text-[10px] text-white">
                0
              </span>
            </button>
            <button className="hover:text-[#074a2c] transition-colors hidden md:block cursor-pointer">
              <User className="h-5 w-5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden hover:text-[#074a2c] transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[120px] left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-display font-medium tracking-wide transition-colors hover:text-[#074a2c] ${item.disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-700'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[item.title as keyof typeof t.nav] || item.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-[#074a2c]">
                <Search className="h-5 w-5" />
                <span>{t.utilities.search}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-[#074a2c]">
                <Heart className="h-5 w-5" />
                <span>{t.utilities.wishlist}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-[#074a2c]">
                <User className="h-5 w-5" />
                <span>{t.utilities.account}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


function SocialIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fbba16] text-white hover:bg-white hover:text-[#fbba16] transition-colors"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
