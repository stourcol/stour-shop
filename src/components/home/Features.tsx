"use client";

import { Truck, ShieldCheck, FileText } from "lucide-react";

const features = [
    {
        icon: <Truck className="w-10 h-10 text-brand-green" />,
        title: "Entrega rápida",
        description: "Envíos a todo Colombia con la mayor velocidad y cuidado para tus piezas decorativas.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-brand-green" />,
        title: "Pago seguro",
        description: "Múltiples métodos de pago con encriptación de seguridad para tu tranquilidad.",
    },
    {
        icon: <FileText className="w-10 h-10 text-brand-green" />,
        title: "Realiza tu cotización",
        description: "Presupuestos personalizados para tus proyectos de impresión 3D a medida.",
    },
];

export function Features() {
    return (
        <section className="py-16 bg-[#fcfaf8]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-brand-green mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 font-sans leading-relaxed max-w-xs">
                                {feature.description}
                            </p>
                            <div className="mt-6 w-12 h-1 bg-brand-yellow rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
