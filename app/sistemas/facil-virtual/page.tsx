import TitleSections from "@/components/TitleSections";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Facil Virtual",
};

const FacilVirtual = () => {
  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 xl:pt-60 pt-32">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex flex-col xl:flex-row w-full items-center justify-center gap-10 px-5">
          <div className="flex flex-col items-start justify-center gap-10 w-full">
            <div>
              <Image
                src="/logo_facil-virtual.png"
                alt="facil virtual logo"
                className="h-20"
                width={200}
                height={100}
              />
              <h3 className="text-2xl font-semibold font-title text-primary-dark">
                Software para Punto de Venta (POS)
              </h3>
            </div>
            <p className="w-full">
              Fácil Virtual es un software para la gestión de ventas y control
              de stock, especialmente diseñadas para pequeños y medianos
              comercios. Sus productos están orientados a optimizar la operativa
              diaria de diversos tipos de negocios, como kioscos, supermercados,
              ferreterías, librerías, tiendas de moda, zapaterías, perfumerías,
              entre otros. Fácil Virtual proporciona herramientas accesibles y
              completas para la gestión eficiente de diversos tipos de
              comercios, adaptándose a las particularidades de cada negocio y
              contribuyendo a mejorar la eficiencia operativa y la satisfacción
              del cliente.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
              Solicitar una demo
            </button>
          </div>
          <Image
            src="/portada_facil-virtual.png"
            alt="portada facil virtual"
            className="xl:max-w-3xl w-full"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <TitleSections>
            <p className="max-w-xl w-full xl:text-5xl text-3xl font-semibold text-center font-title text-primary-dark">
              Interfaz intuitiva y facilidad de uso
            </p>
          </TitleSections>
          <p className="max-w-4xl w-full xl:text-xl text-center">
            El software está diseñado para ser sencillo e intuitivo, lo que
            facilita su adopción y uso diario, incluso para aquellos sin
            experiencia previa en sistemas de gestión.
          </p>
          {/* <VideoPlayer videoUrl="https://www.youtube.com/watch?v=yqtASWk4i08" /> */}
        </div>
      </div>
    </div>
  );
};

export default FacilVirtual;
