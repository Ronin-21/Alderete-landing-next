import Image from "next/image";

const TestimonialsSection = () => {
  return (
    <div className="min-h-[700px] flex items-center justify-center my-10">
      <div className="container flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-5">
          <h3 className="xl:text-5xl text-4xl font-semibold text-primary font-title text-center">
            Nuestro equipo de expertos
          </h3>
          <p className="text-lg text-secondary text-center max-w-lg">
            Conoce a las mentes detrás de nuestra plataforma y cómo trabajamos
          </p>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center w-full gap-5 text-black">
          <div className="flex flex-col items-center gap-5 p-4 bg-transparent justify-evenly w-auto">
            <div className="custom-border relative">
              <Image
                src="/user_1.jpg"
                alt="user 1"
                className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl"
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="mt-2 text-xl font-semibold">Juan Pérez</p>
              <p className="text-sm text-gray-500">
                Gerente de Operaciones, TechCorp
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-4 bg-transparent justify-evenly w-auto">
            <div className="custom-border relative">
              <Image
                src="/user_1.jpg"
                alt="user 1"
                className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl"
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="mt-2 text-xl font-semibold">Juan Pérez</p>
              <p className="text-sm text-gray-500">
                Gerente de Operaciones, TechCorp
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-4 bg-transparent justify-evenly w-auto">
            <div className="custom-border relative">
              <Image
                src="/user_1.jpg"
                alt="user 1"
                className="object-cover object-center w-40 h-40 border-2 rounded-full shadow-xl"
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col items-center gap-1 text-lg text-center">
              <p className="mt-2 text-xl font-semibold">Juan Pérez</p>
              <p className="text-sm text-gray-500">
                Gerente de Operaciones, TechCorp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
