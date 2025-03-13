"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Images {
  image: string;
  title: string;
}

export const customersLogos: Images[] = [
  {
    image: "/customer_1.png",
    title: "customer 1",
  },
  {
    image: "/customer_2.png",
    title: "customer 2",
  },
  {
    image: "/customer_3.png",
    title: "customer 3",
  },
  {
    image: "/customer_4.png",
    title: "customer 4",
  },
  {
    image: "/customer_5.png",
    title: "customer 5",
  },
];

const CustomersSection = () => {
  return (
    <div className="min-h-[200px] container mx-auto flex flex-col justify-center items-center gap-16 mb-10">
      <h3 className="xl:text-4xl text-3xl font-semibold text-primary-dark font-title text-center">
        Conocé a algunos de nuestros clientes
      </h3>
      <Swiper
        spaceBetween={0} // Espaciado entre tarjetas
        slidesPerView={4} // Ajusta según el tamaño de cada tarjeta
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-5xl" // Limita el ancho total del slider
        grabCursor={true} // Cambia el cursor al hacer hover
        breakpoints={{
          0: { slidesPerView: 1 }, // 1 tarjeta en pantallas pequeñas
          640: { slidesPerView: 2 }, // 2 tarjetas en tablets
          1024: { slidesPerView: 4 }, // 3 tarjetas en laptops
        }}
      >
        {customersLogos.map((logo, index) => {
          return (
            <SwiperSlide key={index} className="grayscale">
              <Image
                src={logo.image}
                alt={logo.title}
                width={200}
                height={150}
                className="mx-5"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomersSection;
