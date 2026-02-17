"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { Code, Printer, Briefcase, Video } from "lucide-react";

const icons = {
    software: Code,
    printing: Printer,
    consulting: Briefcase,
    video: Video,
};

export default function ServicesPage() {
    const { language } = useLanguage();
    const t = translations[language].servicesPage;

    return (
        <section className="py-24 bg-[#fcfaf8]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-[#074a2c] mb-6">
                        {t.title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {t.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {Object.entries(t.items).map(([key, item]) => {
                        const Icon = icons[key as keyof typeof icons];
                        return (
                            <div
                                key={key}
                                className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#fbba16]/20 transition-all duration-300 flex flex-col items-start"
                            >
                                <div className="w-14 h-14 bg-[#074a2c]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#fbba16] transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-[#074a2c] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[#074a2c] mb-3 group-hover:text-[#fbba16] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-sans text-lg">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
