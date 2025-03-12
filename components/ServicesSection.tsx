import { servicesCards } from "@/utils/servicesCards";
import TitleSections from "./TitleSections";

const ServicesSection = () => {
  return (
    <div
      className="min-h-[800px] flex items-center justify-center my-10 px-5"
      id="services"
    >
      <div className="container flex flex-col items-center gap-16">
        <div className="flex flex-col items-center justify-center max-w-[600px] text-center gap-7">
          <TitleSections>
            <p className="xl:text-5xl text-4xl font-semibold text-primary font-title">
              Nuestros <span className="ml-2">Servicios</span>
            </p>
          </TitleSections>
          <p className="xl:text-lg text-base text-secondary">
            Ofrecemos soluciones tecnológicas personalizadas para tu empresa.
            Desde la implementación de software de terceros hasta el
            mantenimiento continuo de sistemas, nuestro objetivo es optimizar tu
            infraestructura tecnológica para impulsar tu negocio.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-10 justify-evenly xl:flex-wrap xl:max-w-[1200px]">
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
      </div>
    </div>
  );
};

export default ServicesSection;
