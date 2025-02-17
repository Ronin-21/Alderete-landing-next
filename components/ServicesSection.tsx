import Image from "next/image";

const ServicesSection = () => {
  return (
    <div
      className="min-h-[800px] flex items-center justify-center"
      id="services"
    >
      <div className="container flex flex-col items-center gap-14">
        <div className="flex flex-col items-center justify-center max-w-[600px] text-center gap-5">
          <p className="text-5xl font-semibold text-primary font-title">
            Nuestros Servicios
          </p>
          <p className="text-lg text-secondary">
            Ofrecemos soluciones tecnológicas personalizadas para tu empresa.
            Desde la implementación de software de terceros hasta el
            mantenimiento continuo de sistemas, nuestro objetivo es optimizar tu
            infraestructura tecnológica para impulsar tu negocio.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-10 justify-evenly">
          <div className="h-[400px] w-[330px] shadow-xl rounded-xl bg-white flex flex-col items-center justify-evenly p-6">
            <Image src="/laptop.svg" alt="services" width={100} height={56} />
            <p className="text-xl font-semibold text-primary-dark">
              Implementación de Software
            </p>
            <p className="text-sm text-center text-secondary">
              Nos encargamos de implementar soluciones de software adaptadas a
              tus necesidades empresariales. Aseguramos una integración
              eficiente con tus sistemas actuales para mejorar los procesos de
              tu negocio.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-3xl hover:bg-primary hover:text-white">
              Solicita una Cotización
            </button>
          </div>
          <div className="h-[400px] w-[330px] shadow-xl rounded-xl flex flex-col items-center justify-evenly p-6 bg-white">
            <Image
              src="/settings-hammer.svg"
              alt="services"
              width={100}
              height={56}
            />
            <p className="text-xl font-semibold text-primary-dark">
              Mantenimiento de Sistemas
            </p>
            <p className="text-sm text-center text-secondary">
              Ofrecemos servicios de mantenimiento preventivo y correctivo para
              tus sistemas. Nos aseguramos de que todo funcione sin
              interrupciones, minimizando tiempos de inactividad y maximizando
              la eficiencia operativa.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-3xl hover:bg-primary hover:text-white">
              Solicita una Cotización
            </button>
          </div>
          <div className="h-[400px] w-[330px] shadow-xl rounded-xl flex flex-col items-center justify-evenly p-6 bg-white">
            <Image src="/chat.svg" alt="services" width={100} height={56} />
            <p className="text-xl font-semibold text-primary-dark">
              Soporte Técnico Continuo
            </p>
            <p className="text-sm text-center text-secondary">
              Proporcionamos soporte técnico continuo para garantizar el
              funcionamiento estable de tus sistemas. Nuestro equipo está
              siempre disponible para resolver cualquier incidencia y optimizar
              tu infraestructura tecnológica.
            </p>
            <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-3xl hover:bg-primary hover:text-white">
              Solicita una Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
