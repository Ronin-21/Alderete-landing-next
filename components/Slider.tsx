"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const cards = [
  {
    src: "/engine.svg",
    title: "Soluciones Personalizadas",
    content:
      "Ofrecemos soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa, garantizando una integración eficiente y sin complicaciones.",
  },
  {
    src: "/headset.svg",
    title: "Soporte Técnico Continuo",
    content:
      "Nuestro equipo está disponible para solucionar cualquier inconveniente y asegurarse de que tu infraestructura tecnológica esté siempre funcionando al máximo.",
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
  {
    src: "/building-store.svg",
    title: "Consultoría para Empresas",
    content:
      "Brindamos asesoramiento a pequeñas y medianas empresas en administración interna comercial, gestión de costos, compras y ventas para minimizar impuestos. Evaluamos problemas, desarrollamos estrategias y colaboramos en su implementación.",
  },
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={20} // Espaciado entre tarjetas
      slidesPerView={3} // Ajusta según el tamaño de cada tarjeta
      centeredSlides={true} // Mantiene 3 tarjetas centradas
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="w-full max-w-5xl" // Limita el ancho total del slider
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center gap-3 text-white max-w-[300px] text-center">
            <div className="2xl:h-24 h-20 2xl:w-24 w-20 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
              <Image
                src={card.src}
                alt={card.title}
                width={96}
                height={96}
                loading="lazy"
              />
            </div>
            <p className="text-xl font-semibold">{card.title}</p>
            <p className="text-sm">{card.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
