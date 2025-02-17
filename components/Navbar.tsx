"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      // Asegura que se ejecuta en el cliente
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed z-20 flex items-center justify-center w-full text-lg shadow-xl bg-primary">
      <div className="container relative flex items-center justify-between h-20 text-white">
        <Link href={"/"} className="flex items-center">
          <Image src="/logo_white.png" alt="logo" width={150} height={64} />
        </Link>
        {/* Menu desktop */}
        <div className="hidden relative xl:flex items-center h-full gap-10 justify-evenly">
          <button onClick={() => scrollToTop()}>Inicio</button>
          <button
            className="flex items-center h-full gap-1 cursor-pointer"
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
          >
            Soluciones
            <Image
              src="/down-arrow.svg"
              alt="arrow"
              className="w-6"
              width={100}
              height={24}
            />
          </button>
          <button onClick={() => scrollToSection("about")}>
            Acerca de nosotros
          </button>
          <button onClick={() => scrollToSection("services")}>Servicios</button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contacto
          </button>
          <div
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
            className={`absolute top-full left-0 px-5 bg-white rounded-b-lg gap-5 items-center justify-evenly shadow-lg h-40 xl:w-[900px] transition-all ${
              open ? "flex" : "hidden"
            }`}
          >
            <Link href="/sistemas/flexxus">
              <Image
                src="/logo_flexxus.png"
                alt="logo flexxus"
                height={40}
                width={150}
              />
            </Link>
            <Link href="/sistemas/fudo">
              <Image
                src="/logo_fudo.svg"
                alt="logo fudo"
                height={32}
                width={120}
              />
            </Link>
            <Link href="/sistemas/alegra">
              <Image
                src="/logo_alegra.webp"
                alt="logo alegra"
                height={40}
                width={150}
              />
            </Link>
            <Link href="/sistemas/wubook">
              <Image
                src="/logo_wubook.png"
                alt="logo wubook"
                className="invert h-12"
                height={40}
                width={180}
              />
            </Link>
            <Link href="/sistemas/facil-virtual">
              <Image
                src="/logo_facil-virtual.png"
                alt="logo facil"
                height={40}
                width={140}
              />
            </Link>
          </div>
        </div>
        <Link
          href={"https://alderete-informatica.odoo.com/web/login"}
          className="py-2 font-semibold bg-white shadow-xl px-7 rounded-xl text-primary"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
