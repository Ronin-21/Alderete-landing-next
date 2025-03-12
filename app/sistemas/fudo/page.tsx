import TitleSections from "@/components/TitleSections";
import VideoPlayer from "@/components/VideoPlayer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fudo",
};

const Fudo = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_fudo.svg"
                alt="fudo logo"
                className="mb-3 h-14"
                width={200}
                height={100}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Software para Restaurantes, Bares y Cafés
              </h3>
            </div>
            <p className="w-full">
              Más de 25.000 negocios nos eligen en Latinoamérica. Un software
              simple pero potente. Fudo es una aplicación web diseñada para
              administrar y gestionar negocios gastronómicos, como bares, cafés
              y restaurantes. Su implementación es inmediata, ya que no requiere
              instalación; simplemente se accede a través de Internet mediante
              cualquier navegador. El sistema es flexible y no exige hardware
              especializado, funcionando en cualquier dispositivo con Windows,
              Mac o Linux. Al ser una aplicación en línea, se puede acceder
              desde cualquier lugar y en cualquier momento.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/fudo_portada.webp"
            alt="portada fudo"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Transformá tu negocio gastronómico con Fudo
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            Tomá órdenes, emití comandas y cerrá ventas, evitando los errores
            del lápiz y el papel también con nuestra aplicación móvil.
          </p>
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=SHKl3-SQHD8&t=4s" />
        </div>
      </div>
    </div>
  );
};

export default Fudo;
