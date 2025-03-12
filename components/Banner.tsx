import Image from "next/image";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Marquee
      className="xl:h-[200px] h-[120px]"
      pauseOnHover={true}
      autoFill={true}
    >
      <Image
        src="/logo_flexxus.png"
        alt="logo_flexxus"
        width={200}
        height={56}
        className="mx-10"
      />
      <Image
        src="/logo_odoo.png"
        alt="logo_odoo"
        width={170}
        height={25}
        className="mx-10"
      />
      <Image
        src="/logo_wubook.png"
        alt="logo_wubook"
        className="mx-10 invert"
        width={220}
        height={48}
      />
      <Image
        src="/logo_fudo.svg"
        alt="logo_fudo"
        width={150}
        height={48}
        className="mx-10"
      />
      <Image
        src="/logo_alegra.webp"
        alt="logo_alegra"
        width={250}
        height={56}
        className="mx-10"
      />
      <Image
        src="/logo_facil-virtual.svg"
        alt="logo_facil-virtual"
        width={220}
        height={56}
        className="mx-10"
      />
    </Marquee>
  );
};

export default Banner;
