'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, ArrowRight } from 'lucide-react';

interface Hotspot {
    id: number;
    top: number; // percentage
    left: number; // percentage
    price: string;
    label: string;
}

const hotspots: Hotspot[] = [
    { id: 1, top: 40, left: 30, price: '$39', label: 'Maceta Geométrica' },
    { id: 2, top: 65, left: 60, price: '$25', label: 'Soporte Auriculares' },
    { id: 3, top: 30, left: 75, price: '$45', label: 'Lámpara Voronoi' },
];

export function Hero() {
    const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#074a2c] text-white overflow-hidden py-4 relative">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-start z-10">
                    <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight leading-none">
                        Stour
                    </h1>
                    <h2 className="text-2xl lg:text-4xl font-display font-medium mb-4 text-[#fbba16]">
                        Decoración & <br />Impresión 3D
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-md font-sans leading-relaxed">
                        Transformamos tus espacios con diseños únicos, modernos y personalizados.
                        Tecnología y arte unidos para tu hogar u oficina.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#fbba16] text-[#074a2c] px-8 py-3 rounded-full font-display font-bold hover:bg-white transition-colors flex items-center gap-2">
                            Ver Tienda
                        </button>
                        <button className="border border-white/30 text-white px-8 py-3 rounded-full font-display font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                            Explorar Más <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Image with Hotspots */}
                <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] overflow-hidden rounded-t-[4rem] lg:rounded-t-none lg:rounded-l-[8rem]">
                    <Image
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                        alt="Stour Decoration Setup"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />

                    {/* Hotspots */}
                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute z-20 group"
                            style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
                        >
                            <button
                                className="relative w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white hover:scale-110 transition-transform cursor-pointer"
                                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                aria-label={`Ver precio de ${spot.label}`}
                            >
                                <div className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping"></div>
                                <Plus className="w-4 h-4 text-white" />
                            </button>

                            {/* Tooltip / Price Tag */}
                            <div
                                className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-[#074a2c] px-4 py-2 rounded-xl shadow-xl transition-all duration-300 origin-left 
                  ${activeHotspot === spot.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                  flex flex-col min-w-[120px]`}
                            >
                                <span className="text-xs text-gray-500 font-sans">{spot.label}</span>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold font-display">{spot.price}</span>
                                    <div className="w-5 h-5 rounded-full bg-[#fbba16] flex items-center justify-center text-white text-xs">
                                        <Plus className="w-3 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Floating Card Example */}
                    <div className="absolute bottom-8 right-8 bg-[#000000]/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden sm:block max-w-xs">
                        <h3 className="text-white font-display font-bold text-lg mb-1">Personalización 3D</h3>
                        <p className="text-gray-300 text-sm font-sans">Elige color, tamaño y material. Creamos piezas únicas para ti.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
