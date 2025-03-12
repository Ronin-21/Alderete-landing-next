"use client";

import { sliderCards } from "@/utils/sliderCards";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      grabCursor={true} // Cambia el cursor al hacer hover
      breakpoints={{
        0: { slidesPerView: 1 }, // 1 tarjeta en pantallas pequeñas
        640: { slidesPerView: 2 }, // 2 tarjetas en tablets
        1024: { slidesPerView: 3 }, // 3 tarjetas en laptops
      }}
    >
      {sliderCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-3 text-white xl:max-w-[300px] text-center px-5">
              <div className="2xl:h-24 h-20 2xl:w-24 w-20 p-4 overflow-hidden bg-white rounded-full flex items-center justify-center">
                <Icon className="w-12 h-12 text-primary" />
              </div>
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-sm">{card.content}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
