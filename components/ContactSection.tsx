"use client";

import createLead from "@/utils/createLeads";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  comment: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  // Handle submit
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      console.log("Data:", data);

      await createLead({
        name: data.name,
        email_from: data.email,
        phone: data.phone,
        service: data.service,
        description: data.comment,
      });

      setIsLoading(false);
      alert("Contacto enviado con éxito");
      reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-[800px] bg-cover bg-center bg-[url('/contact_bg.jpg')] relative"
      id="contact"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-16 bg-opacity-50 shadow-xl bg-primary-dark">
        <div className="flex flex-col xl:flex-row items-center justify-center 2xl:w-2/3 xl:w-3/4 h-[600px] border border-white/40">
          <div className="flex items-center justify-center w-2/3 h-full p-20 bg-gradient-to-b from-primary to-transparent backdrop-blur-md">
            <div className="flex flex-col items-start justify-center w-full h-full gap-6">
              <p className="font-medium text-white uppercase font-title">
                Contact us
              </p>
              <p className="text-3xl font-semibold text-white font-title">
                Get In Touch
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-6"
              >
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3"
                    {...register("name", { required: true })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex w-full h-10 gap-6">
                  <input
                    type="text"
                    placeholder="Teléfono"
                    className="w-full p-3"
                    {...register("phone")}
                  />
                  <select
                    className="w-full px-3"
                    {...register("service", { required: true })}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="flexxus_system">Flexxus</option>
                    <option value="alegra_system">Alegra</option>
                    <option value="wubook_system">WuBook</option>
                    <option value="fudo_system">Fudo</option>
                  </select>
                </div>
                <textarea
                  className="h-32 p-3"
                  placeholder="Cuéntanos tu problema"
                  {...register("comment")}
                ></textarea>
                <button
                  type="submit"
                  className="self-start py-3 font-semibold transition-all duration-200 ease-out shadow-2xl text-primary-dark bg-accent px-7 rounded-xl hover:bg-primary hover:text-white"
                  disabled={isLoading}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3 h-full 2xl:px-10 xl:px-5 py-14 bg-gradient-to-b from-white to-transparent backdrop-blur-md">
            <div className="flex flex-col items-start justify-start w-full h-full gap-10">
              <p className="text-3xl font-semibold font-title">Contácto</p>
              <div className="flex flex-col gap-8 w-full">
                <div className="flex items-center gap-4">
                  <Image
                    src="/map-pin-white.svg"
                    alt=""
                    className="p-3 rounded-full bg-primary"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Dirección</p>
                    <p>Ara Gral Belgrano 56</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/phone-white.svg"
                    alt=""
                    className="p-3 rounded-full bg-primary"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Teléfonos</p>
                    <p>+54 9 3858 458253</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/mail-white.svg"
                    alt=""
                    className="p-3 rounded-full bg-primary"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Email</p>
                    <p>contacto@aldereteinformatica.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/building-store.svg"
                    alt=""
                    className="p-3 rounded-full bg-primary"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">Horarios de Atención</p>
                    <p>Lunes a Viernes: 8:00 am - 5:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
