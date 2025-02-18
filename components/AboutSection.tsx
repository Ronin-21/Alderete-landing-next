import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="pt-24 pb-32 px-5 bg-background" id="about">
      <div className="container flex flex-col xl:flex-row items-center justify-around mx-auto gap-20">
        <div className="2xl:max-w-[600px] xl:w-1/2 flex flex-col items-start gap-8">
          <p className="text-3xl font-semibold font-title text-primary-dark">
            Soluciones Tecnológicas a la Medida de tu Empresa
          </p>
          <p className="text-secondary">
            En Alderete Informática y Soporte, nos especializamos en la
            implementación, mantenimiento y soporte de soluciones tecnológicas.
            Nuestro enfoque está orientado a ofrecerte el respaldo necesario
            para que tu empresa pueda seguir creciendo con la máxima eficiencia.
          </p>
          <button className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white">
            Contáctanos
          </button>
        </div>
        <div className="relative">
          <Image
            src="/services_1.jpg"
            alt="sevice_1"
            className="shadow-xl rounded-xl 2xl:w-[600px] mb-5 xl:mb-0"
            height={300}
            width={500}
          />
          <div className="xl:w-[500px] w-full shadow-xl rounded-xl flex flex-col items-center justify-between p-5 xl:absolute xl:-bottom-14 xl:-left-12 bg-white gap-2">
            <Image
              src="/card_icon.svg"
              alt="card_icon"
              height={56}
              width={56}
            />
            <p className="text-xl font-semibold font-title text-primary-dark">
              Soporte Personalizado y Continuo
            </p>
            <p className="text-center text-secondary">
              Nuestro equipo de expertos está siempre listo para ofrecerte
              soporte personalizado y mantenimiento de los sistemas que impulsan
              tu negocio. Nos aseguramos de que tu tecnología funcione de manera
              óptima, adaptándonos a las necesidades cambiantes de tu empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
