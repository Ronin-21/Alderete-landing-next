"use client"; // Solo si usas App Router (Next.js 13+)

import { Fade, Zoom } from "react-awesome-reveal";

const TitleFadeIn = () => {
  return (
    <Fade triggerOnce>
      <Zoom triggerOnce>
        <h1 className="xl:text-6xl text-4xl font-bold font-title max-w-[800px]">
          Soluciones Tecnológicas para Empresas Inteligentes
        </h1>
      </Zoom>
    </Fade>
  );
};

export default TitleFadeIn;
