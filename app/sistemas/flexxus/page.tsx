import TitleSections from "@/components/TitleSections";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flexxus",
};

const Flexxus = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_flexxus.png"
                alt="flexxus logo"
                className="h-20"
                width={200}
                height={100}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Sistema de Gestión ERP
              </h3>
            </div>
            <p className="w-full">
              Flexxus es el software de gestión ERP más elegido de Argentina,
              más de 5.000 empresas en todo el país eligen esta poderosa
              solución para gestionar sus negocios. Diseñado para optimizar la
              gestión interna, Flexxus ofrece una plataforma completa, flexible
              y fácil de usar que se adapta a las necesidades específicas de
              cada negocio. Brinda soluciones específicas para minoristas,
              manufactura , agroindustrias y más. Sus módulos incluyen
              facturación electrónica, CRM, inteligencia de negocios e
              integraciones ecommerces, entre otros.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/flex_portada.png"
            alt="portada flexxus"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Mucho más que un Software de Gestión ERP
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            Estamos convencidos que la principal característica de un Software
            de Gestión ERP debe ser su simpleza y facilidad de uso, y este es
            nuestro principal logro.
          </p>
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=iadZRRdow4U" />
        </div>
      </div>
    </div>
  );
};

export default Flexxus;
