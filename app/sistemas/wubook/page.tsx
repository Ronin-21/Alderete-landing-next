"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Wubook = () => {
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
                src="/logo_wubook.png"
                alt="flexxus logo"
                className="h-20 invert"
                width={200}
                height={100}
              />
              <p className="text-2xl font-semibold font-title text-primary-dark">
                Sistema PMS para Hoteles
              </p>
            </div>
            <p>
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
            alt="portada"
            className="max-w-3xl"
            width={768}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="max-w-3xl text-5xl font-semibold text-center font-title text-primary-dark">
            Software para gestionar de forma ágil habitaciones y tarifas.
          </p>
          <p className="max-w-4xl text-xl text-center">
            Con nuestro software de gestión hotelera puedes gestionar reservas,
            habitaciones, tarifas, limpieza, documentos y mucho más, todo desde
            una única interfaz.
          </p>
          {/* Solo renderiza ReactPlayer en el cliente */}
          {isClient && (
            <ReactPlayer
              url={"https://www.youtube.com/watch?v=yqtASWk4i08"}
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

export default Wubook;
