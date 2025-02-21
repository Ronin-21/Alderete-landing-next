import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ClientSideToastContainer from "@/components/ToastContainer";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Exo_2, Lato } from "next/font/google";
import "./globals.css";

const fontExo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

const fontLato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"], // Aquí puedes agregar los subconjuntos que necesites
  preload: true, // Asegúrate de que esté habilitado si lo deseas
});

export const metadata: Metadata = {
  title: {
    default: "Alderete Informática",
    template: "%s - Alderete Informática",
  },
  description:
    "Expertos en implementación y mantenimiento de software para tu negocio. Confía en nosotros para un soporte confiable y profesional.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fontExo.variable} ${fontLato.variable} antialiased`}>
        <ClientSideToastContainer />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
