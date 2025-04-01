import Image from "next/image";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="py-10 mt-10">
      <div className="container flex flex-col items-center justify-center h-full gap-4 mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-around w-full gap-10">
          {/* Redes */}
          <div className="flex flex-col items-center md:items-start gap-4 px-5">
            <p className="text-sm font-medium md:max-w-60 text-center md:text-left">
              En{" "}
              <span className="font-semibold text-primary">
                Alderete Informática y Soporte
              </span>
              , trabajamos para garantizar que tus sistemas sean confiables,
              seguros y eficientes. Confía en nosotros para tus necesidades
              tecnológicas.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/Alderete-Inform%C3%A1tica-Soporte-100088300417489/"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebookF className="p-2 text-white text-4xl rounded-md bg-primary-light hover:bg-primary" />
              </a>
              <a
                href="https://www.instagram.com/aldereteinformatica/"
                aria-label="Instagram"
                target="_blank"
              >
                <RiInstagramFill className="p-2 text-white text-4xl rounded-md bg-primary-light hover:bg-primary" />
              </a>
              <a
                href="https://www.tiktok.com/@alderete.informatica25"
                aria-label="TikTok"
                target="_blank"
              >
                <FaTiktok className="p-2 text-white text-4xl rounded-md bg-primary-light hover:bg-primary" />
              </a>
            </div>
          </div>
          <Image
            src="/logo_icon.jpg"
            alt="Logo Alderete Informática y Soporte"
            className="hidden md:block"
            width={150}
            height={150}
          />
          {/* Contacto */}
          <div className="flex flex-col items-center md:items-start gap-4 px-5">
            <p className="text-xl font-semibold text-primary">
              Agenda una demo
            </p>
            <p className="text-sm md:max-w-[250px] text-center md:text-left">
              Descubre cómo podemos optimizar tu infraestructura tecnológica.
              Contáctanos para una consulta personalizada.
            </p>
            <a
              href="https://wa.me/+543858458253"
              target="_blank"
              className="flex items-center justify-center gap-2 py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white"
            >
              <FaWhatsapp className="text-inherit text-2xl" />
              <p>Contáctanos</p>
            </a>
          </div>
        </div>
        {/* Division Politicas de Privacidad */}
        <div className="w-full mt-6 border-b border-primary-dark/50"></div>
        <p className="text-sm text-gray-500 text-center">
          © 2025 Alderete Informática y Soporte. Todos los derechos reservados.{" "}
          <a
            href="/terminos"
            className="text-primary hover:underline font-semibold"
          >
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
