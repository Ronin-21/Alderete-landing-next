import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-screen flex flex-col justify-center items-center mx-auto gap-10">
      <div className="flex gap-10 items-center">
        <Image
          src={"/error-image.png"}
          alt="Error 404"
          width={300}
          height={300}
        />
        <h2 className="text-[12rem] font-bold text-primary font-title">404</h2>
      </div>
      <p className="text-xl">No se pudo encontrar la página solicitada!</p>
      <Link
        href="/"
        className="font-bold text-primary-dark text-3xl hover:text-primary"
      >
        Volver
      </Link>
    </div>
  );
}
