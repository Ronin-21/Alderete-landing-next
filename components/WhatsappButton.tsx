import Image from "next/image";
import React from "react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+543858458253"
      target="_blank"
      className="fixed bottom-6 right-6 z-20 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-125 transition-transform duration-500 ease-in"
    >
      <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={40} height={40} />
    </a>
  );
};

export default WhatsappButton;
