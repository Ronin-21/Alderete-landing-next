import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-100 h-[700px] flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-20">
        <h4 className="text-5xl font-medium text-primary font-title">
          Lo que nuestros clientes dicen de nosotros
        </h4>
        <div className="flex items-start justify-center w-full gap-10 text-black">
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <Image
              src="/user_1.jpg"
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
              width={160}
              height={160}
            />
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="text-sm">
                “Gracias a Alderete Informática, hemos logrado automatizar
                nuestros procesos y mejorar nuestra productividad en tiempo
                récord. ¡Su equipo es excepcional!”
              </p>
              <p className="mt-4 text-xl font-semibold">Juan Pérez</p>
              <p className="text-sm text-gray-500">
                Gerente de Operaciones, TechCorp
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <Image
              src="/user_1.jpg"
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
              width={160}
              height={160}
            />
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="text-sm">
                “El soporte técnico que brindan es rápido y eficiente. Saber que
                siempre están disponibles nos da tranquilidad total.”
              </p>
              <p className="mt-4 text-xl font-semibold">María González</p>
              <p className="text-sm text-gray-500">CEO, Innovate Solutions</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 p-4 bg-transparent justify-evenly w-80">
            <Image
              src="/user_1.jpg"
              alt="Shoes"
              className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl border-primary"
              width={160}
              height={160}
            />
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="text-sm">
                “La seguridad de nuestros datos ha mejorado considerablemente
                gracias a sus servicios. Recomiendo Alderete Informática a
                cualquier empresa que valore la excelencia.”
              </p>
              <p className="mt-4 text-xl font-semibold">Carlos Ramírez</p>
              <p className="text-sm text-gray-500">
                Director de IT, SecureTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
