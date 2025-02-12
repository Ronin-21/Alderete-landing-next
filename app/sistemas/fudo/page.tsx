"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Fudo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Cambia a true después de que el cliente haya renderizado
  }, []);

  return (
    <div className="flex items-center justify-center pb-40 bg-gray-100 pt-60">
      <div className="container flex flex-col items-center justify-center gap-40">
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-start justify-center gap-10">
            <div>
              <Image
                src="/logo_fudo.svg"
                alt="flexxus logo"
                className="mb-3 h-14"
                width={200}
                height={100}
              />
              <p className="text-2xl font-semibold font-title text-primary-dark">
                Software para Restaurantes, Bares y Cafés
              </p>
            </div>
            <p>
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
            alt="portada"
            className="max-w-3xl"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="max-w-xl text-5xl font-semibold text-center font-title text-primary-dark">
            Transformá tu negocio gastronómico con Fudo
          </p>
          <p className="max-w-4xl text-xl text-center">
            Tomá órdenes, emití comandas y cerrá ventas, evitando los errores
            del lápiz y el papel también con nuestra aplicación móvil.
          </p>
          {/* Solo renderiza ReactPlayer en el cliente */}
          {isClient && (
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=SHKl3-SQHD8&t=4s"}
              playing={false}
              width="1080px"
              height="720px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Fudo;
