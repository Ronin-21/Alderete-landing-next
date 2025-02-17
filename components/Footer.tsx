import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-10 mt-10">
      <div className="container flex flex-col items-center justify-center h-full gap-4 mx-auto">
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-start gap-4">
            <p className="text-sm font-medium text-gray-600 max-w-60">
              En{" "}
              <span className="font-semibold text-primary">
                Alderete Informática y Soporte
              </span>
              , trabajamos para garantizar que tus sistemas sean confiables,
              seguros y eficientes. Confía en nosotros para tus necesidades
              tecnológicas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" target="_blank">
                <Image
                  src="/brand-facebook.svg"
                  alt="Facebook"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#" aria-label="Instagram" target="_blank">
                <Image
                  src="/brand-instagram.svg"
                  alt="Instagram"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                  width={35}
                  height={35}
                />
              </a>
              <a href="#" aria-label="TikTok" target="_blank">
                <Image
                  src="/brand-tiktok.svg"
                  alt="TikTok"
                  className="p-1 rounded-md bg-primary-light hover:bg-primary"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>
          <Image
            src="/logo_icon.jpg"
            alt="Logo de Alderete Informática y Soporte"
            width={150}
            height={150}
          />
          <div className="flex flex-col items-start gap-4">
            <p className="text-xl font-semibold text-primary">
              Agenda una demo
            </p>
            <p className="text-sm max-w-[250px]">
              Descubre cómo podemos optimizar tu infraestructura tecnológica.
              Contáctanos para una consulta personalizada.
            </p>
            <a
              href="https://wa.me/+543858458253"
              target="_blank"
              className="flex items-center justify-center gap-2 py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white"
            >
              <Image
                src="/brand-whatsapp.svg"
                alt="Whatsapp"
                width={30}
                height={30}
              />
              <p>Contáctanos</p>
            </a>
          </div>
        </div>
        <div className="w-full mt-6 border-b border-primary-dark/50"></div>
        <p className="text-sm text-gray-500">
          © 2025 Alderete Informática y Soporte. Todos los derechos reservados.{" "}
          <a href="#" className="text-primary hover:underline font-semibold">
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
