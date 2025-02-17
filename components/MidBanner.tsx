import Image from "next/image";

const cards = [
  {
    src: "/engine.svg",
    title: "Soluciones Personalizadas",
    content:
      "Creamos soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa, garantizando una integración eficiente y sin complicaciones.",
  },
  {
    src: "/headset.svg",
    title: "Soporte Técnico Continuo",
    content:
      "Nuestro equipo está disponible 24/7 para solucionar cualquier inconveniente y asegurarse de que tu infraestructura tecnológica esté siempre funcionando al máximo.",
  },
  {
    src: "/lock.svg",
    title: "Seguridad Garantizada",
    content:
      "Implementamos las mejores prácticas de seguridad para proteger tus datos y sistemas, asegurando la confidencialidad y la integridad de tu información.",
  },
  {
    src: "/chart-line-arrow.svg",
    title: "Optimización del Rendimiento",
    content:
      "Mejoramos la eficiencia de tus sistemas y procesos, optimizando los recursos y maximizando la productividad de tu empresa con soluciones inteligentes.",
  },
];

const MidBanner = () => {
  return (
    <div className="h-[1200px] xl:h-[600px] bg-cover bg-center bg-[url('/banner_1.jpg')] relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-80 bg-primary-dark">
        <p className="text-5xl font-semibold text-white text-center">
          Por qué elegir nuestros servicios
        </p>
        <div className="flex flex-col xl:flex-row items-center justify-evenly 2xl:justify-center 2xl:gap-20 w-full">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 text-white max-w-[300px] text-center"
              >
                <div className="2xl:h-24 h-20 2xl:w-24 w-20 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={96}
                    height={96}
                  />
                </div>
                <p className="text-xl font-semibold">{card.title}</p>
                <p className="text-sm">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
