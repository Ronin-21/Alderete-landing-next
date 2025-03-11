"use client";

import createLead from "@/utils/createLeads";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  comment: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  // Handle submit
  /* const onSubmit = async (data: FormData) => {
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
      toast.success(
        "Gracias por confiar en Alderete Informatica, nos comunicaremos en breve!!",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
      reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario");
    } finally {
      setIsLoading(false);
    }
  }; */

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      console.log("Data:", data);

      await toast.promise(
        createLead({
          name: data.name,
          email_from: data.email,
          phone: data.phone,
          service: data.service,
          description: data.comment,
        }),
        {
          pending: {
            render: () => (
              <div className="flex flex-col items-center justify-center w-full text-center p-4">
                <p className="text-lg font-medium text-primary-dark">
                  Enviando formulario...
                </p>
              </div>
            ),
            position: "top-center",
            theme: "light",
          },
          success: {
            render: () => {
              return (
                <div className="flex flex-col items-center justify-center w-full text-center p-4">
                  <p className="text-lg font-bold text-primary-dark">
                    ¡Gracias por confiar en Alderete Informática!
                  </p>
                  <p>Nos comunicaremos contigo pronto.</p>
                </div>
              );
            },
            theme: "light",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            transition: Bounce,
          },
          error: {
            render: () => (
              <div className="flex flex-col items-center justify-center w-full text-center p-4">
                <p>Hubo un error al enviar el formulario</p>
              </div>
            ),
            theme: "light",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            transition: Bounce,
          },
        }
      );

      reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un error al enviar el formulario");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center 2xl:w-2/3 xl:w-3/4 w-full h-[1000px] xl:h-[650px] border border-white/40 rounded-xl overflow-hidden">
      <div className="flex items-center justify-center xl:w-2/3 w-full h-full xl:p-20 p-5 bg-gradient-to-b from-primary to-transparent backdrop-blur-md">
        <div className="flex flex-col items-start justify-between w-full h-full gap-6">
          <p className="text-3xl font-semibold text-white font-title">
            Contáctanos
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-8"
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
                <option value="odoo_system">Odoo</option>
                <option value="facil_system">Facíl Virtual</option>
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
      <div className="flex items-center justify-center xl:w-1/3 w-full h-full 2xl:px-10 px-5 py-14 bg-gradient-to-b from-white to-transparent backdrop-blur-md">
        <div className="flex flex-col items-start justify-start w-full h-full gap-10">
          <p className="text-3xl font-semibold font-title">Información</p>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <FiMapPin className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Dirección</p>
                <p>Termas de Rio Hondo</p>
                <p>Ara Gral Belgrano 56</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <FiPhone className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Teléfonos</p>
                <p>+54 9 3858 458253</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <MdOutlineMail className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Email</p>
                <p>contacto@aldereteinformatica.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <IoStorefrontOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Horarios de Atención</p>
                <p>Lunes a Viernes:</p>
                <p>8:00 - 13:00 / 17:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
