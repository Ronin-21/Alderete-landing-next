"use client";

import { servicesCards } from "@/utils/servicesCards";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="min-h-[800px] flex items-center justify-center my-10 px-5"
      id="services"
    >
      <div className="container flex flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center max-w-[600px] text-center gap-10">
          <h3 className="xl:text-5xl text-4xl font-semibold text-primary font-title">
            Nuestros <span className="ml-2">Servicios</span>
          </h3>
          <p className="xl:text-lg text-base text-secondary">
            Ofrecemos soluciones tecnológicas personalizadas para tu empresa.
            Desde la implementación de software de terceros hasta el
            mantenimiento continuo de sistemas, nuestro objetivo es optimizar tu
            infraestructura tecnológica para impulsar tu negocio.
          </p>
        </div>
        <div
          className={`flex flex-col xl:flex-row items-center gap-16 justify-evenly xl:flex-wrap xl:max-w-[1200px] p-10 transition-all duration-500 ease-in-out overflow-hidden ${
            showAll ? "max-h-[1700px]" : "max-h-[450px]"
          }`}
        >
          {servicesCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="h-[350px] w-[330px] shadow-xl rounded-xl bg-white flex flex-col items-center justify-start gap-5 py-10 px-5 text-center border-t-2 border-primary-light transition-all duration-500 ease-in-out hover:scale-110"
              >
                <Icon className="w-16 h-16 text-accent" />
                <p className="text-xl font-semibold text-primary-dark">
                  {card.title}
                </p>
                <p className="text-sm text-secondary">{card.content}</p>
              </div>
            );
          })}
        </div>
        {/* Botón para mostrar más o menos servicios */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 text-primary font-semibold text-lg transition-transform duration-300 hover:scale-110"
        >
          {showAll ? "Ver menos" : "Ver más"}
          {showAll ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
