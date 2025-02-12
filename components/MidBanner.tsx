import Image from "next/image";

const MidBanner = () => {
  return (
    <div className="h-[600px] bg-cover bg-center bg-[url('/banner_1.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-80 bg-primary-dark">
        <p className="text-5xl font-semibold text-white">
          Por qué elegir nuestros servicios
        </p>
        <div className="flex items-center justify-around gap-10">
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <div className="h-24 w-24 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
              <Image
                src="/engine.svg"
                alt=""
                className="h-full"
                width={96}
                height={96}
              />
            </div>
            <p className="text-xl font-semibold">Soluciones Personalizadas</p>
            <p className="text-sm">
              Creamos soluciones tecnológicas adaptadas a las necesidades
              específicas de tu empresa, garantizando una integración eficiente
              y sin complicaciones.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <div className="h-24 w-24 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
              <Image
                src="/headset.svg"
                alt=""
                className="h-full"
                width={96}
                height={96}
              />
            </div>
            <p className="text-xl font-semibold">Soporte Técnico Continuo</p>
            <p className="text-sm">
              Nuestro equipo está disponible 24/7 para solucionar cualquier
              inconveniente y asegurarse de que tu infraestructura tecnológica
              esté siempre funcionando al máximo.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <div className="h-24 w-24 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
              <Image
                src="/lock.svg"
                alt=""
                className="h-full"
                width={96}
                height={96}
              />
            </div>
            <p className="text-xl font-semibold">Seguridad Garantizada</p>
            <p className="text-sm">
              Implementamos las mejores prácticas de seguridad para proteger tus
              datos y sistemas, asegurando la confidencialidad y la integridad
              de tu información.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 text-white w-[300px] text-center">
            <div className="h-24 w-24 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
              <Image
                src="/chart-line-arrow.svg"
                alt=""
                width={96}
                height={96}
              />
            </div>
            <p className="text-xl font-semibold">
              Optimización del Rendimiento
            </p>
            <p className="text-sm">
              Mejoramos la eficiencia de tus sistemas y procesos, optimizando
              los recursos y maximizando la productividad de tu empresa con
              soluciones inteligentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
