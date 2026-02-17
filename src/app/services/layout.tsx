import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios | Stour",
    description: "Conoce nuestros servicios de impresión 3D y personalización.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
