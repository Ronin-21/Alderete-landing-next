"use client";

import { Fade } from "react-awesome-reveal";

const TitleHero = () => {
  return (
    <Fade triggerOnce duration={2000}>
      <h1 className="xl:text-6xl text-4xl font-bold font-title max-w-[800px]">
        Soluciones Tecnológicas para Empresas Inteligentes
      </h1>
    </Fade>
  );
};

export default TitleHero;
