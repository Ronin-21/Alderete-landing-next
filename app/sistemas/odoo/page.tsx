import TitleSections from "@/components/TitleSections";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Odoo",
};

const Odoo = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_odoo.png"
                alt="odoo logo"
                className="mb-5"
                width={250}
                height={150}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Sistema ERP de Gestión Empresarial
              </h3>
            </div>
            <p className="w-full">
              Odoo es un sistema de gestión empresarial (ERP) modular y de
              código abierto que ofrece soluciones integradas para optimizar
              todos los procesos de una empresa en una sola plataforma. Es
              utilizado por pequeñas, medianas y grandes empresas en todo el
              mundo. Con Odoo, puedes gestionar todos los aspectos de tu
              empresa, desde la contabilidad y la facturación hasta la gestión
              de proyectos y la gestión de recursos humanos.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/odoo_portada.png"
            alt="portada odoo"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Sistema de Gestión Empresarial Integral
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            Odoo es una solución flexible y escalable que se adapta a cualquier
            tipo de negocio, desde startups hasta grandes corporaciones.
          </p>
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=nbso3NVz3p8&t=1s" />
        </div>
      </div>
    </div>
  );
};

export default Odoo;
