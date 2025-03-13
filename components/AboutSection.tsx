import Image from "next/image";
import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="pt-24 pb-32 px-5 bg-background" id="about">
      <div className="container flex flex-col xl:flex-row items-center justify-around mx-auto gap-20">
        <div className="2xl:max-w-[600px] xl:w-1/2 flex flex-col items-start gap-8">
          <h2 className="text-3xl font-semibold font-title text-primary-dark">
            Soluciones Tecnológicas a la Medida de tu Empresa
          </h2>
          <p className="text-secondary">
            En{" "}
            <span className="font-bold text-primary-dark">
              Alderete Informatica & Soporte
            </span>{" "}
            nos enfocamos en brindar un servicio integral y personalizado,
            adaptándonos a las necesidades específicas de cada cliente para
            garantizar una implementación fluida y efectiva. Con un equipo
            altamente capacitado y un enfoque basado en la eficiencia y la
            automatización, ayudamos a las empresas a mejorar su productividad,
            reducir costos y maximizar su rentabilidad. Nuestra misión es
            potenciar la transformación digital de los negocios, proporcionando
            tecnología avanzada, software de calidad y soporte personalizado y
            continuo para asegurar un crecimiento sostenido en un entorno cada
            vez más competitivo.
          </p>
          <Link
            href={"/contacto"}
            className="py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white"
          >
            Contáctanos
          </Link>
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
            <FaLightbulb className="text-5xl text-primary-light" />
            <h3 className="text-xl font-semibold font-title text-primary-dark">
              Soporte Personalizado y Continuo
            </h3>
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
