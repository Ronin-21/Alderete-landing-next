import TitleSections from "@/components/TitleSections";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wubook",
};

const Wubook = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_wubook.png"
                alt="wubook logo"
                className="h-20 invert"
                width={200}
                height={100}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Sistema PMS para Hoteles
              </h3>
            </div>
            <p className="w-full">
              Más de 22.000 establecimientos de todo el mundo utilizan ya el
              software de gestión de propiedades, motor de reservas y gestor de
              canales WuBook. WuBook es una plataforma integral de gestión
              hotelera que ofrece un Sistema de Gestión de Propiedades (PMS) en
              la nube, diseñado para optimizar las operaciones de hoteles,
              hostales, apartamentos y casas rurales. Su objetivo es
              proporcionar herramientas eficientes para la administración diaria
              y mejorar la experiencia tanto del personal como de los huéspedes.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/wubook_portada.webp"
            alt="portada wubook"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Software para gestionar de forma ágil habitaciones y tarifas.
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            Con nuestro software de gestión hotelera puedes gestionar reservas,
            habitaciones, tarifas, limpieza, documentos y mucho más, todo desde
            una única interfaz.
          </p>
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=yqtASWk4i08" />
        </div>
      </div>
    </div>
  );
};

export default Wubook;
