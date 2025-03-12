import TitleSections from "@/components/TitleSections";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alegra",
};

const Alegra = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_alegra.webp"
                alt="alegra logo"
                className="h-20 mb-3"
                width={200}
                height={100}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Software de Gestión y Facturación
              </h3>
            </div>
            <p className="w-full">
              Más de 40.000 pymes en Argentina usan Alegra para ganar tiempo y
              tranquilidad. Alegra es un software de gestión y facturación en la
              nube diseñado para simplificar las operaciones de pequeñas y
              medianas empresas (pymes) y autónomos. Ofrece una solución
              integral que abarca desde la facturación electrónica hasta el
              control de inventarios y la gestión contable. Alegra es una
              herramienta integral que facilita la gestión financiera y
              administrativa de pymes y autónomos, optimizando procesos y
              asegurando el cumplimiento de las normativas fiscales vigentes.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/alegra_portada.webp"
            alt="portada alegra"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Con Alegra le das más superpoderes a tu negocio
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            Con Alegra tenés el control detallado de tu negocio: Facturá,
            gestioná tu stock y mirá reportes de ventas de forma ágil y
            sencilla.
          </p>
          <VideoPlayer videoUrl="https://youtu.be/I30x85vYXLU?si=pActmta_GAeoYPob" />
        </div>
      </div>
    </div>
  );
};

export default Alegra;
