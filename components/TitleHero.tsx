"use client";

import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const TitleHero = () => {
  return (
    <>
      <Slide triggerOnce direction="down" duration={2000}>
        <Fade triggerOnce duration={2000}>
          <h1 className="xl:text-6xl text-4xl font-bold font-title max-w-[800px]">
            Soluciones Tecnológicas para Empresas Inteligentes
          </h1>
        </Fade>
      </Slide>
      <Slide triggerOnce direction="up" duration={2000}>
        <Fade triggerOnce duration={1500}>
          <h2 className="max-w-[600px] xl:text-xl text-lg">
            Expertos en implementación y mantenimiento de software. Nos
            aseguramos que tu tecnología esté siempre lista para impulsar tu
            negocio. Confía en nosotros para un soporte confiable y profesional.
          </h2>
        </Fade>
      </Slide>
      <Slide triggerOnce direction="right" duration={2000}>
        <Link
          href={"/contacto"}
          className="py-3 mt-5 font-semibold text-white transition-all bg-transparent border-2 shadow-2xl px-7 rounded-3xl hover:bg-accent hover:text-primary-dark hover:border-primary-dark"
        >
          Agenda una Consulta
        </Link>
      </Slide>
    </>
  );
};

export default TitleHero;
