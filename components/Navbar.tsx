"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos para el menú hamburguesa

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false); // Cierra el menú en mobile al hacer clic
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed z-20 flex items-center justify-center w-full text-lg shadow-xl bg-primary">
      <div className="container relative flex items-center justify-between h-20 text-white px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo_white.png" alt="logo" width={150} height={64} />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden relative xl:flex items-center h-full gap-10 text-xl">
          <button onClick={scrollToTop}>Inicio</button>
          <button
            className="flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            Soluciones
            <IoIosArrowForward
              className={`w-6 transition-all duration-300 ${
                open ? "rotate-90" : ""
              }`}
            />
          </button>
          <button onClick={() => scrollToSection("services")}>Servicios</button>
          <button onClick={() => scrollToSection("about")}>
            Acerca de nosotros
          </button>
          <button onClick={() => scrollToSection("contact")}>Contacto</button>
          {/* Submenú Desktop */}
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`absolute top-full left-0 px-5 bg-white rounded-b-lg gap-5 items-center justify-evenly shadow-lg h-40 xl:w-[950px] transition-all duration-500 ${
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
            <Link href="/sistemas/odoo">
              <Image
                src="/logo_odoo.png"
                alt="logo odoo"
                height={40}
                width={130}
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
            <Link href="/sistemas/facil-virtual">
              <Image
                src="/logo_facil-virtual.svg"
                alt="logo facil"
                height={50}
                width={170}
              />
            </Link>
          </div>
        </div>

        {/* Botón de Login */}
        <Link
          href="https://alderete-informatica.odoo.com/web/login"
          className="hidden xl:block py-2 font-semibold bg-white shadow-xl px-7 rounded-xl text-primary"
        >
          Login
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="xl:hidden text-white text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú Mobile */}
        <div
          className={`absolute top-20 left-0 w-full bg-primary transition-all duration-300 ${
            mobileMenuOpen ? "h-screen opacity-100" : "opacity-0 h-0"
          } xl:hidden flex flex-col items-center justify-center gap-5 py-5 text-2xl`}
        >
          <button onClick={scrollToTop}>Inicio</button>
          <button
            className="flex items-center gap-2"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            Soluciones{" "}
            <IoIosArrowForward
              className={`transition-transform duration-300 ${
                mobileDropdownOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          {/* Submenú Mobile */}
          {mobileDropdownOpen && (
            <div className="flex flex-col items-center gap-2 text-lg">
              <Link
                href="/sistemas/flexxus"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Flexxus
              </Link>
              <Link
                href="/sistemas/odoo"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Odoo
              </Link>
              <Link
                href="/sistemas/wubook"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wubook
              </Link>
              <Link
                href="/sistemas/fudo"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fudo
              </Link>
              <Link
                href="/sistemas/alegra"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Alegra
              </Link>
              <Link
                href="/sistemas/facil-virtual"
                className="text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fácil Virtual
              </Link>
            </div>
          )}
          <button onClick={() => scrollToSection("services")}>Servicios</button>
          <button onClick={() => scrollToSection("about")}>
            Acerca de nosotros
          </button>
          <button onClick={() => scrollToSection("contact")}>Contacto</button>
          <Link
            href="https://alderete-informatica.odoo.com/web/login"
            className="font-extrabold bg-white shadow-xl px-5 py-2 rounded-xl text-primary"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
